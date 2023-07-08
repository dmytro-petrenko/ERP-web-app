import { useState } from 'react';
import { Splitter } from '@progress/kendo-react-layout';
import GridComponent from '../GridComponent';

const TwoGrid = ({ showData, setShowData }) => {
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
          title="Accounts"
          heightData={'100%'}
          showDataHandler={() => setShowData({ ...showData, first: false })}
        />
      ) : null}
      {showData.second ? (
        <GridComponent
          title="Bank Accounts"
          heightData={'100%'}
          showDataHandler={() => setShowData({ ...showData, second: false })}
        />
      ) : null}
      {showData.third ? (
        <GridComponent
          title="Customers"
          heightData={'100%'}
          showDataHandler={() => setShowData({ ...showData, third: false })}
        />
      ) : null}
      {showData.fourth ? (
        <GridComponent
          title="Vendors"
          heightData={'100%'}
          showDataHandler={() => setShowData({ ...showData, fourth: false })}
        />
      ) : null}
    </Splitter>
  );
};
export default TwoGrid;
