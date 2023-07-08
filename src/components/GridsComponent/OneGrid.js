import GridComponent from '../GridComponent';

const OneGrid = ({ showData, setShowData }) => {
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
          title="Accounts"
          showDataHandler={() => setShowData({ ...showData, first: false })}
        />
      ) : null}
      {showData.second ? (
        <GridComponent
          title="Bank Accounts"
          showDataHandler={() => setShowData({ ...showData, second: false })}
        />
      ) : null}
      {showData.third ? (
        <GridComponent
          title="Customers"
          showDataHandler={() => setShowData({ ...showData, third: false })}
        />
      ) : null}
      {showData.fourth ? (
        <GridComponent
          title="Vendors"
          showDataHandler={() => setShowData({ ...showData, fourth: false })}
        />
      ) : null}
    </div>
  );
};
export default OneGrid;
