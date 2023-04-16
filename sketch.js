// variable to hold an instance of the p5.webserial library:
const serial = new p5.WebSerial();

// HTML button object:
let portButton;
let inData;                   // for incoming serial data
let outByte = 0;              // for outgoing data
 
let b12 = true;
let b11 = true;
let b10 = true;
let b9 = true;
let b8 = true;
let b7 = true;
let b6 = true;
let b5 = true;
let b4 = true;
let b3 = true;
let b2 = true;
let b1 = true;

let cx, cy; //cx, cy is to set the x, y to center
let secondsRadius; //secondRadius is the size of the radius
let minutesRadius;
let hoursRadius;
let clockDiameter;
let button1;
let button2;
let button3;
let button4;
let button5;
let button6;
let button7;
let button8;
let button9;
let button10;
let button11;
let button12;
let bg;
// let mySynth = new p5.MonoSynth()

let galaxy;

let hourlyMajor;
let hourlyMinor;

let twelveAM;
let twelveAMnormal;
let twelvePM;
let twelvePMnormal;

let oneAM;
let oneAMnormal;
let onePM;
let onePMnormal;

let twoAM;
let twoAMnormal;
let twoPM;
let twoPMnormal;

let threeAM;
let threeAMnormal;
let threePM;
let threePMnormal;

let fourAM;
let fourAMnormal;
let fourPM;
let fourPMnormal;

let fiveAM;
let fiveAMnormal;
let fivePM;
let fivePMnormal;

let sixAM;
let sixAMnormal;
let sixPM;
let sixPMnormal;

let sevenAM;
let sevenAMnormal;
let sevenPM;
let sevenPMnormal;

let eightAM;
let eightAMnormal;
let eightPM;
let eightPMnormal;

let nineAM;
let nineAMnormal;
let ninePM;
let ninePMnormal;

let tenAM;
let tenAMnormal;
let tenPM;
let tenPMnormal;

let elevenAM;
let elevenAMnormal;
let elevenpM;
let elevenpMnormal;

let reverb;
let hourly = true;


function preload(){

  // galaxy = loadImage('pics/gs.png');

  hourlyMajor = loadSound ('sounds1/hourlyMajor.wav');
  hourlyMinor = loadSound ('sounds1/hourlyMinor.wav');

  twelveAM = loadSound('sounds1/12am.wav');
  twelveAMnormal = loadSound('sounds1/12am.wav');
  twelvePM = loadSound('sounds1/12pm.wav');
  twelvePMnormal = loadSound('sounds1/12am.wav');

  oneAM = loadSound('sounds1/1am.wav');
  oneAMnormal = loadSound('sounds1/1am.wav');
  onePM = loadSound('sounds1/1pm.wav');
  onePMnormal = loadSound('sounds1/1pm.wav');

  twoAM = loadSound('sounds1/2am.wav');
  twoAMnormal = loadSound('sounds1/2am.wav');
  twoPM = loadSound('sounds1/2pm.wav');
  twoPMnormal = loadSound('sounds1/2pm.wav');

  threeAM = loadSound('sounds1/3am.wav');
  threeAMnormal = loadSound('sounds1/3am.wav');
  threePM = loadSound('sounds1/3pm.wav');
  threePMnormal = loadSound('sounds1/3pm.wav');
   

  fourAM = loadSound('sounds1/4am.wav');
  fourAMnormal = loadSound('sounds1/4am.wav');
  fourPM = loadSound('sounds1/4pm.wav');
  fourPMnormal = loadSound('sounds1/4pm.wav');

  fiveAM = loadSound('sounds1/5am.wav');
  fiveAMnormal = loadSound('sounds1/5am.wav');
  fivePM = loadSound('sounds1/5pm.wav');
  fivePMnormal = loadSound('sounds1/5pm.wav');

  sixAM = loadSound('sounds1/6am.wav');
  sixAMnormal = loadSound('sounds1/6am.wav');
  sixPM = loadSound('sounds1/6pm.wav');
  sixPMnormal = loadSound('sounds1/6pm.wav');

  sevenAM = loadSound('sounds1/7am.wav');
  sevenAMnormal = loadSound('sounds1/7am.wav');
  sevenPM = loadSound('sounds1/7pm.wav');
  sevenPMnormal = loadSound('sounds1/7pm.wav');

  eightAM = loadSound('sounds1/8am.wav');
  eightAMnormal = loadSound('sounds1/8am.wav');
  eightPM = loadSound('sounds1/8pm.wav');
  eightPMnormal = loadSound('sounds1/8pm.wav');

  nineAM = loadSound('sounds1/9am.wav');
  nineAMnormal = loadSound('sounds1/9am.wav');
  ninePM = loadSound('sounds1/9pm.wav');
  ninePMnormal = loadSound('sounds1/9pm.wav');

  tenAM = loadSound('sounds1/10am.wav');
  tenAMnormal = loadSound('sounds1/10am.wav');
  tenPM = loadSound('sounds1/10pm.wav');
  tenPMnormal = loadSound('sounds1/10pm.wav');

  elevenAM = loadSound('sounds1/11am.wav');
  elevenAMnormal = loadSound('sounds1/11am.wav');
  elevenPM = loadSound('sounds1/11pm.wav');
  elevenPMnormal = loadSound('sounds1/11pm.wav');

}





