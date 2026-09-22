const slides = document.querySelectorAll(".slide");


const lightBox = document.getElementById("lightBox");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const close = document.getElementById("close");
const largeImage = document.getElementById("largeImage");


let currentIndex =0;

slides.forEach((slide, index)=>{

    slide.addEventListener("click",()=>{

        currentIndex = index;

        largeImage.src = slides[currentIndex].src;

        lightBox.style.display = "flex";
    })
})

prevBtn.addEventListener("click",()=>{
    currentIndex--;
    if(currentIndex<0){
        currentIndex =4;
    }
    largeImage.src = slides[currentIndex].src;
})

nextBtn.addEventListener("click", ()=>{
    currentIndex++;
    if(currentIndex>=slides.length){
        currentIndex = 0;
    }

    largeImage.src = slides[currentIndex].src;
})

close.addEventListener("click",()=>{
    lightBox.style.display = "none";
})


