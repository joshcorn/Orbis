var five = require("johnny-five");
var board = new five.Board({
    repl: false
    });


board.on("ready", function() {
    //console.log("Connected");

      // Initialize the servo instance
    var down = 160;
    var up = 15;

    var allServos = new five.Servos([
        { id: 39, address: 0x40, controller: "PCA9685", pin: 0, range: [up,down]},
        { id: 41, address: 0x40, controller: "PCA9685", pin: 1, range: [up,down]},
        { id: 45, address: 0x40, controller: "PCA9685", pin: 2, range: [up,down]},
        { id: 32, address: 0x40, controller: "PCA9685", pin: 3, range: [up,down]},
        { id: 30, address: 0x40, controller: "PCA9685", pin: 4, range: [up,down]},
        { id: 15, address: 0x40, controller: "PCA9685", pin: 5, range: [up,down]},
        { id: 2, address: 0x40, controller: "PCA9685", pin: 6, range: [up,down]},
        { id: 4, address: 0x40, controller: "PCA9685", pin: 7, range: [up,down]},
        { id: 34, address: 0x40, controller: "PCA9685", pin: 8, range: [up,down]},
        { id: 23, address: 0x40, controller: "PCA9685", pin: 9, range: [up,down]},
        { id: 1, address: 0x40, controller: "PCA9685", pin: 10, range: [up,down]},
        { id: 14, address: 0x40, controller: "PCA9685", pin: 11, range: [up,down]},
        { id: 31, address: 0x40, controller: "PCA9685", pin: 12, range: [up,down]},
        { id: 28, address: 0x40, controller: "PCA9685", pin: 13, range: [up,down]},
        { id: 13, address: 0x40, controller: "PCA9685", pin: 14, range: [up,down]},
        { id: 22, address: 0x40, controller: "PCA9685", pin: 15, range: [up,down]},
        { id: 29, address: 0x41, controller: "PCA9685", pin: 0, range: [up,down]},
        { id: 24, address: 0x41, controller: "PCA9685", pin: 1, range: [up,down]},
        { id: 18, address: 0x41, controller: "PCA9685", pin: 2, range: [up,down]},
        { id: 40, address: 0x41, controller: "PCA9685", pin: 3, range: [up,down]},
        { id: 21, address: 0x41, controller: "PCA9685", pin: 4, range: [up,down]},
        { id: 6, address: 0x41, controller: "PCA9685", pin: 5, range: [up,down]},
        { id: 36, address: 0x41, controller: "PCA9685", pin: 6, range: [up,down]},
        { id: 10, address: 0x41, controller: "PCA9685", pin: 7, range: [up,down]},
        { id: 3, address: 0x41, controller: "PCA9685", pin: 8, range: [up,down]},
        { id: 35, address: 0x41, controller: "PCA9685", pin: 9, range: [up,down]},
        { id: 43, address: 0x41, controller: "PCA9685", pin: 10, range: [up,down]},
        { id: 9, address: 0x41, controller: "PCA9685", pin: 11, range: [up,down]},
        { id: 8, address: 0x41, controller: "PCA9685", pin: 12, range: [up,down]},
        { id: 25, address: 0x41, controller: "PCA9685", pin: 13, range: [up,down]},
        { id: 11, address: 0x41, controller: "PCA9685", pin: 14, range: [up,down]},
        { id: 12, address: 0x41, controller: "PCA9685", pin: 15, range: [up,down]},
        { id: 20, address: 0x42, controller: "PCA9685", pin: 0, range: [up,down]},
        { id: 26, address: 0x42, controller: "PCA9685", pin: 1, range: [up,down]},
        { id: 27, address: 0x42, controller: "PCA9685", pin: 2, range: [up,down]},
        { id: 19, address: 0x42, controller: "PCA9685", pin: 3, range: [up,down]},
        { id: 17, address: 0x42, controller: "PCA9685", pin: 4, range: [up,down]},
        { id: 44, address: 0x42, controller: "PCA9685", pin: 5, range: [up,down]},
        { id: 5, address: 0x42, controller: "PCA9685", pin: 6, range: [up,down]},
        { id: 33, address: 0x42, controller: "PCA9685", pin: 7, range: [up,down]},
        { id: 7, address: 0x42, controller: "PCA9685", pin: 8, range: [up,down]},
        { id: 37, address: 0x42, controller: "PCA9685", pin: 9, range: [up,down]},
        { id: 42, address: 0x42, controller: "PCA9685", pin: 10, range: [up,down]},
        { id: 16, address: 0x42, controller: "PCA9685", pin: 11, range: [up,down]},
        { id: 38, address: 0x42, controller: "PCA9685", pin: 12, range: [up,down]}
      ]);

    var downUp = [{degrees: down}, {degrees: up}, false, {degrees: down}];


var currentAnimation = 0;
function next(element) {
    if(element<segmentArray.length){
        animation.enqueue(segmentArray[element]);
    }
    else {
        currentAnimation = 1;
        animation.enqueue(segmentArray[0]);
    }
};
var segmentArray = [];
    for (var i = 1; i <= 45; i++){
        var currentServo;
        for (var j = 0; j < allServos.length; j++){
            if (allServos[j].id === i){
                currentServo = j;
                //console.log(currentServo);
            }
            else {}
        };
    
        //console.log(currentServo);
        var animation = new five.Animation();
        var mySegment;

            //console.log(currentServo);
            function getRandom(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }
            mySegment = {
                target: new five.Servos([allServos[currentServo]]),            
                duration: getRandom(100, 1500),
                easing: 'inQuint',
                cuePoints: [0, 0.3, 0.9, 1.0],
                keyFrames: [
                    downUp,
                ],
                oncomplete: function(){
                    currentAnimation++;
                    //console.log(currentAnimation);
                    next(currentAnimation);
                }
            };
        segmentArray.push(mySegment);
    };
    //console.log(segmentArray);
    animation.enqueue(segmentArray[0]);
     //animation.enqueue(mySegment);
            //animation.play();
    
    //console.log(animation);
    //animation.play();
});