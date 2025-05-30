import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  UserPlusIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import BeneficiariesList from "./pages/beneficiaries/list";
import NewApplicant from "./pages/beneficiaries/new-applicant";
import BeneficiaryProfile from "./pages/beneficiaries/beneficiary-profile";


const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      }
      
    ],
  },
  {
    title: "beneficiaries",
    layout: "dashboard",
    pages: [
      {
        icon: <UsersIcon {...icon} />,
        name: "beneficiaries",
        path: "/beneficiaries/list",
        element: <BeneficiariesList />,
        showInSidenav: true,
      },
      {
          icon: <UserPlusIcon {...icon} />,
          name: "new applicant",
          path: "/beneficiaries/new-applicant",
          element: <NewApplicant />,
          showInSidenav: true,

      }
      ,
      {
          icon: <UserCircleIcon {...icon} />,
          name: "beneficiary profile",
          path: "/beneficiaries/beneficiary-profile",
          element: <BeneficiaryProfile />,
          showInSidenav: false,
      }
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
        showInSidenav: true,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
        showInSidenav: true,
      },
    ],
  },
];

export default routes;
