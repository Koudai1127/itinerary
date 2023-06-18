const slide = document.querySelector(".js_slide");
const go_left = document.querySelector(".go_left");
const go_right = document.querySelector(".go_right");
const loc = document.querySelectorAll(".loc span");
const description = document.querySelector(".description");
const width = window.innerWidth;

//�ʐ^�̈ꗗ�i�摜�̃T�C�Y�͂��낦�邱�ƁI�I�I�j
const img_src = ["img/dummyHotel.jpg", "img/dummyHotelRoom.jpg", "img/dummyHotelRoom2.jpg"];
const img_alt = ["�O��", "�j�q����", "���q����"];

//�ʐ^�̕��𒲐�
slide.style.width = width - 20 + "px";

//�������
loc[0].style.backgroundColor = "#808080";

//�N���b�N���̑���
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
    //�F�����Ƃɖ߂�
    loc[img_num].style.backgroundColor = "#dcdcdc";
    //�摜�̔ԍ������炷
    img_num = minus(img_num);
    //�V�������̂ɕύX
    loc[img_num].style.backgroundColor = "#808080";
    description.textContent = img_alt[img_num];
    slide.src = img_src[img_num];
});

go_left.addEventListener("click", () => {
    //�F�����Ƃɖ߂�
    loc[img_num].style.backgroundColor = "#dcdcdc";
    //�摜�̔ԍ������炷
    img_num = plus(img_num);
    //�V�������̂ɕύX
    loc[img_num].style.backgroundColor = "#808080";
    description.textContent = img_alt[img_num];
    slide.src = img_src[img_num];
});
