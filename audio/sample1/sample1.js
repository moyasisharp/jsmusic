$(document).ready(function(){
    window.AudioContext = window.AudioContext||window.webkitAudioContext; //�݊��Ή�
    var audioContext = new AudioContext(); // web�I�[�f�B�IAPI�R���e�L�X�g�𐶐�

    var play = function(){
        var osciillator = audioContext.createOscillator(); //���͓_�𐶐�
        osciillator.start = osciillator.start || osciillator.noteOn; //�݊��Ή�
        osciillator.type = 'square'; //�Z�`�g
        osciillator.frequency.value = 440; //��
        var audioDestination = audioContext.destination; //�o�͓_�𐶐�
        osciillator.connect(audioDestination); //���͓_�Əo�͓_��ڑ�
        osciillator.start(); //�X�C�b�`on
        
        setTimeout(function(){
            osciillator.stop(); //�X�C�b�`off
        },1000);
    }
    
    $('#play').on('click', function(){
        play();
    });
});