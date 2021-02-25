(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(144)),c={},i={unversionedId:"tricktionary/src-api-rounds",id:"tricktionary/src-api-rounds",isDocsHomePage:!1,title:"src-api-rounds",description:"Rounds",source:"@site/docs/tricktionary/src-api-rounds.md",slug:"/tricktionary/src-api-rounds",permalink:"/help/docs/tricktionary/src-api-rounds",version:"current"},p=[{value:"POST /api/round/start",id:"post-apiroundstart",children:[]},{value:"POST /api/round/finish",id:"post-apiroundfinish",children:[]}],u={toc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Rounds")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Method"),Object(o.b)("th",{parentName:"tr",align:null},"URL"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"POST"),Object(o.b)("td",{parentName:"tr",align:null},"/api/round/start"),Object(o.b)("td",{parentName:"tr",align:null},"start a new round. ",Object(o.b)("strong",{parentName:"td"},Object(o.b)("em",{parentName:"strong"},"called from handleStartGame")))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"POST"),Object(o.b)("td",{parentName:"tr",align:null},"/api/round/finish"),Object(o.b)("td",{parentName:"tr",align:null},"finish this round. ",Object(o.b)("strong",{parentName:"td"},Object(o.b)("em",{parentName:"strong"},"called from handleGuess")))))),Object(o.b)("h1",{id:""}),Object(o.b)("h3",{id:"post-apiroundstart"},"POST /api/round/start"),Object(o.b)("p",null,"Request body:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"{\n    lobby: {...},\n    wordId: 42\n}\n")),Object(o.b)("p",null,"Returns:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"{\n    roundId: 13\n}\n")),Object(o.b)("h1",{id:"-1"}),Object(o.b)("h3",{id:"post-apiroundfinish"},"POST /api/round/finish"),Object(o.b)("p",null,"Request body:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"{\n    roundId: 13\n}\n")))}b.isMDXComponent=!0},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=b(n),s=r,O=l["".concat(c,".").concat(s)]||l[s]||d[s]||o;return n?a.a.createElement(O,i(i({ref:t},u),{},{components:n})):a.a.createElement(O,i({ref:t},u))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);