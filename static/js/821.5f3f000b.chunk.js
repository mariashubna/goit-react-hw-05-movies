"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[821],{5653:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(1087),a="Movies_list__JEO-P",c="Movies_title__EqSqF",s="Movies_link__0oDWE",i="Movies_date__J5cmT",o="Movies_rating__Q48wB",u="Movies_poster__HRZqO",l=r(184),p=function(e){var t=e.movies,r={year:"numeric",month:"long",day:"numeric"};return(0,l.jsx)("ul",{className:a,children:t.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsxs)(n.rU,{to:"/movies/".concat(e.id),className:s,children:[(0,l.jsx)("div",{children:(0,l.jsx)("img",{className:u,src:e.poster_path?"".concat("https://image.tmdb.org/t/p/","w200").concat(e.poster_path):"https://img.freepik.com/premium-vector/iphone-mobile-wallpaper-abstract-background-design-background_684242-38.jpg",alt:e.title})}),(0,l.jsx)("h2",{className:c,children:e.title}),(0,l.jsx)("p",{className:i,children:new Date(e.release_date).toLocaleDateString("en-US",r)}),(0,l.jsx)("p",{className:o,children:0===e.vote_average?"NR":"".concat(Math.round(10*e.vote_average),"%")})]})},e.id)}))})}},4821:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(9439),a=r(2791),c=r(7689),s=r(1087),i=r(4324),o=r(7923),u="Loader_loaderContainer__UDDYf",l=r(184),p=function(){return(0,l.jsx)("div",{className:u,children:(0,l.jsx)(o.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})},h=r(5653),m="MovieDetailsPage_wraper__M8-EH",d="MovieDetailsPage_list__xeLC8",v="MovieDetailsPage_item__SzAxR",f="MovieDetailsPage_link__rhdjc",_=function(){var e=(0,c.UO)().movieId,t=(0,a.useState)(0),r=(0,n.Z)(t,2),o=r[0],u=r[1],_=(0,a.useState)(""),w=(0,n.Z)(_,2),g=w[0],x=w[1],y=(0,c.TH)().state,j=(0,c.s0)();if((0,a.useEffect)((function(){(0,i.w7)(Number(e)).then((function(e){u(e),x("")})).catch((function(e){x("I'm sorry, but something went wrong... Please, try again later"),setTimeout((function(){j("/")}),1e3)}))}),[e,j]),o)return(0,l.jsxs)(a.Fragment,{children:[(0,l.jsx)(s.rU,{to:"/movies/".concat(o.id),state:{from:y},className:f,children:"Go back"}),""===g&&o?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h.Z,{movies:[o]}),(0,l.jsxs)("div",{className:m,children:[(0,l.jsx)("h2",{children:"Additional information: "}),(0,l.jsxs)("ul",{className:d,children:[(0,l.jsx)("li",{className:v,children:(0,l.jsx)(s.OL,{className:f,to:"cast",children:"Cast"})}),(0,l.jsx)("li",{className:v,children:(0,l.jsx)(s.OL,{className:f,to:"reviews",children:"Reviews"})})]})]}),(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(p,{}),children:(0,l.jsx)(c.j3,{})})]}):(0,l.jsx)("p",{children:g})]})}},4324:function(e,t,r){r.d(t,{Dw:function(){return m},WV:function(){return u},tx:function(){return _},w7:function(){return p},zv:function(){return v}});var n=r(5861),a=r(7757),c=r.n(a),s=r(5294),i="6b2f249c49a040541fc751a7fb9d7fc1",o="https://api.themoviedb.org/3";function u(){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/movie/day",e.next=3,s.Z.get("".concat(o).concat("/trending/movie/day","?api_key=").concat(i));case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(i));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error("I'm sorry, but something went wrong... Please, try again later");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function m(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/search/movie",e.prev=1,e.next=4,s.Z.get("".concat(o).concat("/search/movie","?api_key=").concat(i,"&query=").concat(t));case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:throw e.prev=8,e.t0=e.catch(1),new Error("I'm sorry, but something went wrong... Please, try again later");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function v(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t,"/credits"),e.prev=1,e.next=4,s.Z.get("".concat(o).concat(r,"?api_key=").concat(i));case 4:return n=e.sent,e.abrupt("return",n.data);case 8:throw e.prev=8,e.t0=e.catch(1),new Error("I'm sorry, but something went wrong... Please, try again later");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function _(e){return w.apply(this,arguments)}function w(){return(w=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t,"/reviews"),e.prev=1,e.next=4,s.Z.get("".concat(o).concat(r,"?api_key=").concat(i));case 4:return n=e.sent,e.abrupt("return",n.data);case 8:throw e.prev=8,e.t0=e.catch(1),new Error("I'm sorry, but something went wrong... Please, try again later");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=821.5f3f000b.chunk.js.map