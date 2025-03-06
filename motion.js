const roadHeight = 520; // Fixed height of the road
const carHeight = 100;  // Fixed height of the cars
const finishLineBottom = 5; // Finish line's bottom offset
const finishLinePosition = roadHeight - finishLineBottom; // Finish line's top position

const carData1 = {
    imgSrc: 'blueRallye/blue rallyecar straight0000.png',
    elem: document.querySelector('#car1'),
    y: 0,
    speed: 6,
    timerId: null,
    move: function () {
        this.y += this.speed;
        if (this.y + carHeight >= finishLinePosition) {
            this.y = finishLinePosition - carHeight;
            this.elem.style.top = this.y + 'px';
            clearInterval(this.timerId);
            this.timerId = null;
        } else {
            this.elem.style.top = this.y + 'px';
        }
    },
    reset: function () {
        this.y = 0;
        this.elem.style.top = this.y + 'px';
    }
};


const carData2 = {
    imgSrc: 'redRallye/red rallyecar straight0000.png',
    elem: document.querySelector('#car2'),
    y: 0,
    speed: 7,
    timerId: null,
    move: function () {
        this.y += this.speed;
        if (this.y + carHeight >= finishLinePosition) {
            this.y = finishLinePosition - carHeight;
            this.elem.style.top = this.y + 'px';
            clearInterval(this.timerId);
            this.timerId = null;
        } else {
            this.elem.style.top = this.y + 'px';
        }
    },
    reset: function () {
        this.y = 0;
        this.elem.style.top = this.y + 'px';
    }
};


// Function called when the "Start Race" button is clicked
function startAnimation() {
    carData1.timerId = setInterval(frame1, 60);
    carData2.timerId = setInterval(frame2, 60);
}

// Callback function to move car1
function frame1() {
    carData1.move();
}

// Callback function to move car2
function frame2() {
    carData2.move();
}

// Function to reset the race
function replayRace() {
    if (carData1.timerId) clearInterval(carData1.timerId);
    if (carData2.timerId) clearInterval(carData2.timerId);
    carData1.reset();
    carData2.reset();
    startAnimation();
}
