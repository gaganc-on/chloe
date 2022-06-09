import React from "react";
import Meta from "./../components/Meta";
import CalculatorSection from "./../components/CalculatorSection";

function CalculatorSection(props) {
  return (
    <>
      <Meta title="Calculator" />
      <CalculatorSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Pricing"
        subtitle="Choose the plan that makes sense for you. All plans include a 14-day free trial."
      />
    </>
  );
}

export default PricingPage;
