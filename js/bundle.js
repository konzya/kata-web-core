!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(2)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1);var r,o,i,a=!1,l=window.matchMedia("(max-width: 767px)"),u={slidesPerView:"auto",loop:!0,spaceBetween:16,direction:"horizontal",pagination:{el:".swiper-pagination"}};function c(e){e.matches&&!a?(a=!0,r=new Swiper(".brands",u),o=new Swiper(".repair",u),i=new Swiper(".table",u)):!e.matches&&a&&(r.destroy(),o.destroy(),i.destroy(),a=!1)}function f(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){a=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw o}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=document.querySelectorAll(".read-more"),y=document.querySelectorAll(".expandable");function m(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){a=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw o}}}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v,h=document.documentElement,b=document.querySelectorAll(".modal"),w=0;function g(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){a=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw o}}}}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var S=window.matchMedia("(min-width: 768px) and (max-width: 1015px), (min-width: 1200px) and (max-width: 1439px)"),A=window.matchMedia("(min-width: 1016px) and (max-width: 1199px), (min-width: 1440px)"),j=document.querySelectorAll("ul.swiper-wrapper");function L(e,t){!function(e){for(var t=Number(e.dataset.needDel);t;)e.lastElementChild.remove(),t--}(e);var n=e.children,r=Math.ceil(n.length/t)*t-n.length;for(e.dataset.needDel=r;r;){var o=n[0].cloneNode(!1);e.append(o),r--}}function O(e,t){if(e.matches){var n,r=g(j);try{for(r.s();!(n=r.n()).done;){L(n.value,t)}}catch(e){r.e(e)}finally{r.f()}}e.addEventListener("change",(function(e){if(e.matches){var n,r=g(j);try{for(r.s();!(n=r.n()).done;){L(n.value,t)}}catch(e){r.e(e)}finally{r.f()}}}))}c(l),l.addEventListener("change",c),function(){for(var e=function(e){var t=s[e],n=y[e],r=t.textContent,o=n.style.maxHeight,i=new ResizeObserver((function(e){var t,n=f(e);try{for(n.s();!(t=n.n()).done;){var r=t.value,o=r.target.scrollHeight;r.target.style.maxHeight=o+"px"}}catch(e){n.e(e)}finally{n.f()}}));t.addEventListener("click",(function(){t.classList.toggle("read-more--open"),t.classList.contains("read-more--open")?i.observe(n):(i.unobserve(n),n.style.maxHeight=o),t.textContent=t.textContent===r?"Скрыть":r}))},t=0;t<s.length;t++)e(t)}(),function(){var e,t=m(b);try{var n=function(){var t=e.value,n=document.querySelectorAll(t.dataset.button),r=t.firstElementChild,o=r.querySelectorAll(".button--type--close");function i(){t.classList.remove("modal--open"),w<2&&(h.classList.remove("page--freeze"),window.scrollTo(0,v),h.style.top="",h.style.marginRight=""),w--}".button--type--burger"===t.dataset.button&&window.matchMedia("(min-width: 1200px)").addEventListener("change",(function(e){e.matches&&t.classList.contains("modal--open")&&i()}));var a,l=m(n);try{for(l.s();!(a=l.n()).done;){a.value.addEventListener("click",(function(){var e=window.innerWidth-h.clientWidth;e&&(h.style.marginRight=e+"px"),v=window.pageYOffset,h.style.top=-v+"px",t.classList.add("modal--open"),h.classList.add("page--freeze"),w++}))}}catch(e){l.e(e)}finally{l.f()}var u,c=m(o);try{for(c.s();!(u=c.n()).done;){u.value.addEventListener("click",i)}}catch(e){c.e(e)}finally{c.f()}t.addEventListener("click",i),r.addEventListener("click",(function(e){e.stopPropagation()}))};for(t.s();!(e=t.n()).done;)n()}catch(e){t.e(e)}finally{t.f()}}(),O(S,3),O(A,4)}]);