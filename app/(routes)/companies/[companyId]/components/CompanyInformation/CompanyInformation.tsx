import Image from "next/image";
import { CompanyInformationProps } from "./CompanyInformation.types";
import { User } from "lucide-react";
import { CompanyForm } from "../CompanyForm";
import { NewContact } from "../NewContact";
import { ListContacts } from "../ListContacts";

export const CompanyInformation = (props: CompanyInformationProps) => {
  const { company } = props;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 gap-10 ">
      <div className="rounded-lg bg-background shadow-md hover:shadow-lg p-4 ">
        <div>
          <Image
            src={company.profileImage}
            alt="company"
            width={50}
            height={50}
            className="rounded-lg mb-3"
          />
          <CompanyForm company={company} />
        </div>
      </div>

      <div className=" rounded-lg bg-background shadow-md hover:shadow-lg p-4 h-min ">
        <div className="flex items-center gap-x-2 ">
          <User className=" w-5 h-5" />
          Contacts
        </div>
        <div>
          <NewContact />
        </div>
      </div>

      <ListContacts company={company} />
    </div>
  );
};
