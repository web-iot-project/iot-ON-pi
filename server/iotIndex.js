var Gpio = require('onoff').Gpio
var LED = new Gpio(4, 'out') //use GPIO pin 4, change the 4 to respecify the pin number
var blinkInterval = setInterval(blinkLED, 250); // this sets the blink interval to 250ms
const express = require ('express');
const cors = require('cors');
const bodyParser = require('body-parser')


function blinkLED() { //function to start blinking
    if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
      LED.writeSync(1); //set pin state to 1 (turn LED on)
    } else {
      LED.writeSync(0); //set pin state to 0 (turn LED off)
    }
  }
  
  function endBlink() { //function to stop blinking
    clearInterval(blinkInterval); // Stop blink intervals
    LED.writeSync(0); // Turn LED off
    LED.unexport(); // Unexport GPIO to free resources
  }
  
  setTimeout(endBlink, 10000); //stop blinking after 5 seconds