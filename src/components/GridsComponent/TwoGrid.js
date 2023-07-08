import { useState } from 'react';
import { Splitter } from '@progress/kendo-react-layout';
import GridComponent from '../GridComponent';

const TwoGrid = ({ data, showData, setShowData }) => {
  const [panes, setPanes] = useState([
    {
      size: '50%',
      min: '100px',
      resizable: true,
    },
    {},
  ]);

  const onChange = (event) => {
    setPanes(event.newState);
  };

  return (
    <Splitter
      panes={panes}
      onChange={onChange}
      className="two-grid-splitter-container"
    >
      {showData.first ? (
        <GridComponent
          num="1"
          heightData={'100%'}
          data={data}
          showDataHandler={() => setShowData({ ...showData, first: false })}
        />
      ) : null}
      {showData.second ? (
        <GridComponent
          num="2"
          heightData={'100%'}
          data={data}
          showDataHandler={() => setShowData({ ...showData, second: false })}
        />
      ) : null}
      {showData.third ? (
        <GridComponent
          num="3"
          heightData={'100%'}
          data={data}
          showDataHandler={() => setShowData({ ...showData, third: false })}
        />
      ) : null}
      {showData.fourth ? (
        <GridComponent
          num="4"
          heightData={'100%'}
          data={data}
          showDataHandler={() => setShowData({ ...showData, fourth: false })}
        />
      ) : null}
    </Splitter>
  );
};
export default TwoGrid;
