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
    exportEnabled: false,

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
      labelFormatter: function (e) {
        if (e.value < 10) {
          return "0" + e.value;
        }
        return e.value;
      },
      lineThickness: 0,
      tickThickness: 0,
      labelFontSize: 14,
      gridThickness: 15,
      gridColor: "#f2f2f2",
      // scaleBreaks: {
      //   lineThickness: 11,
      //   autoCalculate: true,
      //   lineDashType : "straight"

      //      },
    },
    data: [
      {
        type: "column", //change type to bar, line, area, pie, etc
        //indexLabel: "{y}", //Shows y value on all Data Points
        indexLabelFontColor: "#5A5757",
        toolTipContent: `{x}<br/>{name} <strong>{y}</strong>`,
        color: "#0047ff",
        // radius: "90%",
        name: "New Clients :",
        indexLabelFontSize: 16,
        indexLabelPlacement: "outside",

        dataPoints: [
          { x: 1, y: 70 },
          { x: 1, y: -60 },
          { x: 2, y: 20 },
          { x: 2, y: -10 },
          { x: 3, y: 75 },
          { x: 3, y: -50 },
          { x: 4, y: 20 },
          { x: 4, y: -25 },
          { x: 5, y: 50 },
          { x: 5, y: -30 },
          { x: 6, y: 40 },
          { x: 6, y: -65 },
          { x: 7, y: 65 },
          { x: 7, y: -22 },
          { x: 8, y: 15 },
          { x: 8, y: -10 },
          { x: 9, y: 40 },
          { x: 9, y: -50 },
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
      includeZero: false,
      gridThickness: 2,
      gridColor: "#f2f2f2",
      tickLength: 9,
      tickColor: "#f2f2f3",
      lineColor: "#f1f1f1",
    },

    axisY: {
      labels: false,
      includeZero: false,
      labelFormatter: function () {
        return "";
      },
      lineThickness: 0,
      tickThickness: 0,
    },
    toolTip: {
      enabled: false,
    },
    data: [
      {
        type: "spline",
        lineThickness: 6,
        color: "#0047ff",
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
