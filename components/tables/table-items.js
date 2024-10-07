

import getData from "@/services";
import EnterpriseTableView from "./enterprise/table-view";
import VehicleTableView from "./vehicle/table-view";
const getDataByName= async (pageName) =>{
  const fetchedData = await getData(pageName);
  return fetchedData
}
const TableItem =async ({ pageName }) => {
  const fetchedData =await getDataByName(pageName)
  const {data,headerTitle}=fetchedData
  return (
    <>
         {pageName == "vehicle" && (
        <VehicleTableView datas={data} header={headerTitle} />
      )}
      {pageName == "enterprise" && (
        <EnterpriseTableView datas={data} header={headerTitle} />
      )}
    </>
  );
};

export default TableItem;
