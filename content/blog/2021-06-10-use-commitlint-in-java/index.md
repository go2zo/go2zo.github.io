---
title: Java 프로젝트에서 commitlint 사용하기
slug: use-commitlint-in-java
date: 2021-06-10
author: [go2zo]
tags: ['til', commitlint', 'git hooks', 'java', 'gradle']
excerpt: "Nodejs 프로젝트에서는 husky를 이용해 git commit 시에 linter를 운용하는 것이 용이했다. Java 프로젝트에서는 어떤 방법들이 있을까? gradle git hook plugin을 이용해 commitlint를 적용하는 법을 알아보았다."
published: false
series: false
---

## Gradle git hook

Gradle plugin을 [검색](https://plugins.gradle.org/search?term=githook)해보면 3rd party 플러그인들이 몇개 나온다. 그나마 릴리즈가 좀 되었고 최신까지 관리가 된 [com.star-zero.gradle.githook](https://github.com/STAR-ZERO/gradle-githook) 플러그인을 골라봤다. 사실 이 플러그인이 뒤에 설명할 `commitlint` 플러그인에서 함께 사용하고 있어서 고른 부분이 더 크다.

### Install

2021.06.10 기준 최신버전은 v1.2.1이다. (2020.08.29 이후로 업데이트가 없다.)

```groovy
plugins {
  id "com.star-zero.gradle.githook" version "1.2.1"
}
```

Legacy에서는 아래와 같이 적용 가능하다.

```groovy
buildscript {
  repositories {
    maven {
      url "https://plugins.gradle.org/m2/"
    }
  }
  dependencies {
    classpath "com.star-zero.gradle:githook:1.2.1"
  }
}

apply plugin: "com.star-zero.gradle.githook"
```

### Configuration

`build.gradle`에 아래와 같이 추가한다. 이후 gradle을 reload하면 `.git/hooks` 하위에 스크립트가 생성된다.

```groovy
githook {
    gradleCommand = file("gradle_test")
    hooksDir = file(new File(rootDir, "githook_test/hooks"))
    failOnMissingHooksDir = false
    createHooksDirIfNotExist = false
    hooks {
        "pre-commit" {
            task = "lint test"
            shell = "echo 1"
        }
        "pre-push" {
            task = "someTask"
            shell = "someShell"
        }
    }
}
```

- gradleCommand
  - Gradle command file
  - Default: `<root_dir>/gradlew`
- hooksDir
  - Git hook directory. `git init`을 실행하면 기본값대로 생성된다.
  - Default: `<root_dir>/.git/hooks`
- failOnMissingHooksDir
  - hooksDir이 없으면 빌드가 실패해야 하는지 여부를 나타낸다.
  - Default: `true`
- createHooksDirIfNotExist
  - hooksDir이 없으면 새로 생성한다. (~~제곧내~~)
  - Default: `false`
- hooks
  - Git hook 스크립트 파일명이 온다. (e.g. commit-msg)
  - 내부에는 gradle task나 shell 명령어를 정의하고 이는 git hook 스크립트에 복사된다.

## Commitlint

역시나 gradle plugin 중 가장 최근까지 관리되고 있는 프로젝트로 골랐다. [gradle-commitlint-plugin](https://github.com/NetrisTV/gradle-commitlint-plugin)은 [Conventional Commits](https://www.conventionalcommits.org/ko/v1.0.0/) 룰에 대한 linting을 제공한다.

### Configuration

`build.gradle`

```groovy
plugins {
  id "com.star-zero.gradle.githook" version "1.2.1"
  id "ru.netris.commitlint" version "1.4.1"
}

githook {
  failOnMissingHooksDir = false
  createHooksDirIfNotExist = false
  hooks {
    "commit-msg" {
      task = "commitlint -Dmsgfile=\$1"
    }
  }
}
```

`settings.gradle`

```groovy
pluginManagement {
  repositories {
	gradlePluginPortal()
  }
  resolutionStrategy {
	eachPlugin {
      if (requested.id.id == "ru.netris.commitlint") {
        useModule("ru.netris:commitlint-plugin:${requested.version}")
      }
		}
  }
}

rootProject.name = '***'
```

## Test

커밋 컨벤션을 지키지 않으면 다음과 같은 에러 메시지를 볼 수 있다.

```bash
> Task :commitlint FAILED

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':commitlint'.
> Invalid commit type. See https://www.conventionalcommits.org/en/v1.0.0/
```

컨벤션을 지켜 입력하여 커밋에 성공했다.

```bash
> Task :commitlint
commitlint finished successfully

BUILD SUCCESSFUL in 1s
1 actionable task: 1 executed
[feat-lint c319439] chore(core): commitlint plugin 적용
 2 files changed, 25 insertions(+), 1 deletion(-)
```

## 결론

커밋 컨벤션은 [문서](https://www.conventionalcommits.org/ko/v1.0.0/#%EC%99%9C-conventional-commits%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%A0%EA%B9%8C%EC%9A%94)에도 잘 설명되어 있지만 개발 이후 수반되는 빌드/배포 프로세스를 자동화 뿐만 아니라 해당 프로젝트를 보는 모든 사람들에게 변경된 사항을 제대로 알리기 위한 부분도 커 보인다. 팀 프로젝트를 많이 해왔지만 소규모 팀에서조차 이런 내용들이 제대로 전달되지 않아 배포시에 누락되거나 충돌 해결을 위해 대면하며 일일이 확인했던 기억들이 있다. 물론 초기 적용 시에 불편한 부분도 있을 이지만 잘 정착되도록 문화를 만들어가는 것은 중요한 부분 같다.
