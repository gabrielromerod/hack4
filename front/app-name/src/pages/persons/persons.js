import React, { useEffect, useState } from "react";
import { fetchGroups, fetchPersonsByGroup, fetchGroupsByPerson, fetchPersons } from "../../api/dataService";
import DataGrid, { Column, MasterDetail } from 'devextreme-react/data-grid';

const DetailGrid = ({ personKey }) => {
    const [detailData, setDetailData] = useState([]);
  
    useEffect(() => {
      const fetchDetailData = async () => {
        try {
          const response = await fetchPersons(personKey);
          setDetailData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchDetailData();
    }, [personKey]);
  
    return (
      <React.Fragment>
        <h5>Person's Groups</h5>
        <DataGrid
          dataSource={detailData}
          showBorders={true}
        >
          <Column dataField="id" width={50} />
          <Column dataField="name" />
        </DataGrid>
      </React.Fragment>
    );
  };