var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  console.log("Connected");

  // Initialize the servo instance
var down = 160;
var up = 15;

var allServos = new five.Servos([
    { id: 0, address: 0x40, controller: "PCA9685", pin: 0, range: [up,down], startAt: down },
    { id: 1, address: 0x40, controller: "PCA9685", pin: 1, range: [up,down], startAt: down },
    { id: 2, address: 0x40, controller: "PCA9685", pin: 2, range: [up,down], startAt: down },
    { id: 3, address: 0x40, controller: "PCA9685", pin: 3, range: [up,down], startAt: down },
    { id: 4, address: 0x40, controller: "PCA9685", pin: 4, range: [up,down], startAt: down },
    { id: 5, address: 0x40, controller: "PCA9685", pin: 5, range: [up,down], startAt: down },
    { id: 6, address: 0x40, controller: "PCA9685", pin: 6, range: [up,down], startAt: down },
    { id: 7, address: 0x40, controller: "PCA9685", pin: 7, range: [up,down], startAt: down },
    { id: 8, address: 0x40, controller: "PCA9685", pin: 8, range: [up,down], startAt: down },
    { id: 9, address: 0x40, controller: "PCA9685", pin: 9, range: [up,down], startAt: down },
    { id: 10, address: 0x40, controller: "PCA9685", pin: 10, range: [up,down], startAt: down },
    { id: 11, address: 0x40, controller: "PCA9685", pin: 11, range: [up,down], startAt: down },
    { id: 12, address: 0x40, controller: "PCA9685", pin: 12, range: [up,down], startAt: down },
    { id: 13, address: 0x40, controller: "PCA9685", pin: 13, range: [up,down], startAt: down },
    { id: 14, address: 0x40, controller: "PCA9685", pin: 14, range: [up,down], startAt: down },
    { id: 15, address: 0x40, controller: "PCA9685", pin: 15, range: [up,down], startAt: down },
    { id: 16, address: 0x41, controller: "PCA9685", pin: 0, range: [up,down], startAt: down },
    { id: 17, address: 0x41, controller: "PCA9685", pin: 1, range: [up,down], startAt: down },
    { id: 18, address: 0x41, controller: "PCA9685", pin: 2, range: [up,down], startAt: down },
    { id: 19, address: 0x41, controller: "PCA9685", pin: 3, range: [up,down], startAt: down },
    { id: 20, address: 0x41, controller: "PCA9685", pin: 4, range: [up,down], startAt: down },
    { id: 21, address: 0x41, controller: "PCA9685", pin: 5, range: [up,down], startAt: down },
    { id: 22, address: 0x41, controller: "PCA9685", pin: 6, range: [up,down], startAt: down },
    { id: 23, address: 0x41, controller: "PCA9685", pin: 7, range: [up,down], startAt: down },
    { id: 24, address: 0x41, controller: "PCA9685", pin: 8, range: [up,down], startAt: down },
    { id: 25, address: 0x41, controller: "PCA9685", pin: 9, range: [up,down], startAt: down },
    { id: 26, address: 0x41, controller: "PCA9685", pin: 10, range: [up,down], startAt: down },
    { id: 27, address: 0x41, controller: "PCA9685", pin: 11, range: [up,down], startAt: down },
    { id: 28, address: 0x41, controller: "PCA9685", pin: 12, range: [up,down], startAt: down },
    { id: 29, address: 0x41, controller: "PCA9685", pin: 13, range: [up,down], startAt: down },
    { id: 30, address: 0x41, controller: "PCA9685", pin: 14, range: [up,down], startAt: down },
    { id: 31, address: 0x41, controller: "PCA9685", pin: 15, range: [up,down], startAt: down },
    { id: 32, address: 0x42, controller: "PCA9685", pin: 0, range: [up,down], startAt: down },
    { id: 33, address: 0x42, controller: "PCA9685", pin: 1, range: [up,down], startAt: down },
    { id: 34, address: 0x42, controller: "PCA9685", pin: 2, range: [up,down], startAt: down },
    { id: 35, address: 0x42, controller: "PCA9685", pin: 3, range: [up,down], startAt: down },
    { id: 36, address: 0x42, controller: "PCA9685", pin: 4, range: [up,down], startAt: down },
    { id: 37, address: 0x42, controller: "PCA9685", pin: 5, range: [up,down], startAt: down },
    { id: 38, address: 0x42, controller: "PCA9685", pin: 6, range: [up,down], startAt: down },
    { id: 39, address: 0x42, controller: "PCA9685", pin: 7, range: [up,down], startAt: down },
    { id: 40, address: 0x42, controller: "PCA9685", pin: 8, range: [up,down], startAt: down },
    { id: 41, address: 0x42, controller: "PCA9685", pin: 9, range: [up,down], startAt: down },
    { id: 42, address: 0x42, controller: "PCA9685", pin: 10, range: [up,down], startAt: down },
    { id: 43, address: 0x42, controller: "PCA9685", pin: 11, range: [up,down], startAt: down },
    { id: 44, address: 0x42, controller: "PCA9685", pin: 12, range: [up,down], startAt: down }
  ]);

var animation = new five.Animation();

var downUp = [{degrees: down}, {degrees: up}];
var upDown = [{degrees: up}, {degrees: down}, {degrees: up}];


var hello = {
    target: new five.Servos([
        allServos[16],
        allServos[14],
        allServos[11],
        allServos[7],
        allServos[13],
        allServos[20],
        allServos[17],
        allServos[9],
        allServos[4],
    ]),
    duration: 5500,
    cuePoints: [0, 1.0],
    keyFrames: [
        downUp,
        downUp,
        downUp,
        downUp,
        downUp,
        downUp,
        downUp,
        downUp,
        downUp,
    ],
    oncomplete: function(){
        animation.enqueue(helloTwo);
    }
};

var helloTwo = {
    target: new five.Servos([
        allServos[28],
        allServos[40],
        allServos[35],
        allServos[37],
    ]),
    duration: 5500,
    cuePoints: [0, 1.0],
    keyFrames: [
        downUp,
        downUp,
        downUp,
        downUp,
    ],
    oncomplete: function(){
    }
};

//console.log(ringOne.length);

//animation.enqueue(ringOne);
animation.enqueue(hello);


/*animation.enqueue({
    target: ringOne,
    duration: 2500,
    cuePoints: [0, 0.5, 1.0],
    keyFrames: [{degrees: down}, {degrees: up}, {degrees: down}],
    loop: true,
});
*/

/*animation.enqueue({
    duration: 2500,
    cuePoints: [0, 0.5, 1.0],
    keyFrames: [ 
        [{degrees: down}, {degrees: up}, {degrees: down}],
        [{degrees: down}, {degrees: up}, {degrees: down}],
        [{degrees: up}, {degrees: down}, {degrees: up}],
        [{degrees: down}, {degrees: up}, {degrees: down}],
        [{degrees: down}, {degrees: up}, {degrees: down}],
        [{degrees: down}, {degrees: up}, {degrees: down}],
        [{degrees: down}, {degrees: up}, {degrees: down}],
    ],
    loop: true,
    //easing: 'inOutQuad'
  });
  
  */

    //ringThree.to(down);
  //servosOne.to(up);
});