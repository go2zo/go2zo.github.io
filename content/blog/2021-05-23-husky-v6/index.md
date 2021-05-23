---
title: Husky v6에서 달라진 점
slug: husky-v6
date: 2021-05-23
author: [go2zo]
tags: ['husky', 'til']
excerpt: "husky v6으로 버전업 되며 바뀐점을 간략히 체크해봤다."
published: true
series: false
---

## Overview

lint-staged와 husky를 함께 사용할 때 가장 간단한 설정 방법은 `mrm` 이용이란 것은 이전 포스트에서 언급한 적이 있다.

```bash
npx mrm lint-staged
```

최근에 gridsome starter를 만들며 동일하게 실행했는데 package.json에 husky 설정이 없어진 것을 보고 많은 혼란을 겪었던 일이 있었다. 구글링을 통해 확인해보니 husky v6이 되며 설정방법이 많이 바뀐 듯 하여 확인을 조금 해봤다.

> **Note:** lint-staged를 설치하기 위해서는 linter가 설치되어 있어야 하고, husky는 git 저장소여야 설치된다.

## Husky 4 vs 6

v4에서는 `.husky.json`이나 `package.json`에 아래와 같이 설정하였다.

```json
// .huskyrc.json (v4)
{
  "hooks": {
    "pre-commit": "npm test && npm run foo"
  }
}
```

v6은 `.husky/` 디렉터리 하위에 스크립트를 생성한다. (경로는 변경 가능하다.)

```bash
# .husky/pre-commit (v6)
# ...
npm test
npm run foo
```

## Sharing hooks

`.husky/` 하위에 등록된 hook들은 git에 의해 저장소에 공유된다. 하지만 husky가 포함된 프로젝트를 clone하는 경우 husky 실행이 되지 않는 경우가 있다. 그 이유는 `.husky/.gitignore` 때문이다.

```text
# .husky/.gitignore
_
```

자동 생성된 hook을 보면 초기화 스크립트인 `.husky/_/husky.sh`를 실행하도록 하는데 clone된 저장소에는 해당 디렉터리가 빠져있기 때문이다.

```bash
# pre-commit
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
```

그러므로 패키지 설치와 함께 `husky install`을 실행해줘야 한다.

## Husky 초기화 방법

순서가 약간 뒤바뀐 듯 한데... husky를 초기 설정하는 가장 간단한 방법은 `npx mrm lint-staged`를 이용하는 것이고, husky를 따로 설정해야 하는 경우는 ~~나의 경험으로는~~ 저장소를 clone한 경우이다.

### Automatic (recommended)

[공식문서](https://typicode.github.io/husky/#/?id=automatic-recommended)에도 나와있지만 가장 간단한 방법은 `husky-init`을 이용하는 방법이다. yarn v1을 이용하는 필자 또한 이 방법이 가장 편하다.

```bash
npx husky-init && npm install       # npm
npx husky-init && yarn              # Yarn 1
```

### Manual

`npm`을 이용하는 경우 `prepare` 스크립트를 이용해 더 편하게 사용할 수 있을 듯 하다. `prepare`는 lifecycle script 중 하나로 인자없이 `npm install` 할 때에도 실행되는 스크립트이다. 아래와 같이 실행하면,

```bash
npm set-script prepare "husky install"
```

package.json에 스크립트가 등록된다.

```json
// package.json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

## References

- <https://github.com/okonet/lint-staged#readme>
- <https://typicode.github.io/husky/>
