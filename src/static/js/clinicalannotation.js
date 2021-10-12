var group = [],
  test = [],
  subgroup = [],
  dataset = [],
  sample_id = [],
  patient_id = [],
  sample_type = [],
  ethnicity = [],
  biopsy_age = [],
  library_type = [],
  tumor_tissue_site = [],
  age = [],
  primary_tumor_laterality = [],
  gleason_score = [],
  patient_primary_tumor_localization = [],
  tumor_level = [],
  lymph_node_status = [],
  recurrence_indicator = [],
  pathologic_t = [],
  clinical_T = [],
  race = [],
  zone = [],
  laterality = [],
  days_to_recurrence = [],
  erg_fusion = [],
  etv1_fusion = [],
  etv3_fusion = [],
  etv4_fusion = []

var thead_cols = ["","Dataset","Patient ID","Sample ID","Sample Type","Ethnicity",
  "Biopsy Age","Library Type",
  "Tumor Tissue site","Primary Tumor Laterality","Patient Primary Tumor Localization","Tumor Level",
  "Lymph Node Status","pathologic_T",
  "Recurrence Indicator",
  "Days to Recurrence","ERG fusion","ETV1 fusion","ETV3 fusion","ETV4 fusion"]
var graph3_div = document.getElementById("plotly_graph3")


var config = { responsive: true }
var layout = {
  autosize: true,
  hovermode: "closest"
}
function renderPlot(fn) {
  Plotly.d3.csv(
    "https://raw.githubusercontent.com/sinnamone/PCAprofiler/main/sampleannotation.csv",
    function (data) {
      readData(data)
      fn()
    }
  )
}
function readData(allRows) {
  for (var i = 0; i < allRows.length; i++) {
    row = allRows[i]
    sample_id.push(row["Patient ID"])
    group.push(row["Sample Type"])
    subgroup.push(row["SUBGROUP"])
    dataset.push(row["Dataset"])
    patient_id.push(row["Sample ID"])
    sample_type.push(row["Sample Type"])
    ethnicity.push(row["Ethnicity"])
    biopsy_age.push(row["Biopsy Age"])
    library_type.push(row["Library Type"])
    tumor_tissue_site.push(row["Tumor Tissue site"])
    primary_tumor_laterality.push(row["Primary Tumor Laterality"])
    patient_primary_tumor_localization.push(row["Patient Primary Tumor Localization"])
    tumor_level.push(row["Tumor Level"])
    lymph_node_status.push(row["Lymph Node Status"])
    pathologic_t.push(row["pathologic_T"])
    recurrence_indicator.push(row["Recurrence Indicator"])
    days_to_recurrence.push(row["Recurrence Indicator"])
    erg_fusion.push(row["ERG fusion"])
    etv1_fusion.push(row["ETV1 fusion"])
    etv3_fusion.push(row["ETV3 fusion"])
    etv4_fusion.push(row["ETV4 fusion"])
  }
  console.log(row)
  console.log(allRows.length)
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

  for (var i = 0; i < sample_id.length; i++) {
    let row_2 = document.createElement("tr")

    // entry
    let row_2_data_1 = document.createElement("td")
    row_2_data_1.innerHTML = i + 1

    // patient_id
    let row_2_data_2 = document.createElement("td")
    row_2_data_2.innerHTML = dataset[i]

    let row_2_data_3 = document.createElement("td")
    row_2_data_3.innerHTML = sample_id[i]

    let row_2_data_4 = document.createElement("td")
    row_2_data_4.innerHTML = patient_id[i]

    let row_2_data_5 = document.createElement("td")
    row_2_data_5.innerHTML = sample_type[i]

    let row_2_data_6 = document.createElement("td")
    row_2_data_6.innerHTML = ethnicity[i]

    let row_2_data_7 = document.createElement("td")
    row_2_data_7.innerHTML = biopsy_age[i]

    let row_2_data_8 = document.createElement("td")
    row_2_data_8.innerHTML = library_type[i]

    let row_2_data_9 = document.createElement("td")
    row_2_data_9.innerHTML = tumor_tissue_site[i]

    let row_2_data_10 = document.createElement("td")
    row_2_data_10.innerHTML = primary_tumor_laterality[i]

    let row_2_data_11 = document.createElement("td")
    row_2_data_11.innerHTML = patient_primary_tumor_localization[i]

    let row_2_data_12 = document.createElement("td")
    row_2_data_12.innerHTML = tumor_level[i]

    let row_2_data_13 = document.createElement("td")
    row_2_data_13.innerHTML = lymph_node_status[i]

    let row_2_data_14 = document.createElement("td")
    row_2_data_14.innerHTML = pathologic_t[i]

    let row_2_data_15 = document.createElement("td")
    row_2_data_15.innerHTML = recurrence_indicator[i]

    let row_2_data_16 = document.createElement("td")
    row_2_data_16.innerHTML = days_to_recurrence[i]

    let row_2_data_17 = document.createElement("td")
    row_2_data_17.innerHTML = erg_fusion[i]

    let row_2_data_18 = document.createElement("td")
    row_2_data_18.innerHTML = etv1_fusion[i]

    let row_2_data_19 = document.createElement("td")
    row_2_data_19.innerHTML = etv3_fusion[i]

    let row_2_data_20 = document.createElement("td")
    row_2_data_20.innerHTML = etv4_fusion[i]


    row_2.appendChild(row_2_data_1)
    row_2.appendChild(row_2_data_2)
    row_2.appendChild(row_2_data_3)
    row_2.appendChild(row_2_data_4)
    row_2.appendChild(row_2_data_5)
    row_2.appendChild(row_2_data_6)
    row_2.appendChild(row_2_data_7)
    row_2.appendChild(row_2_data_8)
    row_2.appendChild(row_2_data_9)
    row_2.appendChild(row_2_data_10)
    row_2.appendChild(row_2_data_11)
    row_2.appendChild(row_2_data_12)
    row_2.appendChild(row_2_data_13)
    row_2.appendChild(row_2_data_14)
    row_2.appendChild(row_2_data_15)
    row_2.appendChild(row_2_data_16)
    row_2.appendChild(row_2_data_17)
    row_2.appendChild(row_2_data_18)
    row_2.appendChild(row_2_data_19)
    row_2.appendChild(row_2_data_20)
    tbody.appendChild(row_2)
  }
  $("#example").DataTable()
}


renderPlot(showTable)
