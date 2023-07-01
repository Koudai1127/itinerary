const width = screen.width;
const video = document.querySelector("video");
video.style.width = width + "px";

//videoタグを一時的に消してメニューを反応させる
var see = "";

icon.addEventListener("click", () => {
    if (count % 2 != 0) {
        see = "hidden";
    } else {
        see = "visible";
    }
    video.style.visibility = see
});

//buttonを動画終了後に表示する
const buttons = document.querySelectorAll(".buttons button");

function fadein(button) {
    button.animate({
        opacity: [0, 1],
        translate: ["0 50px", 0],
    }, {
        dulation: 3000,
        easing: "ease-out",
        fill: "forwards"
    });
};

for (let i = 0; i < buttons.length; i++) {
    setTimeout(fadein(buttons[i]), 1000 + 500 * i);
};