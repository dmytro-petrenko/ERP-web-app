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
              Accounts
            </li>
            <li className={styles.menuItem} onClick={secondLinkHandler}>
              Bank Accounts
            </li>
            <li className={styles.menuItem} onClick={thirdLinkHandler}>
              Customers
            </li>
            <li className={styles.menuItem} onClick={fourthLinkHandler}>
              Vendors
            </li>
          </ul>
        </PanelBarItem>
      </PanelBar>
    </section>
  );
};

export default Sidebar;
