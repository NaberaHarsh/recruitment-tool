import React, { useContext } from "react";
import { CandidatePortalContext } from "../App";
import CustomCard from "../components/CustomCard";
import { noCandidateStr } from "../constants";
import { ICandidateListingProps } from "../types";

const ViewCandidate = () => {
  const formData: any = useContext(CandidatePortalContext);
  const { candidatesData } = formData;

  return (
    <div className="bg-expire">
      {candidatesData.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2 p-6 bg-expire">
          {candidatesData.map((ele: ICandidateListingProps) => (
            <div key={ele.id} className="p-4">
              <CustomCard {...ele} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center p-8 text-2xl">
          {noCandidateStr}
        </div>
      )}
    </div>
  );
};

export default ViewCandidate;
