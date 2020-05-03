import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";

const pieOptions = {
  animation: {
    duration: 1000,
    easing: 'out',
  },
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

class AlumniBySeniority extends React.Component {
  state = {
    chartImageURI: ""
  };
  render() {
    if (!this.props.graphData[1]) {
      return (<h1> Not enough data to display </h1>);
  }
    return (
      <div className="AlumniBySeniority">
        <Chart
          chartType="PieChart"
          data={this.props.graphData}
          options={pieOptions}
          graph_id="PieChart"
          width={this.props.width}
          height={this.props.height}
          legend_toggle
        />
      </div>
    );
  }
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
export default AlumniBySeniority;
const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
