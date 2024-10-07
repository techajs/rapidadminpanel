
import Layout from "@/components/layouts/layout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableLayout from "@/components/tables/tablelayout";
import TableItem from "@/components/tables/table-items";


export default function VehiclePage() {
  return (
    <Layout>
      <Breadcrumb pageName="Manage vehicle types" />
      <div className="flex flex-col p-5">
        <TableLayout>
          <TableItem pageName='vehicle'/>
        </TableLayout>
      </div>
    </Layout>
  );
}
