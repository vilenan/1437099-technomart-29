 
const linkmap=document.querySelector(".map");
      const popup=document.querySelector(".modal-login");
//      const popup2=document.querySelector(".modal-map");
      const close=document.querySelector(".modal-close"); 
        
       link.addEventListener("click", function(evt){
           evt.preventDefault();
           popup.classList.add("modal-show");
       }); 
        
//       linkmap.addEventListener("click", function(evt){
//          evt.preventDefault();
//          popup2.classList.add("modal-show");
//      });
        
       
       close.addEventListener("click", function(evt){
           evt.preventDefault();
           popup.classList.remove("modal-show");
       });
        
    const link = document.querySelector(".contact-us");
const popup = document.querySelector(".modal-login");
const close = popup.querySelector(".modal-close");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});
