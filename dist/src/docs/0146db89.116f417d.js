(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{141:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=i(n),s=a,u=m["".concat(c,".").concat(s)]||m[s]||d[s]||b;return n?r.a.createElement(u,l(l({ref:t},o),{},{components:n})):r.a.createElement(u,l({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var o=2;o<b;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return i}));var a=n(3),r=n(7),b=(n(0),n(141)),c={},l={unversionedId:"tricktionary/modules/handleguess",id:"tricktionary/modules/handleguess",isDocsHomePage:!1,title:"handleguess",description:"tricktionary-be / Exports / handleGuess",source:"@site/docs/tricktionary/modules/handleguess.md",slug:"/tricktionary/modules/handleguess",permalink:"/help/docs/tricktionary/modules/handleguess",version:"current"},p=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"default",id:"default",children:[]},{value:"handleArrayOfGuesses",id:"handlearrayofguesses",children:[]}]}],o={toc:p};function i(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/help/docs/tricktionary/README"},"tricktionary-be")," / ",Object(b.b)("a",{parentName:"p",href:"/help/docs/tricktionary/modules"},"Exports")," / handleGuess"),Object(b.b)("h1",{id:"module-handleguess"},"Module: handleGuess"),Object(b.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(b.b)("h3",{id:"functions"},"Functions"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/help/docs/tricktionary/modules/handleguess#default"},"default")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/help/docs/tricktionary/modules/handleguess#handlearrayofguesses"},"handleArrayOfGuesses"))),Object(b.b)("h2",{id:"functions-1"},"Functions"),Object(b.b)("h3",{id:"default"},"default"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"default"),"(",Object(b.b)("inlineCode",{parentName:"p"},"io"),": ",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("inlineCode",{parentName:"p"},"socket"),": ",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("inlineCode",{parentName:"p"},"lobbyCode"),": ",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("inlineCode",{parentName:"p"},"guess"),": ",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("inlineCode",{parentName:"p"},"reactions"),": ",Object(b.b)("em",{parentName:"p"},"any"),"[] ","|"," ",Object(b.b)("em",{parentName:"p"},"undefined"),", ",Object(b.b)("inlineCode",{parentName:"p"},"lobbies"),": ",Object(b.b)("em",{parentName:"p"},"any"),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"void"),">"),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"io")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"socket")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"lobbyCode")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"guess")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"reactions")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"any"),"[] ","|"," ",Object(b.b)("em",{parentName:"td"},"undefined"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"lobbies")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"any"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"void"),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/story-squad/tricktionary-be/blob/30467a6/src/sockets/handleGuess.ts#L50"},"handleGuess.ts:50")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"handlearrayofguesses"},"handleArrayOfGuesses"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"handleArrayOfGuesses"),"(",Object(b.b)("inlineCode",{parentName:"p"},"io"),": ",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("inlineCode",{parentName:"p"},"socket"),": ",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("inlineCode",{parentName:"p"},"lobbyCode"),": ",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("inlineCode",{parentName:"p"},"lobbies"),": ",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("inlineCode",{parentName:"p"},"guesses"),": ",Object(b.b)("em",{parentName:"p"},"any"),"[]): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"void"),">"),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"io")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"socket")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"lobbyCode")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"lobbies")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"guesses")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"any"),"[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"void"),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/story-squad/tricktionary-be/blob/30467a6/src/sockets/handleGuess.ts#L4"},"handleGuess.ts:4")))}i.isMDXComponent=!0}}]);