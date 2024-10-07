import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Layout from "@/components/layouts/layout";
import TableItem from "@/components/tables/table-items";
import TableLayout from "@/components/tables/tablelayout";
const packageData=[];
const headerTitle=[];
const EnterpriseJoin = () => {
  return (
    <Layout>
      <Breadcrumb pageName="Enterprise Join Request" />
      <div className="flex flex-col p-5">
        <TableLayout>
          <TableItem pageName="enterprise"/>
        </TableLayout>
      </div>
    </Layout>
  );
};

export default EnterpriseJoin;
