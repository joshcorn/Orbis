var five = require("johnny-five");
var readline = require("readline");


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var board = new five.Board();

board.on("ready", function() {
  console.log("Connected");

  // Initialize the servo instance
var down = 155;
var up = 15;

var current;

var servos = new five.Servos([
    { address: 0x40, controller: "PCA9685", pin: 0, range: [up,down] },
    { address: 0x40, controller: "PCA9685", pin: 1, range: [up,down] },
    { address: 0x40, controller: "PCA9685", pin: 2, range: [up,down] },
    { address: 0x40, controller: "PCA9685", pin: 3, range: [up,down] },
    { address: 0x40, controller: "PCA9685", pin: 4, range: [up,down] },
    { address: 0x40, controller: "PCA9685", pin: 5, range: [up,down] },
    { address: 0x40, controller: "PCA9685", pin: 6, range: [up,down] },
    { address: 0x40, controller: "PCA9685", pin: 7, range: [up,down] },
    { address: 0x40, controller: "PCA9685", pin: 8, range: [up,down] },
    { address: 0x40, controller: "PCA9685", pin: 9, range: [up,down] },
    { address: 0x40, controller: "PCA9685", pin: 10, range: [up,down] },
    { address: 0x40, controller: "PCA9685", pin: 11, range: [up,down] },
    { address: 0x40, controller: "PCA9685", pin: 12, range: [up,down] },
    { address: 0x40, controller: "PCA9685", pin: 13, range: [up,down] },
    { address: 0x40, controller: "PCA9685", pin: 14, range: [up,down] },
    { address: 0x40, controller: "PCA9685", pin: 15, range: [up,down] },
    { address: 0x41, controller: "PCA9685", pin: 0, range: [up,down] },
    { address: 0x41, controller: "PCA9685", pin: 1, range: [up,down] },
    { address: 0x41, controller: "PCA9685", pin: 2, range: [up,down] },
    { address: 0x41, controller: "PCA9685", pin: 3, range: [up,down] },
    { address: 0x41, controller: "PCA9685", pin: 4, range: [up,down] },
    { address: 0x41, controller: "PCA9685", pin: 5, range: [up,down] },
    { address: 0x41, controller: "PCA9685", pin: 6, range: [up,down] },
    { address: 0x41, controller: "PCA9685", pin: 7, range: [up,down] },
    { address: 0x41, controller: "PCA9685", pin: 8, range: [up,down] },
    { address: 0x41, controller: "PCA9685", pin: 9, range: [up,down] },
    { address: 0x41, controller: "PCA9685", pin: 10, range: [up,down] },
    { address: 0x41, controller: "PCA9685", pin: 11, range: [up,down] },
    { address: 0x41, controller: "PCA9685", pin: 12, range: [up,down] },
    { address: 0x41, controller: "PCA9685", pin: 13, range: [up,down] },
    { address: 0x41, controller: "PCA9685", pin: 14, range: [up,down] },
    { address: 0x41, controller: "PCA9685", pin: 15, range: [up,down] },
    { address: 0x42, controller: "PCA9685", pin: 0, range: [up,down] },
    { address: 0x42, controller: "PCA9685", pin: 1, range: [up,down] },
    { address: 0x42, controller: "PCA9685", pin: 2, range: [up,down] },
    { address: 0x42, controller: "PCA9685", pin: 3, range: [up,down] },
    { address: 0x42, controller: "PCA9685", pin: 4, range: [up,down] },
    { address: 0x42, controller: "PCA9685", pin: 5, range: [up,down] },
    { address: 0x42, controller: "PCA9685", pin: 6, range: [up,down] },
    { address: 0x42, controller: "PCA9685", pin: 7, range: [up,down] },
    { address: 0x42, controller: "PCA9685", pin: 8, range: [up,down] },
    { address: 0x42, controller: "PCA9685", pin: 9, range: [up,down] },
    { address: 0x42, controller: "PCA9685", pin: 10, range: [up,down] },
    { address: 0x42, controller: "PCA9685", pin: 11, range: [up,down] },
    { address: 0x42, controller: "PCA9685", pin: 12, range: [up,down] }
  ]);

    rl.setPrompt("SERVO TEST SWEEP (UP-DOWN)> ");
    rl.prompt();
    rl.on("line", function(line) {
        if(line == 99){
            servos[current].stop();
            servos[current].to(down);
        }
        else if(line >= 0 || line<=50){
            current = line;
            /*servos[current].sweep({
                range: [up, down],
                interval: 2000});
                */
            servos[current].to(up);
            rl.prompt();
        }

    }).on("close", function() {
        process.exit(0);

    //servosOne[0].sweep([up, down]);
  //servosOne.to(up);
});
});