$(document).ready(function(){
    window.AudioContext = window.AudioContext||window.webkitAudioContext; //互換対応
    var audioContext = new AudioContext(); // webオーディオAPIコンテキストを生成

    var play = function(){
        var osciillator = audioContext.createOscillator(); //入力点を生成
        osciillator.start = osciillator.start || osciillator.noteOn; //互換対応
        osciillator.type = 'square'; //短形波
        osciillator.frequency.value = 440; //ラ
        var audioDestination = audioContext.destination; //出力点を生成
        osciillator.connect(audioDestination); //入力点と出力点を接続
        osciillator.start(); //スイッチon
        
        setTimeout(function(){
            osciillator.stop(); //スイッチoff
        },1000);
    }
    
    $('#play').on('click', function(){
        play();
    });
});