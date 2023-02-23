(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(96)),i={title:"Settings",slug:"/settings"},s={unversionedId:"settings",id:"settings",isDocsHomePage:!1,title:"Settings",description:"Settings are downloaded on every metadata synchronization. There are different kinds of settings:",source:"@site/docs/settings.md",slug:"/settings",permalink:"/am-touch/docs/settings",editUrl:"https://github.com/Hamza-ye/am-touch/edit/develop/docs/docs/settings.md",version:"current",sidebar:"docs",previous:{title:"Workflow",permalink:"/am-touch/docs/workflow"},next:{title:"Error Management",permalink:"/am-touch/docs/error-management"}},l=[{value:"Settings app",id:"settings-app",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Settings are downloaded on every metadata synchronization. There are different kinds of settings:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"d2.settingModule()\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"System settings"),": system-wide properties such as ",Object(o.b)("inlineCode",{parentName:"li"},"flag")," or ",Object(o.b)("inlineCode",{parentName:"li"},"style"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"User settings"),": user specific settings such as ",Object(o.b)("inlineCode",{parentName:"li"},"keyDbLocale")," or ",Object(o.b)("inlineCode",{parentName:"li"},"keyUiLocale"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Settings app"),": these settings offer additional control over the behavior of the application. More about this in the next section.")),Object(o.b)("h2",{id:"settings-app"},"Settings app"),Object(o.b)("p",null,'The DHIS2 instance might include a web application called "Android Settings" that allow to have remote control over certain parameters in the application. The installation and configuration of this application is optional.'),Object(o.b)("p",null,"This SDK downloads this configuration in every metadata synchronization and persist it in the database. Some of these parameters are automatically consumed by the SDK (in bold)."),Object(o.b)("p",null,"General:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Metadata/data sync frequency: this value must be consumed by the application and used to trigger the synchronization in the SDK."),Object(o.b)("li",{parentName:"ul"},"Mobile configuration: gateway number, sender number. They must be consumed by the application and used to configure the SMS module in the SDK."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Reserved values"),": number of attribute values to reserve."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Encrypt database"),": whether or not to encrypt local database.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Programs:")," this section controls the program data synchronization parameters. It has a section to define global or default parameters to be used in the synchronization of all programs. Additionally it allows to set specific settings for particular programs. All these parameters are consumed by the SDK and used in the synchronization process."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"DataSets:")," this section controls the aggregated data synchronization parameters. It has a section to define global or default parameters to be used in the synchronization of all dataSets. Additionally it allows to set specific setting for particular dataSets. All these parameters are consumed by the SDK and used in the synchronization process."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"// General settings\nd2.settingModule().generalSetting().get();\n\n// Program settings\nd2.settingModule().programSetting().get();\n\n// DataSet settings\nd2.settingModule().dataSetSetting().get();\n")),Object(o.b)("p",null,"Although these parameters are automatically consumed by the SDK, the application might override some of those values in the synchronization process. For example, it might define a different TEI or event limit or a different download strategy (limitByOrgUnit, limitByProgram)."))}p.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);