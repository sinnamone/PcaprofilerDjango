$(document).ready(function () {
	var trace1 = {
		x: [1, 2, 3, 4, 5],
		y: [1, 6, 3, 6, 1],
		mode: "markers+text",
		type: "scatter",
		name: "Team A",
		text: ["A-1", "A-2", "A-3", "A-4", "A-5"],
		textposition: "top center",
		textfont: {
			family: "Raleway, sans-serif",
		},
		marker: { size: 8 },
	};

	var trace2 = {
		x: [1.5, 2.5, 3.5, 4.5, 5.5],
		y: [4, 1, 7, 1, 4],
		mode: "markers+text",
		type: "scatter",
		name: "Team B",
		text: ["B-a", "B-b", "B-c", "B-d", "B-e"],
		textfont: {
			family: "Times New Roman",
		},
		textposition: "bottom center",
		marker: { size: 8 },
	};

	var data = [trace1, trace2];

	var layout = {
		xaxis: {
			range: [0.75, 5.25],
			automargin: true,
		},
		yaxis: {
			range: [0, 8],
		},
		margin: { l: 0, r: 0, t: 0, b: 0 },
		legend: {
			y: 0.5,
			yref: "paper",
			font: {
				family: "Arial, sans-serif",
				size: 10,
				color: "grey",
			},
		},
	};
	myDiv = document.getElementById("plotly_graph4");
	Plotly.newPlot(myDiv, data, layout);
	myDiv2 = document.getElementById("plotly_graph5");
	Plotly.newPlot(myDiv2, data, layout);
	myDiv3 = document.getElementById("plotly_graph6");
	Plotly.newPlot(myDiv3, data, layout);
});
