import { Fragment, useState } from 'react';
import { process } from '@progress/kendo-data-query';
import { ColumnMenu } from './ColumnMenu';
import styles from './grid.module.scss';
import { Grid, GridColumn } from '@progress/kendo-react-grid';

const GridContent = ({ customerData, heightData }) => {
  const createDataState = (dataState) => {
    return {
      result: process(customerData.slice(0), dataState),
      dataState: dataState,
    };
  };
  let initialState = createDataState({
    take: 25,
    skip: 0,
  });

  const [result, setResult] = useState(initialState.result);
  const [dataState, setDataState] = useState(initialState.dataState);
  const dataStateChange = (event) => {
    let updatedState = createDataState(event.dataState);
    setResult(updatedState.result);
    setDataState(updatedState.dataState);
  };

  return (
    <Fragment>
      <div className={styles.wrapGrid}>
        <Grid
          style={{
            height: heightData
          }}
          className={styles.grid}
          data={result}
          {...dataState}
          onDataStateChange={dataStateChange}
          sortable={true}
        >
          <GridColumn
            className={styles.column}
            field="EntityName"
            title="Name"
            columnMenu={ColumnMenu}
          />
          <GridColumn
            className={styles.column}
            field="City"
            title="City"
            columnMenu={ColumnMenu}
          />
          <GridColumn className={styles.column} field="State" title="State" />
          <GridColumn
            className={styles.column}
            field="PrimaryContact"
            title="Contact"
          />
          <GridColumn
            className={styles.column}
            field="MainPhone"
            title="Phone"
          />
          <GridColumn
            className={styles.column}
            field="EmailMain"
            title="Email"
          />
          <GridColumn className={styles.column} field="Notes" title="Notes" />
          <GridColumn
            className={styles.column}
            field="DefExpAcct"
            title="DefExpAcct"
          />
        </Grid>
      </div>
      <div className={styles.numberItemsBlock}>
        <p>{customerData.length}</p>
      </div>
    </Fragment>
  );
};
export default GridContent;
