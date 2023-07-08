import styles from './grids.module.scss';
import { data } from '../GridComponent/dataPlaceholder';
import OneGrid from './OneGrid';
import TwoGrid from './TwoGrid';
import ThreeGrid from './ThreeGrid';
import FourGrid from './FourGrid';

const GridsComponent = ({ showData, setShowData }) => {

  const numOfPositive = Object.values(showData);
  const filterednumOfPositive = numOfPositive.filter((item) => item === true);

  return (
    <section className={styles.container}>
      {filterednumOfPositive.length === 1 && (
        <OneGrid data={data} showData={showData} setShowData={setShowData} />
      )}
      {filterednumOfPositive.length === 2 && (
        <TwoGrid data={data} showData={showData} setShowData={setShowData} />
      )}
      {filterednumOfPositive.length === 3 && (
        <ThreeGrid data={data} showData={showData} setShowData={setShowData} />
      )}
      {filterednumOfPositive.length === 4 && (
        <FourGrid data={data} showData={showData} setShowData={setShowData} />
      )}
    </section>
  );
};
export default GridsComponent;