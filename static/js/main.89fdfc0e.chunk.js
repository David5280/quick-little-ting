(this["webpackJsonpdenver-timer"]=this["webpackJsonpdenver-timer"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(4),i=n.n(r),s=(n(10),n(11),n(12),n(5));function o(e){var t=Date.parse(e.toString())-Date.parse((new Date).toString()),n=Math.floor(t/1e3%60),c=Math.floor(t/1e3/60%60),a=Math.floor(t/36e5%24),r=Math.floor(t/864e5);return{days:{value:r,unit:"".concat(1===r?"day":"days")},hours:{value:a,unit:"".concat(1===a?"hour":"hours")},minutes:{value:c,unit:"".concat(1===c?"minute":"minutes")},seconds:{value:n,unit:"seconds"}}}var u=n(2),l=n.n(u);var d=function(e){var t=a.a.useState(o(l()(e).toDate())),n=Object(s.a)(t,2),c=n[0],r=n[1];return a.a.useEffect((function(){var t=setInterval((function(){r(o(l()(e).toDate()))}),1e3);return function(){clearInterval(t)}}),[e]),c},j=(n(14),n(0)),v=function(e){var t=e.endTime,n=d(t);return n?Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"blocksContainer",children:Object.keys(n).map((function(e,t){return Object(j.jsxs)("div",{className:"block",children:[Object(j.jsx)("div",{children:Object(j.jsx)("p",{className:"blockValue",children:n[e].value})}),Object(j.jsx)("p",{className:"blockText",children:n[e].unit.toUpperCase()})]},e+t)}))}),Object(j.jsx)("p",{className:"untilText",children:"UNTIL ARIANA MOVES TO DENVER!"})]}):null},f=function(){var e=l()("09/25/2021, 5:00 pm").toDate();return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(v,{endTime:e})})};var b=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(f,{})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),h()}],[[16,1,2]]]);
//# sourceMappingURL=main.89fdfc0e.chunk.js.map