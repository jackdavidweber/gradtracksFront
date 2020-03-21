import * as React from "react";
import { Chart } from "react-google-charts";

// Example data to use for input:
// const gradSchoolData = [
//     ["Grad School", "Count"],
//     ["Stanford University",	584],
//     ["UCLA", 670],
//     ["UC Berkeley",	675],
//     ["Carnegie Mellon University",	498],
//     ["MIT",	851],
//     ["Harvard University",	86],
//     ["Princeton University", 906],
//     ["Columbia University",	643],
//     ["Claremont Graduate University",	532],
//     ["Yale University", 104],
//     ["Rice University",	903],
//     ["University of Chicago", 189],
//     ["University of Pennsylvania", 426]
// ];


// To pass input into class, pass input as props.graphData
// As an example:
// ReactDOM.render(<AlumniByGradSchool graphData={gradSchoolData} />, document.getElementById('root'));
class AlumniByGradSchool extends React.Component {
    render() {
        return (
            <div className="AlumniByGradSchool">
                <Chart
                    width={'1000px'}
                    height={'400px'}
                    chartType="ColumnChart"
                    loader={<div>Loading Chart</div>}
                    data={this.props.graphData}
                    options={{
                        // Material design options
                        chart: {
                            title: 'Alumni by Grad School',
                            chartArea: { width: '100%' },
                            hAxis: {
                                title: 'Grad School',
                                minValue: 0
                            },
                            vAxis: {
                                title: 'Count'
                            }
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
