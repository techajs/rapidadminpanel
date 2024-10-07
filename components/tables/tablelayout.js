import React from "react";

function TableLayout({ children }) {
  return (
    <div className="col-span-12 xl:col-span-7">
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        {children}
      </div>
    </div>
  );
}

export default TableLayout;
