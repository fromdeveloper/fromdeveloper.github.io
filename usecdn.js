var cloudcdn=function(){'use strict';function a(a){return a.origin===location.origin}function b(a,b,c,d){return{title:a||"",content:b||"",status:c||0,timestamp:d||new Date}}function c(a,b){document.title=b.title,a.innerHTML=b.content}function d(a,b,c){var d=document.createDocumentFragment(),e=document.createElement("html");d.appendChild(e),e.innerHTML=c;var f=e.querySelector("title").textContent,g=e.querySelector(a),h=g?g.innerHTML:"";return{title:f,content:h}}function e(a,b,c,d){d?history.pushState(a||{},c,b):history.replaceState(a||{},c,b)}function f(){return{title:"Error",content:"<h1>Error</h1><p>Ooops. Something went wrong</p>",code:500,timestamp:new Date}}function g(a){requestAnimationFrame(function(){var b;b=a in document.anchors?document.anchors[a]:document.getElementById(b),b&&b.scrollIntoView(!0)})}function h(){}function i(a){return"/"+a.replace(/\/+/g,"/").replace(/^\/|\/$/g,"")}function j(a){return i(a.pathname)+a.search}return function(i,k){function l(a,b,d){e(null,a,b.title,d),s(b,a),c(A,b),q(b),d&&1<a.hash.length&&g(a.hash.slice(1))}function m(a,b){var c=u(a);if(c in D){var f=D[c];if(!0!==x(f))return void l(a,f,b)}e(null,a,a,b);var g=++y;fetch(a).then(function(a){return a.text().then(function(b){return{res:a,text:b}})}).finally(function(){z=!1}).then(function(b){var e=b.res,f=b.text,h=d(i,e,f);D[c]=h,h.status=e.status,h.timestamp=new Date;g!=y||l(a,h,!1)}).catch(function(b){if(g==y){var c=v(b);l(a,c,!1)}throw b}).catch(t),z=!0,r(a)}function n(a){if("A"===a.target.nodeName){var b=new URL(a.target.href,document.location);w(b,a.target)&&(a.preventDefault(),window.scrollTo(0,0),m(b,!z))}}function o(a){m(new URL(document.location),!1),requestAnimationFrame(function(){window.scrollTo(0,a.state.scroll||0)})}function p(){E||(E=setTimeout(function(){e({scroll:window.scrollY},document.location,document.title,!1),E=null},100))}if("function"==typeof window.history.pushState){k=k||{};var q=k.onReady||h,r=k.onLoading||h,s=k.onMounting||h,t=k.onError||console.error.bind(console),u=k.keyFromUrl||j,v=k.fromError||f,w=k.shouldServe||a,x=k.shouldReload||h,y=0,z=!1,A=document.querySelector(i);if(!A)throw new Error("Element \""+i+"\" not found");var B=new URL(document.location),C=b(document.title,A.innerHTML,200),D={};D[u(B)]=C,e({scroll:window.scrollY},B,C.title,!1);var E;document.body.addEventListener("click",n),window.addEventListener("popstate",o),window.addEventListener("scroll",p)}}}();

var progress=document.querySelector('rsp-progress');progress.setAttribute('role','progressbar');progress.setAttribute('aria-controls','app-root');progress.setAttribute('aria-valuemin',0);progress.setAttribute('aria-valuemax',100);progress.setAttribute('aria-hidden','true');
var newProgress=function(){progress.setAttribute('aria-hidden','false');progress.setAttribute('class','component loading');progress.innerHTML='<div class="bundle"><span class="source"></span></div><div class="module"><span class="source"></span></div>'}
var delProgress=function(){progress.setAttribute('aria-hidden','true');progress.removeAttribute('class');progress.innerHTML=''}
var updateProgress=function(percentComplete){progress.setAttribute('aria-valuenow',percentComplete)}

cloudcdn('#app-root',{
    onLoading(){
      if(timeout){clearTimeout(timeout);timeout=0};
      updateProgress(0);
    },
    onReady(){
      timeout=setTimeout(()=>{updateProgress(0)},0);
      timeout=setTimeout(()=>{updateProgress(25)},2000);
      timeout=setTimeout(()=>{updateProgress(50)},3000);
      timeout=setTimeout(()=>{updateProgress(75)},4000);
      timeout=setTimeout(()=>{progress.classList.remove('loading');updateProgress(100);},5000);
      timeout=setTimeout(()=>{delProgress();},7000);
    },
    shouldServe:shouldServeDefault
  });
