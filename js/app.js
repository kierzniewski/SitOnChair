document.addEventListener('DOMContentLoaded',function(){
    //boxy
    let boxLeft = document.querySelector(".section-chair-img1");
    let boxRight = document.querySelector(".section-chair-img2");

    boxLeft.addEventListener("mouseover", (e) => {
        boxLeft.firstElementChild.style.display = "none";
    });
    boxLeft.addEventListener("mouseleave", (e)=> {
        boxLeft.firstElementChild.style.display = "block";
    });
    boxRight.addEventListener("mouseover", (e) => {
        boxRight.firstElementChild.style.display = "none";
    });
    boxRight.addEventListener("mouseleave", (e)=> {
        boxRight.firstElementChild.style.display = "block";
    });

    //slider

    const buttonPrev = document.querySelector(".section-chair-box1");
    const buttonNext = document.querySelector(".section-chair-box4");
    const sliders = document.querySelectorAll(".section-chair-box2-slider li");
    let currentIndex = 0;
    for (let i = 0; i<sliders.length; i++){
        if (sliders[currentIndex]){
            sliders[currentIndex].classList.add("visible");
        }
    }
    console.log(sliders)
    buttonPrev.addEventListener("click", (e) =>{
        sliders[currentIndex].classList.remove("visible");
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = sliders.length - 1;
        }
        sliders[currentIndex].classList.add("visible");
    })
    buttonNext.addEventListener("click", (e)=>{
        sliders[currentIndex].classList.remove("visible");
        currentIndex++;
        if (currentIndex >= sliders.length) {
            currentIndex = 0;
        }
        sliders[currentIndex].classList.add("visible");
    })
})