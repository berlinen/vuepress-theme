(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{279:function(t,e,o){},284:function(t,e,o){"use strict";var s=o(279);o.n(s).a},300:function(t,e,o){"use strict";o.r(e);var s=o(291),n=o.n(s),i=o(27),r=o(110),a=new n.a,c={components:{Button:r.a},computed:{data:function(){return this.$page.frontmatter},title:function(){return this.$page.frontmatter.title||this.$title||"Hello, World."},description:function(){return this.$page.description||this.$description||"📦 🎨 A api-friendly theme for VuePress."},action:function(){return{text:this.data.actionText,link:Object(i.d)(this.data.actionLink,this.$localePath)}},footer:function(){return a.render(this.data.footer||"Open Source on [GitHub](https://github.com/sqrthree/vuepress-theme-api), Made by [@sqrthree](https://github.com/sqrthree), Power by [vuepress](https://github.com/vuejs/vuepress).")}}},u=(o(284),o(1)),h=Object(u.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home__container container"},[o("div",{staticClass:"home__header"},[o("h1",{staticClass:"home__title"},[t._v(t._s(t.title))]),t._v(" "),o("p",{staticClass:"home__description"},[t._v(t._s(t.description))]),t._v(" "),o("Button",{attrs:{to:t.action.link}},[t._v(t._s(t.action.text))])],1),t._v(" "),o("div",{staticClass:"home__body row"},[o("div",{staticClass:"home__content col-md-10"},[o("Content",{attrs:{custom:""}})],1)]),t._v(" "),o("footer",{staticClass:"home__footer",domProps:{innerHTML:t._s(t.footer)}})])},[],!1,null,null,null);e.default=h.exports}}]);