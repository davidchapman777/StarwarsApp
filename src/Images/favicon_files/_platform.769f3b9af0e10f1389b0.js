(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1138:function(t,e,o){"use strict";o(824)},1139:function(t,e,o){var r=o(4)((function(i){return i[1]}));r.push([t.i,".category-section[data-v-1a9283de]{margin-top:20px}.category-section__title[data-v-1a9283de]{margin:20px 0 24px}",""]),r.locals={},t.exports=r},1140:function(t,e,o){"use strict";o(825)},1141:function(t,e,o){var r=o(4)((function(i){return i[1]}));r.push([t.i,"@media(min-width:1024px){.app-header-search-style .app-title{display:none}}",""]),r.locals={},t.exports=r},1142:function(t,e,o){"use strict";o(826)},1143:function(t,e,o){var r=o(4)((function(i){return i[1]}));r.push([t.i,'@keyframes spin-7e970472{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.platform-page[data-v-7e970472]{position:relative}.platform-page__header[data-v-7e970472]{margin-top:12px}.platform-page__header+.platform-page__content[data-v-7e970472]{margin-top:16px}.container[data-v-7e970472]{padding:0 32px}@media(max-width:768px){.container[data-v-7e970472]{padding:12px 10px 0 20px}}.is-loading[data-v-7e970472]{position:relative;height:100px}.is-loading[data-v-7e970472]:after{content:"";position:absolute;top:50%;left:50%;margin-top:-1.5rem;margin-left:-1.5rem;width:3rem;height:3rem;border-radius:50%;border:2px solid hsla(0,0%,66.7%,.2);border-top-color:hsla(0,0%,66.7%,.8);animation:spin-7e970472 1s linear infinite}.icons-descr-wrap[data-v-7e970472]{display:grid;grid-template:repeat(2,max-content)/none;row-gap:24px;margin:32px 0;padding:24px 0;border-top:1px solid var(--c-transparent-black_200);border-bottom:1px solid var(--c-transparent-black_200)}.item-category[data-v-7e970472]{margin-top:20px}@media(min-width:768px){.page-descr[data-v-7e970472]{border-left:1px solid var(--c-transparent-black_200);padding-left:32px}.icons-descr-wrap[data-v-7e970472]{grid-template:none/repeat(2,1fr);padding:32px 0}.missing-icon[data-v-7e970472]{margin-right:32px}}',""]),r.locals={},t.exports=r},1449:function(t,e,o){"use strict";o.r(e);var r=o(7),n=o(90),c=o(637),l=o(628),d=o(693),m=o(12),f={name:"PackPlatformPage",components:{ShutterstockAds:l.default,searchNothingFound:d.a,appPageSectionTitle:c.a},props:{category:{type:Object,default:()=>{}},pack:{type:Object,default:()=>{}},platform:{type:Object,default:()=>{}}},computed:{shutterQuery(){const t=this.category.name,style=this.platform.title;let e="";return e+="Popular"!==t?t:style.replace(/ .*/,""),{query:e,platform:this.platform.apiCode}}},methods:{uppercaseFirstLetter:m.uppercaseFirstLetter}},h=(o(1138),o(3)),v=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("div",[t.category?t._l(t.category.subcategory,(function(o,r){return e("div",{key:r,class:{"category-section":0!==r}},[e("appPageSectionTitle",{staticClass:"category-section__title"},[t._v("\n        "+t._s(t.uppercaseFirstLetter(o.name.toLowerCase()))+"\n      ")]),t._v(" "),e("icon-grid",{key:"grid"+r,attrs:{id:o.name,icons:o.icons,action:"select","ads-params-two":1===r?{rowAds:3}:{},"carbon-ad":0===r}}),t._v(" "),1===r?e("client-only",{key:o.name+r},[t.pack&&t.platform?e("div",{staticClass:"ads"},[e("ShutterstockAds",{attrs:{"ad-params":t.shutterQuery}})],1):t._e()]):t._e()],1)})):e("search-nothing-found")],2)}),[],!1,null,"1a9283de",null).exports,y=o(635),_=o(735),C=o(618),E=o(624),A=o(620),P={name:"SearchPage",components:{packPlatformPage:v,searchNothingFound:d.a,requestIcon:y.a,CrossSearchBar:_.a,appPopularRequest:()=>o.e(17).then(o.bind(null,695)),switcherAds:()=>o.e(0).then(o.bind(null,1419))},layout:"app",scrollToTop:!0,data:()=>({term:"",icons:[],countAll:0,isFound:!1,page:1,isLoaded:!1,isLoadedAll:!1,parsedParams:null,searchTemplate:null,category:null,pageSubtitle:null,similarTags:null}),computed:{...Object(r.e)({isContentLoaded:t=>t.ui.isContentLoaded,isPageLoaded:t=>t.ui.isPageLoaded,platform:t=>t.platform,user:t=>t.auth.user,pack:t=>t.pack,packs:t=>t.appInfo.packs,isAnimated:t=>t.filters.isAnimated,platforms:t=>t.appInfo.platforms}),isColor(){return this.platforms[this.platform.apiCode].isColor}},async asyncData(t){let{app:e,params:o,store:r,redirect:c,res:l,route:d}=t;if(!o.platform)return void c(301,encodeURI(`/icons/set/${o.term}`));const m=Object(n.a)(o.platform),f=Object(A.a)(r,e).beautifyMadeIn(Object(C.a)(o.term)),h={term:o.term,beautyTerm:f,parsedParams:m};r.dispatch("setPlatform",m.$rootPath),r.dispatch("setIsPageLoading",!0),r.dispatch("setFilterAuthors",Object(C.c)(o.platform)),r.dispatch("setFilterIsAnimated",Object(C.b)(o.platform)),r.dispatch("setFilterColor",Object(C.d)(o.platform).code||Object(C.d)(o.platform).value),r.dispatch("setSearchColor",Object(C.d)(o.platform)),r.dispatch("icon/changeColor",Object(C.d)(o.platform).value||"000000"),r.commit("IS_CONTENT_LOADED",!1);const{fetchDataCategory:v,fetchDataIcons:y}=Object(E.a)(r,e,d),_=await v(h);let P;if(_&&_.category&&(P=!!_.category.subcategory&&!!_.category.subcategory.length),_&&P)return _;const T=await y(h);return l&&!T.isFound&&(l.statusCode=404),T},watch:{isPageLoaded(t){t&&this.sendGA()},user(t){t&&this.$analytics.trackSearchEvent({userId:t.id,platform:this.platform.apiCode,isPaidUser:!!t.activeLicense,type:"icon",term:this.term,ip:t.ip})}},mounted(){setTimeout((()=>{this.$store.commit("IS_CONTENT_LOADED",!0)}),500),this.setFilters(),this.sendGA(),this.setIsPageLoading(!1)},methods:{...Object(r.b)(["setFilterColorGradient","setIsPageLoading"]),fetchNext(t){const e=this.searchTemplate;"icons"===e&&this.fetchNextIcons(t),"category"===e&&this.fetchNextCategory(t)},async fetchNextIcons(t){var e;const{isColorFilters:o}=Object(E.a)(this.$store),r=this.$i18n.localeProperties.iso,n=this.$store.state.platform.apiCode,c=this.$route.params.term,l=null!==(e=this.isAnimated)&&void 0!==e?e:null,d=`${this.beautyTerm}`.toLowerCase(),m=this.page+1,f=o();if(this.icons.length>=this.countAll)return t.complete(),void(this.isLoadedAll=!0);const h={term:c,beautyTerm:d,page:m,isAnimated:l,isColor:f,platform:n};try{const e=await Object(E.a)(this.$store).getIcons(h,r);if(!e.success)throw e;e.icons.length?(this.icons=this.icons.concat(e.icons),this.page=this.page+1,t.loaded()):(t.complete(),this.isLoadedAll=!0)}catch(e){t.complete(),this.isLoadedAll=!0,console.error("fetchNextIcons",e)}},async fetchNextCategory(t){var e;if(this.isLoadedAll)return void t.complete();const o={pack:this.pack.code,platform:this.platform.apiCode,page:this.page+1,isAnimated:null!==(e=this.isAnimated)&&void 0!==e?e:null},{getCategory:r}=Object(E.a)(this.$store);try{const e=await r(o);e.success?(this.mergeCategories(this.category,e.category),this.page++,t.loaded()):(t.complete(),this.isLoadedAll=!0)}catch(e){t.complete(),this.isLoadedAll=!0,console.error("fetchNextCategory",e)}},mergeCategories(t,e){e.subcategory.forEach((e=>{const sub=t.subcategory.find((t=>t.code===e.code));sub?sub.icons.push(...e.icons):t.subcategory.push(e)}))},setFilters(){this.parsedParams&&this.platform&&"nolan"!==this.platform.apiCode&&this.setFilterColorGradient(void 0)},sendGA(){window.ga&&window.ga("send","pageview"),this.$analytics.trackIconSearch({term:this.term}),this.isFound||this.$analytics.track({event:"Nothing found",category:this.$route.params.platform})}}},T=(o(1140),o(1142),Object(h.a)(P,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"platform-page"},[t.isContentLoaded?[e("div",{staticClass:"platform-page__header container"},[e("app-header",{staticClass:"app-header-search-style",attrs:{"show-ads":"emoji"===!t.term,"found-amount":t.countAll,"similar-tags":t.similarTags,"show-title":!1}})],1),t._v(" "),"emoji"===t.term?e("appPopularRequest",{attrs:{request:t.term}}):t._e(),t._v(" "),e("div",{staticClass:"platform-page__content container"},["emoji"===t.term?e("switcherAds"):t._e(),t._v(" "),t.isFound?t._e():e("search-nothing-found"),t._v(" "),t.category&&"category"===t.searchTemplate?e("packPlatformPage",{staticClass:"is-body",attrs:{category:t.category,pack:t.pack,platform:t.platform}}):t._e(),t._v(" "),"icons"===t.searchTemplate?e("div",[e("icon-grid",{attrs:{icons:t.icons,"ads-params":{rowAds:5,term:t.term,platform:t.platform.apiCode},"carbon-ad":!0,"found-language":t.foundLanguage,action:"select"}})],1):t._e(),t._v(" "),e("client-only",[e("infinite-loading",{directives:[{name:"show",rawName:"v-show",value:!t.isLoadedAll&&t.isFound,expression:"!isLoadedAll && isFound"}],attrs:{distance:350},on:{infinite:t.fetchNext}},[e("div",{staticClass:"is-loading",attrs:{slot:"spinner"},slot:"spinner"})])],1),t._v(" "),t.isFound?e("div",{staticClass:"icons-descr-wrap"},[e("request-icon",{staticClass:"missing-icon"}),t._v(" "),e("app-bottom-info",{staticClass:"page-descr",attrs:{subtitle:t.pageSubtitle}})],1):t._e(),t._v(" "),t.isLoadedAll&&t.isFound?e("client-only",[e("CrossSearchBar",{attrs:{"search-query":t.beautyTerm.toLowerCase()}})],1):t._e()],1)]:[e("div",{staticClass:"platform-page__content container"},[e("div",{staticClass:"ph-descr-wrap"},[e("icon-placeholder",{attrs:{type:"filters","aggregated-tags":!0,filters:3,"short-bottom-margin":!0}})],1),t._v(" "),e("icon-placeholder",{attrs:{count:36,type:"icon","icons-heading":!1}})],1)]],2)}),[],!1,null,"7e970472",null));e.default=T.exports},618:function(t,e,o){"use strict";o.d(e,"d",(function(){return l})),o.d(e,"b",(function(){return d})),o.d(e,"c",(function(){return m})),o.d(e,"a",(function(){return f}));var r=o(10),n=o(90),c=o(12);function l(t){const e=Object(n.a)(t);var o,c;if(e.color&&e.color.includes("c-"))return{title:`#${null===(o=e.color.replace("c-",""))||void 0===o?void 0:o.toLowerCase()}`,code:null,value:`#${null===(c=e.color.replace("c-",""))||void 0===c?void 0:c.toLowerCase()}`};const[l]=r.d.filter((t=>t.code===e.color));return l||r.c}function d(t){const e=Object(n.a)(t);let o;return"animated"===e.animation&&(o=!0),"static"===e.animation&&(o=!1),o}function m(t){return Object(n.a)(t).authors}function f(t){const e=Object(n.a)(t);return Object(c.uppercaseFirstLetter)(Object(c.prettifyValue)(e.$rootPath)).replace(/&apos;/g,"'")}},620:function(t,e,o){"use strict";o.d(e,"a",(function(){return d}));var r=o(12),n=o(10),c=o(21);const l=Object(c.a)({baseURL:"https://search.icons8.com/api/iconsets"});function d(t,e){function o(t,e){const{commonName:o,platform:r,colorHex:n}=t;if(!o||!r)return;let image=`https://img.icons8.com/${r}/${e}/${o}.png`;return n&&(image=`https://img.icons8.com/${r}/${e}/${n}/${o}.png`),image}function c(t,e,o){var r,n;const c=e.parsedParams.animation||null,l=null===(r=e.parsedParams)||void 0===r||null===(n=r.color)||void 0===n?void 0:n.toUpperCase(),d="animated"===c;return o?t.t("WEB_APP.SEO.SEARCH.TITLE_DYNAMIC."+(d?"ONE_PLATFORM_ANIMATED":"ONE_PLATFORM"),{term:e.beautyTerm,platforms:e.style}):d?t.t("WEB_APP.SEO.SEARCH.META."+(d?"TITLE_ANIMATED":"TITLE_STATIC"),{term:e.beautyTerm}):l&&!l.includes("C-")?t.t(`WEB_APP.SEO.SEARCH.TITLE_ALL_${l}`,{term:e.beautyTerm}):t.t("WEB_APP.SEO.SEARCH.TITLE_ALL",{term:e.beautyTerm})}function d(t,e,o){return o?t.t("WEB_APP.SEO.SEARCH.DESCRIPTION_SINGLE",{term:e.beautyTerm,platform:e.platformName}):t.t("WEB_APP.SEO.SEARCH.DESCRIPTION_PAGE",{term:e.beautyTerm,platforms:"iOS, Material, Windows",pixelPerfectLink:"https://blog.icons8.com/articles/make-pixel-perfect-icons/",newIconsLink:"/icons/new",popularIconsLink:"/icons/set/popular"})}function m(t,e,o){var r,n;const c=e.parsedParams.animation||null,l="animated"===c,d="static"===c,m=null===(r=e.parsedParams)||void 0===r||null===(n=r.color)||void 0===n?void 0:n.toUpperCase();return o?t.t("WEB_APP.SEO.SEARCH.META."+(l?"DESCRIPTION_STYLE_ANIMATED":"DESCRIPTION_STYLE"),{term:e.beautyTerm,platform:e.style}):l?t.t("WEB_APP.SEO.SEARCH.META.DESCRIPTION_ANIMATED",{term:e.beautyTerm}):d?t.t("WEB_APP.SEO.SEARCH.META.DESCRIPTION_STATIC",{term:e.beautyTerm}):m&&!m.includes("C-")?t.t(`WEB_APP.SEO.SEARCH.META.DESCRIPTION_${m}`,{term:e.beautyTerm}):t.t("WEB_APP.SEO.SEARCH.META.DESCRIPTION",{term:e.beautyTerm})}function f(t,e){void 0===t&&(t=[]),void 0===e&&(e={});(e.removeStatic||!1)&&t.length&&t.forEach((link=>(link.hreflang&&(link.href=link.href.replace("--static","")),link)))}return{getCanonical:function(t){const o=e.$hostUrl||"https://icons8.com";let r=t.url;try{r=decodeURIComponent(t.url)}catch(e){r=t.url}return`${o}${r}`},getShareImageLink:function(t,e){const o=t.pngSizes[t.pngSizes.length-1],r=o?o.title:"2x";return`https://img.icons8.com/${t.seoCode}/${r}/${e}.png`},injectIconsSEO:function(r,l){var h;const style=t.state.platform.title,v=e.$hostUrl||"https://icons8.com",[y]=n.d.filter((t=>t.code===r.parsedParams.color)),_=t.state.filters.colorGradient,C="all"!==t.state.platform.apiCode;let E=(null==y||null===(h=y.value)||void 0===h?void 0:h.replace("#",""))||"000000";if(_){E=`${t.state.filters.colorGradient.start.replace("#","")||"000000"}/${t.state.filters.colorGradient.end.replace("#","")||"000000"}`}const A={titlePage:r.beautyTerm,descriptionPage:d(e.i18n,r,C),title:c(e.i18n,{...r,style:style},C),description:m(e.i18n,{...r,style:style},C),image:o({...r,colorHex:E},600)};if(l){A.canonical=function(t,e,o){const style=e.parsedParams.$rootPath||"ios",r=e.parsedParams.color||null,n=e.parsedParams.animation||null,c=e.parsedParams.authors||null;if(o){let o=`${t}/icon/set/${e.term}/${style}`;return r&&(o+=`--${r}`),"animated"===n&&(o+=`--${n}`),c&&(o+=`--${c}`),o}let l=`${t}/icons/set/${e.term}`;r&&(l+=`--${r}`);"animated"===n&&(l+=`--${n}`);c&&(l+=`--${c}`);return l}(v,r,C);f(t.state.seo.data.link,{removeStatic:"static"===r.parsedParams.animation&&!1})}else A.noindex=!0;t.dispatch("updateSEO",A)},injectIconsContent:async function(t){return{pageSubtitle:e.i18n.t("WEB_APP.SEO.SEARCH.SUBTITLE_PLATFORMS",{amount:t.amount,term:t.beautyTerm,platform:t.platformName}),similarTags:(await async function(t){let{term:e,limit:o=10,lang:r="en",platform:n="all"}=t;try{const t=await l.get("/similarTags",{params:{term:e,limit:o,lang:r,platform:n}});return t.data.success?t.data.data:null}catch(t){return null}}({term:t.term,limit:20,lang:e.i18n.localeProperties.code,platform:"all"})).filter((e=>e.toLowerCase()!==t.term.toLowerCase()))}},updateHreflang:f,translateHreflang:function(e){const{path:path,locales:o,routeParams:n,translations:c=[],isPack:l=!1}=e,d=n.term.split("--"),m=n.term.split("--")[0],f=o.map((t=>{let e=null;e=l?c[t.iso]:c[t.code],e||(e=c.en||m);const o=Object(r.normalizeValue)(e);let f=`${path}${o}`;return d.map(((param,t)=>(f+=0!==t?`--${param}`:"",f))),n.platform&&(f+=`/${n.platform}`),{lang:t.code,url:t.href+f}}));t.dispatch("updateHreflangListHref",{locales:f})},beautifyMadeIn:function(text,pattern,t){void 0===pattern&&(pattern="Made in"),void 0===t&&(t=" in ");const e=""+text;if(!new RegExp(pattern).test(e))return e;const content=e.split(t);if(!content[1])return e;let o=!1;return["USA","UK","UAE","NBA","FIFA"].forEach((t=>{t.toLowerCase()===content[1].toLowerCase()&&(content[1]=t,o=!0)})),o||(content[1]=content[1].replace(/(^|\s)\S/g,(t=>t.toUpperCase()))),content.join(t)}}}},621:function(t,e,o){var content=o(630);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(5).default)("ec898cf6",content,!0,{sourceMap:!1})},623:function(t,e,o){var content=o(634);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(5).default)("3a2a1191",content,!0,{sourceMap:!1})},624:function(t,e,o){"use strict";o.d(e,"a",(function(){return f}));var r=o(92),n=o(29),c=o(93),l=o(620),d=o(91),m=o(10);function f(t,e,o){const f=Object(l.a)(t,e,o);function h(t,e){const o={term:t.term,platform:t.platform,page:t.page,isAnimated:t.isAnimated,authors:t.authors,language:e,isColor:t.isColor,amount:t.amount};return Object(r.a)(o)}async function v(e){var o,r;const n={pack:e.pack,platform:e.platform,page:e.page,isAnimated:e.isAnimated},c=await t.dispatch("getPack",n),l=c.success,d=!!c&&!1,m=l&&(null===(o=c.category)||void 0===o||null===(r=o.subcategory)||void 0===r?void 0:r.length),f=d&&!1===l;return{...c,isFound:m,isLoaded:d,isLoadedAll:f}}function y(){const e=t.state.platform.isColor;let o;return t.state.filters.color&&!e&&(o=!1),o}function _(t){return["svg","social-media","notion","emoji","christmas","new-year"].includes(t)}return{fetchDataIcons:async function(r){var l,d;const m=t.state.filters.isAnimated,v=t.state.filters.authors,C=t.state.platform.apiCode,E=t.state.platform.title,A=y(),P=e.i18n.localeProperties.iso,T={...r,page:1,platform:C,platformName:E,isAnimated:m,authors:v,isColor:A},w=await h(T,P);if("nolan"===C){const[e]=Object(c.a)(),o={end:e.end,start:e.start,id:e.id};t.dispatch("SET_FILTER_COLOR_GRADIENT",o),t.state.filters.colorGradient=e}const[I]=w.icons;w.success&&I&&Object.assign(T,{platform:I.platform,commonName:I.commonName});const x=w.icons.length,S=w.success&&w.countAll<=x,O=w.success&&x,L=Object(n.b)(null===(l=o.params)||void 0===l?void 0:l.term,{isAnimated:m,authors:t.state.filters.authors,color:null===(d=r.parsedParams)||void 0===d?void 0:d.color}),$=/[\u3131-\u3162 | \uAC00-\uD7AF]/giu.test(L),k=O&&L.length<=30&&L.split("-").length<=2&&!$,j=O&&L.length<=30&&L.split("-").length<=2&&!o.fullPath.includes("--static")&&!$;if(f.injectIconsSEO(T,k),j){var N;const path=null===(N=o.matched[0])||void 0===N?void 0:N.path.split(":")[0];f.translateHreflang({path:path,locales:e.i18n.locales,routeParams:o.params,translations:w.searchTranslations})}else t.dispatch("deleteHreflang");const content=await f.injectIconsContent({...T,amount:w.countAll}),R=_(r.term);return{...w,...content,...r,isFound:O,isLoadedAll:S,isPopular:R,searchTemplate:"icons"}},fetchDataCategory:async function(r){const n=function(o){const r=o.replace(/-/g," ").replace(/[/\\^$*+?.()|[\]{}]/g,""),n=new RegExp(`^${r}$`,"i"),c=e.i18n.localeProperties.iso,l=t.state.appInfo.packs.find((t=>n.test(t.name[c])));return l}(r.term),c=t.state.platform.apiCode,l=t.state.platform.title,d=t.state.filters.isAnimated;if(!n)return null;t.dispatch("setPack",n.code);const m={...r,page:1,platform:c,platformName:l,pack:n.code,isAnimated:d};if(f.injectIconsSEO(r,!0),o.fullPath.includes("--static"))t.dispatch("deleteHreflang");else{var h;const t={path:null===(h=o.matched[0])||void 0===h?void 0:h.path.split(":")[0],locales:e.i18n.locales.filter((t=>t.code!==e.i18n.locale)),routeParams:o.params,translations:n.name,isPack:!0};f.translateHreflang(t)}let y={isFound:!1},content={},_=!1;try{var C,E,A;y=await v(m);_=(null!==(C=null===(E=y.category)||void 0===E||null===(A=E.subcategory)||void 0===A?void 0:A.reduce(((t,e)=>{var o;return t+=null===(o=e.icons)||void 0===o?void 0:o.length}),0))&&void 0!==C?C:0)>=10,content=await f.injectIconsContent(m)}catch(t){console.error(t)}return{...y,...r,...content,isSubcategoryIcons:_,searchTemplate:"category"}},getNewIcons:async function(e){return await t.dispatch("latest",e)},getIcons:h,getIcon:async function(e){const{icon:o}=await t.dispatch("getIcon",{id:e,info:!0});return o},clearCache:async function(e){const o=t.state.auth.user.authToken;await Object(d.a)(o,e)},getIconsByDate:function(t){const e=m.f,o=m.g,r={};return t.forEach((t=>{const n=function(t){const r={date:"",code:""},n=new Date(t);switch(function(t){const e=864e5,o=Date.now(),r=new Date(Date.now()),n=new Date(t);return o-t<=e?"today":o-t<2*e?"yesterday":Math.ceil((o-t)/e)<=r.getDay()?"this_week":Math.ceil((o-t)/e)>r.getDay()&&Math.ceil((o-t)/e)<=r.getDay()+7?"last_week":r.getFullYear()===n.getFullYear()?"this_year":"other"}(t)){case"today":r.date="Today",r.code="today";break;case"yesterday":r.date="Yesterday",r.code="yesterday";break;case"this_week":r.date=e[n.getDay()],r.code=r.date.toLowerCase();break;case"last_week":r.date="Last "+e[n.getDay()],r.code="last_"+r.date.toLowerCase();break;case"this_year":r.date=o[n.getMonth()];break;default:r.date=`${o[n.getMonth()]} ${n.getFullYear()}`}return r}(1e3*t.timestamp);r[n.date]=r[n.date]||[],r[n.date].push(t)})),r},getCategory:v,getRelatedIcons:async function(e,o){if(e.id&&!e.isExternal){const r={platform:e.platform,pack:e.categoryApiCode,amount:o};return await t.dispatch("getRelatedIcons",r)}if(e.isExternal)return await t.dispatch("getRelatedExternalIcons",{pack:e.categoryApiCode})},isColorFilters:y,isPopularRequest:_}}},629:function(t,e,o){"use strict";o(621)},630:function(t,e,o){var r=o(4)((function(i){return i[1]}));r.push([t.i,".request-icon[data-v-c411141a]{font:var(--request-icon-font,var(--request-icon-font-weight,var(--font-normal)) var(--request-icon-font-size,var(--h4-font-size))/var(--request-icon-font-line-height,20px) var(--request-icon-font-family,var(--font-family-legacy)))}.request-icon img[data-v-c411141a]{width:24px;height:24px}.request-icon .title-wrap[data-v-c411141a]{display:flex;align-items:center}.request-icon .title[data-v-c411141a]{font-weight:var(--font-bold);font-size:var(--font-lg);line-height:24px;letter-spacing:-.005em;margin-left:8px}.request-icon .request-text[data-v-c411141a]{max-width:576px;margin:16px 0}",""]),r.locals={},t.exports=r},633:function(t,e,o){"use strict";o(623)},634:function(t,e,o){var r=o(4)((function(i){return i[1]}));r.push([t.i,'.app-page-section-title{display:flex;align-items:center;text-align:left;text-transform:none;letter-spacing:-.005em;white-space:nowrap;margin:20px 0 24px;font-weight:var(--font-bold)}.app-page-section-title:after{content:"";bottom:0;width:100%;height:1px;margin-left:24px;background:var(--c-transparent-black_200)}',""]),r.locals={},t.exports=r},635:function(t,e,o){"use strict";var r={name:"RequestIcon",components:{I8Button:o(13).b},props:{requestTextExtra:{type:String,default:""}},data(){var t;return{staticUrl:null!==(t="https://maxst.icons8.com")?t:""}},methods:{moveToRequestIcon(){this.$router.push("/icons/request-icon")}}},n=(o(629),o(3)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"request-icon"},[e("div",{staticClass:"title-wrap"},[e("img",{attrs:{src:`${t.staticUrl}/vue-static/icon/search.png`,alt:"magnifier"}}),t._v(" "),e("div",{staticClass:"title",domProps:{innerHTML:t._s(t.$t("REQUEST_ICONS.WEBAPP_REQUEST.TITLE"))}})]),t._v(" "),e("div",{staticClass:"request-text",domProps:{innerHTML:t._s(t.$t("REQUEST_ICONS.WEBAPP_REQUEST.TEXT"))}}),t._v(" "),e("I8Button",{attrs:{size:"large"},on:{click:t.moveToRequestIcon}},[t._v("\n    "+t._s(t.$t("REQUEST_ICONS.TITLE"))+"\n  ")])],1)}),[],!1,null,"c411141a",null);e.a=component.exports},637:function(t,e,o){"use strict";o(633);var r=o(3),component=Object(r.a)({},(function(){return(0,this._self._c)("h6",{staticClass:"app-page-section-title"},[this._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},824:function(t,e,o){var content=o(1139);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(5).default)("ca5311ca",content,!0,{sourceMap:!1})},825:function(t,e,o){var content=o(1141);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(5).default)("3eb451a8",content,!0,{sourceMap:!1})},826:function(t,e,o){var content=o(1143);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(5).default)("45123d5c",content,!0,{sourceMap:!1})}}]);
//# sourceMappingURL=_platform.769f3b9af0e10f1389b0.js.map