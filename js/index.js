//���[�f�B���O���
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


//video�̕��𐧌�
const width = screen.width;
const video = document.querySelector("video");
video.style.width = width + "px";

//���[�f�B���O��ʂ��I����Ă���video�Đ�
//setTimeout({

//})

//video�^�O���ꎞ�I�ɏ����ă��j���[�𔽉�������
var see = "";

icon.addEventListener("click", () => {
    if (count % 2 != 0) {
        see = "hidden";
    } else {
        see = "visible";
    }
    video.style.visibility = see
});