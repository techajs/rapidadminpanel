import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import JoinRequestTable from "@/components/join/table-view";
import Layout from "@/components/layouts/layout";

const JoinRequest = () => {
  return (
    <Layout>
        <Breadcrumb pageName="Join Request"/>
        <JoinRequestTable/>
    </Layout>
  );    
};

export default JoinRequest;
