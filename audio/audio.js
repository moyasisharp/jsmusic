$(document).ready(function(){
    window.AudioContext = window.AudioContext||window.webkitAudioContext;
    var audioContext = new AudioContext();
    var note = {};
    ['C-', 'Db-', 'D-', 'Eb-', 'E-', 'F-', 'Gb-', 'G-', 'Ab-', 'A-', 'Bb-', 'B-',
        'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B',
        'C+', 'Db+', 'D+', 'Eb+', 'E+', 'F+', 'Gb+', 'G+', 'Ab+', 'A+', 'Bb+', 'B+'
    ].forEach(function(v, i){
        note[v] = i;
    });
    var defTime = 0.3;
    var play = function(noteId, cnt){
        var span = typeof cnt !== 'undefined' ? defTime * cnt : defTime;
        var osciillatorNode = audioContext.createOscillator();
        osciillatorNode.start = osciillatorNode.start || osciillatorNode.noteOn;
     
        //音程を設定
        var frequency = parseInt(440 * Math.pow(Math.pow(2,1/12), (-21) + note[noteId]), 10);
        osciillatorNode.frequency.value = frequency;
    
        //音量、音色
        var gainNode = audioContext.createGain();
        gainNode.gain.setValueAtTime(0, play.count);
        gainNode.gain.linearRampToValueAtTime(1.0, play.count + 0.01);
        gainNode.gain.linearRampToValueAtTime(0.7, play.count + 0.20);
        gainNode.gain.linearRampToValueAtTime(0.4, play.count + 0.40);
        gainNode.gain.linearRampToValueAtTime(0.0, play.count + span + 0.60);
    
        //接続、加工
        osciillatorNode.connect(gainNode);
        gainNode.connect(audioContext.destination);
    
        //再生開始時間を指定
        osciillatorNode.start(play.count);
        
        play.count = play.count + span + 0.6;
        return play;
    }
    
    play.count = 0;
    play('G-')('E')('D')('C')('G-',3)('G-')('G-')('E')('D')('C')('A-',4);
    play('A-')('F')('E')('D')('B-',3)('G')('G')('F')('D')('E',4);
    play('G-')('E')('D')('C')('G-',3)('G-')('G-')('E')('D')('C')('A-',4);
    play('A-')('F')('E')('D')('G')('G')('G')('G')('A')('G')('F')('D')('C',4);
    play('E')('E')('E',2)('E')('E')('E',2)('E')('G')('C',1.5)('D',0.5)('E',4)
    play('F')('F')('F',1.5)('F',0.5)('F')('E')('E')('E')('E')('D')('D')('E')('D',2)('G',2)
    play('E')('E')('E',2)('E')('E')('E',2)('E')('G')('C',1.5)('D',0.5)('E',4)
    play('F')('F')('F',1.5)('F',0.5)('F')('E')('E')('E')('G')('G')('F')('D')('C',4)
});

