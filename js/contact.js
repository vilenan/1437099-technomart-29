const contactLink = document.querySelector(".contact-us");
const contactPopup = document.querySelector(".modal-login");
const contactClose = contactPopup.querySelector(".modal-close");
const mapLink = document.querySelector(".map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");
contactLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactPopup.classList.add("modal-show");
});
contactClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactPopup.classList.remove("modal-show");
});

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});
mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});
window.addEventListener("keydown", function(evt){
   if (evt.keyCode === 27){
       if(contactPopup.classList.contains("modal-show")){
          evt.preventDefault();
          contactPopup.classList.remove("modal-show");
       }
   }
});
window.addEventListener("keydown", function(evt){
   if (evt.keyCode === 27){
       if(mapPopup.classList.contains("modal-show")){
          evt.preventDefault();
          mapPopup.classList.remove("modal-show");
       }
   }
});