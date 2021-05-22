---
title: Gridsome에 Eslint와 Prettier 적용기
slug: gridsome-with-eslint-and-prettier
date: 2020-12-30
author: [go2zo]
tags: ['gridsome', 'eslint', 'prettier']
excerpt: "lint-staged와 husky를 이용해 eslint와 커밋 메시지에 issue 번호 지정을 자동화 한다."
published: true
series: false
---

## Eslint vs. Prettier

두 도구는 사실 결이 다르다. Eslint는 자바스크립트 **문법검사 도구**이고 Prettier는 **코드 포매팅**을 위한 도구이다. Eslint는 정적분석을 통해 에러유발 코드등을 찾기 때문에 코딩 컨벤션을 검사하는 기능도 갖추고 있긴 하나 코드 포매팅에 특화된 Prettier에 비해 약한편이라고 볼 수 있다. 따라서 보통 eslint와 prettier를 함께 사용한다.

## Eslint + Prettier

eslint에 prettier를 함께 적용하기 위해 `eslint-plugin-prettier` 플러그인을 추가한다.

```bash
yarn add -D eslint-plugin-prettier
```

`.eslintrc.js`에 다음과 같이 추가한다.

```javascript
// .eslintrc.js
module.exports = {
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

보다 권장되는 설정은 `eslint-config-prettier`를 이용하는 것이다.

```bash
$ yarn add -D eslint-config-prettier
```

`eslint-config-prettier`는 prettier 룰과 충돌하는 eslint룰을 off해주고 `extends` 설정을 지원한다.

```diff
// .eslintjs.js
module.exports = {
+ "extends": ["plugin:prettier/recommended"]
- "plugins": ["prettier"],
- "rules": {
-   "prettier/prettier": "error"
- }
}
```

prettier 설정은 `.prettierrc` 파일에 작성한다.

```json
// .prettierrc
{
  "singleQuote": true,
  "semi": false
}
```

## Gridsome에 적용하기

Gridsome을 위한 eslint의 공식 플러그인(`eslint-plugin-gridsome`)을 이용한다.

`eslint-plugin-gridsome`이 `vue-eslint-parser` ^6.0.4 버전 이상을 사용하므로 함께 설치한다.

```bash
$ yarn add -D eslint-plugin-gridsome vue-eslint-parser
```

`.eslintrc.js` 파일에 직접 플러그인을 설정해도 되지만 아래와 같이 extends로 간편하게 설정할 수 있다.

```diff
// .eslintrc.js
module.exports = {
  parser: "vue-eslint-parser",
+ extends: ["plugin:gridsome/recommended"],
- plugins: ["gridsome"],
- rules: {
-   "gridsome/format-query-block": "error"
-    ...
- },
};
```

## References

- <https://eslint.gridsome.org/user-guide/>
- <https://eslint.vuejs.org/rules/#priority-a-essential-error-prevention-for-vue-js-3-x>
- <https://garywoodfine.com/gridsome-configure-your-development-environment/>
- <https://front-end.me/tool/eslint-prettier/>
