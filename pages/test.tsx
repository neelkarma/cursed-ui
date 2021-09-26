import { NextPage } from "next";
import ComponentLayout from "../components/componentlayout";

const Test: NextPage = () => {
  return (
    <ComponentLayout title="Test">
      <p>Just a test.</p>
    </ComponentLayout>
  );
};

export default Test;
