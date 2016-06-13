var randomScalingFactor = function () {
    return Math.round(Math.random() * 1000)
};

var barChartData = {
    labels: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень"],
    datasets: [
        {
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
				},
        {
            fillColor: "rgba(48, 164, 255, 0.2)",
            strokeColor: "rgba(48, 164, 255, 0.8)",
            highlightFill: "rgba(48, 164, 255, 0.75)",
            highlightStroke: "rgba(48, 164, 255, 1)",
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
				}
			]

}


window.onload = function () {
    var chart2 = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(chart2).Bar(barChartData, {
        responsive: true
    });
};
