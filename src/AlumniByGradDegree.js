import * as React from "react";
import { Chart } from "react-google-charts";


// To pass input into class, pass input as props.graphData
// As an example refer to AlumniByGradSchool class 
class AlumniByGradDegree extends React.Component {
    render() {
        if (!this.props.graphData[1]) {
            return (<h1> Not enough data to display </h1>);
        }
        return (
            <div className="AlumniByGradDegree">
                <Chart
                    width={this.props.width}
                    height={this.props.height}
                    chartType="ColumnChart"
                    loader={<div>Loading Chart</div>}
                    data={this.props.graphData}
                    options={{
                        // Material design options
                        title: 'Alumni by Grad Degree and Type',
                        chartArea: { width: '100%' },
                        isStacked: true,
                        hAxis: {
                            title: 'Degree Type',
                            minValue: 0
                        },
                        vAxis: {
                            title: 'Count'
                        }

                    }}
                    // For tests
                    rootProps={{ 'data-testid': '3' }}
                />
            </div>
        );
    }
}

export default AlumniByGradDegree;

// render(<AlumniByMajor />, document.getElementById("root"));
