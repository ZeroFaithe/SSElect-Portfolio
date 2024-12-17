const animation = document.querySelector(".startAni");
animation.addEventListener("animationend", () => {
    animation.style.display = "none";
});