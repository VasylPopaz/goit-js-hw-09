!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var i=t("h6c0i"),r=document.querySelector(".form");function u(e,n){var o=Math.random()>.3;new Promise((function(t,i){setTimeout((function(){o?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):i("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)})).then((function(o){return i.Notify.success(o),{position:e,delay:n}})).catch((function(o){return i.Notify.failure(o),{position:e,delay:n}}))}r.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(r.delay.value),o=Number(r.step.value),t=1;t<=r.amount.value;t+=1)u(t,n),n+=o}))}();
//# sourceMappingURL=03-promises.3f33af38.js.map
