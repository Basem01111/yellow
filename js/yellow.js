/*Start Header*/
//Toggle
//Element
let ul = document.querySelector("header ul"),
    toggle = document.querySelector("header .toggle"),
    links = document.querySelectorAll("header ul li a"),
    btnClose = document.querySelector("header .close");

//Click Toggle
toggle.onclick = function () {
    // Open Ul
    ul.classList.add("open");
    // Remove toggle
    this.style.display = "none";
    // Add Close
    btnClose.style.display = "block";
};

// Click Close
btnClose.onclick = function () {
    removeClose();
};

//Click Link
links.forEach(
    (link) =>
        (link.onclick = function () {
            removeClose();
        })
);

//remove Close
function removeClose() {
    ul.classList.remove("open");
    // Remove close
    btnClose.style.display = "none";
    // Add toggle
    toggle.style.display = "block";
}
/*End Header*/

/* Start Button Up*/
// Element
let btn = document.querySelector(".btn-up"),
    sLandin = document.querySelector(".landing");

// Scroll
window.onscroll = function () {
    if (window.scrollY >= sLandin.scrollHeight) {
        btn.style.bottom = "20px";
    } else {
        btn.style.bottom = "-40px";
    }
};
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
/* End Button Up*/

/* Start Portfolio */
//Element
let boxes = document.querySelectorAll(".portfolio .img-container .box"),
    lists = document.querySelectorAll(".portfolio .lists li"),
    musics = document.querySelectorAll(".portfolio .img-container .box .music");
console.log(lists);
//Click Lists
lists.forEach(
    (list) =>
        (list.onclick = function () {
            //remove active
            lists.forEach((list) => list.classList.remove("active"));
            //Add Active
            this.classList.add("active");
            //remove boxes
            boxes.forEach((box) => (box.style.display = "none"));
            //add boxes
            document
                .querySelectorAll(this.getAttribute("data-cat"))
                .forEach((box) => (box.style.display = "block"));
        })
);

//play music
musics.forEach(
    (music) =>
        (music.onplay = function () {
            //Remove Active
            boxes.forEach((box) => box.classList.remove("active"));
            //Add Active
            this.parentElement.classList.add("active");
            //pause music
            musics.forEach((music) =>
                !music.parentElement.classList.contains("active")
                    ? music.pause()
                    : ""
            );
        })
);
/* End Portfolio */