function setup() {

//webserial stuff
  // check to see if serial is available:
  if (!navigator.serial) {
    alert("WebSerial is not supported in this browser. Try Chrome or MS Edge.");
  } 

  
  // if serial is available, add connect/disconnect listeners:
  navigator.serial.addEventListener("connect", portConnect);
  navigator.serial.addEventListener("disconnect", portDisconnect);
  // check for any ports that are available:
  serial.getPorts();
  // if there's no port chosen, choose one:
  serial.on("noport", makePortButton);
  // open whatever port is available:
  serial.on("portavailable", openPort);
  // handle serial errors:
  serial.on("requesterror", portError);
  // handle any incoming serial data:
  serial.on("data", serialEvent);
  serial.on("close", makePortButton);


//webserial ends



   bg = loadImage('galaxy.jpg');
    // bg = loadImage('pics/gsg.png');
  
 
   
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  reverb = new p5.Reverb()
  delay = new p5.Delay()
  
  twelveAM.disconnect();
  twelvePM.disconnect();
  oneAM.disconnect();
  onePM.disconnect();
  twoAM.disconnect();
  twoPM.disconnect();
  threeAM.disconnect();
  threePM.disconnect();
  fourAM.disconnect();
  fourPM.disconnect();
  fiveAM.disconnect();
  fivePM.disconnect();
  sixAM.disconnect();
  sixPM.disconnect();
  sevenAM.disconnect();
  sevenPM.disconnect();
  eightAM.disconnect();
  eightPM.disconnect();
  nineAM.disconnect();
  ninePM.disconnect();
  tenAM.disconnect();
  tenPM.disconnect();
  elevenAM.disconnect();
  elevenPM.disconnect();
  

  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.45;
  minutesRadius = radius * 0.35;
  hoursRadius = radius * 0.30;
  clockDiameter = radius ;


  cx = width / 2;
  cy = height / 2;
  drawButtons()
  
}




// if there's no port selected, 
// make a port select button appear:
function makePortButton() {
  // create and position a port chooser button:
  portButton = createButton("choose port");
  portButton.position(10, 10);
  // give the port button a mousepressed handler:
  portButton.mousePressed(choosePort);
}
 
// make the port selector window appear:
function choosePort() {
  if (portButton) portButton.show();
  serial.requestPort();
}
 
// open the selected port, and make the port 
// button invisible:
function openPort() {
  // wait for the serial.open promise to return,
  // then call the initiateSerial function
  serial.open().then(initiateSerial);
 
  // once the port opens, let the user know:
  function initiateSerial() {
    console.log("port open");
  }
  // hide the port button once a port is chosen:
  if (portButton) portButton.hide();
}
 
