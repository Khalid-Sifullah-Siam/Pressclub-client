import EducationalQualificationPage from "@/app/components/educationComponents/EducationalQualificationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Educational Qualification",
  description:
    "Academic qualifications and educational journey of Khalid Saifullah Siam.",
};

const EducationalQualification = () => {
  return <EducationalQualificationPage />;
};

export default EducationalQualification;
