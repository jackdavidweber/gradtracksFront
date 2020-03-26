import * as React from "react";
import { Chart } from "react-google-charts";

const industryOverTimeData =[
 ['Industry', 'Over Time', 'IndustryID', 'Industry', 'Population'],
  [, new Date(2000, 0, 0), 1, 'Tech', 33739900],
  [, new Date(2005, 0, 0), 1, 'Tech', 81902307],
  [, new Date(2010, 0, 0), 1, 'Tech', 5523095],
  [, new Date(2015, 0, 0), 1, 'Tech', 79716203],
  [, new Date(2020, 0, 0), 1, 'Tech', 61801570],
  [, new Date(2000, 0, 0), 2, 'Finance', 73137148],
  [, new Date(2005, 0, 0), 2, 'Finance', 31090763],
  [, new Date(2010, 0, 0), 2, 'Finance', 7485600],
  [, new Date(2015, 0, 0), 2, 'Finance', 141850000],
  [, new Date(2020, 0, 0), 2, 'Finance', 307007000],
  [, new Date(2000, 0, 0), 3, 'Healthcare', 73137148],
  [, new Date(2005, 0, 0), 3, 'Healthcare', 31090763],
  [, new Date(2010, 0, 0), 3, 'Healthcare', 7485600],
  [, new Date(2015, 0, 0), 3, 'Healthcare', 141850000],
  [, new Date(2020, 0, 0), 3, 'Healthcare', 307007000],
  [, new Date(2000, 0, 0), 4, 'Entertainment', 33739900],
  [, new Date(2005, 0, 0), 4, 'Entertainment', 81902307],
  [, new Date(2010, 0, 0), 4, 'Entertainment', 5523095],
  [, new Date(2015, 0, 0), 4, 'Entertainment', 79716203],
  [, new Date(2020, 0, 0), 4, 'Entertainment', 61801570],
  [, new Date(2000, 0, 0), 5, 'Music', 33739900],
  [, new Date(2005, 0, 0), 5, 'Music', 81902307],
  [, new Date(2010, 0, 0), 5, 'Music', 5523095],
  [, new Date(2015, 0, 0), 5, 'Music', 79716203],
  [, new Date(2020, 0, 0), 5, 'Music', 61801570],
  [, new Date(2000, 0, 0), 6, 'Pharmaceutical', 33739900],
  [, new Date(2005, 0, 0), 6, 'Pharmaceutical', 81902307],
  [, new Date(2010, 0, 0), 6, 'Pharmaceutical', 5523095],
  [, new Date(2015, 0, 0), 6, 'Pharmaceutical', 79716203],
  [, new Date(2020, 0, 0), 6, 'Pharmaceutical', 61801570],
  [, new Date(2000, 0, 0), 7, 'Law', 33739900],
  [, new Date(2005, 0, 0), 7, 'Law', 81902307],
  [, new Date(2010, 0, 0), 7, 'Law', 5523095],
  [, new Date(2015, 0, 0), 7, 'Law', 79716203],
  [, new Date(2020, 0, 0), 7, 'Law', 61801570],
  [, new Date(2025, 0, 0),7,'Tech',0],
];

// To pass input into class, pass input as props.graphData
// As an example refer to AlumniByGradSchool class
class AlumniIndustryOverTime1 extends React.Component {
    render() {
        return (
            <div className="AlumniIndustryOverTime1">
            <Chart
              width={'1000px'}
              height={'400px'}
              chartType="BubbleChart"
              loader={<div>Loading Chart</div>}
              data={this.props.graphData}
              options={{
                title:
                  'Industry Over Time',
                hAxis: { title: 'Time' },
                vAxis: { title: 'Industry' },
                bubble: { textStyle: { fontSize: 11 } },
              }
            }
              rootProps={{ 'data-testid': '1' }}
            />
            </div>
        );
    }
}

export default AlumniIndustryOverTime1;

// render(<AlumniByMajor />, document.getElementById("root"));
