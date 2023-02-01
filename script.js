const FocusPoint = document.querySelector(".focusPoint");
const FocusDot = document.querySelector(".focusDot");




//Focus JS
const focusPointjs = (x, y) => {
    //Defining the X and Y values
    FocusPoint.style.cssText =
        `top: ${y}px; left: ${x}px; opacity: 1`;
    FocusDot.style.cssText =
        `top: ${y}px; left: ${x}px; opacity: 1`;
};

//Animated Tires
const tires = document.querySelectorAll(".tire");
const mainTireimg = document.querySelector(".center-tire img");

let mX = 0;
let mY = 0;
const W = 100;

const animateTires = (e, x, y) => {

    if (x < mX) {
        console.log("Moved Leftward")
        tires.forEach((tire) => {
            tire.style.left = `${W}px`;
        });
        mainTireimg.style.left = `${W}px`;
    }
    else if (x > mX) {
        tires.forEach((tire) => {
            tire.style.left = `-${W}px`;
        });
        mainTireimg.style.left = `-${W}px`;
    }
    if (y < mY) {
        console.log("Moved Upwards")
        tires.forEach((tire) => {
            tire.style.top = `${W}px`;
        });
        mainTireimg.style.top = `${W}px`;
    }
    else if (y > mY) {
        tires.forEach((tire) => {
            tire.style.top = `-${W}px`;
        });
        mainTireimg.style.top = `-${W}px`;
    }

    mX = e.clientX;
    mY = e.clientY;
}

//Attaches the Focus Element to the movement of the Mouse
document.body.addEventListener("mousemove", (e) => {
    //console.log(e)
    let x = e.clientX;
    let y = e.clientY;
    //Calling the Focus Function
    focusPointjs(x, y);
    animateTires(e, x, y);
});

//Event for when the mouse leaves the site, it vanishes
document.body.addEventListener("mouseleave", (e) => {
    FocusPoint.style.opacity = '0';
    FocusDot.style.opacity = '0';
});

//Central Button JS
const centralBTNE = document.querySelectorAll(".centralButton");
centralBTNE.forEach(BTN => {
    let fader;
    BTN.addEventListener('mouseenter', e => {
        console.log(e.target.getBoundingClientRect());
        const left = e.clientX - e.target.getBoundingClientRect()
            .left;
        const top = e.clientY - e.target.getBoundingClientRect()
            .top;
        console.log(left);
        console.log(top);
        fader = document.createElement('div');
        fader.classList.add('fader');
        fader.style.left = `${left}px`;
        fader.style.top = `${top}px`;
        BTN.prepend(fader);
    });

    //Allows the original color of the button to return
    BTN.addEventListener("mouseleave", () => {
        BTN.removeChild(fader);
    });
});


//Navigation JS
const navIcon = document.querySelector('.navIcon');
const navBar = document.querySelector('.navBar');
document.addEventListener('scroll',()=>{
    navIcon.classList.add('.iconVis');
    navBar.classList.add('.iconGone');
    if(window.scrollY===0){
        navIcon.classList.remove('.iconVis');
    navBar.classList.remove('.iconGone');
    }
}

);


//About Mario Kart text in JS
const marioKarttxt = document.querySelector('.aboutMKTX');
const marioKarttxtWords = 'Mario Kart is a fun arcade racing-style game produced by Nintendo. Mario Kart 8: Deluxe is the 13th Mario kart game of the current (as of Jan 2023) 14 Mario Kart Games. The game is pretty simple in design but uses that create unique maps and fun experiences for players. Some growing experiences are speed running and competitive multiplayer. This requires having fast karts so it got me wondering. What is the average of the standard kart? The Kart that the game shows off the most, this website was made to show off the collection of data I got from testing the standard kart (full standard) and using the Mario Character.';
Array.from(marioKarttxtWords).forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;
    marioKarttxt.appendChild(span);

    span.addEventListener('mouseenter', (e) => {
        e.target.style.animation = "MKTXanim 10s infinite";
    });
});






//Plotted Chart
const scatterCtx = document.getElementById("scatterChart").getContext("2d");
const scatterChart = new Chart(scatterCtx, {
    type: "scatter",
    data: {
        datasets: [
            {
                label: "Average of Mushroom Cup",
                data: [
                    { x: 10, y: 0 },
                    { x: 0, y: 10 },
                    { x: 10, y: 5 },
                ],
            },
            {
                label: "Average of Special Cup",
                data: [
                    { x: 5, y: 5 },
                    { x: 5, y: 5 },
                    { x: 15, y: 10 },
                ],
            },
            {
                label: "Average of Standard Cup",
                data: [
                    { x: 15, y: 15 },
                    { x: 15, y: 15 },
                    { x: 1, y: 12 },
                ],
            },
            {
                label: "Average of Flower Cup",
                data: [
                    { x: 5, y: -5 },
                    { x: 5, y: 5 },
                    { x: 15, y: 10 },
                ],
            },
        ],
    },
    options: {
        scales: {
            xAxes: [
                {
                    type: "linear",
                    position: "bottom",
                },
            ],
        },
    },
});

const polarAreaCtx = document.getElementById("polarAreaChart").getContext("2d");
const polarAreaChart = new Chart(polarAreaCtx, {
    type: "polarArea",
    data: {
        labels: ["Successful Runs", "Failed Runs", "Redo Runs", "Cheated Runs"],
        datasets: [
            {
                data: [60, 10, 15, 25],
                backgroundColor: ["red", "steelBlue", "green", "yellow", "purple"],
            },
        ],
    },
});

const lineCtx = document.getElementById("lineChart").getContext("2d");
const lineChart = new Chart(lineCtx, {
    type: "line",
    data: {
        labels: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300],
        datasets: [
            {
                label: "Average Mushroom Use",
                data: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300],
                borderColor: "red",
                fill: false,
            },
        ],
    },
    options: {
        title: {
            display: true,
            text: "Average Mushroom Use Over Time"
        },
        legend: {
            labels: {
                fontSize: 18
            }
        },
        scales: {
            xAxes: [
                {
                    type: "linear",
                    position: "bottom",
                    gridLines: {
                        display: true
                    }
                },
            ],
            yAxes: [
                {
                    type: "linear",
                    gridLines: {
                        display: true
                    }
                },
            ],
        },
    },
});





//JS for the Spinning Tire and Charts
const raceCarTire = document.querySelector('.race-car-tire');

raceCarTire.style.animation = 'rotate 1s linear infinite';

