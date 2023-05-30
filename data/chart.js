// Bar chart
var peaknames = ["Total", "Soldiers", "Civilians",];
var typeNums = [23, 23, 0,];
var typeNums2 = [516, 314, 202,]

var context = document.getElementById("barchart");
var barchart = new Chart(context, {
  type: 'bar',
  data: {
    labels: peaknames,
    datasets: [
      {
        label: "United States",
        backgroundColor: "#3e95cd",
        data: typeNums
      },
      {
        label: "Panama",
        backgroundColor: "red",
        data: typeNums2
      }
    ]
  },
  options: {
    legend: { display: false },
    }
  });