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

window.onload = function () {
  //  Chart 1 Project Chart
  var chart1 = new CanvasJS.Chart("projectChart", {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1", // "light1", "light2", "dark1", "dark2
    // dataPointWidth: 10,
    dataPointMaxWidth: 15,
    toolbar: {
      enabled: false,
    },
    axisY: {
      includeZero: true,
      interval: 40,
      lineThickness: 0,
      tickThickness: 0,
      labelFontSize: 14,
    },
    axisX: {
      includeZero: false,
      interval: 1,
      lineThickness: 0,
      tickThickness: 0,
      labelFontSize: 14,
      gridThickness: 15,
      gridColor: "#f2f2f2",
    },
    data: [
      {
        type: "column", //change type to bar, line, area, pie, etc
        //indexLabel: "{y}", //Shows y value on all Data Points
        indexLabelFontColor: "#5A5757",
        toolTipContent: "{x}<br/>{name} <strong>{y}</strong>",
        color: "#0047ff",
        name: "New Clients :",
        indexLabelFontSize: 16,
        indexLabelPlacement: "outside",

        dataPoints: [
          { x: 01, y: 70 },
          { x: 01, y: -60 },
          { x: 02, y: 20 },
          { x: 02, y: -10 },
          { x: 03, y: 75 },
          { x: 03, y: -50 },
          { x: 04, y: 20 },
          { x: 04, y: -25 },
          { x: 05, y: 50 },
          { x: 05, y: -30 },
          { x: 06, y: 40 },
          { x: 06, y: -65 },
          { x: 07, y: 65 },
          { x: 07, y: -22 },
          { x: 08, y: 15 },
          { x: 08, y: -10 },
          { x: 09, y: 40 },
          { x: 09, y: -50 },
          { x: 10, y: 55 },
          { x: 10, y: -20 },
          { x: 11, y: 60 },
          { x: 11, y: -70 },
          { x: 12, y: 20 },
          { x: 12, y: -35 },
          { x: 13, y: 75 },
          { x: 13, y: -60 },
          { x: 14, y: 40 },
          { x: 14, y: -20 },
        ],
      },
    ],
  });
  chart1.render();

  // Chart 2 Clients Charts
  var chart = new CanvasJS.Chart("chartContainer", {
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    animationEnabled: true,

    axisX: {
      interval: 1,
      intervalType: "month",
      valueFormatString: "MMM",
      labelFontSize: 12,
      gridThickness: 2,
      gridColor: "#f2f2f2",
    },

    axisY: {
      labels: false,
    },
    toolTip: {
      enabled: false,
    },
    data: [
      {
        type: "spline",
        lineThickness : 6,
        color : "#0047ff",
        markerSize: 0,
        xValueFormatString: "MMM, YYYY",
        yValueFormatString: "$###.#",
        dataPoints: [
          { x: new Date(2016, 00, 1), y: 40 },
          { x: new Date(2016, 01, 1), y: 1 },
          { x: new Date(2016, 02, 1), y: 40 },
          { x: new Date(2016, 03, 1), y: 1 },
          { x: new Date(2016, 04, 1), y: 65 },
          { x: new Date(2016, 05, 1), y: 43 },
          { x: new Date(2016, 06, 1), y: 100 },
          { x: new Date(2016, 07, 1), y: 80 },
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
