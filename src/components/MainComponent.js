import { Fragment, useState } from 'react';
import Sidebar from './Sidebar';
import GridsComponent from './GridsComponent';
import Footer from './GridsComponent/Footer';

const MainComponent = () => {
  const [showData, setShowData] = useState({
    first: true,
    second: false,
    third: false,
    fourth: false,
  });

  return (
    <Fragment>
      <Sidebar showData={showData} dataHandler={setShowData} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          width: '100%',
          height: '100%',
        }}
      >
        <GridsComponent showData={showData} setShowData={setShowData} />
        <Footer />
      </div>
    </Fragment>
  );
};
export default MainComponent;
