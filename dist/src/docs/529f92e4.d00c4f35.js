(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{144:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return r?a.a.createElement(m,l(l({ref:t},b),{},{components:r})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var b=2;b<o;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(144)),c={},l={unversionedId:"tricktionary/modules/handleerrormessage",id:"tricktionary/modules/handleerrormessage",isDocsHomePage:!1,title:"handleerrormessage",description:"tricktionary-be / Exports / handleErrorMessage",source:"@site/docs/tricktionary/modules/handleerrormessage.md",slug:"/tricktionary/modules/handleerrormessage",permalink:"/help/docs/tricktionary/modules/handleerrormessage",version:"current"},i=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"default",id:"default",children:[]}]}],b={toc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/help/docs/tricktionary/README"},"tricktionary-be")," / ",Object(o.b)("a",{parentName:"p",href:"/help/docs/tricktionary/modules"},"Exports")," / handleErrorMessage"),Object(o.b)("h1",{id:"module-handleerrormessage"},"Module: handleErrorMessage"),Object(o.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(o.b)("h3",{id:"functions"},"Functions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/help/docs/tricktionary/modules/handleerrormessage#default"},"default"))),Object(o.b)("h2",{id:"functions-1"},"Functions"),Object(o.b)("h3",{id:"default"},"default"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"default"),"(",Object(o.b)("inlineCode",{parentName:"p"},"io"),": ",Object(o.b)("em",{parentName:"p"},"any"),", ",Object(o.b)("inlineCode",{parentName:"p"},"socket"),": ",Object(o.b)("em",{parentName:"p"},"any"),", ",Object(o.b)("inlineCode",{parentName:"p"},"error"),": ",Object(o.b)("em",{parentName:"p"},"string"),"): ",Object(o.b)("em",{parentName:"p"},"Promise"),"<",Object(o.b)("em",{parentName:"p"},"void"),">"),Object(o.b)("p",null,'emit "error" message to player at socket.id'),Object(o.b)("h4",{id:"parameters"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"io")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"any")),Object(o.b)("td",{parentName:"tr",align:null},"any (socketio)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"socket")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"any")),Object(o.b)("td",{parentName:"tr",align:null},"any (socketio)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"error")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"string")),Object(o.b)("td",{parentName:"tr",align:null},"string")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"Promise"),"<",Object(o.b)("em",{parentName:"p"},"void"),">"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/story-squad/tricktionary-be/blob/a7dfe80/src/sockets/handleErrorMessage.ts#L9"},"handleErrorMessage.ts:9")))}p.isMDXComponent=!0}}]);