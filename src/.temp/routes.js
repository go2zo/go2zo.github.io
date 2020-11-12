const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/go2zo/blog/go2zo.github.io/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/go2zo/blog/go2zo.github.io/src/templates/Post.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/go2zo/blog/go2zo.github.io/src/pages/About.vue")
const c4 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/go2zo/blog/go2zo.github.io/node_modules/gridsome/app/pages/404.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/go2zo/blog/go2zo.github.io/src/pages/Index.vue")

export default [
  {
    path: "/tag/:id/",
    component: c1
  },
  {
    path: "/blog/:path/",
    component: c2
  },
  {
    path: "/about/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    name: "home",
    path: "/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]
