import { Fragment, useState } from 'react';
import { Splitter } from '@progress/kendo-react-layout';
import GridComponent from '../GridComponent';
import { splitObjectToArrayObj } from '../../utils';

const FourGrid = ({ showData, setShowData }) => {
  const [panes, setPanes] = useState([{}, {}]);

  const [firstNestedPanes, setFirstNestedPanes] = useState([
    {
      size: '50%',
      min: '100px',
      resizable: true,
    },
    {},
  ]);
  const [secondNestedPanes, setSecondNestedPanes] = useState([
    {
      size: '50%',
      min: '100px',
      resizable: true,
    },
    {},
  ]);

  const showDataArr = splitObjectToArrayObj(showData);
  const filteredPosShowDataArr = showDataArr.filter(
    (item) => Object.values(item)[0]
  );

  const onChange = (event) => {
    setPanes(event.newState);
  };

  const firstNestedPanesChange = (event) => {
    setFirstNestedPanes(event.newState);
  };
  const secondNestedPanesChange = (event) => {
    setSecondNestedPanes(event.newState);
  };

  return (
    <Splitter
      className="four-grid-splitter"
      panes={panes}
      onChange={onChange}
      orientation="vertical"
    >
      <Splitter
        panes={firstNestedPanes}
        onChange={firstNestedPanesChange}
        orientation="horizontal"
      >
        {filteredPosShowDataArr.slice(0, 2).map((item, index) => (
          <Fragment key={index}>
            {item.first ? (
              <GridComponent
                title="Accounts"
                showDataHandler={() =>
                  setShowData({ ...showData, first: false })
                }
              />
            ) : null}
            {item.second ? (
              <GridComponent
                title="Bank Accounts"
                showDataHandler={() =>
                  setShowData({ ...showData, second: false })
                }
              />
            ) : null}
            {item.third ? (
              <GridComponent
                title="Customers"
                showDataHandler={() =>
                  setShowData({ ...showData, third: false })
                }
              />
            ) : null}
            {item.fourth ? (
              <GridComponent
                title="Vendors"
                showDataHandler={() =>
                  setShowData({ ...showData, fourth: false })
                }
              />
            ) : null}
          </Fragment>
        ))}
      </Splitter>
      <Splitter
        panes={secondNestedPanes}
        onChange={secondNestedPanesChange}
        orientation="horizontal"
      >
        {filteredPosShowDataArr.slice(2, 4).map((item, index) => (
          <Fragment key={index}>
            {item.first ? (
              <GridComponent
                title="Accounts"
                showDataHandler={() =>
                  setShowData({ ...showData, first: false })
                }
              />
            ) : null}
            {item.second ? (
              <GridComponent
                title="Bank Accounts"
                showDataHandler={() =>
                  setShowData({ ...showData, second: false })
                }
              />
            ) : null}
            {item.third ? (
              <GridComponent
                title="Customers"
                showDataHandler={() =>
                  setShowData({ ...showData, third: false })
                }
              />
            ) : null}
            {item.fourth ? (
              <GridComponent
                title="Vendors"
                showDataHandler={() =>
                  setShowData({ ...showData, fourth: false })
                }
              />
            ) : null}
          </Fragment>
        ))}
      </Splitter>
    </Splitter>
  );
};
export default FourGrid;
