//html����Y���ӏ�������Ă���
const icon = document.querySelector("button");
const icon_top = document.querySelector("#top");
const icon_middle = document.querySelector("#middle");
const icon_bottom = document.querySelector("#bottom");
const index = document.querySelector(".sp-menu__content")

//�ϐ��̒�`
var count = 0;
var dir = "";

icon.addEventListener("click", () => {
    //���N���b�N���ꂽ�畁�ʂ̕����A������N���b�N���ꂽ��A�j���[�V�����������߂��i������ԁj
    count++;
    if (count % 2 != 0) {
        dir = "normal";
    } else {
        dir = "reverse";
    }

    //�A�j���[�V�����̃I�v�V�������`
    const options = {
        duration: 300,
        direction: dir,
        easing: "ease",
        fill: "forwards",
    };

    //�n���o�[�K�[�A�C�R�����o�c�ɕς���
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

    //�ڎ��̉��
    index.animate({
        left: ["100%", "0%"],
    }, options);
    
});
