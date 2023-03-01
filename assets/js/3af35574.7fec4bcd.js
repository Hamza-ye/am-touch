(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(96)),i={title:"Validation Rule Engine",slug:"/validation-rule-engine"},l={unversionedId:"validation-rule-engine",id:"validation-rule-engine",isDocsHomePage:!1,title:"Validation Rule Engine",description:"Validation rules associated to a particular dataSet can be evaluated using the validation rule module. It only suppports the evaluation of validation rules in the context of a data entry form, i.e, validation rules that use data values contained in a particular combination of dataSet, period, organisationUnit and attributeOptionCombo.",source:"@site/docs/validation-rule-engine.md",slug:"/validation-rule-engine",permalink:"/d2-remote/docs/validation-rule-engine",editUrl:"https://github.com/Hamza-ye/d2-remote/edit/develop/docs/docs/validation-rule-engine.md",version:"current",sidebar:"docs",previous:{title:"Program Indicator Engine",permalink:"/d2-remote/docs/program-indicator-engine"},next:{title:"Database",permalink:"/d2-remote/docs/database"}},u=[],c={toc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Validation rules associated to a particular dataSet can be evaluated using the validation rule module. It only suppports the evaluation of validation rules in the context of a data entry form, i.e, validation rules that use data values contained in a particular combination of dataSet, period, organisationUnit and attributeOptionCombo."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Important")),Object(o.b)("p",{parentName:"blockquote"},"Currently it is not possible to evaluate validation rules acrross different dataSets, periods, organisationUnits or attributeOptionCombos.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"d2.validationModule()\n    .validationEngine()\n    .validate(<dataSet-uid>, <period-id>, <organisation-unit-uid>, <attribute-option-combo-uid>);\n")),Object(o.b)("p",null,"It returns a validation result containing the list of violations. Each violation includes helpful methods to get a human-readable representation of the conflict."))}d.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=d(n),b=a,f=s["".concat(i,".").concat(b)]||s[b]||p[b]||o;return n?r.a.createElement(f,l(l({ref:t},c),{},{components:n})):r.a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);