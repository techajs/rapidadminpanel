import Image from "next/image";
import CardDataStats from "../CardDataStats";
import ChatCard from "../chat/ChatCard";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Dashboarbox from "./box";
import { DashboardService } from "@/services/dashboard/services";

const DashboardLayout = async () => {
  const { data } = await DashboardService();
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Total Consumer" total={data[0]?.totalConsumers}>
          <div>
            <i className="fa-solid fa-user-tie text-primary"></i>
          </div>
        </CardDataStats>
        <CardDataStats
          title="Total Delivery boy"
          total={data[0]?.totalDeliveryBoys}
        >
          <div>
            <i className="fa-solid fa-user text-primary"></i>
          </div>
        </CardDataStats>
        <CardDataStats
          title="Total Enterprise"
          total={data[0]?.totalEnterprises}
        >
          <div>
            <i className="fa-solid fa-cart-shopping text-primary"></i>
          </div>
        </CardDataStats>
        <CardDataStats title="Total Order" total={data[0]?.totalOrders}>
          <div>
            <i className="fa-solid fa-truck text-primary"></i>
          </div>
        </CardDataStats>
        <CardDataStats title="Completed Order" total={data[0]?.completedOrders}>
          <div>
            <i className="fa-solid fa-clipboard-check text-primary"></i>
          </div>
        </CardDataStats>
        <CardDataStats title="Cancelled Order" total={data[0]?.canceledOrders}>
          <div>
            <i className="fa-solid fa-file-excel text-primary"></i>
          </div>
        </CardDataStats>
      </div>

      {/* New Request Card starts here */}
      <div className="grid grid-cols-1 gap-4 mt-[29px] md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <Dashboarbox
          url="/joinrequest"
          icon="request"
          title={`${data[0]?.requestuserleft} new requests`}
          subtitle="You recently missed 10 connections"
        />
        <Dashboarbox
          url="/join"
          icon="battery"
          title="Manage delivery orders"
        />
        <Dashboarbox icon="advertising" title="Manage Ads" />
        <Dashboarbox
          url="/join"
          icon="credit-card"
          title="Manage Payments & Transactions"
        />
        <Dashboarbox url="/join" icon="schedule" title="Manage Schedules" />
      </div>
    </>
  );
};

export default DashboardLayout;
