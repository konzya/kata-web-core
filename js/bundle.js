!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(2)},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(1);var r,o,i,a=!1,l=window.matchMedia("(max-width: 767px)"),u={slidesPerView:"auto",loop:!0,spaceBetween:16,direction:"horizontal",pagination:{el:".swiper-pagination"}};function c(t){t.matches&&!a?(a=!0,r=new Swiper(".brands",u),o=new Swiper(".repair",u),i=new Swiper(".table",u)):!t.matches&&a&&(r.destroy(),o.destroy(),i.destroy(),a=!1)}function f(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){a=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw o}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var s=document.querySelectorAll(".read-more"),y=document.querySelectorAll(".expandable");function p(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){a=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw o}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var v,h=document.documentElement,b=document.querySelectorAll(".modal"),w=0;function g(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return S(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){a=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw o}}}}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var x=window.matchMedia("(min-width: 768px) and (max-width: 1015px), (min-width: 1200px) and (max-width: 1439px)"),A=window.matchMedia("(min-width: 1016px) and (max-width: 1199px), (min-width: 1440px)"),L=document.querySelectorAll("ul.swiper-wrapper");function j(t,e){!function(t){for(var e=Number(t.dataset.needDel);e;)t.lastElementChild.remove(),e--}(t);var n=t.children,r=Math.ceil(n.length/e)*e-n.length;for(t.dataset.needDel=r;r;){var o=n[0].cloneNode(!1);t.append(o),r--}}function E(t,e){if(t.matches){var n,r=g(L);try{for(r.s();!(n=r.n()).done;){j(n.value,e)}}catch(t){r.e(t)}finally{r.f()}}t.addEventListener("change",(function(t){if(t.matches){var n,r=g(L);try{for(r.s();!(n=r.n()).done;){j(n.value,e)}}catch(t){r.e(t)}finally{r.f()}}}))}c(l),l.addEventListener("change",c),function(){for(var t=function(t){var e=s[t],n=y[t],r=e.textContent,o=n.style.maxHeight,i=new ResizeObserver((function(t){var e,n=f(t);try{for(n.s();!(e=n.n()).done;){var r=e.value,o=r.target.scrollHeight;r.target.style.maxHeight=o+"px"}}catch(t){n.e(t)}finally{n.f()}}));e.addEventListener("click",(function(){e.classList.toggle("read-more--open"),e.classList.contains("read-more--open")?i.observe(n):(i.unobserve(n),n.style.maxHeight=o),e.textContent=e.textContent===r?"Скрыть":r}))},e=0;e<s.length;e++)t(e)}(),function(){var t,e=p(b);try{var n=function(){var e=t.value,n=document.querySelectorAll(e.dataset.button),r=e.firstElementChild,o=r.querySelectorAll(".button--type--close");function i(){e.classList.remove("modal--open"),w<2&&(h.classList.remove("page--freeze"),window.scrollTo(0,v),h.style.top="",h.style.marginRight=""),w--}".button--type--burger"===e.dataset.button&&window.matchMedia("(min-width: 1200px)").addEventListener("change",(function(t){t.matches&&e.classList.contains("modal--open")&&i()}));var a,l=p(n);try{for(l.s();!(a=l.n()).done;){a.value.addEventListener("click",(function(){var t=window.innerWidth-h.clientWidth;t&&(h.style.marginRight=t+"px"),v=window.pageYOffset,h.style.top=-v+"px",e.classList.add("modal--open"),h.classList.add("page--freeze"),w++;var n=r.querySelector("input:nth-of-type(1)");n&&setTimeout((function(){return n.focus()}),400)}))}}catch(t){l.e(t)}finally{l.f()}var u,c=p(o);try{for(c.s();!(u=c.n()).done;){u.value.addEventListener("click",i)}}catch(t){c.e(t)}finally{c.f()}e.addEventListener("click",i),document.addEventListener("keydown",(function(t){if("Escape"===t.key&&e.classList.contains("modal--open")){if(".button--type--burger"===e.dataset.button&&w>=2)return;i()}})),r.addEventListener("click",(function(t){t.stopPropagation()}))};for(e.s();!(t=e.n()).done;)n()}catch(t){e.e(t)}finally{e.f()}}(),E(x,3),E(A,4)}]);
//# sourceMappingURL=bundle.js.map