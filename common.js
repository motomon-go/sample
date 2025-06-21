document.addEventListener("DOMContentLoaded", function () {
	/* ここから記述します。*/
let nav = document.querySelector("header");
let btn = document.querySelector(".header__toggleBtn");
let mask = document.querySelector(".header__mask");

btn.addEventListener("click", function () {
	if (!nav.classList.contains("js-open")
){nav.classList.add("js-open");
}else{
	nav.classList.remove("js-open");
}
});

if (!mask) {
	return false;
}

mask.addEventListener("click", function (){
	nav.classList.remove("js-open");
});



});
