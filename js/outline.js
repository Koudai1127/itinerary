//画面サイズそろえる
const title = document.querySelector(".title");
const width = screen.width;

title.style.width = width + "px";

//スライドショー
const slide = document.querySelector(".js_slide");
const clientRect = slide.getBoundingClientRect();
const go_left = document.querySelector(".go_left");
const go_right = document.querySelector(".go_right");
const loc = document.querySelectorAll(".loc span");
const description = document.querySelector(".description");
const content = document.querySelectorAll(".content");


//写真の一覧（画像のサイズはそろえること！！！）
const img_src = ["img/hotel.jpg", "img/room.png", "img/hotspring.jpg"];
const img_alt = ["外観", "和室", "温泉"];

//幅を調整
slide.style.width = width + "px";
//for (let i = 0; i < content.length; i++) {
//    content[i].style.width = width - 10 + "px";
//}

//位置を調整
slide.style.left = - clientRect.left + "px";

//初期状態
loc[0].style.backgroundColor = "#808080";

//クリック時の操作
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
    //画像の番号をずらす
    img_num = minus(img_num);
    //新しいものに変更
    loc[img_num].style.backgroundColor = "#808080";
    description.textContent = img_alt[img_num];
    slide.src = img_src[img_num];
});

go_left.addEventListener("click", () => {
    //色をもとに戻す
    loc[img_num].style.backgroundColor = "#dcdcdc";
    //画像の番号をずらす
    img_num = plus(img_num);
    //新しいものに変更
    loc[img_num].style.backgroundColor = "#808080";
    description.textContent = img_alt[img_num];
    slide.src = img_src[img_num];
});
