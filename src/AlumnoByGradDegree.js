import * as React from "react";
import { Chart } from "react-google-charts";

// example data

// alumni by degree can only take 5 bars (degree types) at a time
// const degreeData = [
//     ["degree", "phd", "MA", "MS", "MFA", "MBA", "JD", "MD", "DDS"],
//     ['Computer Science', 1084, 688, 92, 1747, 1150, 1150, 1798, 688],
//     ['Mathematics', 194, 1088, 885, 1463, 1193, 995, 255, 177],
//     ['Physics', 1759, 1265, 355, 576, 614, 1380, 230, 1300],
//     ['Chemistry', 1494, 693, 419, 1206, 102, 1249, 113, 695],
//     ['Biology', 1327, 1855, 1909, 1197, 1105, 1296, 1326, 1998],
//     ['Economics', 1394, 1852, 877, 1408, 575, 1283, 1664, 9]
// ]

// To pass input into class, pass input as props.graphData
// As an example refer to AlumniByGradSchool class 
class AlumniByGradDegree extends React.Component {
    render() {
        return (
            <div className="AlumniByGradDegree">
                <Chart
                    width={'1000px'}
                    height={'400px'}
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
