//htmlから該当箇所を取ってくる
const icon = document.querySelector("button");
const icon_top = document.querySelector("#top");
const icon_middle = document.querySelector("#middle");
const icon_bottom = document.querySelector("#bottom");
const index = document.querySelector(".sp-menu__content")

//変数の定義
var count = 0;
var dir = "";

icon.addEventListener("click", () => {
    //奇数回クリックされたら普通の方向、偶数回クリックされたらアニメーションを巻き戻す（初期状態）
    count++;
    if (count % 2 != 0) {
        dir = "normal";
    } else {
        dir = "reverse";
    }

    //アニメーションのオプションを定義
    const options = {
        duration: 300,
        direction: dir,
        easing: "ease",
        fill: "forwards",
    };

    //ハンバーガーアイコンをバツに変える
    icon_top.animate({
        top: ["1.3rem", "2.125rem"],
        transform: ["rotate(0deg)", "rotate(45deg)"],
    }, options);

    icon_middle.animate({
        opacity: [1, 0],
    }, options);

    icon_bottom.animate({
        bottom: ["1.3rem", "2.125rem"],
        transform: ["rotate(0deg)", "rotate(-45deg)"],
    }, options);

    //目次の画面
    index.animate({
        left: ["100%", "0%"],
    }, options);
    
});
