import * as React from "react";
 import { render } from "react-dom";
 import { Chart } from "react-google-charts";



 class AlumniByIndustry extends React.Component {
     render() {
         if (!this.props.graphData[1]) {
             return (<h1> Not enough data to display </h1>);
         }
         return (
             <div className="AlumniByIndustry">
                 <Chart
                     width={this.props.width}
                     height={this.props.height}
                     chartType="ColumnChart"
                     loader={<div>Loading Chart</div>}
                     data={this.props.graphData}
                    //  data={industryData}
                     options={{
                        animation: {
                            duration: 1000,
                            easing: 'out',
                        },
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
