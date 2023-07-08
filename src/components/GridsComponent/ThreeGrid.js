import { Fragment, useState } from 'react';
import { Splitter } from '@progress/kendo-react-layout';
import GridComponent from '../GridComponent';
import { splitObjectToArrayObj } from '../../utils';

const ThreeGrid = ({ data, showData, setShowData }) => {
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
  const filteredPosShowDataArr = showDataArr.filter((item) => {
    if (Object.values(item)[0] === true) return item;
  });

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
                num="1"
                heightData={300}
                data={data}
                showDataHandler={() =>
                  setShowData({ ...showData, first: false })
                }
              />
            ) : null}
            {item.second ? (
              <GridComponent
                num="2"
                heightData={300}
                data={data}
                showDataHandler={() =>
                  setShowData({ ...showData, second: false })
                }
              />
            ) : null}
            {item.third ? (
              <GridComponent
                num="3"
                heightData={300}
                data={data}
                showDataHandler={() =>
                  setShowData({ ...showData, third: false })
                }
              />
            ) : null}
            {item.fourth ? (
              <GridComponent
                num="4"
                heightData={300}
                data={data}
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
              num="1"
              heightData={300}
              data={data}
              showDataHandler={() => setShowData({ ...showData, first: false })}
            />
          ) : null}
          {item.second ? (
            <GridComponent
              num="2"
              heightData={'300px'}
              data={data}
              showDataHandler={() =>
                setShowData({ ...showData, second: false })
              }
            />
          ) : null}
          {item.third ? (
            <GridComponent
              num="3"
              heightData={300}
              data={data}
              showDataHandler={() => setShowData({ ...showData, third: false })}
            />
          ) : null}
          {item.fourth ? (
            <GridComponent
              num="4"
              heightData={300}
              data={data}
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

{
  /* {showData.first ? (
        <GridComponent
          num="1"
          data={data}
          showDataHandler={() => setShowData({ ...showData, first: false })}
        />
      ) : null}
      {showData.second ? (
        <GridComponent
          num="2"
          data={data}
          showDataHandler={() => setShowData({ ...showData, second: false })}
        />
      ) : null}
      {showData.third ? (
        <GridComponent
          num="3"
          data={data}
          showDataHandler={() => setShowData({ ...showData, third: false })}
        />
      ) : null}
      {showData.fourth ? (
        <GridComponent
          num="4"
          data={data}
          showDataHandler={() => setShowData({ ...showData, fourth: false })}
        />
      ) : null} */
}
