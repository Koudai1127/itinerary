//画面サイズそろえる
const title = document.querySelector(".title");
const finish = document.querySelector(".finish img");
const wid = screen.width;

title.style.width = wid + "px";
finish.style.width = wid + "px";


const vertical = document.querySelectorAll(".vertical-line");
const width = window.innerWidth;
const height = window.innerHeight;
const first_contents = document.querySelectorAll(".first");//一日目の行程をすべて取得
const second_contents = document.querySelectorAll(".second");//二日目の行程をすべて取得

// 一番最初の要素の最上部からの高さを取得
var first = first_contents[0].offsetTop;
var second = second_contents[0].offsetTop;


//縦線の位置を変更(px)
var left_line = width * 0.05 + 24;
vertical[0].style.left = left_line + "px";
vertical[1].style.left = left_line + "px";
vertical[0].style.top = first + 25 + "px";
vertical[1].style.top = second + 25 + "px";



//最大の線の高さを計算
var line_max_first = 0;
for (let i = 0; i < first_contents.length - 1; i++) {
    line_max_first += first_contents[i].clientHeight;
}

var line_max_second = 0;
for (let i = 0; i < second_contents.length - 1; i++) {
    line_max_second += second_contents[i].clientHeight;
}


var now;//画面中央の高さを記録
let y;//スクロール量を記録
window.addEventListener("scroll", () => {
    y = window.scrollY;
    now = y + height / 2.15;

    //一日目の縦線の長さを変更(px)
    if (line_max_first + first + 25 < now) {
        vertical[0].style.height = line_max_first + "px";
    } else if (first < now) {
        vertical[0].style.height = now - first + "px";
    } else {
        vertical[0].style.height = 0;
    }

    //二日目の縦線の長さを変更(px)
    if (line_max_second + second + 25 < now) {
        vertical[1].style.height = line_max_second + "px";
    } else if (second < now) {
        vertical[1].style.height = now - second + "px";
    } else {
        vertical[1].style.height = 0;
    }
});
