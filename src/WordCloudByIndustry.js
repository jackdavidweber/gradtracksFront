import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactWordcloud from 'react-wordcloud';


const options = {
  // colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
  colors: ['#66AA00', '#007FAD', '#990099','#DD4477', '#E9A227'],
  enableTooltip: true,
  // enableOptimizations: true,
  // deterministic: false,
  fontFamily: 'impact',
  // fontSizes: [30, 60],
  fontStyle: 'normal',
  fontWeight: 'normal',
  padding: 1,
  rotations: 1,
  rotationAngles: [0],
  scale: 'log',
  // spiral: 'archimedean',
  transitionDuration: 1000,
};

function Cloud({graphData, graphHeight, graphWidth}) {
  // const [iteration, setIteration] = useState(0)
  // const size=[600, 300]
  
  return (
    <div>
      <div style={{height: graphHeight, width: graphWidth}}>
        <ReactWordcloud options={options} words={graphData} />
      </div>
    </div>
  );
}

export default Cloud;


// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);
