var five = require("johnny-five");
var board = new five.Board({
});

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


var ringTwo = new five.Servos([
    allServos[0],
    allServos[4],
    allServos[6],
    allServos[13],
    allServos[15],
    allServos[20],
    allServos[23],
    allServos[27],
    allServos[31],
    allServos[35],
    allServos[37],
    allServos[42],
]);

var ringThree = new five.Servos([
    allServos[2],
    allServos[5],
    allServos[7],
    allServos[11],
    allServos[14],
    allServos[16],
    allServos[18],
    allServos[21],
    allServos[22],
    allServos[25],
    allServos[28],
    allServos[29],
    allServos[33],
    allServos[36],
    allServos[38],
    allServos[40],
    allServos[43],
    allServos[44],
]);

var animation = new five.Animation();


var downUp = [{degrees: down}, {degrees: up}, {degrees: down}];
var upDown = [{degrees: up}, {degrees: down}, {degrees: up}];

var middleBall = {
    target: allServos[10],
    duration: 2500,
    cuePoints: [0, 0.5, 1.0],
    keyFrames: downUp,
    oncomplete: function(){
        animation.enqueue(ringOne);
    }
};

var ringOne = {
    target: new five.Servos([
        allServos[1],
        allServos[9],
        allServos[17],
        allServos[24],
        allServos[32],
        allServos[39]
    ]),
    duration: 2500,
    cuePoints: [0, 0.5, 1.0],
    keyFrames: [
        downUp,
        downUp,
        downUp,
        downUp,
        downUp,
        downUp
    ],
    oncomplete: function(){
        //animation.enqueue(middleBall);
    }
};

var ringTwo = {
    target: new five.Servos([
        allServos[0],
        allServos[4],
        allServos[6],
        allServos[13],
        allServos[15],
        allServos[20],
        allServos[23],
        allServos[27],
        allServos[31],
        allServos[35],
        allServos[37],
        allServos[42],
    ]),
    duration: 2500,
    cuePoints: [0, 0.5, 1.0],
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
        downUp,
        downUp,
        downUp,
    ],
    oncomplete: function(){
        animation.enqueue(ringThree);
    }
};

var ringThree = {
    target: new five.Servos([
        allServos[2],
        allServos[5],
        allServos[7],
        allServos[11],
        allServos[14],
        allServos[16],
        allServos[18],
        allServos[21],
        allServos[22],
        allServos[25],
        allServos[28],
        allServos[29],
        allServos[33],
        allServos[36],
        allServos[38],
        allServos[40],
        allServos[43],
        allServos[44],
    ]),
    duration: 2500,
    cuePoints: [0, 0.5, 1.0],
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
        animation.enqueue(ringOuter);
    }
};

var ringOuter = {
    target: new five.Servos([
        allServos[3],
        allServos[8],
        allServos[12],
        allServos[19],
        allServos[26],
        allServos[30],
        allServos[34],
        allServos[41],
    ]),
    duration: 2500,
    cuePoints: [0, 0.5, 1.0],
    keyFrames: [
        downUp,
        downUp,
        downUp,
        downUp,
        downUp,
        downUp,
        downUp,
        downUp
        ]
};

//console.log(ringOne.length);

//animation.enqueue(ringOne);
animation.enqueue(middleBall);


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