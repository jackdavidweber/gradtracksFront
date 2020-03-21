import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";

const pieOptions = {
  title: "Alumni by Seniority",
  pieHole: 0.6,
  slices: [
    {
      color: "#2BB673"
    },
    {
      color: "#d91e48"
    },
    {
      color: "#007fad"
    },
    {
      color: "#e9a227"
    }
  ],
  legend: {
    position: "bottom",
    alignment: "center",
    textStyle: {
      color: "233238",
      fontSize: 14
    }
  },
  tooltip: {
    showColorCode: true
  },
  chartArea: {
    left: 0,
    top: 0,
    width: "100%",
    height: "80%"
  },
  fontName: "Roboto"
};
// const seniorityData = [
//     ["Industry", "Count"],
//     ["Assistant", 2937],
//     ["Associate", 4885],
//     ["Staff Member", 4310],
//     ['Senior Staff', 2400],
//     ['Manager', 4698],
//     ['Director', 915],
//     ['Minor Executive', 902],
//     ['Major Executive', 757]
// ];
class AlumniBySeniority extends React.Component {
  state = {
    chartImageURI: ""
  };
  render() {
    return (
      <div className="AlumniBySeniority">
        <Chart
          chartType="PieChart"
          data={this.props.graphData}
          options={pieOptions}
          graph_id="PieChart"
          width={"100%"}
          height={"400px"}
          legend_toggle
        />
      </div>
    );
  }
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
export default AlumniBySeniority;
