import React, { useContext } from "react";
import { JobPortalContext } from "../App";
import CustomCard from "../components/CustomCard";
import { IJobListingProps } from "../types";

const ViewJobs = () => {
  const formData: any = useContext(JobPortalContext);
  const { jobsData } = formData;

  return (
    <div className="bg-expire">
      {jobsData.length ? (
        <div className="grid grid-cols-2 gap-2 p-6 bg-expire">
          {jobsData.map((ele: IJobListingProps) => (
            <div key={ele.id} className="p-4">
              <CustomCard {...ele} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center p-8 text-2xl">
          No Jobs Available
        </div>
      )}
    </div>
  );
};

export default ViewJobs;