// pop up an alert if there's a port error:
function portError(err) {
  alert("Serial port error: " + err);
}
// read any incoming data as a string
// (assumes a newline at the end of it):
function serialEvent() {
  inData = (serial.readLine());
  console.log(inData);
}
 
// try to connect if a new serial port 
// gets added (i.e. plugged in via USB):
function portConnect() {
  console.log("port connected");
  serial.getPorts();
}
 
// if a port is disconnected:
function portDisconnect() {
  serial.close();
  console.log("port disconnected");
}
 
function closePort() {
  serial.close();
}







function triggerDrawings(Data){

  //button12
  if (Data == 12){
    
    ellipse(windowWidth/2, windowHeight/2, 55, 10, 45, 80);
    playMusic(12);
    b12 = false;

  }else if (Data == "12Short"){
   
   
    rect(windowWidth/2 - 30, 132, 55, 55);
    b12 = true;
   

  } else if (Data == "12Medium"){
    fill(150,50,90);
    rect(windowWidth/2 - 30, 105, 55, 55);
    b12 = true;
   
  } else if (Data == "12Long"){
    fill(150,90,90);
    rect(windowWidth/2 - 30, 85, 55, 55);
    b12 = true;
  
  }

  //button 11
  if (Data == 11){
    
    ellipse(windowWidth/2, windowHeight/2, 10, 68, 40, 70);
    playMusic(11);
    b11 = false;

  }else if (Data == "11Short"){
    rect(windowWidth/2 - 172, 175, 55, 55);
    b11 = true;
   

  } else if (Data == "11Medium"){
    fill(150,50,90);
    rect(windowWidth/2 - 205, 153, 55, 55);
    b11 = true;
   
  } else if (Data == "11Long"){
    fill(150,90,90);
    rect(windowWidth/2 - 230, 130, 55, 55);
    b11 = true;

  }

  //button10
  if (Data == 10){
    
    ellipse(windowWidth/2, windowHeight/2, 25, 78, 45, 80);
    playMusic(10);
    b10 = false;

  }else if (Data == "10Short"){
    rect(windowWidth/2 - 260, 260, 55, 55);
    b10 = true;
   

  } else if (Data == "10Medium"){
    fill(150,50,90);
    rect(windowWidth/2 - 300, 260, 55, 55);
    b10 = true;
   
  } else if (Data == "10Long"){
    fill(150,90,90);
    rect(windowWidth/2 - 320, 260, 55, 55);
    b10 = true;

  }

  //button 9
  if (Data == 9){
    
    ellipse(windowWidth/2, windowHeight/2, 30, 73, 45, 80);
    playMusic(9);
    b9 = false;

  }else if (Data == "9Short"){
    rect(windowWidth/2 - 315, 370, 55, 55);
    b9 = true;
   

  } else if (Data == "9Medium"){
    fill(150,50,90);
    rect(windowWidth/2 - 347, 370, 55, 55);
    b9 = true;
   
  } else if (Data == "9Long"){
    fill(150,90,90);
    rect(windowWidth/2 - 380, 370, 55, 55);
    b9 = true;

  }

  //button8
  if (Data == 8){
    
    ellipse(windowWidth/2, windowHeight/2, 35, 70, 45, 80);
    playMusic(8);
    b8 = false;

  }else if (Data == "8Short"){
    rect(windowWidth/2 - 265, 480, 55, 55);
    b8 = true;
   

  } else if (Data == "8Medium"){
    fill(150,50,90);
    rect(windowWidth/2 - 300, 480, 55, 55);
    b8 = true;
   
  } else if (Data == "8Long"){
    fill(150,90,90);
    rect(windowWidth/2 - 325, 480, 55, 55);
    b8 = true;

  }

  //button 7
  if (Data == 7){
    
    ellipse(windowWidth/2, windowHeight/2, 45, 70, 45, 80);
    playMusic(7);
    b7 = false;

  }else if (Data == "7Short"){
    rect(windowWidth/2 - 168, 593, 55, 55);
    b7 = true;
   

  } else if (Data == "7Medium"){
    fill(150,50,90);
    rect(windowWidth/2 - 200, 628, 55, 55);
    b7 = true;
   
  } else if (Data == "7Long"){
    fill(150,90,90);
    rect(windowWidth/2 - 230, 635, 55, 55);
    b7 = true;

  }
  
//button6
if (Data == 6){
    
  ellipse(windowWidth/2, windowHeight/2, 50, 75, 45, 80);
  playMusic(6);
  b6 = false;

}else if (Data == "6Short"){
  rect(windowWidth/2 - 28, 615, 55, 55);
  b6 = true;
 

} else if (Data == "6Medium"){
  fill(150,50,90);
  rect(windowWidth/2 - 28, 645, 55, 55);
  b6 = true;
 
} else if (Data == "6Long"){
  fill(150,90,90);
  rect(windowWidth/2 - 28, 662, 55, 55);
  b6 = true;

}

//button 5 
if (Data == 5){
    
  ellipse(windowWidth/2, windowHeight/2, 55, 60, 45, 80);
  playMusic(5);
  b5 = false;

}else if (Data == "5Short"){
  rect(windowWidth/2 + 115, 585, 55, 55);
  b5 = true;
 

} else if (Data == "5Medium"){
  fill(150,50,90);
  rect(windowWidth/2 + 150, 615, 55, 55);
  b5 = true;
 
} else if (Data == "5Long"){
  fill(150,90,90);
  rect(windowWidth/2 + 175, 625, 55, 55);
  b5 = true;

}

//button 4
if (Data == 4){
    
  ellipse(windowWidth/2, windowHeight/2, 55, 50, 45, 80);
  playMusic(4);
  b4 = false;

}else if (Data == "4Short"){
  rect(windowWidth/2 + 195, 482, 55, 55);
  b4 = true;
 

} else if (Data == "4Medium"){
  fill(150,50,90);
  rect(windowWidth/2 + 225, 482, 55, 55);
  b4 = true;
 
} else if (Data == "4Long"){
  fill(150,90,90);
  rect(windowWidth/2 + 250, 480, 55, 55);
  b4 = true;

}

//button3
if (Data == 3){
    
  ellipse(windowWidth/2, windowHeight/2, 55, 40, 45, 80);
  playMusic(3);
  b3 = false;

}else if (Data == "3Short"){
  rect(windowWidth/2 + 245, 372, 55, 55);
  b3 = true;
 

} else if (Data == "3Medium"){
  fill(150,50,90);
  rect(windowWidth/2 + 275, 372, 55, 55);
  b3 = true;
 
} else if (Data == "3Long"){
  fill(150,90,90);
  rect(windowWidth/2 + 300, 372, 55, 55);
  b3 = true;

}

//button 2
if (Data == 2){
    
  ellipse(windowWidth/2, windowHeight/2, 55, 30, 45, 80);
  playMusic(2);
  b2 = false;

}else if (Data == "2Short"){
  rect(windowWidth/2 + 195, 262, 55, 55);
  b2 = true;
 

} else if (Data == "2Medium"){
  fill(150,50,90);
  rect(windowWidth/2 + 225, 262, 55, 55);
  b2 = true;
 
} else if (Data == "2Long"){
  fill(150,90,90);
  rect(windowWidth/2 + 250, 262, 55, 55);
  b2 = true;

}

//button1
if (Data == 1){
    
  ellipse(windowWidth/2, windowHeight/2, 55, 20, 45, 80);
  playMusic(1);
  b1 = false;

}else if (Data == "1Short"){
  rect(windowWidth/2 + 116, 177, 55, 55);
  b1 = true;
 

} else if (Data == "1Medium"){
  fill(150,50,90);
   rect(windowWidth/2 + 146, 152, 55, 55);
  b1 = true;
 
} else if (Data == "1Long"){
  fill(150,90,90);
   rect(windowWidth/2 + 175, 130, 55, 55);
  b1 = true;

}


}


