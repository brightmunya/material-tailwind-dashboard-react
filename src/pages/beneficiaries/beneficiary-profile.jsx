import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
  TabsBody,
  TabPanel,
} from "@material-tailwind/react";
import {
  PencilIcon,
  PlusIcon,
  
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "@/data";
export function BeneficiaryProfile() {
  return (
    <div className="mt-2 mb-8 ">
      <Card className="mb-6 border border-blue-gray-100">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src="/img/bruce-mars.jpeg"
                alt="bruce-mars"
                size="xl"
                variant="rounded"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  Richard Davis
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  Cash Assistance &bull; ARV Drugs &bull; Bursary
                </Typography>
              </div>
            </div>
            <div className="w-[40%]">
              <Tabs value="profile">
                <TabsHeader>
                  <Tab value="profile">Profile</Tab>
                  <Tab value="Disbursements">Disbursements</Tab>
                  <Tab value="messages">Messages</Tab>
                </TabsHeader>
              </Tabs>
            </div>
          </div>
          <div className="grid-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            <div className="xl:col-span-2">
            <Tooltip content="Edit Profile" >
              <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500 float-right" />
            </Tooltip>
            <Typography as="small" className="font-normal text-blue-gray-500 mb-2">
                Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                </Typography>
              <div className="grid grid-cols-1 gap-4 mb-6 lg:grid-cols-2 ">
                <div>
                  <div className="mb-1">
                    <Typography as="label" className="mb-1">
                      Personal Information</Typography>
                    <hr/>
                  </div>
                  <div className="flex gap-2 mb-1">
                    <Typography as="label" className="text-base">Name:</Typography>
                    <Typography className="font-normal text-blue-gray-500">
                      Alec M. Thompson
                    </Typography>
                  </div>
                  <div className="flex gap-2 mb-1">
                    <Typography as="label" className="text-base">Mobile:</Typography>
                    <Typography className="font-normal text-blue-gray-500">
                      (44) 123 1234 123
                    </Typography>
                  </div>
              <div className="flex gap-2 mb-1">
                <Typography as="label" className="text-base">Email:</Typography>
                <Typography className="font-normal text-blue-gray-500">
                alecthompson@mail.com
                </Typography>
              </div>
              <div className="flex gap-2 mb-1">
                <Typography as="label" className="text-base">Gender:</Typography>
                <Typography className="font-normal text-blue-gray-500">
                  Male
                </Typography>
              </div>
              <div className="flex gap-2 mb-1">
                <Typography as="label" className="text-base">Date of Birth:</Typography>
                <Typography className="font-normal text-blue-gray-500">
                  12th Jan 1990
                </Typography>
              </div>
              <div className="flex gap-2 mb-1">
                <Typography as="label" className="text-base">ID Number:</Typography>
                <Typography className="font-normal text-blue-gray-500">
                  86123 1234 1234
                </Typography>
              </div>
              <div className="flex gap-2 mb-1">
                <Typography as="label" className="text-base">Location:</Typography>
                <Typography className="font-normal text-blue-gray-500">
                  Pinetown, Durban
                </Typography>
              </div>
                </div>
             
                
                  <div >
                    <div className="mb-1">
                      <Typography as="label" className="mb-1">
                        Religious Information</Typography>
                      <hr/>
                      </div>
                    <div className="flex gap-2 mb-1">
                      <Typography as="label" className="text-base">Mosque:</Typography>
                      <Typography className="font-normal text-blue-gray-500">
                        Pinetown Mosque
                      </Typography>
                    </div>
                    <div className="flex gap-2 mb-1">
                      <Typography as="label" className="text-base">Madressa:</Typography>
                      <Typography className="font-normal text-blue-gray-500">
                      Taleemuddin
                      </Typography>
                    </div>
                    <div className="flex gap-2 mb-1">
                      <Typography as="label" className="text-base">Imaam:</Typography>
                      <div>
                        <Typography className="font-normal text-blue-gray-500">
                          Suhail Wadee
                        </Typography>
                        <Typography className="font-normal text-blue-gray-500">
                          081 454 99852
                        </Typography>
                        <Typography className="font-normal text-blue-gray-500">
                          14 Zinnia Drive Marlboro Gardens
                        </Typography>
                      </div>
                      
                    </div>
                    <div className="flex gap-2 mb-1">
                      <Typography as="label" className="text-base">Date Reverted:</Typography>
                      <Typography className="font-normal text-blue-gray-500">
                        12th Jan 2020
                      </Typography>
                    </div>
                  </div>
              </div>
              
            </div>
            <div>
              <Card>
                <CardHeader variant="gradient" color="gray" className="mb-3 p-2">
                  <Typography variant="h6" color="white" >
                    Account
                  </Typography>
                </CardHeader>
                <CardBody>
                  <div className="flex flex-col gap-4">
                  <div>
                      <Typography as="label">Coordinator:</Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        June Oseborne
                      </Typography>
                    </div>
                    <div>
                      <Typography as="label">Date Applied:</Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        12th Jan 2023
                      </Typography>
                    </div>
                    <div>
                      <Typography as="label">Application Status:</Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Under Review
                      </Typography>
                    </div>
                    <Switch
                        id="notifications"
                        label="Notifications"
                        defaultChecked={true}
                        labelProps={{
                          className: "text-sm font-normal text-blue-gray-500",
                        }}
                      />
                      <Switch
                        id="isActive"
                        label="Is Active"
                        defaultChecked={true}
                        labelProps={{
                          className: "text-sm font-normal text-blue-gray-500",
                        }}
                      />
                  </div>
                </CardBody>
              </Card>
              
              
            </div>
            
            
          </div>
          <div className="px-4">
          <Tabs value="family">
            <TabsHeader>
              <Tab value="family">
                Family
              </Tab>
              <Tab value="home">
                Living Conditions
              </Tab>
              <Tab value="employment">
                Employement
              </Tab>
              <Tab value="finances">
                Finances
              </Tab>
              <Tab value="contacts">
                Contacts
              </Tab>
            </TabsHeader>
              <TabsBody>
                <TabPanel value="family">
                  <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2 xl:grid-cols-3">
                    <div>
                      <div className="flex gap-2 mb-3">
                        <Typography variant="h6">Marial Status:</Typography>
                        <Typography className="font-normal text-blue-gray-500">
                          Married
                        </Typography>
                        
                      </div>
                      <Typography as="label" color="black" >
                        Spouse
                      </Typography>
                      <hr/>
                      <div className="flex gap-2 mb-1">
                        <Typography variant="h6">Name:</Typography>
                        <Typography className="font-normal text-blue-gray-500">
                          Martha Thompson
                        </Typography>
                      </div>
                      <div className="flex gap-2 mb-1">
                        <Typography variant="h6">ID Number:</Typography>
                        <Typography className="font-normal text-blue-gray-500">
                          86123 1234 1234
                        </Typography>
                      </div>
                      <div className="flex gap-2 mb-1">
                        <Typography variant="h6">Phonenumber:</Typography>
                        <Typography className="font-normal text-blue-gray-500">
                          061 123 1234
                        </Typography>
                      </div>
                      <div className="flex gap-2 mb-1">
                        <Typography variant="h6">Employer:</Typography>
                        <Typography className="font-normal text-blue-gray-500">
                          Mrs Jacobs
                        </Typography>
                      </div>
                      <div className="flex gap-2 mb-1">
                        <Typography variant="h6">Profession:</Typography>
                        <Typography className="font-normal text-blue-gray-500">
                          Cleaner
                        </Typography>
                      </div>
                      
                    </div>
                    <div className="col-span-2">
                      <div className="mb-1">
                      <Tooltip content="Add Dependant" className="float-right">
                        <PlusIcon className="h-4 w-4 cursor-pointer text-blue-gray-500 float-right" />
                      </Tooltip>
                      <Typography as="label" color="black" >
                        Dependants
                      </Typography>
                      
                      </div>
                      
                      <hr/>
                      <div>
                        <table className="w-full  table-auto">
                          <thead>
                            <tr>
                              <th className="text-left">Name</th>
                              <th className="text-left">Age</th>
                              <th className="text-left">Relationship</th>
                              <th className="text-left">Contact Number</th>
                              <th className="text-left">Profession</th>
                              <th className="text-left"></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Marry Thompson</td>
                              <td>15</td>
                              <td>Daughter</td>
                              <td>061 123 1234</td>
                              <td>Student</td>
                              <td>
                                <Tooltip content="Edit Dependant">
                                  <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500" />
                                </Tooltip>
                              </td>
                            </tr>
                            <tr>
                              <td>Andrew Thompson</td>
                              <td>12</td>
                              <td>Son</td>
                              <td>061 123 1234</td>
                              <td>Student</td>
                              <td>
                                <Tooltip content="Edit Dependant">
                                  <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500" />
                                </Tooltip>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value="contacts">
                  <Typography variant="small" className="font-normal text-blue-gray-500">
                    <div className="flex gap-2 mb-1 place-content-center">
                      <div>
                        <Typography as="label" color="black" className="text-center mb-2" >
                          No Contacts Saved
                        </Typography>
                        <Button
                          variant="outlined"
                          color="blue-gray"
                          className="flex items-center gap-2"
                        >
                          <PlusIcon className="h-4 w-4" />
                          Add Contact
                        </Button>
                      </div>
                    </div>
                  </Typography>
                </TabPanel>
                <TabPanel value="employment">
                  <div>
                    <div className="flex gap-2 mb-2">
                      <Typography variant="h6">Employment Status:</Typography>
                      <Typography className="font-normal text-blue-gray-500">
                        Employed
                      </Typography>
                    </div>
                    <div className="flex gap-2 mb-3">
                      <Typography variant="h6">Profession:</Typography>
                      <Typography className="font-normal text-blue-gray-500">
                        Software Engineer
                      </Typography>
                    </div>
                  </div>
                  <div>
                    <Tooltip content="Add Employment History" className="float-right">
                      <Button variant="outlined" color="blue-gray" className="flex items-center p-1 rounded-full float-right">
                        <PlusIcon className="h-4 w-4" />
                      </Button>
                    </Tooltip>
                    <Typography as="label" color="black" className="mb-2">
                      Employment History
                    </Typography>
                    <hr/>
                    <div>
                      <table className="w-full min-w-[640px] table-auto">
                        <thead>
                          <tr>
                            <th className="text-left">Employer</th>
                            <th className="text-left">Job Description</th>
                            <th className="text-left">Start Date</th>
                            <th className="text-left">End Date</th>
                            <th className="text-left"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Tech Solutions</td>
                            <td>Software Engineer</td>
                            <td>01 Jan 2020</td>
                            <td>Present</td>
                            <td>
                              <Tooltip content="Edit Employment History">
                                <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500" />
                              </Tooltip>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value="finances">
                  <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2 ">
                    <div>
                      <div className="mb-2">
                        <Typography as="label">
                          Income:
                        </Typography>
                        <hr/>
                      </div>
                      <div>
                        <table className="w-full table-auto">
                          <thead>
                            <tr>
                              <th className="text-left">Source</th>
                              <th className="text-right">Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Salary</td>
                              <td className="text-right">R 4,000</td>
                            </tr>
                            <tr>
                              <td>Spouse Income</td>
                              <td className="text-right">R 2,000</td>
                            </tr>
                            <tr>
                              <td>Government Grant</td>
                              <td className="text-right">R 1,500</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      
                    </div>
                    <div>
                      <div className="mb-2">
                        <Typography as="label">
                          Expenses:
                        </Typography>
                        <hr/>
                      </div>
                      <div>
                        <table className="w-full table-auto">
                          <thead>
                            <tr>
                              <th className="text-left">Category</th>
                              <th className="text-right">Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Rent</td>
                              <td className="text-right">R 2,500</td>
                            </tr>
                            <tr>
                              <td>Utilities</td>
                              <td className="text-right">R 800</td>
                            </tr>
                            <tr>
                              <td>Groceries</td>
                              <td className="text-right"  >R 1,200</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                  </div>
                  </div>
                </TabPanel>
                <TabPanel value="home">
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div>
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <Typography as="label">
                          Housing Type:
                        </Typography>
                        <Typography variant="small" className="font-normal text-blue-gray-500 line-height-6">
                          Shack
                        </Typography>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <Typography as="label">
                          Number of Rooms:
                        </Typography>
                        <Typography variant="small" className="font-normal text-blue-gray-500">
                          3
                        </Typography>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <Typography as="label">
                          Water Supply:
                        </Typography>
                        <Typography variant="small" className="font-normal text-blue-gray-500">
                          Borehole, 2km away
                        </Typography>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <Typography as="label">
                          Electricity:
                        </Typography>
                        <Typography variant="small" className="font-normal text-blue-gray-500">
                          Yes
                        </Typography>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <Typography as="label">
                          Occupants:
                        </Typography>
                        <Typography variant="small" className="font-normal text-blue-gray-500">
                          2 Adults, 3 Children
                        </Typography>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <Typography as="label">
                          RDP:
                        </Typography>
                        <Typography variant="small" className="font-normal text-blue-gray-500">
                          No
                        </Typography>
                      </div>

                    </div>
                    <div>
                      <div className="mb-2">
                        <Typography as="label" color="black" className="mb-1">
                          Health and Disability
                        </Typography>
                        <hr/>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <Typography as="label">
                          Disability:
                        </Typography>
                        <Typography variant="small" className="font-normal text-blue-gray-500">
                          No
                        </Typography>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <Typography as="label">
                          Medical Status:
                        </Typography>
                        <Typography variant="small" className="font-normal text-blue-gray-500">
                          Cancer, Terminal
                        </Typography>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <Typography as="label">
                          Medical Contact:
                        </Typography>
                        <Typography variant="small" className="font-normal text-blue-gray-500">
                          Dr. Smith, 123-456-7890
                        </Typography>
                      </div>
                      <div className="grid  mb-2">
                        <Typography as="label">
                          Medical Notes:
                        </Typography>
                        <Typography variant="small" className="font-normal text-blue-gray-500">
                          Requires regular check-ups and medication
                        </Typography>
                      </div>
                    </div>
                  </div>
                  
                </TabPanel>
              </TabsBody>
            </Tabs>

          </div>
        </CardBody>
      </Card>
      <div className="pt-3">
        <Card className="mb-6 border border-blue-gray-100">
          <CardHeader variant="gradient" color="gray" className="mb-3 p-2">
            <Typography variant="h6" color="white">
              Documents
            </Typography>
          </CardHeader>
          <CardBody>
            
          </CardBody>
        </Card>
      </div>
      
    </div>
  );
};

export default BeneficiaryProfile;
