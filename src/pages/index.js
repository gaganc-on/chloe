import React from "react";
import Meta from "./../components/Meta";
import HeroSection from "./../components/HeroSection";
import ContentCardsSection from "./../components/ContentCardsSection";
import ClientsSection from "./../components/ClientsSection";
import NewsletterSection from "./../components/NewsletterSection";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <HeroSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Your dream is our passion"
        subtitle="FREE Home valuation and projected equity data. Personalized refinance & purchase options. No credit card required."
        image="home.png"
        buttonText="Get Started"
        buttonColor="primary"
        buttonPath="/auth/signup"
      />
      <ContentCardsSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Featured Content"
        subtitle=""
      />
      <ClientsSection
        bg="light"
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle=""
      />
      <NewsletterSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
    </>
  );
}

export default IndexPage;
