(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const i=document.querySelector("#quote-btn"),u=document.querySelector("#category-input");async function l(){const r=document.querySelector(".quote"),o=document.querySelector("#category-input"),n=o==null?void 0:o.value,e=await(await fetch(`/api/quote?cat=${n}`)).json();e.quote&&r?(r.style.color="initial",r.innerText=e.quote):e.message&&r&&(r.style.color="red",r.innerText=e.message)}i==null||i.addEventListener("click",l);u==null||u.addEventListener("keydown",r=>{r.key==="Enter"&&l()});
