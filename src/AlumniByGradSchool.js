import * as React from "react";
import { Chart } from "react-google-charts";

// To pass input into class, pass input as props.graphData
// As an example:
// ReactDOM.render(<AlumniByGradSchool graphData={gradSchoolData} />, document.getElementById('root'));
class AlumniByGradSchool extends React.Component {
    render() {
        if (!this.props.graphData[1]) {
            return (<h1> Not enough data to display </h1>);
        }
        return (
            <div className="AlumniByGradSchool">
                <Chart
                    width={this.props.width}
                    height={this.props.height}
                    chartType="ColumnChart"
                    loader={<div>Loading Chart</div>}
                    data={this.props.graphData}

                    options={{
                        // Material design options
                        animation: {
                            duration: 1000,
                            easing: 'out',
                        },
                        legend: 'none',
                        chart: {
                            
                            // title: 'Alumni by Grad School',
                            chartArea: { width: '100%' },
                            hAxis: {
                                title: 'Grad School',
                                minValue: 0
                            },
                            // vAxis: {
                            //     title: 'Count'
                            // }
                        },
                    }}
                    // For tests
                    rootProps={{ 'data-testid': '2' }}
                />
            </div>
        );
    
        
    }
}

export default AlumniByGradSchool;

// render(<AlumniByMajor />, document.getElementById("root"));
