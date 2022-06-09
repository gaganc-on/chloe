import React from "react";
import "./../styles/global.scss";
import NavbarCustom from "./../components/NavbarCustom";
import IndexPage from "./index";
import AboutPage from "./about";
import FaqPage from "./faq";
import ContactPage from "./contact";
import PricingPage from "./pricing";
import DashboardPage from "./dashboard";
import AuthPage from "./auth";
import SettingsPage from "./settings";
import LegalPage from "./legal";
import { Switch, Route, Router } from "./../util/router";
import Auth0Callback from "./auth0-callback";
import NotFoundPage from "./404";
import Footer from "./../components/Footer";
import "./../util/analytics";
import { AuthProvider } from "./../util/auth";
import { QueryClientProvider } from "./../util/db";
import CalculatorSection from "../components/CalculatorSection";

function App(props) {
  return (
    <QueryClientProvider>
      <AuthProvider>
        <Router>
          <>
            <NavbarCustom
              bg="white"
              variant="light"
              expand="md"
              logo="logo.png"
            />

            <Switch>
              <Route exact path="/" component={IndexPage} />

              <Route exact path="/about" component={AboutPage} />

              <Route exact path="/faq" component={FaqPage} />

              <Route exact path="/contact" component={ContactPage} />

              <Route exact path="/pricing" component={PricingPage} />

              <Route exact path="/calculator" component={CalculatorSection} />

              <Route exact path="/dashboard" component={DashboardPage} />

              <Route exact path="/auth/:type" component={AuthPage} />

              <Route exact path="/settings/:section" component={SettingsPage} />

              <Route exact path="/legal/:section" component={LegalPage} />

              <Route exact path="/auth0-callback" component={Auth0Callback} />

              <Route component={NotFoundPage} />
            </Switch>

            <Footer
              bg="light"
              textColor="dark"
              size="sm"
              bgImage=""
              bgImageOpacity={1}
              copyright={`© ${new Date().getFullYear()} Company`}
              logo="logo.png"
            />
          </>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
