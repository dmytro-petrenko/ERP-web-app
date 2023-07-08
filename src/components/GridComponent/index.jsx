import styles from './grid.module.scss';
import GridContent from './GridContent';
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
} from '@progress/kendo-react-layout';
import clsx from 'clsx';
import axios from 'axios';
import useSWR from 'swr';

const GridComponent = ({ title, showDataHandler, heightData }) => {

  const fields = [
    'IDNo',
    'EntityName',
    'City',
    'State',
    'PrimaryContact',
    'MainPhone',
    'EmailMain',
    'Notes',
    'DefExpAcct',
  ];
  function createGetUrl(fields) {
    const baseUrl = 'https://deverpapi.mtillholdings.com/ERPAPI/GenReadList';
    const CID = '11201';
    const AK = 'H43qw5hhBHS6652fGqS';
    const sTable = 'Ent_Main';
    const saFields = fields.map((field) => `saFields=${field}`).join('&');
    const saWhere = `saWhere=EntityType&saWhere=%3D&saWhere=%27C%27`;
    return `${baseUrl}?CID=${CID}&AK=${AK}&sTable=${sTable}&${saFields}&${saWhere}`;
  }
  
  const uid = '<customers>';
  const fetcherGridContent = () =>
    axios.get(createGetUrl(fields)).then((res) => res.data);

  const { error, isLoading, data } = useSWR(uid, fetcherGridContent);

  if (error) return <div className={styles.error}>Error: {error}</div>;

  if (isLoading)
    return (
      <div className={styles.loadingContainer}>
        <p className="animate__animated animate__pulse animate__infinite infinite">
          Loading...
        </p>
      </div>
    );

  const resultData = data.data;

  return (
    <div className={styles.gridContainer}>
      <AppBar className={styles.panel}>
        <AppBarSection>{title}</AppBarSection>
        <AppBarSpacer />
        <AppBarSection>
          <button
            className={clsx('k-icon k-i-close k-icon-md', styles.iconButton)}
            onClick={showDataHandler}
          />
        </AppBarSection>
      </AppBar>
      <GridContent heightData={heightData} customerData={resultData} />
    </div>
  );
};
export default GridComponent;
