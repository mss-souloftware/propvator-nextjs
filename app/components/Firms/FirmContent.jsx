import React from "react";
import ContentData from "./ContentData/ContentData";
import CompanyDetails from "./CompanyDetails/CompanyDetails";

export default function FirmContent() {
  return (
    <section className="mt-4">
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-2/3 pr-2">
            <ContentData />
          </div>
          <div className="w-1/3 pl-2">
            <CompanyDetails />
          </div>
        </div>
      </div>
    </section>
  );
}
