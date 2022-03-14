let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__right");

burger.addEventListener ("click" , function () {
    burger.classList.toggle("header__burger--active");
    menu.classList.toggle("header__right--active");
    document.body.classList.toggle("hidden");
});