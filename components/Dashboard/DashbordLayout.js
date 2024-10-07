import Image from "next/image";
import CardDataStats from "../CardDataStats";
import ChatCard from "../chat/ChatCard";
import "@fortawesome/fontawesome-free/css/all.min.css";

const DashboardLayout = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Total Consumer" total="08">
          <div>
            <i className="fa-solid fa-user-tie text-primary"></i>
          </div>
        </CardDataStats>
        <CardDataStats title="Total Delivery boy" total="52">
          <div>
            <i className="fa-solid fa-user text-primary"></i>
          </div>
        </CardDataStats>
        <CardDataStats title="Total Enterprise" total="362">
          <div>
            <i className="fa-solid fa-cart-shopping text-primary"></i>
          </div>
        </CardDataStats>
        <CardDataStats title="Total Order" total="12000">
          <div>
            <i className="fa-solid fa-truck text-primary"></i>
          </div>
        </CardDataStats>
        <CardDataStats title="Completed Order" total="11500">
          <div>
            <i className="fa-solid fa-clipboard-check text-primary"></i>
          </div>
        </CardDataStats>
        <CardDataStats title="Cancelled Order" total="486">
          <div>
            <i className="fa-solid fa-file-excel text-primary"></i>
          </div>
        </CardDataStats>
      </div>

      {/* New Request Card starts here */}
      <div className="mt-4 grid grid-cols-3 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="flex items-center p-4 bg-white shadow-md rounded-lg h-20 m-2">
          <Image
            className="mr-4"
            src="/images/vector/request-Icon.png"
            alt="Icon"
            width={28}
            height={28}
          />
          <div>
            <h4 className="text-md font-semibold text-gray-900 mb-0">
              12 new requests
            </h4>
            <p className="text-sm font-normal text-gray-900 mb-0">
              You recently missed 10 connections
            </p>
          </div>
          <i className="fa-solid fa-arrow-right ml-auto text-gray-500"></i>
        </div>

        <div className="flex items-center p-4 bg-white shadow-md rounded-lg h-20 m-2">
          <Image
            className="mr-4"
            src="/images/vector/manage-orderIcon.png"
            alt="Icon"
            width={25}
            height={30}
          />
          <div>
            <h4 className="text-md font-semibold text-gray-900 mb-0">
              Manage delivery orders
            </h4>
          </div>
          <i className="fa-solid fa-arrow-right ml-auto text-gray-500"></i>
        </div>

        <div className="flex items-center p-4 bg-white shadow-md rounded-lg h-20 m-2">
          <Image
            className="mr-4"
            src="/images/vector/manage-adsIcon.png"
            alt="Icon"
            width={25}
            height={25}
          />
          <div>
            <h4 className="text-md font-semibold text-gray-900 mb-0">
              Manage Ads
            </h4>
          </div>
          <i className="fa-solid fa-arrow-right ml-auto text-gray-500"></i>
        </div>

        <div className="flex items-center p-4 bg-white shadow-md rounded-lg h-20 m-2">
          <Image
            className="mr-4"
            src="/images/vector/manage-paymentIcon.png"
            alt="Icon"
            width={25}
            height={25}
          />
          <div>
            <h4 className="text-md font-semibold text-gray-900 mb-0">
              Manage Payments & Transactions
            </h4>
          </div>
          <i className="fa-solid fa-arrow-right ml-auto text-gray-500"></i>
        </div>

        <div className="flex items-center p-4 bg-white shadow-md rounded-lg h-20 m-2">
          <Image
            className="mr-4"
            src="/images/vector/manage-schedulesIcon.png"
            alt="Icon"
            width={25}
            height={25}
          />
          <div>
            <h4 className="text-md font-semibold text-gray-900 mb-0">
              Manage Schedules
            </h4>
          </div>
          <i className="fa-solid fa-arrow-right ml-auto text-gray-500"></i>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
