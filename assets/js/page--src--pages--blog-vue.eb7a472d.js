(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"5g1q":function(t,e,s){"use strict";s("LRTA")},"8tYL":function(t,e,s){"use strict";s.r(e);var a={props:{link:{type:String,default:null},image:{type:String,default:null},title:{type:String,default:null}}},i=(s("5g1q"),s("KHd+")),n={components:{Card:Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card",class:{"card--has-link":t.link}},[t.link?s("g-link",{staticClass:"card__link",attrs:{to:t.link}},[t._v(" Read more ")]):t._e(),t.title?s("div",{staticClass:"card__title"},[s("span",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.title)}})]):t._e(),t.image?s("div",{staticClass:"card__image"},[s("g-image",{attrs:{src:t.image}})],1):t._e(),s("div",{staticClass:"card__inner"},[t._t("default")],2),t._t("outer")],2)}),[],!1,null,null,null).exports,PostMeta:s("n6yM").a},props:{post:{type:Object,required:!0}}},r=(s("YDir"),{components:{PostCard:Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("Card",{staticClass:"blog-posts__post",attrs:{link:this.post.path}},[e("h3",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.post.title)}}),e("p",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.post.excerpt)}}),e("PostMeta",{attrs:{post:this.post}})],1)}),[],!1,null,null,null).exports},metaInfo:{title:"About us"}}),l=null,o=Object(i.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("Section",{staticClass:"blog-posts",attrs:{container:"md"}},[e("div",{staticClass:"text-center container-sm mb-x2"},[e("h1",[this._v("Blog")]),e("p",{staticClass:"opacity-80"},[this._v('"Simple is best, less is more."')])]),this._l(this.$page.posts.edges,(function(t){return e("PostCard",{key:t.node.id,attrs:{post:t.node}})}))],2)],1)}),[],!1,null,null,null);"function"==typeof l&&l(o);e.default=o.exports},LRTA:function(t,e,s){},NAO6:function(t,e,s){},YDir:function(t,e,s){"use strict";s("NAO6")},n6yM:function(t,e,s){"use strict";var a={props:{post:{type:Object,required:!0}}},i=s("KHd+"),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("small",[t.post.author?[t._v("\n      Posted "+t._s(t.post.date)+" by\n      "),t._l(t.post.author,(function(e,a){return[a&&a===t.post.author.length-1?s("span",{key:e.id},[t._v("\n          and\n        ")]):a>0?s("span",{key:e.id},[t._v(", ")]):t._e(),e.avatar?s("g-image",{key:e.id,staticClass:"avatar-image",attrs:{alt:e.title,src:e.avatar}}):t._e(),e.path?s("g-link",{key:e.id,attrs:{to:e.path}},[t._v(t._s(e.title))]):s("span",{key:e.id},[t._v(t._s(e.title))])]}))]:t._e(),t.post.timeToRead?[s("span",[t._v(" – ")]),s("strong",[t._v(t._s(t.post.timeToRead)+" min read")])]:t._e()],2)])}),[],!1,null,null,null);e.a=n.exports}}]);