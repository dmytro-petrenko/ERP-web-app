import styles from './footer.module.scss';
import clsx from 'clsx';

const Footer = () => {
  return (
    <section className={styles.container}>
      <div>
        <span
          className={clsx(
            'k-icon k-icon-md k-i-arrow-chevron-left',
            styles.arrow
          )}
        />
        <span className={styles.page}>1</span>
        <span
          className={clsx(
            'k-icon k-icon-md k-i-arrow-chevron-right',
            styles.arrow
          )}
        />
      </div>
    </section>
  );
};
export default Footer;
