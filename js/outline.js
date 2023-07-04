const slide = document.querySelector(".js_slide");
const width = screen.width;
const clientRect = slide.getBoundingClientRect();
const go_left = document.querySelector(".go_left");
const go_right = document.querySelector(".go_right");
const loc = document.querySelectorAll(".loc span");
const description = document.querySelector(".description");
const content = document.querySelectorAll(".content");


//写真のリスト
const img_src = ["img/hotel.jpg", "img/room.png", "img/hotspring.jpg"];
const img_alt = ["外観", "和室", "温泉"];

//写真の幅を制御
slide.style.width = width + "px";
//for (let i = 0; i < content.length; i++) {
//    content[i].style.width = width - 10 + "px";
//}

//写真とボタンをぴったり重ねる
slide.style.left = - clientRect.left + "px";
go_left.style.left = - 2 * clientRect.left + "px";


//写真下のアイコンの色を初期だけ指定
loc[0].style.backgroundColor = "#808080";

//＜、＞を押したときの処理
let img_num = 0;
function minus(num) {
    num--;
    if (num < 0) {
        return img_src.length - 1;
    }
    return num;
};

function plus(num) {
    num++;
    if (img_src.length <= num) {
        return 0;
    }
    return num;
};

go_right.addEventListener("click", () => {
    //色をもとに戻す
    loc[img_num].style.backgroundColor = "#dcdcdc";
    //番号を一つ戻す
    img_num = minus(img_num);
    //対応する写真を表示して色を変える
    loc[img_num].style.backgroundColor = "#808080";
    description.textContent = img_alt[img_num];
    slide.src = img_src[img_num];
});

go_left.addEventListener("click", () => {
    //色をもとに戻す
    loc[img_num].style.backgroundColor = "#dcdcdc";
    //番号を一つ進める
    img_num = plus(img_num);
    //対応する写真を表示して色を変える
    loc[img_num].style.backgroundColor = "#808080";
    description.textContent = img_alt[img_num];
    slide.src = img_src[img_num];
});


// アコーディオンメニュー実装　（りく）
const menu = document.querySelectorAll(".js-menu");

function toggle() {
    const contents = this.nextElementSibling;
    this.classList.toggle("is-active");
    contents.classList.toggle("is-close");
}

for(let i = 0;i < menu.length;i++) {
    menu[i].addEventListener("click",toggle);
}