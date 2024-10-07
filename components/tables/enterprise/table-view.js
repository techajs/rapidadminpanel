import React from 'react'

function EnterpriseTableView({datas,header}) {
  console.log(datas)
  return (
    <>
    <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            {header?.map((item, key) => (
              <tr key={key} className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                  {item?.name}
                </th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                  {item?.createDate}
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  {item?.status}
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                 {item.actions}
                </th>
              </tr>
            ))}
          </thead>
          <tbody>
           
          </tbody>
        </table>
      </div>
    </>
  )
}

export default EnterpriseTableView