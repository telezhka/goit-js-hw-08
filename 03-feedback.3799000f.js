function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o);var r=o("8zd4h");const l=document.querySelector(".feedback-form"),i=l.querySelector('input[name="email"]'),d=l.querySelector('textarea[name="message"]');function s(){const e={email:i.value,message:d.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}i.addEventListener("input",s),d.addEventListener("input",s),document.addEventListener("DOMContentLoaded",(()=>{const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);i.value=t.email,d.value=t.message}})),l.addEventListener("submit",e(r)((function(e){e.preventDefault();const t={email:i.value,message:d.value};console.log(t),localStorage.removeItem("feedback-form-state"),i.value="",d.value=""}),500));
//# sourceMappingURL=03-feedback.3799000f.js.map
