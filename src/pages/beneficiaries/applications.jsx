import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import { applicantsTableData } from "@/data";
import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/outline"
import { Link } from "react-router-dom";

export function Applications() {
  return (
    <div className="mt-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-4 p-4">
          <Typography variant="h6" color="white">
            Applications
          </Typography>
        </CardHeader>
        <CardBody className="px-0">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr className="border-b border-gray-200 mb-3">
                <th className="text-left py-2 px-5">
                  Applicant Name
                </th>
                <th className="text-left">
                  Phone Number
                </th>
                <th className="text-left">
                  Email
                </th>
                <th className="text-left">
                  Status
                </th>
                <th className="text-left">
                  Date Submitted
                </th>
                <th className="px-2"></th>
              </tr>
            </thead>
            <tbody>
              {applicantsTableData.map((applicant, key) => {
                const styleRows = `hover:bg-gray-100 ${ key === applicantsTableData.length - 1 ? "" : "border-b border-gray-200" }`
                return(
                <tr key={applicant.id} className={styleRows}>
                  <td className="py-2 pl-5">
                    <div className="flex flex-column">
                      <Typography className="font-semibold text-blue-gray-600">
                        {applicant.name}
                      </Typography>
                      
                    </div>
                    <div>
                    <Typography as="small" className="text-xs text-blue-gray-600">
                        {applicant.idNumber}
                      </Typography>
                    </div>
                  </td>
                  <td className="">{applicant.phoneNumber}</td>
                  <td className="">{applicant.email}</td>
                  <td className="">{applicant.status}</td>
                  <td className="">{applicant.dateApplied}</td>
                  <td >
                    <div className="flex">
                      <Link className="p-2 rounded-lg hover:shadow-md" to={`/dashboard/beneficiaries/beneficiary-profile`}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                        </Typography>
                      </Link>
                    </div>
                    
                  </td>
                </tr>)}
              )}
              
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};
export default Applications;