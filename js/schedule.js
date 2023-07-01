//��ʃT�C�Y���낦��
const title = document.querySelector(".title");
const wid = screen.width;

title.style.width = wid + "px";


const vertical = document.querySelectorAll(".vertical-line");
const width = window.innerWidth;
const height = window.innerHeight;
const y = window.scrollY;
const first_contents = document.querySelectorAll(".first");//����ڂ̍s�������ׂĎ擾
const second_contents = document.querySelectorAll(".second");//����ڂ̍s�������ׂĎ擾

// ��ԍŏ��̗v�f�̍ŏ㕔����̍������擾
var first = first_contents[0].offsetTop;
var second = second_contents[0].offsetTop;


//�c���̈ʒu��ύX(px)
var left_line = width * 0.05 + 24;
vertical[0].style.left = left_line + "px";
vertical[1].style.left = left_line + "px";
vertical[0].style.top = first + 25 + "px";
vertical[1].style.top = second + 25 + "px";


//����ڂ̏c���̒�����ύX(px)
var now = y + height / 2.5;//��ʒ���
var line_max_first = 0;
for (let i = 0; i < first_contents.length - 1; i++) {
    line_max_first += first_contents[i].clientHeight;
}//�ő�̐��̍������v�Z

window.addEventListener("scroll", () => {
    if (line_max_first + first + 25 < now) {
        vertical[0].style.height = line_max_first + "px";
    } else if (first < now) {
        vertical[0].style.height = now - first + "px";
    }
});


//����ڂ̏c���̒�����ύX(px)
var line_max_second = 0;
for (let i = 0; i < second_contents.length - 1; i++) {
    line_max_second += second_contents[i].clientHeight;
}//�ő�̐��̍������v�Z

window.addEventListener("scroll", () => {
    if (line_max_second + second + 25 < now) {
        vertical[1].style.height = line_max_second + "px";
    } else if (second < now) {
        vertical[1].style.height = now - second + "px";
    }
});
