var pcx = [],
  pcy = [],
  group = [],
  compx = [],
  compy = [],
  pseudotime = [],
  patient_id = [],
  text1 = [],
  text2 = []

var thead_cols = ["ENTRY", "PATIENT_ID", "PROGRESSION_STAGE", "EZH2_mRNA"]

var graph1_div = document.getElementById("plotly_graph1")
var graph2_div = document.getElementById("plotly_graph2")
var graph3_div = document.getElementById("plotly_graph3")
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
  hovermode: "closest"
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
    text1.push(
      `</br> SAMPLE: ${row["LIBRARY_ID"]} </br> GROUP: ${row["GROUP"]} </br> PC1: ${row["PC1"]}  </br> PC2: ${row["PC2"]}`
    )
    text2.push(
      `</br> SAMPLE: ${row["LIBRARY_ID"]} </br> GROUP: ${row["GROUP"]} </br> PTIME: ${row["Pseudotime"]}`
    )
  }
  console.log(row)
  console.log(allRows.length)
}
function showPlot1() {
  // console.log(pcx.length)
  var trace1 = [
    {
      type: "scatter",
      x: pcx,
      y: pcy,
      hoverinfo: "text",
      text: text1,
      mode: "markers",
      // colors: group
      // marker: {
      //   color: group
      // }
      transforms: transforms1
    }
  ]
  Plotly.newPlot(graph1_div, trace1, layout, config)
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
      size: 7,
      color: pseudotime,
      colorscale: "Viridis",
      showscale: true,

      line: { color: "DarkSlateGrey", width: 1 }
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

function showTable() {
  let table = document.getElementById("example")
  let thead = document.createElement("thead")
  let tbody = document.createElement("tbody")
  table.appendChild(thead)
  table.appendChild(tbody)
  let row_1 = document.createElement("tr")

  for (var i = 0; i < thead_cols.length; i++) {
    console.log(thead_cols[i])
    let heading_1 = document.createElement("th")
    heading_1.innerHTML = thead_cols[i]
    row_1.appendChild(heading_1)
  }
  thead.appendChild(row_1)

  for (var i = 0; i < patient_id.length; i++) {
    let row_2 = document.createElement("tr")

    // entry
    let row_2_data_1 = document.createElement("td")
    row_2_data_1.innerHTML = i + 1

    // patient_id
    let row_2_data_2 = document.createElement("td")
    row_2_data_2.innerHTML = patient_id[i]

    // progression_stage
    let row_2_data_3 = document.createElement("td")
    row_2_data_3.innerHTML = group[i]

    // progression_stage
    let row_2_data_4 = document.createElement("td")
    row_2_data_4.innerHTML = pseudotime[i]

    row_2.appendChild(row_2_data_1)
    row_2.appendChild(row_2_data_2)
    row_2.appendChild(row_2_data_3)
    row_2.appendChild(row_2_data_4)
    tbody.appendChild(row_2)
  }
  $("#example").DataTable()
}

renderPlot(showPlot1)
renderPlot(showPlot2)
renderPlot(showTable)
