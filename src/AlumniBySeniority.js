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
<<<<<<< HEAD
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
=======
const seniorityData = [
    ["Industry", "Count"],
    ["Assistant", 2937],
    ["Associate", 4885],
    ["Staff Member", 4310],
    ['Senior Staff', 2400],
    ['Manager', 4698],
    ['Director', 915],
    ['Minor Executive', 902],
    ['Major Executive', 757]
];
>>>>>>> 691347c901e62f038e37c7a33a7dbb5865a2c7a2
class AlumniBySeniority extends React.Component {
  state = {
    chartImageURI: ""
  };
  render() {
    return (
      <div className="AlumniBySeniority">
        <Chart
          chartType="PieChart"
<<<<<<< HEAD
          data={this.props.graphData}
=======
          data={seniorityData}
>>>>>>> 691347c901e62f038e37c7a33a7dbb5865a2c7a2
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

<<<<<<< HEAD
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
export default AlumniBySeniority;
=======
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
>>>>>>> 691347c901e62f038e37c7a33a7dbb5865a2c7a2
