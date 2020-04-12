import * as React from "react";
 import { render } from "react-dom";
 import { Chart } from "react-google-charts";

 const industryData = [
     ["Industry", "Count"],
     ["Technology", 2937],
     ["Finance", 4885],
     ["Academia", 4310],
     ['Education', 2400],
     ['Law', 4698],
     ['Healthcare', 915],
     ['Entertainment', 902],
     ['Music', 757],
     ['Public Administration', 2691],
     ['Aerospace', 2627],
     ['Pharmaceutical', 4877]
 ];


 class AlumniByIndustry extends React.Component {
     render() {
         return (
             <div className="AlumniByIndustry">
                 <Chart
                     width={'1000px'}
                     height={'400px'}
                     chartType="ColumnChart"
                     loader={<div>Loading Chart</div>}
                     data={this.props.graphData}
                    //  data={industryData}
                     options={{
                         // Material design options
                         chart: {
                             title: 'Alumni by Industry',
                             chartArea: { width: '100%' },
                             hAxis: {
                                 title: 'Count',
                                 minValue: 0
                             },
                             vAxis: {
                                 title: 'Industry'
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

 export default AlumniByIndustry;
