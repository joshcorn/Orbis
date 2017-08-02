var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  console.log("Connected");

  // Initialize the servo instance
var down = 160;
var up = 15;

var allServos = new five.Servos([
    { id: 0, address: 0x40, controller: "PCA9685", pin: 0, range: [up,down] },
    { id: 1, address: 0x40, controller: "PCA9685", pin: 1, range: [up,down] },
    { id: 2, address: 0x40, controller: "PCA9685", pin: 2, range: [up,down] },
    { id: 3, address: 0x40, controller: "PCA9685", pin: 3, range: [up,down] },
    { id: 4, address: 0x40, controller: "PCA9685", pin: 4, range: [up,down] },
    { id: 5, address: 0x40, controller: "PCA9685", pin: 5, range: [up,down] },
    { id: 6, address: 0x40, controller: "PCA9685", pin: 6, range: [up,down] },
    { id: 7, address: 0x40, controller: "PCA9685", pin: 7, range: [up,down] },
    { id: 8, address: 0x40, controller: "PCA9685", pin: 8, range: [up,down] },
    { id: 9, address: 0x40, controller: "PCA9685", pin: 9, range: [up,down] },
    { id: 10, address: 0x40, controller: "PCA9685", pin: 10, range: [up,down] },
    { id: 11, address: 0x40, controller: "PCA9685", pin: 11, range: [up,down] },
    { id: 12, address: 0x40, controller: "PCA9685", pin: 12, range: [up,down] },
    { id: 13, address: 0x40, controller: "PCA9685", pin: 13, range: [up,down] },
    { id: 14, address: 0x40, controller: "PCA9685", pin: 14, range: [up,down] },
    { id: 15, address: 0x40, controller: "PCA9685", pin: 15, range: [up,down] },
    { id: 16, address: 0x41, controller: "PCA9685", pin: 0, range: [up,down] },
    { id: 17, address: 0x41, controller: "PCA9685", pin: 1, range: [up,down] },
    { id: 18, address: 0x41, controller: "PCA9685", pin: 2, range: [up,down] },
    { id: 19, address: 0x41, controller: "PCA9685", pin: 3, range: [up,down] },
    { id: 20, address: 0x41, controller: "PCA9685", pin: 4, range: [up,down] },
    { id: 21, address: 0x41, controller: "PCA9685", pin: 5, range: [up,down] },
    { id: 22, address: 0x41, controller: "PCA9685", pin: 6, range: [up,down] },
    { id: 23, address: 0x41, controller: "PCA9685", pin: 7, range: [up,down] },
    { id: 24, address: 0x41, controller: "PCA9685", pin: 8, range: [up,down] },
    { id: 25, address: 0x41, controller: "PCA9685", pin: 9, range: [up,down] },
    { id: 26, address: 0x41, controller: "PCA9685", pin: 10, range: [up,down] },
    { id: 27, address: 0x41, controller: "PCA9685", pin: 11, range: [up,down] },
    { id: 28, address: 0x41, controller: "PCA9685", pin: 12, range: [up,down] },
    { id: 29, address: 0x41, controller: "PCA9685", pin: 13, range: [up,down] },
    { id: 30, address: 0x41, controller: "PCA9685", pin: 14, range: [up,down] },
    { id: 31, address: 0x41, controller: "PCA9685", pin: 15, range: [up,down] },
    { id: 32, address: 0x42, controller: "PCA9685", pin: 0, range: [up,down] },
    { id: 33, address: 0x42, controller: "PCA9685", pin: 1, range: [up,down] },
    { id: 34, address: 0x42, controller: "PCA9685", pin: 2, range: [up,down] },
    { id: 35, address: 0x42, controller: "PCA9685", pin: 3, range: [up,down] },
    { id: 36, address: 0x42, controller: "PCA9685", pin: 4, range: [up,down] },
    { id: 37, address: 0x42, controller: "PCA9685", pin: 5, range: [up,down] },
    { id: 38, address: 0x42, controller: "PCA9685", pin: 6, range: [up,down] },
    { id: 39, address: 0x42, controller: "PCA9685", pin: 7, range: [up,down] },
    { id: 40, address: 0x42, controller: "PCA9685", pin: 8, range: [up,down] },
    { id: 41, address: 0x42, controller: "PCA9685", pin: 9, range: [up,down] },
    { id: 42, address: 0x42, controller: "PCA9685", pin: 10, range: [up,down] },
    { id: 43, address: 0x42, controller: "PCA9685", pin: 11, range: [up,down] },
    { id: 44, address: 0x42, controller: "PCA9685", pin: 12, range: [up,down] }
  ]);



var animation = new five.Animation();

var downUp = [{degrees: down}, {degrees: up}, {degrees: down}];
var upDown = [{degrees: up}, {degrees: down}, {degrees: up}];


var lineOne = {
    target: new five.Servos([
        allServos[19],
    ]),
    duration: 1000,
    easing: 'outQuint',
    cuePoints: [0, 0.166, 0.332, .498, .664, .83, 1],
    keyFrames: [
        [{degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}],
        
    ],
    oncomplete: function(){
        animation.enqueue(lineTwo);
    }
};

