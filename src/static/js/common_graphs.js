$(document).ready(function () {function makeplot() {
    Plotly.d3.csv("https://raw.githubusercontent.com/sinnamone/PCAprofiler/main/sample.csv", function(data){ processData(data) } );

}

function processData(allRows) {

    console.log(allRows);
    var x = [], y = [], col=[],linex=[],liney=[];

    for (var i=0; i<allRows.length; i++) {
        row = allRows[i];
        x.push( row['PC1'] );
        y.push( row['PC2'] );
        col.push( row['GROUP']);
        linex.push(row['Comp1'] );
        liney.push(row['Comp2'] )
    }
    console.log( 'X',x, 'Y',y, 'col',col,'linex',linex,'liney',liney );
    makePlotly( x, y,col,linex,liney );
 }

 function makePlotly( x, y, col,linex,liney ){
    var myDiv = document.getElementById("plotly_graph1");
    var trace1 = [{
        type: 'scatter',
        x: x,
        y: y,
        mode: 'markers',
        transforms: [{type: 'groupby',groups: col,    styles: [
            {target: 'NORMAL', value: {marker: {color: 'rgb(0,0,255)',size: 8,line: {color: 'DarkSlateGrey',width: 2}}}},
            {target: 'PRIMARY', value: {marker: {color: 'rgb(255,165,0)',size: 8,line: {color: 'DarkSlateGrey',width: 2}}}},
            {target: 'CRPC', value: {marker: {color: 'rgb(0,128,0)',size: 8,line: {color: 'DarkSlateGrey',width: 2}}}},
            {target: 'NEPC', value: {marker: {color: 'rgb(255,0,0)',size: 8,line: {color: 'DarkSlateGrey',width: 2}}}}
          ]
        }]
    }];

    var layout = {
  autosize: true,
  width: 380,
  height: 330,
};
    var config = {responsive: true};

    Plotly.newPlot(myDiv, trace1,layout,config);
 };
 makeplot();
 });

$(document).ready(function () {function makeplot() {
    Plotly.d3.csv("https://raw.githubusercontent.com/sinnamone/PCAprofiler/main/sample.csv", function(data){ processData(data) } );

}

function processData(allRows) {

    console.log(allRows);
    var x = [], y = [], col=[],linex=[],liney=[];

    for (var i=0; i<allRows.length; i++) {
        row = allRows[i];
        x.push( row['PC1'] );
        y.push( row['PC2'] );
        col.push( row['GROUP']);
        linex.push(row['Comp1'] );
        liney.push(row['Comp2'] )
    }
    console.log( 'X',x, 'Y',y, 'col',col,'linex',linex,'liney',liney );
    makePlotly( x, y,col,linex,liney );
 }

 function makePlotly( x, y, col,linex,liney ){
    var myDiv = document.getElementById("plotly_graph2");
    var trace1 = [{
        type: 'scatter',
        x: x,
        y: y,
        mode: 'markers',
        transforms: [{type: 'groupby',groups: col,    styles: [
            {target: 'NORMAL', value: {marker: {color: 'rgb(0,0,255)',size: 8,line: {color: 'DarkSlateGrey',width: 2}}}},
            {target: 'PRIMARY', value: {marker: {color: 'rgb(255,165,0)',size: 8,line: {color: 'DarkSlateGrey',width: 2}}}},
            {target: 'CRPC', value: {marker: {color: 'rgb(0,128,0)',size: 8,line: {color: 'DarkSlateGrey',width: 2}}}},
            {target: 'NEPC', value: {marker: {color: 'rgb(255,0,0)',size: 8,line: {color: 'DarkSlateGrey',width: 2}}}}
          ]
        }]
    }];

    var layout = {
  autosize: true,
  width: 380,
  height: 330,
};
    var config = {responsive: true};

    Plotly.newPlot(myDiv, trace1,layout,config);
 };
 makeplot();
 });
$(document).ready(function () {function makeplot() {
    Plotly.d3.csv("https://raw.githubusercontent.com/sinnamone/PCAprofiler/main/sample.csv", function(data){ processData(data) } );

}

function processData(allRows) {

    console.log(allRows);
    var x = [], y = [], col=[],linex=[],liney=[];

    for (var i=0; i<allRows.length; i++) {
        row = allRows[i];
        x.push( row['PC1'] );
        y.push( row['PC2'] );
        col.push( row['GROUP']);
        linex.push(row['Comp1'] );
        liney.push(row['Comp2'] )
    }
    console.log( 'X',x, 'Y',y, 'col',col,'linex',linex,'liney',liney );
    makePlotly( x, y,col,linex,liney );
 }

 function makePlotly( x, y, col,linex,liney ){
    var myDiv = document.getElementById("plotly_graph3");
    var trace1 = [{
        type: 'scatter',
        x: x,
        y: y,
        mode: 'markers',
        transforms: [{type: 'groupby',groups: col,    styles: [
            {target: 'NORMAL', value: {marker: {color: 'rgb(0,0,255)',size: 8,line: {color: 'DarkSlateGrey',width: 2}}}},
            {target: 'PRIMARY', value: {marker: {color: 'rgb(255,165,0)',size: 8,line: {color: 'DarkSlateGrey',width: 2}}}},
            {target: 'CRPC', value: {marker: {color: 'rgb(0,128,0)',size: 8,line: {color: 'DarkSlateGrey',width: 2}}}},
            {target: 'NEPC', value: {marker: {color: 'rgb(255,0,0)',size: 8,line: {color: 'DarkSlateGrey',width: 2}}}}
          ]
        }]
    }];

    var layout = {
  autosize: true,
  width: 380,
  height: 330,
};
    var config = {responsive: true};

    Plotly.newPlot(myDiv, trace1,layout,config);
 };
 makeplot();
 });


$(document).ready(function () {d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/Mining-BTC-180.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
  }

  var headerNames = d3.keys(rows[0]);

  var headerValues = [];
  var cellValues = [];
  for (i = 0; i < headerNames.length; i++) {
    headerValue = [headerNames[i]];
    headerValues[i] = headerValue;
    cellValue = unpack(rows, headerNames[i]);
    cellValues[i] = cellValue;
  }

  // clean date
  for (i = 0; i < cellValues[1].length; i++) {
  var dateValue = cellValues[1][i].split(' ')[0]
  cellValues[1][i] = dateValue
  }


var data = [{
  type: 'table',
  columnwidth: [150,600,1000,900,600,500,1000,1000,1000],
  columnorder: [0,1,2,3,4,5,6,7,8,9],
  header: {
    values: headerValues,
    align: "center",
    line: {width: 1, color: 'rgb(50, 50, 50)'},
    fill: {color: ['rgb(235, 100, 230)']},
    font: {family: "Arial", size: 8, color: "white"}
  },
  cells: {
    values: cellValues,
    align: ["center", "center"],
    line: {color: "black", width: 1},
    fill: {color: ['rgba(228, 222, 249, 0.65)','rgb(235, 193, 238)', 'rgba(228, 222, 249, 0.65)']},
    font: {family: "Arial", size: 9, color: ["black"]}
  }
}]
var myDiv = document.getElementById("plotly_graph3");
var layout = {
  title: "Bitcoin mining stats for 180 days"
}

Plotly.newPlot(myDiv, data, layout);
});
	 });


