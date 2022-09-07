document.querySelector("body").addEventListener("keydown", (e)=> {
   let buttonsArray = document.querySelectorAll(".letter");
   let sound = "";
   buttonsArray.forEach(item=>{
      if (item.innerHTML === e.key) {
         sound = item.closest(".btn").querySelector(".letter-sign").innerHTML;
         let audio = new Audio("./sounds/"+sound +".wav");
         audio.play();
         item.closest(".btn").classList.add("playing");
         setTimeout(() => {
            item.closest(".btn").classList.remove("playing");
         }, 100);

      }
   });
});