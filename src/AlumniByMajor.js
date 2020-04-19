import * as React from "react";
import { Chart } from "react-google-charts";

// To pass input into class, pass input as props.graphData
// example on how to do this in AlumniByGradSchool class
class AlumniByMajor extends React.Component {
    render() {
        return (
            <div className="AlumniByMajor">
                <Chart
                    width={'1000px'}
                    height={'400px'}
                    chartType="ColumnChart"
                    loader={<div>Loading Chart</div>}
                    data={this.props.graphData}
                    options={{
                        // Material design options
                        chart: {
                            title: 'Alumni by Major',
                            chartArea: { width: '100%' },
                            hAxis: {
                                title: 'Count',
                                minValue: 0
                            },
                            vAxis: {
                                title: 'Major'
                            }
                        },
                    }}
                    // For tests
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
        );
    }
}

export default AlumniByMajor;

// render(<AlumniByMajor />, document.getElementById("root"));
