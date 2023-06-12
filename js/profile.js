// jsでのモーダルウィンドウ表示

// モーダルを呼び出す----------------------------------------------------
const buttonOpen1 = document.getElementById('modalOpen1');
const modal1 = document.getElementById('easyModal1');
const buttonClose1 = document.getElementsByClassName('modalClose1')[0];

// ボタンをクリックしたとき
buttonOpen1.addEventListener('click', modalOpen1);
function modalOpen1() {
    modal1.style.display = 'block';
}

//　閉じるボタンを押した時
buttonClose1.addEventListener('click', modalClose1);
function modalClose1() {
    modal1.style.display = "none";
}

//　モーダル外を押した時
addEventListener('click', outsideClose);
function outsideClose(e) {
    if (e.target == modal1) {
        modal1.style.display = 'none';
    }
}
