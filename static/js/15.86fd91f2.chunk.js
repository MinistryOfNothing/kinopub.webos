(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[15],{1125:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return b}));var r=n(2),i=n(32),o=n(1004),c=n.n(o),a=n(197),u=n.n(a),s=n(264),f=n(893),l=n(253),h=n(927),v=n(919),p=n(6),d=n(3),g={popular:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435",fresh:"\u0421\u0432\u0435\u0436\u0438\u0435",hot:"\u0413\u043e\u0440\u044f\u0447\u0438\u0435"},b=function(){var t,e=Object(i.j)().releaseType,n=void 0===e?"popular":e,o=Object(v.a)("items".concat(c()(n)),["1"]),a=Object(r.useMemo)((function(){var t,e,n,r;return null===(t=o.data)||void 0===t||null===(e=t.pages)||void 0===e||null===(n=e[0])||void 0===n||null===(r=n.pagination)||void 0===r?void 0:r.total_items}),[null===(t=o.data)||void 0===t?void 0:t.pages]),b=function(t){return t?g[t]:g.fresh}(n),j=a?"".concat(b," (").concat(a,")"):b;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f.a,{title:b}),Object(d.jsx)(h.a,{title:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.a,{children:j}),Object(d.jsx)("div",{className:"flex",children:u()(g,(function(t,e){return Object(d.jsx)(s.a,{className:"mr-2",replace:!0,active:n===e,href:Object(p.b)(p.a.Releases,{releaseType:e}),children:t},e)}))})]}),queryResult:o})]})}},907:function(t,e,n){var r=n(388),i=n(924),o=n(379),c=n(60);t.exports=function(t,e){return(c(t)?r:i)(t,o(e,3))}},916:function(t,e,n){var r=n(379),i=n(934);t.exports=function(t,e){return t&&t.length?i(t,r(e,2)):[]}},918:function(t,e,n){"use strict";var r=n(58),i=n(2),o=n(907),c=n.n(o),a=n(925),u=n.n(a),s=n(916),f=n.n(s);e.a=function(t,e){var n=t.data,o=t.isLoading,a=t.isFetchingNextPage,s=t.fetchNextPage,l=Object(i.useState)(!1),h=Object(r.a)(l,2),v=h[0],p=h[1],d=Object(i.useMemo)((function(){return f()(c()(u()(null===n||void 0===n?void 0:n.pages,(function(t){return t.items}))),"id")}),[null===n||void 0===n?void 0:n.pages]),g=Object(i.useMemo)((function(){return e?e(d):d}),[d,e]),b=Object(i.useCallback)((function(){v&&(s(),p(!1))}),[v,s]);return Object(i.useEffect)((function(){p(!0)}),[d.length]),[g,o||a,b]}},919:function(t,e,n){"use strict";var r=n(11),i=n(107),o=n(2),c=n(979),a=n(255);e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,u=Object(o.useMemo)((function(){return new a.c}),[]),s=Object(c.a)([t].concat(Object(i.a)(e)),(function(n){var r=n.pageParam;return u[t].apply(u,Object(i.a)(e).concat([r]))}),Object(r.a)({getNextPageParam:function(t){var e;return(null===t||void 0===t||null===(e=t.pagination)||void 0===e?void 0:e.current)+1||1}},n));return s}},922:function(t,e){t.exports=function(t,e,n,r){for(var i=t.length,o=n+(r?1:-1);r?o--:++o<i;)if(e(t[o],o,t))return o;return-1}},924:function(t,e,n){var r=n(386);t.exports=function(t,e){var n=[];return r(t,(function(t,r,i){e(t,r,i)&&n.push(t)})),n}},925:function(t,e,n){var r=n(932),i=n(197);t.exports=function(t,e){return r(i(t,e),1)}},927:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(58),i=n(904),o=n(918),c=n(3),a=function(t){var e=t.title,n=t.showResult,a=void 0===n||n,u=t.queryResult,s=t.processItems,f=Object(o.a)(u,s),l=Object(r.a)(f,3),h=l[0],v=l[1],p=l[2];return Object(c.jsx)(i.a,{title:e,items:h,loading:a&&v,onScrollToEnd:p})}},932:function(t,e,n){var r=n(393),i=n(933);t.exports=function t(e,n,o,c,a){var u=-1,s=e.length;for(o||(o=i),a||(a=[]);++u<s;){var f=e[u];n>0&&o(f)?n>1?t(f,n-1,o,c,a):r(a,f):c||(a[a.length]=f)}return a}},933:function(t,e,n){var r=n(156),i=n(263),o=n(60),c=r?r.isConcatSpreadable:void 0;t.exports=function(t){return o(t)||i(t)||!!(c&&t&&t[c])}},934:function(t,e,n){var r=n(391),i=n(935),o=n(939),c=n(392),a=n(940),u=n(383);t.exports=function(t,e,n){var s=-1,f=i,l=t.length,h=!0,v=[],p=v;if(n)h=!1,f=o;else if(l>=200){var d=e?null:a(t);if(d)return u(d);h=!1,f=c,p=new r}else p=e?[]:v;t:for(;++s<l;){var g=t[s],b=e?e(g):g;if(g=n||0!==g?g:0,h&&b===b){for(var j=p.length;j--;)if(p[j]===b)continue t;e&&p.push(b),v.push(g)}else f(p,b,n)||(p!==v&&p.push(b),v.push(g))}return v}},935:function(t,e,n){var r=n(936);t.exports=function(t,e){return!!(null==t?0:t.length)&&r(t,e,0)>-1}},936:function(t,e,n){var r=n(922),i=n(937),o=n(938);t.exports=function(t,e,n){return e===e?o(t,e,n):r(t,i,n)}},937:function(t,e){t.exports=function(t){return t!==t}},938:function(t,e){t.exports=function(t,e,n){for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}},939:function(t,e){t.exports=function(t,e,n){for(var r=-1,i=null==t?0:t.length;++r<i;)if(n(e,t[r]))return!0;return!1}},940:function(t,e,n){var r=n(394),i=n(941),o=n(383),c=r&&1/o(new r([,-0]))[1]==1/0?function(t){return new r(t)}:i;t.exports=c},941:function(t,e){t.exports=function(){}},979:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(7),i=n(31),o=n(942),c=n(269),a=function(t){function e(e,n){return t.call(this,e,n)||this}Object(i.a)(e,t);var n=e.prototype;return n.bindMethods=function(){t.prototype.bindMethods.call(this),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)},n.setOptions=function(e){t.prototype.setOptions.call(this,Object(r.a)({},e,{behavior:Object(c.c)()}))},n.getOptimisticResult=function(e){return e.behavior=Object(c.c)(),t.prototype.getOptimisticResult.call(this,e)},n.fetchNextPage=function(t){return this.fetch({cancelRefetch:!0,throwOnError:null==t?void 0:t.throwOnError,meta:{fetchMore:{direction:"forward",pageParam:null==t?void 0:t.pageParam}}})},n.fetchPreviousPage=function(t){return this.fetch({cancelRefetch:!0,throwOnError:null==t?void 0:t.throwOnError,meta:{fetchMore:{direction:"backward",pageParam:null==t?void 0:t.pageParam}}})},n.createResult=function(e,n){var i,o,a,u,s,f,l=e.state,h=t.prototype.createResult.call(this,e,n);return Object(r.a)({},h,{fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:Object(c.a)(n,null==(i=l.data)?void 0:i.pages),hasPreviousPage:Object(c.b)(n,null==(o=l.data)?void 0:o.pages),isFetchingNextPage:l.isFetching&&"forward"===(null==(a=l.fetchMeta)||null==(u=a.fetchMore)?void 0:u.direction),isFetchingPreviousPage:l.isFetching&&"backward"===(null==(s=l.fetchMeta)||null==(f=s.fetchMore)?void 0:f.direction)})},e}(o.a),u=n(5),s=n(902);function f(t,e,n){var r=Object(u.l)(t,e,n);return Object(s.a)(r,a)}}}]);
//# sourceMappingURL=15.86fd91f2.chunk.js.map