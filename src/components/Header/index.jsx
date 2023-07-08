import styles from './header.module.scss';
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
} from '@progress/kendo-react-layout';
import userAvatar from '../../assets/images/placeholder_avatar.jpg';
import clsx from 'clsx';

const Header = ({ showSidebar, setShowSidebar }) => {
  const showSidebarHandler = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <header>
      <AppBar className={styles.header}>
        <AppBarSpacer
          style={{
            width: 10,
          }}
        />
        <AppBarSection>
          <button
            className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base "
            onClick={showSidebarHandler}
          >
            <span className={clsx('k-icon k-i-menu k-icon-lg', styles.icon)} />
          </button>
        </AppBarSection>

        <AppBarSpacer
          style={{
            width: 100,
          }}
        />

        <AppBarSection>
          <h1 className={styles.erpTitle}>Greg's ERP</h1>
        </AppBarSection>

        <AppBarSpacer
          style={{
            width: 30,
          }}
        />
        <AppBarSection>
          <h1 className={styles.enterpTitle}>MTill Holdings, LLC</h1>
        </AppBarSection>

        <AppBarSpacer />

        <AppBarSection>
          <Avatar type="image">
            <img src={userAvatar} alt="user" />
          </Avatar>
        </AppBarSection>

        <AppBarSpacer
          style={{
            width: 15,
          }}
        />
      </AppBar>
    </header>
  );
};
export default Header;
