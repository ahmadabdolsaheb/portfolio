"use strict";var precacheConfig=[["/index.html","943a9948720136e3b0f72fe59de78465"],["/static/css/main.f7cb095c.css","f804250d580d2d09b1947fe3e0679030"],["/static/js/main.ec7bd386.js","e0c8017663cae47dc593a9cf0b2beae1"],["/static/media/1 copy.ea3f60bc.svg","ea3f60bc5327b6f13c9af4ec9a00f21d"],["/static/media/1.ea3f60bc.svg","ea3f60bc5327b6f13c9af4ec9a00f21d"],["/static/media/2 copy.7983e2e4.svg","7983e2e42bf459ca6e5bf61585fc4e00"],["/static/media/2.7983e2e4.svg","7983e2e42bf459ca6e5bf61585fc4e00"],["/static/media/3 copy.3b95a27f.svg","3b95a27f815b85c7e4212343f1eedb15"],["/static/media/3.3b95a27f.svg","3b95a27f815b85c7e4212343f1eedb15"],["/static/media/4 copy.826e21c4.svg","826e21c4f5dc8fe3c2fa206dc639ff3d"],["/static/media/4.826e21c4.svg","826e21c4f5dc8fe3c2fa206dc639ff3d"],["/static/media/CV.42e47b6d.pdf","42e47b6d41805ee63560a226d4c690ff"],["/static/media/headshot-orig.c1168f5c.PNG","c1168f5ce1cf2aef7be5f6174f5c0394"],["/static/media/headshot.41c3da01.PNG","41c3da018b849822aea949ee8ebf7857"],["/static/media/headshot.7594072e.xcf","7594072e7689cba772b3014714cbe6e4"],["/static/media/logos.7c22c397.svg","7c22c39722fd60f9ec9f50a50d4230a5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});