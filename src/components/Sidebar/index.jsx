import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';
import styles from './sidebar.module.scss';

const Sidebar = ({ showData, dataHandler }) => {
  const firstLinkHandler = () => {
    dataHandler({
      ...showData,
      first: true,
    });
  };
  const secondLinkHandler = () => {
    dataHandler({
      ...showData,
      second: true,
    });
  };
  const thirdLinkHandler = () => {
    dataHandler({
      ...showData,
      third: true,
    });
  };
  const fourthLinkHandler = () => {
    dataHandler({
      ...showData,
      fourth: true,
    });
  };

  return (
    <section className={styles.sidebarContainer}>
      <PanelBar style={{cursor: 'pointer'}}>
        <PanelBarItem title="Links" expanded={true}>
          <ul className={styles.menu}>
            <li className={styles.menuItem} onClick={firstLinkHandler}>
              Link 1
            </li>
            <li className={styles.menuItem} onClick={secondLinkHandler}>
              Link 2
            </li>
            <li className={styles.menuItem} onClick={thirdLinkHandler}>
              Link 3
            </li>
            <li className={styles.menuItem} onClick={fourthLinkHandler}>
              Link 4
            </li>
          </ul>
        </PanelBarItem>
      </PanelBar>
    </section>
  );
};

export default Sidebar;
