!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var o=r("eaxEB"),l=document.querySelector(".feedback-form"),i=l.querySelector('input[name="email"]'),u=l.querySelector('textarea[name="message"]');function d(){var e={email:i.value,message:u.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}i.addEventListener("input",d),u.addEventListener("input",d),document.addEventListener("DOMContentLoaded",(function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e);i.value=t.email,u.value=t.message}})),l.addEventListener("submit",e(o)((function(e){e.preventDefault();var t={email:i.value,message:u.value};console.log(t),localStorage.removeItem("feedback-form-state"),i.value="",u.value=""}),500))}();
//# sourceMappingURL=03-feedback.1b430e07.js.map
