(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(129)),c={},i={unversionedId:"tricktionary/EB-README",id:"tricktionary/EB-README",isDocsHomePage:!1,title:"EB-README",description:"Tricktionary & The Elastic Beanstalk.",source:"@site/docs/tricktionary/EB-README.md",slug:"/tricktionary/EB-README",permalink:"/docs/docs/tricktionary/EB-README",version:"current"},o=[],b={toc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"tricktionary--the-elastic-beanstalk"},"Tricktionary & The Elastic Beanstalk."),Object(l.b)("p",null,"a StorySquad API"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Starring")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"NodeJS"),Object(l.b)("li",{parentName:"ul"},"TypeScript"),Object(l.b)("li",{parentName:"ul"},"Express"),Object(l.b)("li",{parentName:"ul"},"Knex"),Object(l.b)("li",{parentName:"ul"},"SocketIO")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Deployed by")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html"},"eb CLI")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/marketplace/actions/aws-elastic-beanstalk-cli"},"aws-elastic-beanstalk-cli"))),Object(l.b)("h1",{id:""}),Object(l.b)("p",null,"To deploy this on elastic beanstalk, download and install the eb CLI. ",Object(l.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html#eb-cli3-install.scripts"},"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html#eb-cli3-install.scripts")),Object(l.b)("h1",{id:"-1"}),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"initialize and create the environment")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"generate your .elasticbeanstalk/config.yml and be sure to choose the Nodejs platform during the initialization process.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"eb init\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"create instance on the elastic beanstalk")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"eb create\n")),Object(l.b)("h1",{id:"-2"}),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"develop, build, test")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"transpile the latest TypeScript")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"npm run build\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"run locally and test")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"npm run start\n")),Object(l.b)("h1",{id:"-3"}),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Deploymen via eb CLI")),Object(l.b)("p",null,"After writing a new feature or fixing a broken piece of legacy code."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"make your pull request, then")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"eb deploy\n")),Object(l.b)("h1",{id:"-4"}),Object(l.b)("p",null,"*To simplify the deployment process, all transpiled code is committed."),Object(l.b)("img",{src:"gifs/Node.js_logo_2015.svg",width:"42%"}),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("em",{parentName:"strong"},"Node.js 12 running on 64bit Amazon Linux 2/5.2.5"))))}p.isMDXComponent=!0},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,O=s["".concat(c,".").concat(m)]||s[m]||u[m]||l;return n?a.a.createElement(O,i(i({ref:t},b),{},{components:n})):a.a.createElement(O,i({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<l;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);