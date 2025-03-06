const roadHeight = 520; // Fixed height of the road
const carHeight = 100;  // Fixed height of the cars
const finishLineBottom = 3; // Finish line's bottom offset
const finishLinePosition = roadHeight - finishLineBottom; // Finish line's top position


const cars = [
    {
        imgSrc: 'blueRallye/blue rallyecar straight0000.png',
        elem: document.querySelector('#car1'),
        y: 0,
        speed: 5,
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
    },
    {
        imgSrc: 'redRallye/red rallyecar straight0000.png',
        elem: document.querySelector('#car2'),
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
    }
];


// Function called when the "Start Race" button is clicked
function startAnimation() {
    cars.forEach((car, index) => {
        car.timerId = setInterval(() => car.move(), 50); // Decreased interval duration for smoother animation
    });
}

// Function to reset the race
function replayRace() {
    cars.forEach((car) => {
        if (car.timerId) clearInterval(car.timerId);
        car.reset();
    });
    startAnimation();
}
