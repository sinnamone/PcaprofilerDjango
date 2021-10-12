var pcx = [],
  pcy = [],
  group = [],
  compx = [],
  compy = [],
  pseudotime = [],
  patient_id = [],
  text1 = [],
  text2 = []


var graph5_div = document.getElementById("plotly_graph5")
var graph4_div = document.getElementById("plotly_graph4")
var transforms1 = [
  {
    type: "groupby",
    groups: group,
    styles: [
      {
        target: "NORMAL",
        value: {
          marker: {
            color: "rgb(0,0,255)",
            size: 8,
            line: { color: "DarkSlateGrey", width: 2 }
          }
        }
      },
      {
        target: "PRIMARY",
        value: {
          marker: {
            color: "rgb(255,165,0)",
            size: 8,
            line: { color: "DarkSlateGrey", width: 2 }
          }
        }
      },
      {
        target: "CRPC",
        value: {
          marker: {
            color: "rgb(0,128,0)",
            size: 8,
            line: { color: "DarkSlateGrey", width: 2 }
          }
        }
      },
      {
        target: "NEPC",
        value: {
          marker: {
            color: "rgb(255,0,0)",
            size: 8,
            line: { color: "DarkSlateGrey", width: 2 }
          }
        }
      }
    ]
  }
]

var config = { responsive: true }
var layout = {
  autosize: true,
  hovermode: "closest",
  xaxis: {
    title: {
      text: 'PC1',
      font: {
        size: 18,
        color: '#000000'
      }
    },
  },
  yaxis: {
    title: {
      text: 'PC2',
      font: {
        size: 18,
        color: '#000000'
      }
    }
  }
}
function renderPlot(fn) {
  Plotly.d3.csv(
    "https://raw.githubusercontent.com/Maddi-W3MasterioTech/pca/main/DataInfo1.csv",
    function (data) {
      readData(data)
      fn()
    }
  )
}
function readData(allRows) {
  for (var i = 0; i < allRows.length; i++) {
    row = allRows[i]

    pcx.push(row["PC1"])
    pcy.push(row["PC2"])
    group.push(row["GROUP"])
    compx.push(row["Comp1"])
    compy.push(row["Comp2"])
    pseudotime.push(row["Pseudotime"])
    patient_id.push(row["LIBRARY_ID"])
  }
  console.log(row)
  console.log(allRows.length)
}
function showPlot1() {
  // console.log(pcx.length)
  var trace1 = {
    type: "scatter",
    x: pcx,
    y: pcy,
    hoverinfo: "text",
    text: text1,
    mode: "markers",
    name: "PCA",
    // colors: group
    // marker: {
    //   color: group
    // }
    transforms: transforms1
  }
  var data = [trace1]
  Plotly.newPlot(graph5_div, data, layout, config)
}

function showPlot2() {
  var trace1 = {
    type: "scatter",
    x: pcx,
    y: pcy,
    hoverinfo: "text",
    text: text2,
    mode: "markers",
    name: "Entire cohort",
    marker: {
      size: 8,
      color: pseudotime,
      colorscale: [
    ['0.0', 'rgb(165,0,38)'],
    ['0.111111111111', 'rgb(215,48,39)'],
    ['0.222222222222', 'rgb(244,109,67)'],
    ['0.333333333333', 'rgb(253,174,97)'],
    ['0.444444444444', 'rgb(254,224,144)'],
    ['0.555555555556', 'rgb(224,243,248)'],
    ['0.666666666667', 'rgb(171,217,233)'],
    ['0.777777777778', 'rgb(116,173,209)'],
    ['0.888888888889', 'rgb(69,117,180)'],
    ['1.0', 'rgb(49,54,149)']
  ],
      showscale: true,


      line: { color: "DarkSlateGrey", width: 2 },
      colorbar: { title: { text: "Pseudotime" } }
    }
  }
  var trace2 = {
    x: compx,
    y: compy,
    // type: "scatter",

    marker: {
      size: 3,
      color: "black"
    },
    // line: { color: "black", width: 1 },
    mode: "markers",
    // color: "black",

    name: "Trajectory"
  }
  // var data = [trace2]
  var data = [trace1, trace2]
  // var plots = [trace2]
  var layout = {
    showlegend: true,
    legend: { orientation: "h" },
    hovermode: "closest"
  }
  Plotly.newPlot(graph2_div, data, layout, config)
}



renderPlot(showPlot1)
renderPlot(showPlot2)

