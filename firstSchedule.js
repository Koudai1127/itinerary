//�����L�т邽�߂̐ݒ���֐��ł܂Ƃ߂�
function ScrollTimelineAnime() {
	$('.timeline li').each(function () {// ���ꂼ���li�v�f��
		var elemPos = $(this).offset().top;// �ォ��̍����擾
		var scroll = $(window).scrollTop();// �X�N���[���l�擾
		var windowHeight = $(window).height();// window�̍����擾
		var startPoint = 100; //�����X�^�[�g������ʒu���w�聦���C�A�E�g�ɂ���Ē������Ă�������
		if (scroll >= elemPos - windowHeight - startPoint) {
			var H = $(this).outerHeight(true)//li�̗]���ƍ������܂߂����l���擾
			//�X�N���[���l����v�f�܂ł̍������������l���Ali�̍����̔����̃p�[�Z���g�ŏo��
			var percent = (scroll + startPoint - elemPos) / (H / 2) * 100;//li�̗]���ƍ����̔����Ő���100���ɐL�΂�

			// 100% �𒴂����炸����100%����ꑱ����
			if (percent > 100) {
				percent = 100;
			}
			// �{�[�_�[�̒������Z�b�g
			$(this).children('.border-line').css({
				height: percent + "%", //CSS�Ńp�[�Z���g�w��
			});
		}
	});
}

// ��ʂ��X�N���[���������瓮���������ꍇ�̋L�q
$(window).on('scroll', function () {
	ScrollTimelineAnime();// �����L�т�֐����Ă�
});

// �y�[�W���ǂݍ��܂ꂽ�炷���ɓ����������ꍇ�̋L�q
$(window).on('load', function () {
	ScrollTimelineAnime();// �����L�т�֐����Ă�
});