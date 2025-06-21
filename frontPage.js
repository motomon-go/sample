document.addEventListener("DOMContentLoaded", function () {
/* ここから記述します。*/
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const headerHeight =document.querySelector("header").offsetHeight;
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        const targetPosition = targetElement.offsetTop - headerHeight;

        if (targetElement) {
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
            });
        }
    })
}
);

const pageTopBtn = document.getElementById("js-scrollTop");

window.addEventListener("scroll" , function () {
    let scrollPosition = window.scrollY;

    if (scrollPosition > 500) {
        pageTopBtn.style.opacity = "1";
    } else {
        pageTopBtn.style.opacity = "0";
    }

const contents = document.querySelectorAll(".js-fadeIn");
contents.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;

    if (elementTop < windowHeight && elementBottom >= 0) {
        el.classList.add("is-scrollIn");
    }
});

} );

pageTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});





});
