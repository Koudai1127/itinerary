// jsで最初に読み込むもの

// モーダルウィンドウの実装----------------------------------------------------
const buttonOpen1 = document.getElementById('modalOpen1');
const modal1 = document.getElementById('easyModal1');
const buttonClose1 = document.getElementsByClassName('modalClose1')[0];

// ボタンがクリックされたとき
buttonOpen1.addEventListener('click', modalOpen1);
function modalOpen1() {
    modal1.style.display='block';
}

//×印がクリックされたとき
buttonClose1.addEventListener('click',modalClose1);
function modalClose1() {
    modal1.style.display="none";
}

//モーダルコンテンツ以外がクリックされたとき
addEventListener('click',outsideClose);
function outsideClose(e) {
    if(e.target == modal1) {
        modal1.style.display = 'none';
    }
}


