let show = true

const MenuSection = document.querySelector(".menuSection")
const MenuToggle = document.querySelector(".menuToggle")

MenuToggle.addEventListener("click",()=>{
    document.body.style.overflow = (show == true) ? "hidden" : "initial"
    
    MenuSection.classList.toggle("on", show)
    show = !show
})