!function(){var e=document.querySelector(".feedback-form"),a=e.querySelector('input[name="email"]'),t=e.querySelector('textarea[name="message"]');function n(){var e={email:a.value,message:t.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}a.addEventListener("input",n),t.addEventListener("input",n),document.addEventListener("DOMContentLoaded",(function(){var e=localStorage.getItem("feedback-form-state");if(e){var n=JSON.parse(e);a.value=n.email,t.value=n.message}})),e.addEventListener("submit",(function(e){e.preventDefault();var n={email:a.value,message:t.value};console.log(n),a.value="",t.value=""}))}();
//# sourceMappingURL=03-feedback.58a95310.js.map
