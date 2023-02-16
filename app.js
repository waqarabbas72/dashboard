// Progresss Bar
let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 75;
let speed = 20;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressEndValue}%`;
  progressBar.style.background = `conic-gradient(
        #0066ff ${progressValue * 3.6}deg,
        #cadcff ${progressValue * 3.6}deg
    )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);

// Project Chart

// Clients Charts
window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    animationEnabled: true,

    axisX: {
      interval: 1,
      intervalType: "month",
      valueFormatString: "MMM",
    },

    data: [
      {
        type: "line",
        markerSize: 0,
        xValueFormatString: "MMM, YYYY",
        yValueFormatString: "$###.#",
        dataPoints: [
          {
            x: new Date(2016, 00, 1),
            y: 40,
            markerColor: "#6B8E23",
            markerType: "cross",
          },
          { x: new Date(2016, 01, 1), y: 1, markerColor: "#6B8E23" },
          { x: new Date(2016, 02, 1), y: 40, markerColor: "tomato" },
          { x: new Date(2016, 03, 1), y: 1, markerColor: "tomato" },
          { x: new Date(2016, 04, 1), y: 65, markerColor: "#6B8E23" },
          { x: new Date(2016, 05, 1), y: 43, markerColor: "#6B8E23" },
          { x: new Date(2016, 06, 1), y: 100, markerColor: "tomato" },
          { x: new Date(2016, 07, 1), y: 80, markerColor: "tomato" },
        ],
      },
    ],
  });
  chart.render();
};

// menu button
let menu = document.querySelector("#menuBtn");
// Menu Button Event
menu.addEventListener("click", openMenu);
function openMenu() {
  if (menu.classList.contains("bx-menu")) {
    menu.classList.remove("bx-menu");
    menu.classList.add("bx-x");
    document.querySelector(".side-bar").style.display = "block";
  } else if (menu.classList.contains("bx-x")) {
    menu.classList.remove("bx-x");
    menu.classList.add("bx-menu");
    document.querySelector(".side-bar").style.display = "none";
  }
}
