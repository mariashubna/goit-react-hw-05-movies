"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{5653:function(t,e,r){r.d(e,{Z:function(){return h}});var n=r(7689),a=r(1087),c="Movies_list__JEO-P",o="Movies_title__EqSqF",s="Movies_link__0oDWE",i="Movies_date__J5cmT",u="Movies_rating__Q48wB",p="Movies_poster__HRZqO",l=r(184),h=function(t){var e=t.movies,r={year:"numeric",month:"long",day:"numeric"},h=(0,n.TH)();return(0,l.jsx)("ul",{className:c,children:e.map((function(t){return(0,l.jsx)("li",{children:(0,l.jsxs)(a.rU,{to:"/movies/".concat(t.id),state:{from:h},className:s,children:[(0,l.jsx)("div",{children:(0,l.jsx)("img",{className:p,src:t.poster_path?"".concat("https://image.tmdb.org/t/p/","w200").concat(t.poster_path):"https://img.freepik.com/premium-vector/iphone-mobile-wallpaper-abstract-background-design-background_684242-38.jpg",alt:t.title})}),(0,l.jsx)("h2",{className:o,children:t.title}),(0,l.jsx)("p",{className:i,children:new Date(t.release_date).toLocaleDateString("en-US",r)}),(0,l.jsx)("p",{className:u,children:0===t.vote_average?"NR":"".concat(Math.round(10*t.vote_average),"%")})]})},t.id)}))})}},680:function(t,e,r){r.r(e);var n=r(9439),a=r(5653),c=r(2791),o=r(4324),s=r(184);e.default=function(){var t=(0,c.useState)([]),e=(0,n.Z)(t,2),r=e[0],i=e[1],u=(0,c.useState)(""),p=(0,n.Z)(u,2),l=p[0],h=p[1];return(0,c.useEffect)((function(){(0,o.WV)().then((function(t){var e=t.results;e.length?(i(e),h("")):h("I'm sorry, but something went wrong... Please, try again later")})).catch((function(){return h("I'm sorry, but something went wrong... Please, try again later")}))}),[]),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Popular today:"}),""===l&&(0,s.jsx)(a.Z,{movies:r})]})}},4324:function(t,e,r){r.d(e,{Dw:function(){return m},WV:function(){return u},tx:function(){return w},w7:function(){return l},zv:function(){return v}});var n=r(5861),a=r(7757),c=r.n(a),o=r(5294),s="6b2f249c49a040541fc751a7fb9d7fc1",i="https://api.themoviedb.org/3";function u(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/trending/movie/day",t.next=3,o.Z.get("".concat(i).concat("/trending/movie/day","?api_key=").concat(s));case 3:return e=t.sent,t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i,"/movie/").concat(e,"?api_key=").concat(s));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error("I'm sorry, but something went wrong... Please, try again later");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function m(t){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/search/movie",t.prev=1,t.next=4,o.Z.get("".concat(i).concat("/search/movie","?api_key=").concat(s,"&query=").concat(e));case 4:return r=t.sent,t.abrupt("return",r.data.results);case 8:throw t.prev=8,t.t0=t.catch(1),new Error("I'm sorry, but something went wrong... Please, try again later");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(e,"/credits"),t.prev=1,t.next=4,o.Z.get("".concat(i).concat(r,"?api_key=").concat(s));case 4:return n=t.sent,t.abrupt("return",n.data);case 8:throw t.prev=8,t.t0=t.catch(1),new Error("I'm sorry, but something went wrong... Please, try again later");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function w(t){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(e,"/reviews"),t.prev=1,t.next=4,o.Z.get("".concat(i).concat(r,"?api_key=").concat(s));case 4:return n=t.sent,t.abrupt("return",n.data);case 8:throw t.prev=8,t.t0=t.catch(1),new Error("I'm sorry, but something went wrong... Please, try again later");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=680.0e409f11.chunk.js.map