function draw() {





  // Draw the clock background
  background(bg);
  noStroke();
  fill(244, 122, 158);
  // ellipse(cx, cy, clockDiameter + 25, clockDiameter + 25);
  fill(237, 34, 93);
  // ellipse(cx, cy, clockDiameter, clockDiameter);

    //trigger from arduino 
    triggerDrawings(inData)

 if (minute() == 0){
  if (hourly) {
    if(hour()> 12){
      hourlyMajor.play()
      hourly = false
    }else{
      hourlyMinor.play()
      hourly = false
    }
  }
 }

 if (minute() !==0){
  hourly = true
 }
  

  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;



  // Draw the hands of the clock
  stroke(255);
  strokeWeight(1);
  
  line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  strokeWeight(2);
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  strokeWeight(4);
  line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);
  

 


  
  // Draw the hour ticks
  strokeWeight(10);
  stroke(220,110,70);
 
  beginShape(POINTS);
  for (let a = 0; a < 360; a += 30) {
    let angle = radians(a);
    let x = cx + cos(angle) * secondsRadius;
    let y = cy + sin(angle) * secondsRadius;
    vertex(x, y);
  }
  endShape();
  
  

  
  
  
}

function drawButtons(){
  button12 = createButton('12');
  button12.position(cx-20, cy-250);
  button12.mousePressed(() => {
    playMusic(12)
  })
  
  
  button1 = createButton('1');
  button1.position(cx+130, cy-205);
  button1.mousePressed(() => {
    playMusic(1)
  })
  // button1.mousePressed(changeBG);
  
  
    button2 = createButton('2');
  button2.position(cx+210, cy-120);
  button2.mousePressed(() => {
    playMusic(2)
  })
  // button2.mousePressed(changeBG);
  
      button3 = createButton('3');
  button3.position(cx+260, cy-10);
  button3.mousePressed(() => {
    playMusic(3)
  })
  // button3.mousePressed(changeBG);
  
  button4 = createButton('4');
  button4.position(cx+210, cy+100);
  button4.mousePressed(() => {
    reverb.process(fourPM, 3,2)
    playMusic(4)
  })
  // button4.mousePressed(changeBG);
  
  button5 = createButton('5');
  button5.position(cx+130, cy+200);
  button5.mousePressed(() => {
    reverb.process(fivePM, 3,2)
    playMusic(5)
  })
  // button5.mousePressed(changeBG);
  
  button6 = createButton('6');
  button6.position(cx-13, cy+230);
  button6.mousePressed(() => {
    playMusic(6)
  })
  // button6.mousePressed(changeBG);
  
   
  button7= createButton('7');
  button7.position(cx-150, cy+210);
  button7.mousePressed(() => {
    playMusic(7)
  })
  // button7.mousePressed(changeBG);
  
    button8= createButton('8');
  button8.position(cx-250, cy+100);
  button8.mousePressed(() => {
    playMusic(8)
  })
  // button8.mousePressed(changeBG);
  
      button9= createButton('9');
  button9.position(cx-300, cy-10);
  button9.mousePressed(() => {
    playMusic(9)
  })

  
        button10= createButton('10');
  button10.position(cx-250, cy-120);
  button10.mousePressed(() => {
    playMusic(10)
  })
  
  
        button11= createButton('11');
  button11.position(cx-160, cy-205);
  button11.mousePressed(() => {
    playMusic(11)
  })

}












