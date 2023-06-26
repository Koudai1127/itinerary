// jsでのモーダルウィンドウ表示

'use strict';

{
    // 航大用
    const member1 = document.getElementById('member1');
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modalClose');

    member1.addEventListener('click',() => {
        modal.classList.add('active');
        overlay.classList.add('active');
    });
    modalClose.addEventListener('click',() => {
        modal.classList.remove('active');
        overlay.classList.remove('active');
    });
    overlay.addEventListener('click',() => {
        modal.classList.remove('active');
        overlay.classList.remove('active');
    });

    // こみた用
    const member2 = document.getElementById('member2');
    const overlay2 = document.getElementById('overlay2');
    const modal2 = document.getElementById('modal2');
    const modalClose2 = document.getElementById('modalClose2');

    member2.addEventListener('click',() =>  {
        modal2.classList.add('active');
        overlay2.classList.add('active');
    });
    modalClose2.addEventListener('click',() => {
        modal2.classList.remove('active');
        overlay2.classList.remove('active');
    });
    overlay2.addEventListener('click',() => {
        modal2.classList.remove('active');
        overlay2.classList.remove('active');
    });

    // とうこちゃん用
    const member3 = document.getElementById('member3');
    const overlay3 = document.getElementById('overlay3');
    const modal3 = document.getElementById('modal3');
    const modalClose3 = document.getElementById('modalClose3');

    member3.addEventListener('click',() =>  {
        modal3.classList.add('active');
        overlay3.classList.add('active');
    });
    modalClose3.addEventListener('click',() => {
        modal3.classList.remove('active');
        overlay3.classList.remove('active');
    });
    overlay3.addEventListener('click',() => {
        modal3.classList.remove('active');
        overlay3.classList.remove('active');
    });

    
    // しょうた用
    const member4 = document.getElementById('member4');
    const overlay4 = document.getElementById('overlay4');
    const modal4 = document.getElementById('modal4');
    const modalClose4 = document.getElementById('modalClose4');

    member4.addEventListener('click',() => {
        modal4.classList.add('active');
        overlay4.classList.add('active');
    });
    modalClose4.addEventListener('click',() => {
        modal4.classList.remove('active');
        overlay4.classList.remove('active');
    });
    overlay4.addEventListener('click',() => {
        modal4.classList.remove('active');
        overlay4.classList.remove('active');
    });


    // りく用
    const member5 = document.getElementById('member5');
    const overlay5 = document.getElementById('overlay5');
    const modal5 = document.getElementById('modal5');
    const modalClose5 = document.getElementById('modalClose5');

    member5.addEventListener('click',() => {
        modal5.classList.add('active');
        overlay5.classList.add('active');
    });
    modalClose5.addEventListener('click',() => {
        modal5.classList.remove('active');
        overlay5.classList.remove('active');
    });
    overlay5.addEventListener('click',() => {
        modal5.classList.remove('active');
        overlay5.classList.remove('active');
    });


}







// const member1 = document.querySelector('.member1');
// const modal = document.querySelector('.modal');
// const modalClose = document.querySelector('.modalClose');
// const overlay = document.querySelector('.overlay');

// // ボタンをクリックしたら、モーダルとオーバーレイに.activeを付ける
// member1.addEventListener('click', function(e) {
//     e.preventDefault();

//     modal.classList.add('active');
//     overlay.classList.add('active');

// });

// // モーダルの閉じるボタンをクリックしたら、モーダルとオーバーレイのactiveクラスを外す
// modalClose.addEventListener('click',function(){
//     modal.classList.remove('active');
//     overlay.classList.remove('active');
// });

// // オーバーレイをクリックしたら、モーダルとオーバーレイのactiveクラスを外す
// overlay.addEventListener('click',function() {
//     modal.classList.remove('active');
//     overlay.classList.remove('active');
// })



// // モーダルを呼び出す----------------------------------------------------
// const buttonOpen1 = document.getElementById('modalOpen1');
// const overlay = document.getElementById('easyoverlay');
// const buttonClose1 = document.getElementsByClassName('modalClose')[0];

// // ボタンをクリックしたとき
// buttonOpen1.addEventListener('click', modalOpen1);
// function modalOpen1() {
//     // overlay.style.display = 'block';
//     overlay.style.display = 1;
// }

// //　閉じるボタンを押した時
// buttonClose1.addEventListener('click', modalClose);
// function modalClose() {
//     overlay.style.display = "none";
// }

// //　モーダル外を押した時
// addEventListener('click', outsideClose);
// function outsideClose(e) {
//     if (e.target == overlay) {
//         overlay.style.display = 'none';
//     }
// }
