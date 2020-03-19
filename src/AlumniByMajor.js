import * as React from "react";
import { render } from "react-dom";
import { Chart } from "react-google-charts";

const majorData = [
    ["Major", "Count"],
    ["Africana Studies", 2937],
    ["American Studies", 4885],
    ["Anthropology", 4310],
    ['Art History', 2400],
    ['Asian American Studies', 4698],
    ['Asian Studies', 915],
    ['Biology', 902],
    ['Chemistry', 757],
    ['Chinese', 2691],
    ['Classics', 2627],
    ['Cognitive Science', 4877],
    ['Computer Science', 1289],
    ['Dance', 2942],
    ['Economics', 1886],
    ['English', 920],
    ['French', 3059],
    ['G & W Studies', 703],
    ['Geology', 2651],
    ['German Studies', 720]
];


class AlumniByMajor extends React.Component {
    render() {
        return (
            <div className="AlumniByMajor">
                <Chart
                    width={'1000px'}
                    height={'400px'}
                    chartType="ColumnChart"
                    loader={<div>Loading Chart</div>}
                    data={majorData}
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