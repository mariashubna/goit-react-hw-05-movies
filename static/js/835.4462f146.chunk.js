"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[835],{5653:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(1087),a="Movies_list__JEO-P",c="Movies_title__EqSqF",s="Movies_link__0oDWE",o="Movies_date__J5cmT",i="Movies_rating__Q48wB",u="Movies_poster__HRZqO",l=r(184),p=function(e){var t=e.movies,r={year:"numeric",month:"long",day:"numeric"};return(0,l.jsx)("ul",{className:a,children:t.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsxs)(n.rU,{to:"/movies/".concat(e.id),className:s,children:[(0,l.jsx)("div",{children:(0,l.jsx)("img",{className:u,src:e.poster_path?"".concat("https://image.tmdb.org/t/p/","w200").concat(e.poster_path):"https://img.freepik.com/premium-vector/iphone-mobile-wallpaper-abstract-background-design-background_684242-38.jpg",alt:e.title})}),(0,l.jsx)("h2",{className:c,children:e.title}),(0,l.jsx)("p",{className:o,children:new Date(e.release_date).toLocaleDateString("en-US",r)}),(0,l.jsx)("p",{className:i,children:0===e.vote_average?"NR":"".concat(Math.round(10*e.vote_average),"%")})]})},e.id)}))})}},8835:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(9439),a=r(5653),c=r(5705),s=r(8185),o=r(2791),i=r(1087),u="SearchBar_form__gW7Gj",l="SearchBar_btn__PKGSc",p=r(184),h=function(){var e=(0,o.useState)(""),t=(0,n.Z)(e,2),r=t[0],a=t[1],h=(0,i.lr)(),f=(0,n.Z)(h,2),m=f[0],d=f[1],v=(0,o.useState)(""),_=(0,n.Z)(v,2),g=_[0],y=_[1];return(0,o.useEffect)((function(){var e=m.get("query");e&&a(e)}),[m]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c.J9,{initialValues:{searchQuery:""},onSubmit:function(){""!==r?(d({query:r}),y("")):y("Please enter your search query")},children:(0,p.jsxs)(c.l0,{className:u,children:[(0,p.jsx)(c.gN,{value:r,name:"searchQuery",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search films",onChange:function(e){var t=e.target.value;t||d({}),a(t)}}),(0,p.jsxs)("button",{type:"submit",className:l,children:[(0,p.jsx)(s.dVI,{}),(0,p.jsx)("p",{children:"Search"})]})]})}),""===g?"":(0,p.jsx)("div",{children:g})]})},f=r(4324),m=function(){var e=(0,i.lr)(),t=(0,n.Z)(e,1)[0],r=(0,o.useState)([]),c=(0,n.Z)(r,2),s=c[0],u=c[1],l=(0,o.useState)(""),m=(0,n.Z)(l,2),d=m[0],v=m[1];return(0,o.useEffect)((function(){var e=t.get("query");e&&(0,f.Dw)(e).then((function(t){t.length?(u(t),v("")):v("Sorry, I found no movies mentioning ".concat(e.toUpperCase(),". Try again"))})).catch((function(){return v("I'm sorry, but something went wrong... Please, try again later")}))}),[t]),(0,p.jsxs)("div",{children:[(0,p.jsx)(h,{}),""===d?(0,p.jsx)(a.Z,{movies:s}):(0,p.jsx)("p",{children:d})]})}},4324:function(e,t,r){r.d(t,{Dw:function(){return p},WV:function(){return u},zv:function(){return f}});var n=r(5861),a=r(7757),c=r.n(a),s=r(5294),o="6b2f249c49a040541fc751a7fb9d7fc1",i="https://api.themoviedb.org/3";function u(){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/movie/day",e.next=3,s.Z.get("".concat(i).concat("/trending/movie/day","?api_key=").concat(o));case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/search/movie",e.prev=1,e.next=4,s.Z.get("".concat(i).concat("/search/movie","?api_key=").concat(o,"&query=").concat(t));case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:throw e.prev=8,e.t0=e.catch(1),new Error("I'm sorry, but something went wrong... Please, try again later");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t,"/credits"),e.next=3,s.Z.get("".concat(i).concat(r,"?api_key=").concat(o));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=835.4462f146.chunk.js.map