import { Fragment, useState } from 'react';
import { Splitter } from '@progress/kendo-react-layout';
import GridComponent from '../GridComponent';
import { splitObjectToArrayObj } from '../../utils';

const ThreeGrid = ({ showData, setShowData }) => {
  const [panes, setPanes] = useState([{}, {}]);

  const [nestedPanes, setNestedPanes] = useState([
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
  const onNestedChange = (event) => {
    setNestedPanes(event.newState);
  };

  return (
    <Splitter
      panes={panes}
      onChange={onChange}
      orientation={'vertical'}
      className="three-grid-splitter"
    >
      <Splitter
        panes={nestedPanes}
        onChange={onNestedChange}
        orientation={'horizontal'}
      >
        {filteredPosShowDataArr.slice(0, 2).map((item, index) => (
          <Fragment key={index}>
            {item.first ? (
              <GridComponent
                title="Accounts"
                heightData={300}
                showDataHandler={() =>
                  setShowData({ ...showData, first: false })
                }
              />
            ) : null}
            {item.second ? (
              <GridComponent
                title="Bank Accounts"
                heightData={300}
                showDataHandler={() =>
                  setShowData({ ...showData, second: false })
                }
              />
            ) : null}
            {item.third ? (
              <GridComponent
                title="Customers"
                heightData={300}
                showDataHandler={() =>
                  setShowData({ ...showData, third: false })
                }
              />
            ) : null}
            {item.fourth ? (
              <GridComponent
                title="Vendors"
                heightData={300}
                showDataHandler={() =>
                  setShowData({ ...showData, fourth: false })
                }
              />
            ) : null}
          </Fragment>
        ))}
      </Splitter>
      {filteredPosShowDataArr.slice(2, 3).map((item, index) => (
        <Fragment key={index}>
          {item.first ? (
            <GridComponent
              title="Accounts"
              heightData={300}
              showDataHandler={() => setShowData({ ...showData, first: false })}
            />
          ) : null}
          {item.second ? (
            <GridComponent
              title="Bank Accounts"
              heightData={'300px'}
              showDataHandler={() =>
                setShowData({ ...showData, second: false })
              }
            />
          ) : null}
          {item.third ? (
            <GridComponent
              title="Customers"
              heightData={300}
              showDataHandler={() => setShowData({ ...showData, third: false })}
            />
          ) : null}
          {item.fourth ? (
            <GridComponent
              title="Vendors"
              heightData={300}
              showDataHandler={() =>
                setShowData({ ...showData, fourth: false })
              }
            />
          ) : null}
        </Fragment>
      ))}
    </Splitter>
  );
};
export default ThreeGrid;
