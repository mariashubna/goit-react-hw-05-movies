"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,t,n){n.r(t);var r=n(439),a=n(791),i=n(689),c=n(324),s=n(184);t.default=function(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],o=t[1],u=(0,i.UO)().movieId,h=(0,a.useState)(""),f=(0,r.Z)(h,2),l=f[0],d=f[1];return(0,a.useEffect)((function(){u&&(0,c.W)("reviews",u).then((function(e){var t=e.results;t.length?(o(t),d("")):d("There are no reviews yet. Look later")})).catch((function(){return d("I'm sorry, but something went wrong... Please, try again later")}))}),[u]),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:"Movie Reviews"}),n.length>0?(0,s.jsx)("ul",{children:n.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsx)("h3",{children:e.author}),(0,s.jsx)("p",{children:e.content})]},e.id)}))}):(0,s.jsx)("p",{children:l})]})}},324:function(e,t,n){n.d(t,{W:function(){return s}});var r=n(861),a=n(757),i=n.n(a),c=n(294);function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day",t=new URLSearchParams({api_key:"6b2f249c49a040541fc751a7fb9d7fc1"}),e.next=4,c.Z.get("".concat("https://api.themoviedb.org/3/trending/movie/day","?").concat(t));case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=186.a6bbe0c3.chunk.js.map