const open = document.getElementById("open-modal");
open.addEventListener("click", function() {
    const overlay = document.getElementById("overlay");
    overlay.style.display= "block";
});

const contactInfo = document.getElementById("close-modal");
contactInfo.addEventListener("click", function(){
    overlay.style.display= "none";
})