(window["webpackJsonphacker-news"]=window["webpackJsonphacker-news"]||[]).push([[0],{13:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),l=(n(13),n(2));function s(e){var t=e.children,n=function(e){return{className:e.isCurrent?"current":""}};return r.a.createElement("div",{className:"wrapper container"},r.a.createElement("nav",{className:"nav-wrapper"},r.a.createElement("ul",{className:"top-menu"},r.a.createElement("li",{className:"top-menu-link"},r.a.createElement(l.a,{getProps:n,to:"/"},"New Stories")),r.a.createElement("li",{className:"top-menu-link"},r.a.createElement(l.a,{getProps:n,to:"/best"},"Best Stories")),r.a.createElement("li",{className:"top-menu-link"},r.a.createElement(l.a,{getProps:n,to:"/top"},"Top Stories")),r.a.createElement("li",{className:"top-menu-link"},r.a.createElement(l.a,{getProps:n,to:"/ask"},"Ask Stories")),r.a.createElement("li",{className:"top-menu-link"},r.a.createElement(l.a,{getProps:n,to:"/job"},"Job Stories")),r.a.createElement("li",{className:"top-menu-link"},r.a.createElement(l.a,{getProps:n,to:"/show"},"Show Stories")))),t)}var i=n(1),u="https://hacker-news.firebaseio.com/v0",m=function(){return"".concat(u,"/topstories.json")},f=function(){return"".concat(u,"/beststories.json")},d=function(){return"".concat(u,"/newstories.json")},h=function(){return"".concat(u,"/askstories.json")},E=function(){return"".concat(u,"/jobstories.json")},p=function(){return"".concat(u,"/showstories.json")},b=function(e){return fetch((t=e,"".concat(u,"/item/").concat(t,".json"))).then((function(t){if(!t.ok)throw new Error("Sorry! Fetching error...");return t.clone().text().then((function(t){return n=e,a=t,void localStorage.setItem(n,a);var n,a})),t.json()})).catch((function(e){return console.log(e),null}));var t},v=function(e){return fetch(function(e){return"".concat(u,"/user/").concat(e,".json")}(e)).then((function(e){if(!e.ok)throw new Error("Sorry! Fetching error...");return e.json()})).catch((function(e){return console.log(e),null}))},g=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"new";switch(t){case"top":e=m();break;case"best":e=f();break;case"ask":e=h();break;case"job":e=E();break;case"show":e=p();break;default:e=d()}return fetch(e).then((function(e){if(!e.ok)throw new Error("Sorry! Fetching error...");return e.json()})).catch((function(e){return console.log(e),null}))},w=function(e){var t=Object(a.useState)(function(e){try{return JSON.parse(localStorage.getItem(e))}catch(t){return null}}(e)),n=Object(i.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(!1),l=Object(i.a)(c,2),s=l[0],u=l[1],m=Object(a.useState)(0),f=Object(i.a)(m,2),d=f[0],h=f[1];return Object(a.useEffect)((function(){if(!r&&d<3){var t=!0;return b(e).then((function(e){t&&(e?(u(!1),o(e)):(u(!0),setTimeout((function(){return t&&h((function(e){return e+1}))}),3e3)))})).catch((function(e){t&&u(!0),setTimeout((function(){return t&&h((function(e){return e+1}))}),3e3)})),function(){t=!1}}}),[e,d]),[r,s]},j=function(e){var t,n=e.itemId,a=w(n),o=Object(i.a)(a,2),c=o[0];return o[1]?r.a.createElement("div",null,"Sorry! Error occured"):c?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"full-story-top"},r.a.createElement(l.a,{to:"#",onClick:function(){return window.history.back()},className:"back-button"},r.a.createElement("span",null,"\u21d0 Back"))),r.a.createElement("div",{className:"full-story"},r.a.createElement("h1",{className:"title"},c.title),r.a.createElement("div",{dangerouslySetInnerHTML:(t=c.text,{__html:t})}),c.url?r.a.createElement("div",{className:"full-story-bottom"},r.a.createElement("a",{target:"_blank",href:c.url,rel:"noopener noreferrer"},"Read original \u21d2")):null)):null},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"new",t=Object(a.useState)([]),n=Object(i.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(!1),l=Object(i.a)(c,2),s=l[0],u=l[1],m=Object(a.useState)(0),f=Object(i.a)(m,2),d=f[0],h=f[1];return Object(a.useEffect)((function(){if(d<3){var t=!0,n=new AbortController;return g(e,n.signal).then((function(e){t&&(e?(u(!1),o(e)):(u(!0),setTimeout((function(){return t&&h((function(e){return e+1})),3e3}))))})).catch((function(e){t&&u(!0),setTimeout((function(){return t&&h((function(e){return e+1}))}),3e3)})),function(){t=!1,n.abort()}}}),[e,d]),[r,s]},S=Math.floor,y=function(e,t,n){var a=[],r=e-2,o=r<0?-1*r+e+2:e+2;r=r<0?0:r,o>=t&&(r-=o-t,o=t);for(var c=function(e){a.push([e+1,function(){return n(e)}])},l=r;l<=o;l++)c(l);return a},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,r=Object(a.useState)(n),o=Object(i.a)(r,2),c=o[0],l=o[1],s=Object(a.useState)(t),u=Object(i.a)(s,2),m=u[0],f=u[1],d=Object(a.useState)(S(e/c)),h=Object(i.a)(d,2),E=h[0],p=h[1],b=Object(a.useState)(y(m,E,f)),v=Object(i.a)(b,2),g=v[0],w=v[1];return Object(a.useEffect)((function(){p(S(e/c))}),[e,c]),Object(a.useEffect)((function(){w(y(m,E,f))}),[E,m]),[m,c,g,l]},N=function(e,t,n){var r=Object(a.useState)(e.slice(t*n,(t+1)*n)),o=Object(i.a)(r,2),c=o[0],l=o[1];return Object(a.useEffect)((function(){l(e.slice(t*n,(t+1)*n))}),[e,n,t]),c},P=function(e){return function(t){return t&&t.length?t.map((function(t){return r.a.createElement(e,{key:t,id:t})})):null}},T=function(e){var t=new Date(1e3*+e),n=t.toDateString().split(" "),a=Object(i.a)(n,4),r=a[1],o=a[2],c=a[3],l=t.toLocaleTimeString().split(":").slice(0,2).join(":");return"".concat(r," ").concat(o,", ").concat(c," at ").concat(l)};var F=r.a.memo((function(e){var t=e.id,n=w(t),a=Object(i.a)(n,2),o=a[0];return a[1]?r.a.createElement("div",null,"Error occured"):o?r.a.createElement("div",{className:"short-story row"},r.a.createElement("h4",{className:"story-title"},r.a.createElement(l.a,{to:"/story/".concat(o.id)},o.title)),r.a.createElement("div",{className:"story-short-bottom"},r.a.createElement("span",{className:"story-author"},"by ",r.a.createElement(l.a,{to:"/user/".concat(o.by)},o.by)),r.a.createElement("span",{className:"story-date"},T(o.time)))):r.a.createElement("div",{className:"short-story preloading"},r.a.createElement("h4",{className:"story-title loading"}),r.a.createElement("div",{className:"story-short-bottom"},r.a.createElement("span",{className:"story-author loading"}),r.a.createElement("span",{className:"story-date loading"})))})),A=r.a.memo((function(e){var t=e.pages,n=e.currentPage;return t&&t.length?r.a.createElement("div",{className:"pages row"},r.a.createElement("ul",{className:"paginator"},t.map((function(e){var t=Object(i.a)(e,2),a=t[0],o=t[1];return r.a.createElement("li",{key:a},r.a.createElement("a",{className:a===n+1?"current":"",onClick:a===n+1?function(){}:function(){return o()}},a))})))):null})),C=r.a.memo((function(e){var t=e.perPage,n=e.handler;return r.a.createElement("div",{className:"per-page-wrapper row"},r.a.createElement("select",{defaultValue:t,onChange:function(e){return n(+e.target.value)}},r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"15"},"15")))})),I=r.a.memo((function(){return r.a.createElement("div",{className:"error-page"},r.a.createElement("h1",{style:{textAlign:"center"}},"404"),r.a.createElement("p",null,"Sorry! Wrong url..."),r.a.createElement("div",null,r.a.createElement(l.a,{to:"/"},"Home")))})),W=P(F),B=["","best","top","ask","job","show"],x=function(e){var t=e["*"],n=k(t),a=Object(i.a)(n,2),o=a[0],c=a[1],l=O(o.length),s=Object(i.a)(l,4),u=s[0],m=s[1],f=s[2],d=s[3],h=N(o,u,m);return B.includes(t)?c?r.a.createElement("div",null,"Sorry! Try again later :("):r.a.createElement("div",{className:"news-feed-wrapper"},r.a.createElement("h1",null,{"":"New Stories Feed",best:"Best Stories Feed",top:"Top Stories Feed",ask:"Ask Stories Feed",job:"Job Stories Feed",show:"Show Stories Feed"}[t]),r.a.createElement(C,{perPage:m,handler:d}),W(h),o.length?r.a.createElement(A,{pages:f,currentPage:u}):null):r.a.createElement(I,null)},J=P((function(e){var t=e.id,n=w(t),a=Object(i.a)(n,2),o=a[0];return a[1]?null:o?r.a.createElement("div",null,r.a.createElement(l.a,{to:"/story/".concat(o.id)},o.title)):null})),L=r.a.memo((function(e){var t,n=e.userId,o=Object(a.useState)(null),c=Object(i.a)(o,2),l=c[0],s=c[1],u=Object(a.useState)(!1),m=Object(i.a)(u,2),f=(m[0],m[1]);return Object(a.useEffect)((function(){l||v(n).then((function(e){e?(s(e),f(!1)):f(!0)})).catch((function(e){console.log(e),f(!0)}))}),[n]),l?r.a.createElement("div",{className:"user-wrapper row"},r.a.createElement("div",{className:"two columns"},r.a.createElement("a",{href:"#",onClick:function(){return window.history.back()}},"\u21d0 Back")),r.a.createElement("div",{className:"ten columns"},r.a.createElement("h3",null,l.id),r.a.createElement("pre",{dangerouslySetInnerHTML:(t=l.about,{__html:t})}),r.a.createElement("hr",null),J(l.submitted.slice(0,10)))):r.a.createElement("div",null,"Fetching user info...")}));var _=function(){return r.a.createElement(l.b,null,r.a.createElement(s,{path:"/"},r.a.createElement(x,{path:"/*"}),r.a.createElement(j,{path:"/story/:itemId"}),r.a.createElement(L,{path:"/user/:userId"})))},R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(_,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/hacker-news-reader-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/hacker-news-reader-app","/service-worker.js");R?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):H(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):H(t,e)}))}}()},8:function(e,t,n){e.exports=n(22)}},[[8,1,2]]]);
//# sourceMappingURL=main.c83acbdf.chunk.js.map