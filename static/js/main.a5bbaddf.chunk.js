(this["webpackJsonpcolor-blind-joke"]=this["webpackJsonpcolor-blind-joke"]||[]).push([[0],{12:function(e,t,n){"use strict";function r(){return new Worker(n.p+"static/js/circle.worker.ef29a1ba.worker.js")}n.d(t,"a",(function(){return r}))},18:function(e,t,n){},3:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=700,c=700,a=["#f49427","#c9785c","#fece00","#f1b181"],o=["#7ba55e","#89b370","#b6c674"],i=function(e){return[e/20,e/25,e/30,e/35]},u=function(e){return[e/50,e/60]},s=function(e){return Math.hypot(e.x-r/2,e.y-c/2)+e.r<=r/2};function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h(),n=[],l=j(t,e);e.length<=2&&(l=v(t,"aaa"));for(var f=2e3*e.length,b=i(l),g=u(l),x=t.getImageData(0,0,r,c).data,p=0,O=3;O<x.length;O+=4)0!==x[O]&&p++;console.log("non-zero ref pixels "+p),m(b,o,n,d(x,!1),f),m(g,o,n,d(x,!1),f);var w=function(e){return s(e)&&d(x,!0)(e)};return m(b,a,n,w,f),m(g,a,n,w,f),n}function f(e,t){return e?a.includes(t.color)?"#d98b8b":"#000000":t.color}function d(e,t){return function(n){return 0===function(e,t){return e[t.y*(4*r)+4*t.x+3]}(e,n)===t}}function b(e){return"".concat(e,"px Arial")}function h(){return new OffscreenCanvas(r,c).getContext("2d")}function j(e,t){var n=v(e,t);e.font=b(n);var a=g(e,t),o=g(e,"M"),i=r/2-a/2,u=c/2+o/2;return e.fillText(t,i,u),n}function g(e,t){return e.measureText(t).width}function v(e,t){for(var n=5,a=0;;){if(++a>1e3)throw new Error(a.toString());e.font=b(n+1);var o=g(e,t),i=g(e,"M"),u=r/2-o/2,s=c/2+i/2;if(Math.hypot(r/2-u,c/2-s)>r/2)return n;n+=1}}function x(e){return Math.floor(Math.random()*e)}function p(e){return e[x(e.length)]}var m=function(e,t,n,a,o){for(var i=0;n.length<o&&i<5e4;){var u={x:x(r),y:x(c),r:p(e),color:p(t)},s=!1;if(a(u))for(var l=0;l<n.length;l++){var f=n[l];if(Math.hypot(u.x-f.x,u.y-f.y)<u.r+f.r+1){s=!0;break}}else s=!0;s||n.push(u),i++}}},42:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(8),o=n.n(a),i=n(5),u=(n(18),n(9)),s=n(0);var l=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(0),o=Object(i.a)(a,2),l=o[0],f=o[1];return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"col-left",children:[Object(s.jsxs)("a",{href:"#",className:"logo",children:[Object(s.jsx)("img",{src:"./logo.png",alt:"color-blind-blender logo",width:"50",height:"50"}),Object(s.jsx)("span",{children:"color-blind-blender"})]}),Object(s.jsx)("div",{className:"form",children:Object(s.jsxs)("div",{className:"form-items",children:[Object(s.jsx)("label",{children:"Enter your text:"}),Object(s.jsx)("input",{onChange:function(e){c(e.target.value),e.target.value.length>10&&(e.target.value=e.target.value.substr(0,10))},max:10,min:1}),Object(s.jsx)("span",{className:"subtitle",children:"max length 10 symbols"})]})}),Object(s.jsx)("div",{className:"button-bar",children:Object(s.jsx)("button",{onClick:function(){f(l+1)},children:"Generate!"})})]}),Object(s.jsx)("div",{className:"col-right",children:l>0&&Object(s.jsx)(u.a,{text:n.toUpperCase()},l)})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(l,{})}),document.getElementById("root")),f()},9:function(e,t,n){"use strict";(function(e){var r=n(4),c=n.n(r),a=n(6),o=n(5),i=n(10),u=n.n(i),s=n(1),l=n(3),f=n(11),d=n.n(f),b=n(12),h=n(13),j=n.n(h),g=n(0),v=new b.a;var x=function(e,t,n){for(var r=0;r<t.length;r++){var c=t[r],a=Object(l.b)(n,c);e.fill(a),e.ellipse(c.x,c.y,2*c.r,2*c.r)}};t.a=function(t){var n=t.text,r=Object(s.useState)([]),i=Object(o.a)(r,2),f=i[0],b=i[1];Object(s.useEffect)((function(){"undefined"==typeof OffscreenCanvas||"undefined"==typeof e.Worker?b(Object(l.a)(n,function(){var e=document.createElement("canvas");return e.width=l.d,e.height=l.c,e.getContext("2d")}())):Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.onmessage=function(e){var t=e.data.circles;b(t)},v.postMessage({text:n});case 2:case"end":return e.stop()}}),e)})))()}),[]);var h=function(){var e=Object(a.a)(c.a.mark((function e(){var t,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.querySelector("canvas"),n=t.toDataURL("image/png"),(r=document.createElement("a")).href=n,r.download="imageinpng.png",r.click();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(a.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=y(),(n=document.createElement("a")).href="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(t),n.download="imageinsvg.svg",n.click();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=Object(s.useState)(!1),O=Object(o.a)(m,2),w=O[0],k=O[1],y=function(){for(var e=new d.a(l.d,l.c),t=0;t<f.length;t++){var n=f[t];e.fillStyle=Object(l.b)(w,n),e.beginPath(),e.arc(n.x,n.y,n.r,0,2*Math.PI),e.fill()}return e.getSerializedSvg()},C=f.length>0;return Object(g.jsxs)(g.Fragment,{children:[!C&&Object(g.jsx)(j.a,{type:"Grid",color:"#b47878",height:100,width:100}),C&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"download-menu",children:[Object(g.jsx)("button",{onClick:p,children:"SVG"}),Object(g.jsx)("button",{onClick:h,children:"PNG"}),Object(g.jsx)("button",{onClick:function(){k(!w)},children:w?"Blind":"Unblind"})]}),Object(g.jsx)(u.a,{setup:function(e,t){e.createCanvas(l.d,l.c).parent(t),e.background("transparent"),e.noStroke()},draw:function(e){x(e,f,w)}})]})]})}}).call(this,n(19))}},[[42,1,2]]]);
//# sourceMappingURL=main.a5bbaddf.chunk.js.map