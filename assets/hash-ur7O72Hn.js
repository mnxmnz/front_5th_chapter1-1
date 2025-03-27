var r=Object.defineProperty;var a=(n,e,t)=>e in n?r(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var s=(n,e,t)=>a(n,typeof e!="symbol"?e+"":e,t);import{r as h,a as i,E as u,L as o,b as c,s as g,P as d,M as l}from"./eventHandlers-DXSdPZEg.js";class p{constructor(e){s(this,"containerElement",null);s(this,"routeMapping",{});s(this,"activeRoutePath",null);s(this,"protectedRoutes",["/profile"]);s(this,"guestOnlyRoutes",["/login"]);this.routeMapping=e,this.containerElement=document.getElementById("root")||document.body,h(),this._initializeEventListeners(),this.processRouteChange()}_initializeEventListeners(){window.addEventListener("DOMContentLoaded",()=>this.processRouteChange()),window.addEventListener("hashchange",()=>this.processRouteChange()),document.addEventListener("click",e=>this._handleNavLinkClick(e))}_handleNavLinkClick(e){e.target.tagName==="A"&&e.target.href.startsWith(window.location.origin)&&(e.preventDefault(),this.changeRoute(e.target.getAttribute("href")))}hasAccessPermission(e){const t=i.getIsLoggedIn();return this.protectedRoutes.includes(e)?t:!(this.guestOnlyRoutes.includes(e)&&t)}_redirectBasedOnAuthStatus(){i.getIsLoggedIn()?this.changeRoute("/"):this.changeRoute("/login")}_renderPageContent(e){const t=e();if(this.containerElement.innerHTML="",typeof t=="string"){this.containerElement.innerHTML=t;return}t.template?(this.containerElement.innerHTML=t.template,typeof t.init=="function"&&t.init()):console.error("Invalid component format")}_getPath(){const e=window.location.hash;return e?e.substring(1):"/"}processRouteChange(){const e=this._getPath();if(this.activeRoutePath=e,!this.hasAccessPermission(e)){this._redirectBasedOnAuthStatus();return}if(!this.routeMapping[e]){this._renderPageContent(this.routeMapping["/error"]);return}const t=this.routeMapping[e];this._renderPageContent(t)}changeRoute(e){this.activeRoutePath!==e&&(window.location.hash=e,this.processRouteChange())}}const f={"/":()=>o(l()),"/login":()=>c(),"/profile":()=>o(d()),"/error":()=>u()},m=new p(f);g(m);
