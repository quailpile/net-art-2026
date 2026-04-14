let container = document.querySelector("#container");
let addButton = document.querySelector("#addBtn");
let removeButton = document.querySelector("#removeBtn");
let planet = document.querySelector("#planet");

addButton.addEventListener("click", () => {
    if (!document.querySelector("#dynamicImage")) {
        let img = document.createElement("img");
        img.src = "https://web.archive.org/web/20000914012812/http://www.geocities.com:80/SunsetStrip/Venue/4244/earthsmall.gif";
        img.id = "dynamicImage";

        planet.appendChild(img);
    }
});

removeButton.addEventListener("click", () => {
    let img = document.querySelector("#dynamicImage");
    if (img) {
        img.remove();
    }
});

