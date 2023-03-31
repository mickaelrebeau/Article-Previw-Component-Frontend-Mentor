const share = document.querySelectorAll(".toggle");
let author = document.querySelector(".author");
let social = document.querySelector(".social");

console.log(share, author, social);

share.forEach(element => element.addEventListener("click", () => {
    author.classList.toggle("visible");
    social.classList.toggle("visible");
    console.log("Coucou");
}));
