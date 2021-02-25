(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{122:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),c=(r(0),r(144)),o={id:"start-here",title:"Start here",slug:"/"},i={unversionedId:"start-here",id:"start-here",isDocsHomePage:!1,title:"Start here",description:"Requirements",source:"@site/docs/install.md",slug:"/",permalink:"/help/docs/",version:"current",sidebar:"someSidebar",previous:{title:"About Tricktionary",permalink:"/help/docs/tricktionary/README"},next:{title:"Endpoints",permalink:"/help/docs/api"}},l=[],p={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Requirements")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"NodeJS"),Object(c.b)("li",{parentName:"ul"},"a PostGreSQL server")),Object(c.b)("h1",{id:""}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"local environment")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"PORT=8080\nDATABASE_URL=postgresql://user:pass@database:5432/\nBASE_URL=http://0.0.0.0\n")),Object(c.b)("h1",{id:"-1"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Install")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"git clone https://github.com/story-squad/tricktionary-be\n\ncd tricktionary-be\n\nnpm install\n")),Object(c.b)("h1",{id:"-2"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Commands")),Object(c.b)("h1",{id:"-3"}),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"npm run build\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Clean, lint, & transpile TS -> JS.")),Object(c.b)("h1",{id:"-4"}),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"npm start\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"start the app.")),Object(c.b)("h1",{id:"-5"}))}b.isMDXComponent=!0},144:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(r),O=n,m=u["".concat(o,".").concat(O)]||u[O]||s[O]||c;return r?a.a.createElement(m,i(i({ref:t},p),{},{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=O;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);