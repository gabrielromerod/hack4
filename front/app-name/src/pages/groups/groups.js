import React, { useEffect, useState } from "react";
import { fetchGroups, fetchPersonsByGroup, fetchGroupsByPerson } from "../../api/dataService";
import DataGrid, { Column, MasterDetail } from 'devextreme-react/data-grid';

const DetailGrid = ({ personKey }) => {
  const [detailData, setDetailData] = useState([]);

  useEffect(() => {
    const fetchDetailData = async () => {
      try {
        const response = await fetchGroupsByPerson(personKey);
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

export default function Group() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetchGroups()
      .then((response) => {
        setGroups(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const onRowClick = async (e) => {
    const { data } = e;
    const groupId = data.id;

    try {
      const response = await fetchPersonsByGroup(groupId);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DataGrid
      dataSource={groups}
      showBorders={true}
      onRowClick={onRowClick}
    >
      <Column dataField="id" width={50} />
      <Column dataField="name" />
      <Column dataField="personCount" caption="Number of Persons" />

      <MasterDetail
        enabled={true}
        component={({ data }) => <DetailGrid personKey={data.key} />}
      />
    </DataGrid>
  );
}
