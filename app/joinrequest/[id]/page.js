import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import NewJoinRequestPage from "@/components/join/detail";
import Layout from "@/components/layouts/layout";

export default function Detail({params}){
    const {id}=params
    return (
        <Layout>
            <Breadcrumb pageName="User Information"/>
            <NewJoinRequestPage extId={id}/>
        </Layout>
    )
}