---
title: Spring Cloud Config에서 github private repository 접근
slug: spring-cloud-jgit-github-failing-with-ssh
date: 2021-11-09
author: [go2zo]
tags: ['spring cloud', 'github', 'ssh']
excerpt: "Spring Cloud Config 환경을 구성하며 겪은 몇가지 혼동되는 점을 정리한다."
published: true
series: false
---

## Spring Cloud Config

### Github not authorized

Private repository 인 경우에는 접근을 위한 인증이 필요하다.

`http`와 `ssh` 방식이 있는데 이 구분은 `spring.cloud.config.server.git.uri`의 프로토콜로 구분한다.

`http`는 `username`, `passsword` 입력을 동반한다.

그런데 이때 `password`에 GitHub 로그인 정보를 넣으면 `not authorized` 에러가 발생한다.

`Github > Settings > Developer settings > Personal access tokens`에서 발급받은 토큰을 입력해야 한다.

해당 토큰은 발급시에만 확인 가능하니 발급 후 잘 기억해 둬야 한다.

### Auth fail

인증의 실패 이유는 보다 다양할 수 있지만 기본적인 가이드대로 진행했음에도 인증이 실패하는 경우는 대부분 아래의 원인에 있는 것으로 보인다.

#### CASE1: ED25519

[GitHub 공식 문서](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key)에는 ED25519 알고리즘 사용을 추천하지만 만약 SSH 키 생성 시 ED25519 알고리즘으로 생성하면 Spring Cloud Server 실행 시 이같은 에러를 볼 수 있다.

이는 [Spring Cloud Config 공식문서](https://cloud.spring.io/spring-cloud-config/reference/html/#_authentication)에 나와있는 대로 `ssh-rsa`만 지원하기 때문이다.

#### CASE2: Not `PEM` format

또한 `-----BEGIN OPENSSH PRIVATE KEY-----`로 시작하는 개인키 또한 지원하지 않는다. 

`-----BEGIN RSA PRIVATE KEY-----`로 시작하도록 해야하며 이는 ras 키를 `PEM` 포맷으로 생성해야 함을 의미한다.

```
ssh-keygen -m PEM -t rsa -b 4096
```

#### CASE3: Not `id_rsa`

이 역시나 Spring Cloud Config Serve가 개인키를 서버에 명시하지 않았을 경우 찾는 파일이 `~/.ssh/id_rsa`이기 때문이다.

기존에 키파일이 있고 새로운 키를 생성하기 위해 아래와 같이 파일명을 명시한 경우에는,

```bash
ssh-keygen -m PEM -t rsa -b 4096 -f ~/.ssh/config_server_deploy_key.rsa
```

서버의 `application.yml`에 개인키를 명시해 줘야 한다.

이 때, `ignore-local-ssh-settings`를 `true`로 함께 설정해줘야 한다. 

```yaml
spring.cloud.config.server.git:
	ignore-local-ssh-settings: true
	private-key: |
	  -----BEGIN RSA PRIVATE KEY-----
	  ...
	  -----END RSA PRIVATE KEY-----
```

### Reject HostKey: github.com

`~/.ssh/known_hosts`에 github.com이 등록되어 있어야 한다.

아래와 같이 ssh 접속 테스트를 진행하여 github.com에 처음 접속하게 되면 

```bash
ssh -T git@github.com
```

### 404 Not Found

웹 애플리케이션에서 해당 에러는 보통 경로가 잘못되었을 때 발생한다. 서버는 정상적으로 실행되었지만 경로가 잘못된 것을 의미한다.

Config repository에 다음과 같이 설정파일을 생성했을 때 기본적으로 아래와 같이 값이 설정된다.

- {application}: payment
- {profile}: local, dev, prod

![image-20211110102119237](/Users/go2zo/Library/Application Support/typora-user-images/image-20211110102119237.png)

이 때 Config Server에서 지원하는 endpoint들은 아래와 같다.

```bash
GET /{application}/{profile}
GET /{application}/{profile}/{label}
GET /{application}-{profile}.yml
GET /{label}/{application}-{profile}.yml
GET /{application}-{profile}.properties
GET /{label}/{application}-{profile}.properties
```

여기서 {label}은 git의 branch명 혹은 commit값을 의미한다. {label}이 생략되면 어떻게 될까? 당연히 default값을 입력할테고 이는 당연히 상식선에서 default 브랜치를 의미할 것이다. config server는 git 저장소의 default 브랜치명을 `master`라 인지하고 있다.

그런데 github는 `master` 대신 `main`을 사용한다. 따라서 {label}을 `main`으로 명시하지 않으면 404에러가 발생하게 된다. 이때는 config server에 아래와 같이 default label을 설정하면 된다.

```yaml
spring.cloud.config.server.git.default-label: main
```

### Conclusion

위의 내용을 토대로 정리를 하자면 다음과 같다.

1. HTTP 방식은 github 계정과 함께 Personal Access Token으로 인증을 한다.

2. SSH 방식은 아래와 같이 진행하면 좋을 것 같다.

   ```bash
   ssh-keygen -m PEM -t rsa -b 4096 -f ~/.ssh/config_server_deploy_key.rsa
   
   ssh-add ~/.ssh/config_server_deploy_key.rsa
   
   ssh -T git@github.com
   
   gh ssh-key add ~/.ssh/config_server_deploy_key.rsa.pub
   ```

하지만 이 방법도 개인키가 application.yml에 남게되면 저장소에 공유될 가능성이 있기 때문에 시스템 파라미터 등으로 처리하는 방식이 적절할 것 같다.
