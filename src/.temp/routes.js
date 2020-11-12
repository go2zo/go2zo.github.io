const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/go2zo/blog/gridsome-go2zo-blog/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/go2zo/blog/gridsome-go2zo-blog/src/pages/About.vue")
const c3 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/go2zo/blog/gridsome-go2zo-blog/node_modules/gridsome/app/pages/404.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/go2zo/blog/gridsome-go2zo-blog/src/templates/Post.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/go2zo/blog/gridsome-go2zo-blog/src/pages/Index.vue")

export default [
  {
    path: "/tag/:id/",
    component: c1
  },
  {
    path: "/about/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    path: "/:path/",
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
    component: c3
  }
]
