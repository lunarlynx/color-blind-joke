(this["webpackJsonpcolor-blind-joke"]=this["webpackJsonpcolor-blind-joke"]||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(6),i=n.n(c),o=n(2),s=(n(13),n(3)),l=n.n(s),u=n(5),d=n(7),b=n.n(d),j=700,f=700,h=["#f49427","#c9785c","#fece00","#f1b181"],v=["#7ba55e","#89b370","#b6c674"];function x(e,t){return e?h.includes(t.color)?"#d98b8b":"#000000":t.color}function g(e,t){return function(n){return 0===e.get(n.x,n.y)[0]===t}}function m(e,t){var n=e.createGraphics(j,f);n.background("transparent"),n.textFont("Arial");var r=function(e,t){var n=5;for(;;){e.textSize(n+1);var r=350-e.textWidth(t)/2,a=350+e.textWidth("\u041c")/2;if(!(e.dist(350,350,r,a)<=350))return n;n+=1}}(n,t);n.textSize(r);var a=350-n.textWidth(t)/2,c=350+n.textWidth("\u041c")/2;return n.text(t,a,c),[n,r]}var O=function(e,t,n,r,a,c){for(var i=0;r.length<c&&i<5e4;){var o={x:e.random(j),y:e.random(f),r:e.random(t),color:e.random(n)},s=!1;if(a(o,e))for(var l=0;l<r.length;l++){var u=r[l];if(e.dist(o.x,o.y,u.x,u.y)<o.r+u.r+1){s=!0;break}}else s=!0;s||r.push(o),i++}},p=n(8),k=n.n(p),y=n(0),S=function(e){var t=e.text,n=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.querySelector("canvas"),n=t.toDataURL("image/png"),(r=document.createElement("a")).href=n,r.download="imageinpng.png",r.click();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=N(),(n=document.createElement("a")).href="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(t),n.download="imageinsvg.svg",n.click();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=Object(r.useState)(),i=Object(o.a)(c,2),s=i[0],d=i[1],p=Object(r.useState)(!1),S=Object(o.a)(p,2),w=S[0],C=S[1],N=function(){for(var e=new k.a(j,f),t=0;t<s.length;t++){var n=s[t];e.fillStyle=x(w,n),e.beginPath(),e.arc(n.x,n.y,n.r,0,2*Math.PI),e.fill()}return e.getSerializedSvg()};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:"download-menu",children:[Object(y.jsx)("button",{onClick:a,children:"SVG"}),Object(y.jsx)("button",{onClick:n,children:"PNG"}),Object(y.jsx)("button",{onClick:function(){C(!w)},children:w?"Blind":"Unblind"})]}),Object(y.jsx)(b.a,{setup:function(e,n){e.createCanvas(j,f).parent(n),e.background("transparent"),e.noStroke();var r=function(e,t){var n=[],r=m(e,t),a=Object(o.a)(r,2),c=a[0],i=a[1];if(t.length<=2){var s=m(e,"aaa");i=Object(o.a)(s,2)[1]}var l=2e3*t.length,u=(b=i,[b/20,b/25,b/30,b/35]),d=function(e){return[e/50,e/60]}(i);var b;O(e,u,v,n,g(c,!0),l),O(e,d,v,n,g(c,!0),l);var j=function(e,t){return function(e,t){return t.dist(e.x,e.y,350,350)+e.r<=350}(e,t)&&g(c,!1)(e)};return O(e,u,h,n,j,l),O(e,d,h,n,j,l),n}(e,t);d(r)},draw:function(e){!function(e,t,n){for(var r=0;r<t.length;r++){var a=t[r],c=x(n,a);e.fill(c),e.ellipse(a.x,a.y,2*a.r,2*a.r)}}(e,s,w)}})]})};var w=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(0),i=Object(o.a)(c,2),s=i[0],l=i[1];return Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)("div",{className:"container",children:[Object(y.jsxs)("div",{className:"col-left",children:[Object(y.jsxs)("a",{href:"#",className:"logo",children:[Object(y.jsx)("img",{src:"./logo.png",alt:"color-blind-blender logo",width:"50",height:"50"}),Object(y.jsx)("span",{children:"color-blind-blender"})]}),Object(y.jsx)("div",{className:"form",children:Object(y.jsxs)("div",{className:"form-items",children:[Object(y.jsx)("label",{children:"Enter your text:"}),Object(y.jsx)("input",{onChange:function(e){a(e.target.value),e.target.value.length>10&&(e.target.value=e.target.value.substr(0,10))},max:10,min:1}),Object(y.jsx)("span",{className:"subtitle",children:"max length 10 symbols"})]})}),Object(y.jsx)("div",{className:"button-bar",children:Object(y.jsx)("button",{onClick:function(){l(s+1)},children:"Generate!"})})]}),Object(y.jsx)("div",{className:"col-right",children:s>0&&Object(y.jsx)(S,{text:n.toUpperCase()},s)})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(w,{})}),document.getElementById("root")),C()}},[[16,1,2]]]);
//# sourceMappingURL=main.7da290ae.chunk.js.map