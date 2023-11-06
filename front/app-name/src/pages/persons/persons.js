import React, { useEffect, useState } from "react";
import {fetchPersons } from "../../api/dataService";
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

export default function Person() {
    const [persons, setPersons] = useState([]);
  
    useEffect(() => {
      fetchPersons()
        .then((response) => {
          setPersons(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  
    const onRowClick = async (e) => {
      const { data } = e;
      const personId = data.id;
  
      try {
        const response = await fetchPersons(personId);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <React.Fragment>
        <h1>Persons</h1>
        <DataGrid
          dataSource={persons}
          showBorders={true}
          onRowClick={onRowClick}
        >
          <Column dataField="id" width={50} />
          <Column dataField="name" />
          <MasterDetail
            enabled={true}
            component={DetailGrid}
          />
        </DataGrid>
      </React.Fragment>
    );
}