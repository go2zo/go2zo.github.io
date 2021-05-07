---
title: Blog 새단장
slug: blog-reopening
date: 2020-11-09
author: [go2zo]
tags: [blog]
excerpt: "오랫동안 묵혀둔 블로그를 정리하기 위해 관련 기술들을 알아보았다. Jekyll 다음으로 Hexo를 사용할까 생각하고 있던 와중에 Vue.js 기반 정적 사이트 생성기(Static Site Generator, SSG)인 Gridsome을 알게 되었고 새로이 블로그를 만들기로 했다."
published: true
series: false
---

# 묵혀둔 블로그를 꺼내다

Github pages를 이용해 블로그를 만들려는 니즈는 아주 오래전부터 있었다. 당시 가장 관심을 끌었던 것은 [Jekyll](https://jekyllrb.com/)이었다. 그런데 Jekyll은 테마를 바꾼다던가 플러그인을 손보다가 스타일등이 꼬여버리는 일이 종종 있었다. 물론 내가 ruby에 미숙하여 그런 비상상황에 제대로 대처하지 못한 이유가 클 것이다.

그러다 약 3년전인가... 예전 팀원들이 정보 공유용으로 기술블로그나 만들어볼까 할때 Javascript 기반의 [Hexo](https://hexo.io/index.html)를 처음 접했다. [Hugo](https://gohugo.io/)도 함께 고려됐지만 Golang은 러닝커브가 좀 있을 듯 하여 넣어뒀던 기억이 있다. Hexo의 결과물은 Jekyll보다 마음에 들었던 것으로 기억한다. Ruby보다는 Javascript가 접근성이 좋았던 것도 한 몫했다. 하지만 역시 내 블로그는 그냥 아무 일도 일어나지 않았다.

요즘들어 기억력이 옅어지며 기록의 필요성을 다시 느끼기 시작했고 로컬에 md로 저장되어 있던 기록의 단편들을 정리해야겠다는 생각이 들었다.

# [Gatsby](https://www.gatsbyjs.com/)를 거쳐

> 예전에 사용하던 기술들을 대체할 것들은 뭐가 있을까?

개인적으로 가장 쉽게 찾는 방법은 구글에서 `Jekyll vs `이라고 치고 연관검색어 상위권의 것들을 살펴보는 것이다. 가장 먼저 보인 것이 `Jekyll vs Gatsby`였다. 사실 Jamstack이라는 용어도 이때 처음 접했다. 몇몇 잘 소개된 글들을 보며 Jekyll을 보내주고 최신 트랜드의 기술을 사용해 보고 싶은 충동이 생겼다.

# Gridsome을 선택

Gatsby를 보고 가장 혹한 점은 React를 사용한다는 것이다. 사실 React를 직접 접해보지는 않았지만 Vue는 해본지라 그냥 친구의 친구의 친구를 만난 것 같은 반가움이랄까.

그러나 왠지 Vue가 아니라 아쉬웠다. 혹시나 하며 다시 구글링 해보니 Gatsby와 아주 유사하고 Vue를 기반한 [Gridsome](https://gridsome.org/)이 있었다. 구조적으로 Gatsby와 Gridsome은 아주 유사한 기술이었다. React는 해보질 않았고 나는 그냥 단순히 Vue빠였으므로 Gridsome이 선택되었다.

# 결론

결국 무엇을 사용했냐보다 그 안을 채우는 것들이 중요할텐데... 글 주변도 없어서 벌써부터 걱정이 앞선다. 단순히 기록을 위한다는 초심을 잃지 않고 꾸준히 이어갈 수 있길 바랄 뿐이다.
