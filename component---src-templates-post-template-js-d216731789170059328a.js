(self.webpackChunkch4md0m=self.webpackChunkch4md0m||[]).push([[946],{2102:function(e,t,r){var n=r(2632);e.exports={MDXRenderer:n}},2632:function(e,t,r){var n=r(861),a=r(3515),l=r(8416),c=r(7071),o=["scope","children"];function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r(7294),m=r(4983).mdx,p=r(6948).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,l=c(e,o),i=p(t),d=u.useMemo((function(){if(!r)return null;var e=s({React:u,mdx:m},i),t=Object.keys(e),l=t.map((function(t){return e[t]}));return a(Function,["_fn"].concat(t,[""+r])).apply(void 0,[{}].concat(n(l)))}),[r,t]);return u.createElement(d,s({},l))}},5098:function(e,t,r){"use strict";var n=r(7294),a=r(1597),l="3824322444";t.Z=function(){var e=(0,a.K2)(l).allMdx.distinct;return n.createElement("ul",{className:"categories"},e.map((function(e,t){return n.createElement("li",{key:t},n.createElement(a.rU,{to:"/"+e,className:"category"},e))})))}},246:function(e,t,r){"use strict";var n=r(7294);t.Z=function(){return n.createElement("header",{className:"hero"})}},5625:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(7294),a=r(3201),l=r(1597),c=function(e){var t=e.styleClass,r=e.children;return n.createElement("ul",{className:t},n.createElement("li",null,n.createElement(l.rU,{to:"/",className:"page-link"},"Home")),n.createElement("li",null,n.createElement(l.rU,{to:"/posts",className:"page-link"},"Posts"),r),n.createElement("li",null,n.createElement(l.rU,{to:"/about",className:"page-link"},"About")))},o=function(e){var t=e.styleClass;return n.createElement("ul",{className:t},n.createElement("li",null,n.createElement("a",{href:"https://linkedin.com"},n.createElement(a.ltd,{className:"social-icon linkedin-icon"}))),n.createElement("li",null,n.createElement("a",{href:"https://instagram.com"},n.createElement(a.dR1,{className:"social-icon instagram-icon"}))),n.createElement("li",null,n.createElement("a",{href:"https://github.com/ch4md0m"},n.createElement(a.NML,{className:"social-icon github-icon"}))))},i=function(e){var t=e.toggle;return n.createElement("nav",{className:"navbar"},n.createElement("div",{className:"nav-center"},n.createElement("div",{className:"nav-header"},n.createElement("button",{className:"toggle-btn",onClick:t},n.createElement(a.Fm7,null))),n.createElement(c,{styleClass:"nav-links"}),n.createElement(o,{styleClass:"nav-icons"})))},s="3824322444",u=function(){var e=(0,l.K2)(s).allMdx.distinct;return n.createElement("ul",{className:"categories"},e.map((function(e,t){return n.createElement("li",{key:t},n.createElement(l.rU,{to:"/"+e,className:"category"},e))})))},m=r(1424),p=function(e){var t=e.isOpen,r=e.toggle;return n.createElement("aside",{className:"sidebar "+(t?"showSidebar":"")},n.createElement("button",{className:"close-btn",onClick:r},n.createElement(m.QAE,null)),n.createElement("div",{className:"sidebar-container"},n.createElement(c,{styleClass:"sidebar-links"},n.createElement(u,null))))},d=function(){return n.createElement("footer",{className:"footer"},n.createElement("div",null,n.createElement(o,{styleClass:"footer-icons"}),n.createElement("p",null,"©",(new Date).getFullYear()," ",n.createElement("a",null,"ch4md0m"),". Built with"," ",n.createElement("a",null,"Gatsby-starter-blog"))))},f=function(e){var t=e.children,r=(0,n.useState)(!1),a=r[0],l=r[1],c=function(){l(!a)};return n.createElement(n.Fragment,null,n.createElement("div",{className:"page-container"},n.createElement(i,{toggle:c}),n.createElement(p,{isOpen:a,toggle:c}),n.createElement("main",null,t)),n.createElement(d,null))}},3183:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(7294),a=r(5625),l=r(246),c=r(1074),o=r(7059),i=function(e){var t=e.title;return n.createElement(s,null,n.createElement("h4",null,t),n.createElement("div",{className:"line"}))},s=c.default.div.withConfig({displayName:"Title__Wrapper",componentId:"sc-1co5aer-0"})(["position:relative;text-align:center;margin-bottom:1.25rem;h4{color:var(--clr-grey-3);text-transform:uppercase;font-weight:500;background:var(--clr-white);display:inline-block;margin-bottom:0;padding:0 0.6rem;}.line{position:absolute;top:50%;left:0;width:100%;height:1.5px;transform:translateY(-50%);background:var(--clr-primary-5);z-index:-1;}"]),u=function(){return n.createElement(m,null,n.createElement(i,{title:"about me"}),n.createElement(o.S,{src:"../../../assets/banner-about.jpg",layout:"fixed",width:100,height:100,alt:"author",className:"img",__imageData:r(7072)}),n.createElement("p",null,"기억보단 기록을 남기는 프론트엔드 개발자입니다."))},m=c.default.div.withConfig({displayName:"About__Wrapper",componentId:"sc-emzf1p-0"})(["text-align:center;p{color:var(--clr-grey-5);}.img{border-radius:50%;margin:0 auto;margin-bottom:1rem;}@media screen and (max-width:1400px){display:none;}"]),p=r(5098),d=function(){return n.createElement(f,null,n.createElement(i,{title:"categories"}),n.createElement(p.Z,null))},f=c.default.div.withConfig({displayName:"banner-categories__Wrapper",componentId:"sc-r6rp7r-0"})([".category{font-size:1rem;color:var(--clr-grey-5);text-transform:capitalize;display:block;padding:0.5rem 0 0.5rem 1rem;letter-spacing:var(--spacing);transition:var(--transition);border-radius:var(--radius);}.category:hover{background:var(--clr-grey-10);}"]),g=function(){return n.createElement(b,null,n.createElement(u,null),n.createElement(d,null))},b=c.default.aside.withConfig({displayName:"Banner__Wrapper",componentId:"sc-iofjbs-0"})(["position:sticky;top:3rem;display:grid;grid-template-columns:200px;justify-content:center;row-gap:1rem;"]),E=r(2102),y=c.default.section.withConfig({displayName:"post-template__Wrapper",componentId:"sc-drlejy-0"})(["width:85vw;max-width:1100px;margin:0 auto;margin-bottom:4rem;.post-info{margin:2rem 0 4rem 0;text-align:center;span{background:var(--clr-primary-5);color:var(--clr-white);border-radius:var(--radius);padding:0.25rem 0.5rem;text-transform:uppercase;letter-spacing:var(--spacing);}h2{margin:1.25rem 0;font-weight:400;}p{color:var(--clr-grey-5);}.underline{width:5rem;height:1px;background:var(--clr-grey-9);margin:0 auto;margin-bottom:1rem;}}@media (min-width:992px){&{width:92vw;}.main-img{width:75%;display:block;margin:0 auto;}}@media (min-width:1170px){&{display:grid;grid-template-columns:1fr 200px;column-gap:4rem;}}"]),h=function(e){var t=e.data.mdx,r=t.frontmatter,c=r.title,i=r.category,s=r.image,u=r.date,m=r.embeddedImages,p=t.body;return n.createElement(a.Z,null,n.createElement(l.Z,null),n.createElement(y,null,n.createElement("article",null,n.createElement(o.G,{image:(0,o.c)(s),alt:c,className:"main-img"}),n.createElement("div",{className:"post-info"},n.createElement("span",null,i),n.createElement("h2",null,c),n.createElement("p",null,u),n.createElement("div",{className:"underline"})),n.createElement(E.MDXRenderer,{embeddedImages:m},p)),n.createElement("article",null,n.createElement(g,null))))}},3405:function(e,t,r){var n=r(3897);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3515:function(e,t,r){var n=r(6015),a=r(9617);function l(t,r,c){return a()?(e.exports=l=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=l=function(e,t,r){var a=[null];a.push.apply(a,t);var l=new(Function.bind.apply(e,a));return r&&n(l,r.prototype),l},e.exports.__esModule=!0,e.exports.default=e.exports),l.apply(null,arguments)}e.exports=l,e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},9617:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,r){var n=r(3405),a=r(9498),l=r(6116),c=r(2281);e.exports=function(e){return n(e)||a(e)||l(e)||c()},e.exports.__esModule=!0,e.exports.default=e.exports},7072:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#d8d8d8","images":{"fallback":{"src":"/static/6f30f563e1907fa4b246458914a2d89e/e07e1/banner-about.jpg","srcSet":"/static/6f30f563e1907fa4b246458914a2d89e/e07e1/banner-about.jpg 100w,\\n/static/6f30f563e1907fa4b246458914a2d89e/dd515/banner-about.jpg 200w","sizes":"100px"},"sources":[{"srcSet":"/static/6f30f563e1907fa4b246458914a2d89e/d8057/banner-about.webp 100w,\\n/static/6f30f563e1907fa4b246458914a2d89e/2e34e/banner-about.webp 200w","type":"image/webp","sizes":"100px"}]},"width":100,"height":100}')}}]);
//# sourceMappingURL=component---src-templates-post-template-js-d216731789170059328a.js.map