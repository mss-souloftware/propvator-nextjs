import React from "react";
import ContentData from "./ContentData/ContentData";
import CompanyDetails from "./CompanyDetails/CompanyDetails";

export default function FirmContent() {
  return (
    <section className="mt-4">
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-full">
            <ContentData />
          </div>
        </div>
      </div>
    </section>
  );
}
