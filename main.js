(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{n:()=>i,q:()=>s,F8:()=>a});class t{constructor(e,t,n=[],o=[]){this.name=e,this.id=t,this.list=n,this.date=o}sayName(){return`Hi ${this.name}`}showInfo(){return""}}const n=document.querySelector(".ls-todos"),o=()=>{const e=document.createElement("input"),n=document.createElement("br"),o=document.createElement("button"),c=document.querySelector(".main");c.appendChild(n),c.appendChild(e),e.setAttribute("type","text"),e.setAttribute("class","bookInput"),c.appendChild(o),o.innerHTML="Submit",o.setAttribute("id","projectsubmit"),o.addEventListener("click",(function(){const n=document.createElement("div");n.setAttribute("class","projecttitles"),n.innerHTML=e.value;const l=new t(`${e.value}`,`${s.length}`);s.push(l),localStorage.setItem("projects",JSON.stringify(s)),console.log(l.id),console.log(l),console.log(s),console.log(l.name),e.style.display="none",o.style.display="none",c.appendChild(n),n.addEventListener("click",(function(){var e=document.getElementsByClassName("active");e.length>0&&(e[0].className=e[0].className.replace(" active","")),i.innerHTML=this.innerHTML,this.className+=" active",console.log("here")}))}))};let c=JSON.parse(localStorage.getItem("projects"));const l=document.querySelector("#todoadd");let s=[];const r=document.querySelector("#projectadd");c&&(s=c),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".main");null!==localStorage.getItem("projects")&&s.forEach((t=>{const n=document.createElement("div");n.setAttribute("class","projecttitles"),n.innerHTML=t.name,e.appendChild(n),console.log(t)}))})()),r.addEventListener("click",(function(){o()})),l.addEventListener("click",(function(){!function(){const e=document.createElement("div"),t=document.querySelector(".ls-todos"),n=document.querySelector(".task-input").value,o=document.querySelector("#start").value,c=document.querySelector("#priority").value;t.prepend(e),e.textContent=n+o+c,s.forEach((e=>{e.name.includes(i.textContent)&&(e.list.push(n),e.date.push(o),localStorage.setItem("projects",JSON.stringify(s)),console.log(s))}))}()}));const a=document.querySelectorAll(".projecttitles"),i=document.querySelector("#project-name");a.forEach((e=>{e.addEventListener("click",(function(){console.log(e);var t=document.getElementsByClassName("active");t.length>0&&(t[0].className=t[0].className.replace(" active","")),i.innerHTML=this.innerHTML,this.className+=" active";for(let e=0;e<s.length;e++)s[e].name.includes(this.textContent)&&(n.innerHTML="",s[e].list.forEach((e=>{console.log(e);const t=document.createElement("div");t.innerHTML=e,n.prepend(t)})),console.log(n.innerHTML));console.log(this.textContent)}))})),console.log(s)})();