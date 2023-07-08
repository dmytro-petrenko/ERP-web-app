import styles from './grids.module.scss';
import OneGrid from './OneGrid';
import TwoGrid from './TwoGrid';
import ThreeGrid from './ThreeGrid';
import FourGrid from './FourGrid';

const GridsComponent = ({ showData, setShowData }) => {

  const numOfPositive = Object.values(showData);
  const filterednumOfPositive = numOfPositive.filter((item) => item);
  
  return (
    <section className={styles.container}>
      {filterednumOfPositive.length === 1 && (
        <OneGrid showData={showData} setShowData={setShowData} />
      )}
      {filterednumOfPositive.length === 2 && (
        <TwoGrid showData={showData} setShowData={setShowData} />
      )}
      {filterednumOfPositive.length === 3 && (
        <ThreeGrid showData={showData} setShowData={setShowData} />
      )}
      {filterednumOfPositive.length === 4 && (
        <FourGrid showData={showData} setShowData={setShowData} />
      )}
    </section>
  );
};
export default GridsComponent;