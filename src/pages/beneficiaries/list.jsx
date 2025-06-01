import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
  Button,
} from "@material-tailwind/react";
import { NavLink, Link } from "react-router-dom";
import { EllipsisVerticalIcon, ArrowTopRightOnSquareIcon, ArchiveBoxIcon } from "@heroicons/react/24/outline";
import { authorsTableData, beneficiariesTableData } from "@/data";

export function BeneficiariesList() {
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-4 p-4">
          <Typography variant="h6" color="white">
            Beneficiaries
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["beneficiary", "profession", "date created", "status", ""].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {beneficiariesTableData.map(
                ({ photo, name, email, employment, status, dateCreated }, key) => {
                  const className = `py-3 px-5 ${
                    key === beneficiariesTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  const classNameLastCol = `px-0 ${
                    key === beneficiariesTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src={photo} alt={name} size="sm" variant="rounded" />
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {name}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {employment.status}
                        </Typography>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {employment.profession}
                        </Typography>
                      </td>
                     
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {dateCreated}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Chip
                          variant="gradient"
                          color={status == "Active" ? "green" : "blue-gray"}
                          value={status }
                          className="py-0.5 px-2 text-[11px] font-medium w-fit"
                        />
                      </td>
                      <td className={classNameLastCol}>
                        <div className="flex">
                          <Link className="p-2 rounded-l-lg hover:shadow-md" to={`/dashboard/beneficiaries/beneficiary-profile`}>
                            <Typography
                              className="text-xs font-semibold text-blue-gray-600"
                            >
                              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                            </Typography>
                          </Link>
                          <Button className="p-1 bg-transparent shadow-none rounded-l-none p-2">
                            <Typography
                              className="text-xs font-semibold text-red-600"
                            >
                              <ArchiveBoxIcon className="h-4 w-4" />
                            </Typography>
                          </Button>
                        </div>
                        
                        
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
     
    </div>
  );
}

export default BeneficiariesList;
