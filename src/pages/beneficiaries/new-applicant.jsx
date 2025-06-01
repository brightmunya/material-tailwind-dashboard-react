import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Select,
  Option,
  } from "@material-tailwind/react";
import { useState } from "react";

export function NewApplicant() {
  const [wizardPage, setWizardPage] = useState(1);
  const [newBeneficiary, setNewBeneficiary] = useState({
    typeOfAid: "",
    programme: "",
    firstName:"",
    surname: "",
    dateOfBirth:"",
    idNumber:"",
    phoneNumber:"",
    email:""
  });
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
    <Card>
      <CardHeader variant="gradient" color="gray" className="mb-4 p-4">
        <Typography variant="h6" color="white">
          New Applicant
        </Typography>
      </CardHeader>
      <CardBody>
        <div className="wizard-new-applicant">
          <div className="wizard-pages">  
            <div className="wizard-page-2">
              <Typography variant="h6" color="black" className="mb-2">
                Beneficiary Details
              </Typography>
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3 mb-2">
                    <div>
                      <Select
                        type="text"
                        label="Type of Aid"
                        value={newBeneficiary.typeOfAid}
                      >
                        <Option value="1">Cash Assistance</Option>
                        <Option value="2">ARV Drugs</Option>
                        <Option value="3">Disaster Relief</Option>
                      </Select>
                    </div>
                    <div>
                      <Select
                        type="text"
                        label="Programme"
                        value={newBeneficiary.programme}
                      >
                        <Option value="1">Zakat</Option>
                        <Option value="2">PEPFA/USAID</Option>
                        <Option value="3">Western Cape Floods Aid</Option>
                      </Select>
                    </div>
                    <div>
                      <Input
                        type="text"
                        label="First Name"
                        value={newBeneficiary.firstName}
                        onChange={(e) => setNewBeneficiary({ ...newBeneficiary, firstName: e.target.value })}
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        label="Surname"
                        value={newBeneficiary.surname}
                        onChange={(e) => setNewBeneficiary({ ...newBeneficiary, surname: e.target.value })}
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        label="ID Number"
                        value={newBeneficiary.idNumber}
                        onChange={(e) => setNewBeneficiary({ ...newBeneficiary, idNumber: e.target.value })}
                      />
                    </div>
                    <div>
                      <Input
                        type="date"
                        label="Date of Birth"
                        value={newBeneficiary.dateOfBirth}
                        onChange={(e) => setNewBeneficiary({ ...newBeneficiary, dateOfBirth: e.target.value })}
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        label="Phone Number"
                        value={newBeneficiary.phoneNumber}
                        onChange={(e) => setNewBeneficiary({ ...newBeneficiary, phoneNumber: e.target.value })}
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        label="Email Address"
                        value={newBeneficiary.email}
                        onChange={(e) => setNewBeneficiary({ ...newBeneficiary, email: e.target.value })}
                      />
                    </div>
                  </div>
              </div>
            </div>
          </div>
         
        </div>
        
      </CardBody>
      <CardFooter>
        <div>
          <Button>Submit</Button>
        </div>
      </CardFooter>
    </Card>
    </div>
  );
};

export default NewApplicant;
