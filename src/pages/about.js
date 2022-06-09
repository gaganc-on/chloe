import React from "react";
import Meta from "./../components/Meta";
import HeroSection2 from "./../components/HeroSection2";
import TeamBiosSection from "./../components/TeamBiosSection";

function AboutPage(props) {
  return (
    <>
      <Meta title="About" description="Learn about our company and team" />
      <HeroSection2
        bg="primary"
        textColor="white"
        size="lg"
        bgImage="https://source.unsplash.com/FyD3OWBuXnY/1600x800"
        bgImageOpacity={0.2}
        title="Home Valution And Projected Equity Data"
        subtitle="Discover and communicate with vetted local experts"
      />
      <TeamBiosSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      />
    </>
  );
}

export default AboutPage;
