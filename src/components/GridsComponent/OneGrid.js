import GridComponent from '../GridComponent';

const OneGrid = ({ data, showData, setShowData }) => {
  return (
    <div
      style={{
        display: 'block',
        postion: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      {showData.first ? (
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
      ) : null}
    </div>
  );
};
export default OneGrid;
