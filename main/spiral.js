var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
    console.log("Connected");

      // Initialize the servo instance
    var down = 160;
    var up = 15;

    var allServos = new five.Servos([
    { id: 3, address: 0x40, controller: "PCA9685", pin: 0, range: [up,down]},
    { id: 5, address: 0x40, controller: "PCA9685", pin: 1, range: [up,down]},
    { id: 0, address: 0x40, controller: "PCA9685", pin: 2, range: [up,down]},
    { id: 0, address: 0x40, controller: "PCA9685", pin: 3, range: [up,down]},
    { id: 4, address: 0x40, controller: "PCA9685", pin: 4, range: [up,down]},
    { id: 0, address: 0x40, controller: "PCA9685", pin: 5, range: [up,down]},
    { id: 0, address: 0x40, controller: "PCA9685", pin: 6, range: [up,down]},
    { id: 0, address: 0x40, controller: "PCA9685", pin: 7, range: [up,down]},
    { id: 0, address: 0x40, controller: "PCA9685", pin: 8, range: [up,down]},
    { id: 0, address: 0x40, controller: "PCA9685", pin: 9, range: [up,down]},
    { id: 0, address: 0x40, controller: "PCA9685", pin: 10, range: [up,down]},
    { id: 0, address: 0x40, controller: "PCA9685", pin: 11, range: [up,down]},
    { id: 0, address: 0x40, controller: "PCA9685", pin: 12, range: [up,down]},
    { id: 0, address: 0x40, controller: "PCA9685", pin: 13, range: [up,down]},
    { id: 0, address: 0x40, controller: "PCA9685", pin: 14, range: [up,down]},
    { id: 0, address: 0x40, controller: "PCA9685", pin: 15, range: [up,down]},
    { id: 0, address: 0x41, controller: "PCA9685", pin: 0, range: [up,down]},
    { id: 0, address: 0x41, controller: "PCA9685", pin: 1, range: [up,down]},
    { id: 0, address: 0x41, controller: "PCA9685", pin: 2, range: [up,down]},
    { id: 0, address: 0x41, controller: "PCA9685", pin: 3, range: [up,down]},
    { id: 0, address: 0x41, controller: "PCA9685", pin: 4, range: [up,down]},
    { id: 0, address: 0x41, controller: "PCA9685", pin: 5, range: [up,down]},
    { id: 0, address: 0x41, controller: "PCA9685", pin: 6, range: [up,down]},
    { id: 0, address: 0x41, controller: "PCA9685", pin: 7, range: [up,down]},
    { id: 0, address: 0x41, controller: "PCA9685", pin: 8, range: [up,down]},
    { id: 0, address: 0x41, controller: "PCA9685", pin: 9, range: [up,down]},
    { id: 0, address: 0x41, controller: "PCA9685", pin: 10, range: [up,down]},
    { id: 0, address: 0x41, controller: "PCA9685", pin: 11, range: [up,down]},
    { id: 0, address: 0x41, controller: "PCA9685", pin: 12, range: [up,down]},
    { id: 0, address: 0x41, controller: "PCA9685", pin: 13, range: [up,down]},
    { id: 0, address: 0x41, controller: "PCA9685", pin: 14, range: [up,down]},
    { id: 0, address: 0x41, controller: "PCA9685", pin: 15, range: [up,down]},
    { id: 0, address: 0x42, controller: "PCA9685", pin: 0, range: [up,down]},
    { id: 0, address: 0x42, controller: "PCA9685", pin: 1, range: [up,down]},
    { id: 0, address: 0x42, controller: "PCA9685", pin: 2, range: [up,down]},
    { id: 7, address: 0x42, controller: "PCA9685", pin: 3, range: [up,down]},
    { id: 0, address: 0x42, controller: "PCA9685", pin: 4, range: [up,down]},
    { id: 8, address: 0x42, controller: "PCA9685", pin: 5, range: [up,down]},
    { id: 0, address: 0x42, controller: "PCA9685", pin: 6, range: [up,down]},
    { id: 6, address: 0x42, controller: "PCA9685", pin: 7, range: [up,down]},
    { id: 9, address: 0x42, controller: "PCA9685", pin: 8, range: [up,down]},
    { id: 1, address: 0x42, controller: "PCA9685", pin: 9, range: [up,down]},
    { id: 0, address: 0x42, controller: "PCA9685", pin: 10, range: [up,down]},
    { id: 2, address: 0x42, controller: "PCA9685", pin: 11, range: [up,down]},
    { id: 0, address: 0x42, controller: "PCA9685", pin: 12, range: [up,down]}
      ]);

    var downUp = [{degrees: down}, {degrees: up}, {degrees: down}];

    //console.log(allServos[0].id);
    /*var i = 1;
    while (i <= 45){
        var currentServo;
        for (var j = 0; j < allServos.length; j++){
            if (allServos[j].id === i){
                currentServo = j;
                //console.log(currentServo);
            }
            else {}
        };

    var animation = new five.Animation();
        var mySegment;

            console.log(currentServo);
            mySegment = {
                target: new five.Servos([allServos[currentServo]]),            
                duration: 2500,
                cuePoints: [0, 0.5, 1.0],
                keyFrames: [
                    downUp,
                ],
                onstart: function(){


                },
                oncomplete: function(){
                    i++;
                }
            };
            animation.enqueue(mySegment);
            animation.play();
        
};
*/
var currentAnimation = 0;
function next(element) {
    animation.enqueue(segmentArray[element]);
};
var segmentArray = [];
    for (var i = 1; i <= 9; i++){
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

            console.log(currentServo);
            function getRandom(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }
            mySegment = {
                target: new five.Servos([allServos[currentServo]]),            
                duration: 1000,
                easing: 'outQuad',
                cuePoints: [0, 0.7, 1.0],
                keyFrames: [
                    downUp,
                ],
                oncomplete: function(){
                    currentAnimation++;
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