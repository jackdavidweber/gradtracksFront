import * as React from "react";
import { Chart } from "react-google-charts";

// To pass input into class, pass input as props.graphData
// example on how to do this in AlumniByGradSchool class
class BarChart extends React.Component {
    
    render() {
        if (!this.props.graphData[1]) {
            return (<h1> Not enough data to display </h1>);
        }
        return (
            <div className="AlumniByMajor">
                <Chart
                    // width={this.props.width}
                    // height={this.props.height}
                    chartType="ColumnChart"
                    loader={<div>Loading Chart</div>}
                    data={this.props.graphData}
                    options={{
                        animation: {
                            duration: 1000,
                            easing: 'out',
                        },
                        // Material design options
                        legend: 'none',
                        chart: {
                            
                            chartArea: { width: '100%' },
                            hAxis: {
                                title: 'Count',
                                minValue: 0
                            },
                            // vAxis: {
                            //     title: 'Major'
                            // }
                        },
                    }}
                    // For tests
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
        );
    }
}

export default BarChart;

// render(<AlumniByMajor />, document.getElementById("root"));
