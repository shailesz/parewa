(this.webpackJsonpparewa=this.webpackJsonpparewa||[]).push([[0],{41:function(e,s,c){"use strict";c.r(s);var t=c(2),a=c(13),i=c.n(a),r=c(4),n=c.n(r),j=c(14),d=c(16),l=c(0),o=function(e){var s=e.post;return Object(l.jsxs)("div",{className:"content small",children:[Object(l.jsx)("div",{className:"heading",children:Object(l.jsx)("div",{className:"title",children:s.title})}),Object(l.jsxs)("div",{className:"body",children:[Object(l.jsx)("div",{className:"description",children:s.description}),Object(l.jsxs)("div",{className:"metadata",children:[Object(l.jsx)("div",{className:"avatar",children:Object(l.jsx)("img",{src:"https://picsum.photos/200",alt:"avatar"})}),Object(l.jsxs)("div",{className:"author-information",children:[Object(l.jsx)("div",{className:"author",children:s.source}),Object(l.jsx)("div",{className:"profession",children:"Newspaper"})]})]})]})]})},b=function(e){var s=e.post;return Object(l.jsxs)("div",{className:"content large",children:[Object(l.jsxs)("div",{className:"heading",children:[Object(l.jsx)("div",{className:"cover",children:Object(l.jsx)("img",{src:s.imageURL,alt:"cover"})}),Object(l.jsx)("div",{className:"title",children:s.title})]}),Object(l.jsxs)("div",{className:"body",children:[Object(l.jsx)("div",{className:"description large",children:s.description}),Object(l.jsxs)("div",{className:"metadata",children:[Object(l.jsx)("div",{className:"avatar",children:Object(l.jsx)("img",{src:"https://picsum.photos/200",alt:"avatar"})}),Object(l.jsxs)("div",{className:"author-information",children:[Object(l.jsx)("div",{className:"author",children:s.source}),Object(l.jsx)("div",{className:"profession",children:"Newspaper"})]})]})]})]})},m=function(e){var s=e.post;return Object(l.jsxs)("div",{className:"content medium",children:[Object(l.jsx)("div",{className:"heading",children:Object(l.jsx)("div",{className:"title medium",children:s.title})}),Object(l.jsxs)("div",{className:"body",children:[Object(l.jsx)("div",{className:"description",children:s.description}),Object(l.jsxs)("div",{className:"metadata",children:[Object(l.jsx)("div",{className:"avatar",children:Object(l.jsx)("img",{src:"https://picsum.photos/200",alt:"avatar"})}),Object(l.jsxs)("div",{className:"author-information",children:[Object(l.jsx)("div",{className:"author",children:s.source}),Object(l.jsx)("div",{className:"profession",children:"Newspaper"})]})]})]})]})},h=function(e){var s=e.posts;return Object(l.jsxs)("div",{className:"content-container",children:[Object(l.jsxs)("div",{className:"column",children:[Object(l.jsx)(o,{post:s[0]}),Object(l.jsx)("hr",{}),Object(l.jsx)(o,{post:s[1]})]}),Object(l.jsx)("div",{className:"seperator"}),Object(l.jsx)("div",{className:"column",children:Object(l.jsx)(b,{post:s[2]})}),Object(l.jsx)("div",{className:"seperator"}),Object(l.jsxs)("div",{className:"column",children:[Object(l.jsx)(o,{post:s[3]}),Object(l.jsx)("hr",{}),Object(l.jsx)(o,{post:s[4]})]}),Object(l.jsx)("div",{className:"seperator"}),Object(l.jsxs)("div",{className:"column",children:[Object(l.jsx)(m,{post:s[5]}),Object(l.jsx)("hr",{})]})]})},O=c(15),v=c.n(O).a.create({baseURL:"https://parewa-ko-buddhi.herokuapp.com/"}),x=function(){var e=Object(t.useState)([]),s=Object(d.a)(e,2),c=s[0],a=s[1];Object(t.useEffect)((function(){i()}),[]);var i=function(){var e=Object(j.a)(n.a.mark((function e(){var s,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/news");case 2:s=e.sent,c=s.data,console.log(c),a(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"ui container",children:0===c.length?"Loading!":Object(l.jsx)(h,{posts:c})})};i.a.render(Object(l.jsx)(x,{}),document.querySelector("#root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.7c4ffd90.chunk.js.map