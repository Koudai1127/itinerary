// js�ōŏ��ɓǂݍ��ނ���

// ���[�_���E�B���h�E�̎���----------------------------------------------------
const buttonOpen1 = document.getElementById('modalOpen1');
const modal1 = document.getElementById('easyModal1');
const buttonClose1 = document.getElementsByClassName('modalClose1')[0];

// �{�^�����N���b�N���ꂽ�Ƃ�
buttonOpen1.addEventListener('click', modalOpen1);
function modalOpen1() {
    modal1.style.display = 'block';
}

//�~�󂪃N���b�N���ꂽ�Ƃ�
buttonClose1.addEventListener('click', modalClose1);
function modalClose1() {
    modal1.style.display = "none";
}

//���[�_���R���e���c�ȊO���N���b�N���ꂽ�Ƃ�
addEventListener('click', outsideClose);
function outsideClose(e) {
    if (e.target == modal1) {
        modal1.style.display = 'none';
    }
}