function playMusic(id) {
  userStartAudio()
  const AM = getCurrentTime()
  // const PM = getCurrentTime()
  const mappedVal = map (minute(), 0, 59, 0, 100)
  console.log(mappedVal)
  reverb.drywet(mappedVal/100)

  if (AM) {
    switch(id) {
      case 12:
        if (hour() == 12){
           if (b12 == true){
          reverb.process(twelveAM, 3,2)
          delay.process(twelveAM, mappedVal/400, .7, 2300);
          twelveAM.play()
           }
        }else{
          if (b12== true){
          twelveAMnormal.play()
        }
      }
     break

      case 1:
        if (hour() == 1){
          if (b1 == true){
          reverb.process(oneAM, 3,2)
          delay.process(oneAM, mappedVal/400, .7, 2300);
          oneAM.play()
          }
        }else{
          if (b1 == true){
          oneAMnormal.play()
        }
      }
      break

      case 2:
        if (hour() == 2){
          if (b2 == true){
          reverb.process(twoAM, 3,2)
          delay.process(twoAM, mappedVal/400, .7, 2300);
          twoAM.play()
          }
        }else{
          if (b2 == true){
          twoAMnormal.play()
        }
      }
        break

        case 3:
          if (hour() == 3){
            if (b3 == true){
            reverb.process(threeeAM, 3,2)
            delay.process(threeAM, mappedVal/400, .7, 2300);
            threeAM.play()
            }
          }else{
            if (b3 == true){
            threeAMnormal.play()
          }
        }
        break

        case 4:
          if (hour() == 4){
            if (b4 == true){
            reverb.process(fourAM, 3,2)
            delay.process(fourAM, mappedVal/400, .7, 2300);
            fourAM.play()
            }
          }else{
            if (b4 == true){
            fourAMnormal.play()
          }
        }
      break

      case 5:
        if (hour() == 5){
          if (b5 == true){
          reverb.process(fiveAM, 3,2)
          delay.process(fiveAM, mappedVal/400, .7, 2300);
          fiveAM.play()
          }
        }else{
          if (b5 == true){
          fiveAMnormal.play()
        }
      }
        break

        case 6:
          if (hour() == 6){
            if (b6 == true){
            reverb.process(sixAM, 3,2)
            delay.process(sixAM, mappedVal/400, .7, 2300);
            sixAM.play()
            }
          }else{
            if (b6 == true){
            sixAMnormal.play()
          }
        }
        break

        case 7:
          if (hour() == 7){
            if (b7 == true){
            reverb.process(sevenAM, 3,2)
            delay.process(sevenAM, mappedVal/400, .7, 2300);
            sevenAM.play()
            }
          }else{
            if (b7 == true){
            sevenAMnormal.play()
          }
        }
          break

          case 8:
            if (hour() == 8){
              if (b8 == true){
              reverb.process(eightAM, 3,2)
              delay.process(eightAM, mappedVal/400, .7, 2300);
              eightAM.play()
              }
            }else{
              if (b8 == true){
              eightAMnormal.play()
            }
          }
            break

            case 9:
              if (hour() == 9){
                if (b9 == true){
                reverb.process(nineAM, 3,2)
                delay.process(nineAM, mappedVal/400, .7, 2300);
                nineAM.play()
                }
              }else{
                if (b9 == true){
                nineAMnormal.play()
              }
            }
            break

            case 10:
              if (hour() == 10){
                if (b10 == true){
                reverb.process(tenAM, 3,2)
                delay.process(tenAM, mappedVal/400, .7, 2300);
                tenAM.play()
                }
              }else{
                if (b10 == true){
                tenAMnormal.play()
              }
            }
          break

          case 11:
            if (hour() == 11){
              if (b11 == true){
              reverb.process(elevenAM, 3,2)
              delay.process(elevenAM, mappedVal/400, .7, 2300);
              elevenAM.play()
              }
            }else{
              if (b11 == true){
              elevenAMnormal.play()
            }
          }
            break
            
    }

  }else {
    switch(id) {
      case 12:
        if (hour()-12 == 0){
          if (b12 == true){
          reverb.process(twelvePM, 3,2)
          delay.process(twelvePM, mappedVal/400, .7, 2300);
          twelvePM.play()
          // console.log("hi");
          }
          
        }else{
          if (b12 == true){
          twelvePMnormal.play()
          }
        }
      break

      case 1:
        if (hour()-12 == 1){
          if (b1 == true){
          reverb.process(onePM, 3,2)
          delay.process(onePM, mappedVal/400, .7, 2300);
          onePM.play()
          }
          
        }else{
          if (b1 == true){
          onePMnormal.play()
        }
        }
      break

      case 2:
        if (hour()-12 == 2){
          if (b2 == true){
          reverb.process(twoPM, 3,2)
          delay.process(twoPM, mappedVal/400, .7, 2300);
          twoPM.play()
          }
        }else{
          if (b2 == true){
          twoPMnormal.play()
          }
        }
        break

        case 3:
          if (hour()-12 == 3){
            if (b3 == true){
            reverb.process(threePM, 3,2)
            delay.process(threePM, mappedVal/400, .7, 2300);
            threePM.play()
            }
          }else{
            if (b3 == true){
            threePMnormal.play()
          }
        }
        break

        case 4:
          if (hour()-12 == 4){
            if (b4 == true){
            reverb.process(fourPM, 3,2)
            delay.process(fourPM, mappedVal/400, .7, 2300);
            fourPM.play()
            }
          }else{
            if (b4 == true){
            fourPMnormal.play()
          
          }
        }
            // reverb(mappedVal)
            // reverb.drywet(mappedVal/100)
          break

          case 5:
            if (hour()-12 == 5){
              if (b5 == true){
              reverb.process(fivePM, 3,2)
              delay.process(fivePM, mappedVal/400, .7, 2300);
              fivePM.play()
              }
            }else{
              if (b5 == true){
              fivePMnormal.play()
            }
          }
            break
            
            case 6:
              if (hour()-12 == 6){
                if (b6 == true){
                reverb.process(sixPM, 3, 2)
                delay.process(sixPM, mappedVal/400, .7, 2300);
                sixPM.play()
                }
              }else{
                if (b6 == true){
                sixPMnormal.play()
                  // reverb(mappedVal)
            // reverb.drywet(mappedVal/100)
              }
            }
            break

        
            case 7:
              if (hour()-12 == 7){
                if (b7 == true){
                reverb.process(sevenPM, 3,2)
                delay.process(sevenPM, mappedVal/400, .7, 2300);
                sevenPM.play()
                }
              }else{
                if (b7 == true){
                sevenPMnormal.play()
              }
            }
              break

              case 8:
                if (hour()-12 == 8){
                  if (b8 == true){
                  reverb.process(eightPM, 3,2)
                  delay.process(eightPM, mappedVal/400, .7, 2300);
                  eightPM.play()
                  }
                }else{
                  if (b8 == true){
                  eightPMnormal.play()
                }
              }
                break

                case 9:
                  if (hour()-12 == 9){
                    if (b9 == true){
                    reverb.process(ninePM, 3,2)
                    delay.process(ninePM, mappedVal/400, .7, 2300);
                    ninePM.play()
                    }
                  }else{
                    if (b9 == true){
                    ninePMnormal.play()
                  }
                }
                break

                case 10:
                  if (hour()-12 == 10){
                    if (b10 == true){
                    reverb.process(tenPM, 3,2)
                    delay.process(tenPM, mappedVal/400, .7, 2300);
                    tenPM.play()
                    }
                  }else{
                    if (b10 == true){
                    tenPMnormal.play()
                  }
                }
              break

              case 11:
                if (hour()-12 == 11){
                  if (b11 == true){
                  reverb.process(elevenPM, 3,2)
                  delay.process(elevenPM, mappedVal/400, .7, 2300);
                  elevenPM.play()
                  }
                }else{
                  if (b11 == true){
                  elevenPMnormal.play()
                }
              }
                break
                
    
  }

}
}







function getCurrentTime() {
  let AM = false
  if (hour () > 12) {
    AM = false
  } else {
    AM = true
  }
  return AM
}

