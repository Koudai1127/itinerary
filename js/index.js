//ローディング画面
const loadimg = document.querySelector(".loading img");
const duration = 1000;

loadimg.animate({
    opacity: [1, 0]
}, {
    duration: 800,
    direction: "alternate",
    easing: "ease",
    iterations: Infinity
});

window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');

    loading.animate({
        opacity: [1, 0],
    }, {
        duration: duration,
        easing: "ease",
        fill: "forwards",
    });

    loading.style.display = "none";
});


//videoの幅を制御
const width = screen.width;
const video = document.querySelector("video");
video.style.width = width + "px";

//ローディング画面が終わってからvideo再生
//setTimeout({

//})

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