var lineTwo = {
    target: new five.Servos([
        allServos[16],
        allServos[18],
        allServos[21],
        allServos[22],

    ]),
    duration: 4000,
    easing: 'outQuint',
    cuePoints: [0, 0.111, 0.222, .333, .444, .555, .666, .777, .888, 1],
    keyFrames: [
        [{degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null, null],
        [null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null],
        [null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null],
        [null, null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}],
        
    ],
    oncomplete: function(){
        animation.enqueue(lineThree);
    }
};

var lineThree = {
    target: new five.Servos([
        allServos[12],
        allServos[14],
        allServos[15],
        allServos[20],
        allServos[23],
        allServos[25],
        allServos[26],

    ]),
    duration: 7000,
    easing: 'outQuint',
    cuePoints: [0, 0.083, .166, .249, .332, .415, .498, .581, .664, .747, .83, .913, 1],
    keyFrames: [
        [{degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null, null, null, null, null],
        [null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null, null, null, null],
        [null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null, null, null],
        [null, null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null, null],
        [null, null, null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null],
        [null, null, null, null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null],
        [null, null, null, null, null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}],
        
    ],
    oncomplete: function(){
        animation.enqueue(lineFour);
    }
};

var lineFour = {
    target: new five.Servos([
        allServos[11],
        allServos[13],
        allServos[17],
        allServos[24],
        allServos[27],
        allServos[28],
    ]),
    duration: 6000,
    easing: 'outQuint',
    cuePoints: [0, 0.083, .166, .249, .332, .415, .498, .581, .664, .747, .83, .913, 1],
    keyFrames: [
        [{degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null, null, null, null],
        [null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null, null, null],
        [null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null, null],
        [null, null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null],
        [null, null, null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null],
        [null, null, null, null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}],
        
    ],
    oncomplete: function(){
        animation.enqueue(lineFive);
    }
};

var lineFive = {
    target: new five.Servos([
        allServos[8],
        allServos[7],
        allServos[6],
        allServos[9],
        allServos[10],
        allServos[32],
        allServos[31],
        allServos[29],
        allServos[30],
    ]),
    duration: 9000,
    easing: 'outQuint',
    cuePoints: [0, 0.071, 0.142, .213, .284, .355, .426, .497, .568, .639, .71, .781, .852, .923, .994, 1],
    keyFrames: [
        [{degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null, null, null, null, null, null, null],
        [null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null, null, null, null, null, null],
        [null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null, null, null, null, null],
        [null, null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null, null, null, null],
        [null, null, null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null, null, null],
        [null, null, null, null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null, null],
        [null, null, null, null, null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null],
        [null, null, null, null, null, null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null],
        [null, null, null, null, null, null, null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}]
    ],
    oncomplete: function(){
        animation.enqueue(lineSix);
    }
};

var lineSix = {
    target: new five.Servos([
        allServos[5],
        allServos[4],
        allServos[1],
        allServos[39],
        allServos[35],
        allServos[33],
    ]),
    duration: 6000,
    easing: 'outQuint',
    cuePoints: [0, 0.083, .166, .249, .332, .415, .498, .581, .664, .747, .83, .913, 1],
    keyFrames: [
        [{degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null, null, null, null],
        [null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null, null, null],
        [null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null, null],
        [null, null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null],
        [null, null, null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null],
        [null, null, null, null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}],
        
    ],
    oncomplete: function(){
        animation.enqueue(lineSeven);
    }
};

var lineSeven = {
    target: new five.Servos([
        allServos[3],
        allServos[2],
        allServos[0],
        allServos[42],
        allServos[37],
        allServos[36],
        allServos[34],
    ]),
    duration: 7000,
    easing: 'outQuint',
    cuePoints: [0, 0.083, .166, .249, .332, .415, .498, .581, .664, .747, .83, .913, 1],
    keyFrames: [
        [{degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null, null, null, null, null],
        [null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null, null, null, null],
        [null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null, null, null],
        [null, null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null, null],
        [null, null, null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null],
        [null, null, null, null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null],
        [null, null, null, null, null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}],
        
    ],
    oncomplete: function(){
        animation.enqueue(lineEight);
    }
};


var lineEight = {
    target: new five.Servos([
        allServos[44],
        allServos[43],
        allServos[40],
        allServos[38],

    ]),
    duration: 4000,
    easing: 'outQuint',
    cuePoints: [0, 0.111, 0.222, .333, .444, .555, .666, .777, .888, 1],
    keyFrames: [
        [{degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null, null],
        [null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null, null],
        [null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}, null],
        [null, null, null, {degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}],
        
    ],
    oncomplete: function(){
        animation.enqueue(lineNine);
    }
};

var lineNine = {
    target: new five.Servos([
        allServos[41],
    ]),
    duration: 1000,
    easing: 'outQuint',
    cuePoints: [0, 0.166, 0.332, .498, .664, .83, 1],
    keyFrames: [
        [{degrees: down}, {degrees: up, easing: "inOutCirc"}, null, null, null, null, {degrees: down}],
        
    ],
    oncomplete: function(){
        //animation.enqueue(lineTwo);
    }
};

//console.log(ringOne.length);

//animation.enqueue(ringOne);
animation.enqueue(lineOne);


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