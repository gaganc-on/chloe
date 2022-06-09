import React from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import DashboardItems from "./DashboardItems";
import { Link, useRouter } from "./../util/router";
import { useAuth } from "./../util/auth";

function DashboardSection(props) {
  const auth = useAuth();
  const router = useRouter();

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={1}
          spaced={true}
          className="text-center"
        />

        {router.query.paid && auth.user.planIsActive && (
          <Alert
            variant="success"
            className="text-center mx-auto mb-5"
            style={{ maxWidth: "400px" }}
          >
            You are now subscribed to the {auth.user.planId} plan
            <span className="ml-2" role="img" aria-label="party">
              🥳
            </span>
          </Alert>
        )}

        <Row>
          <Col lg={6}>
            <DashboardItems />
          </Col>
          <Col lg={6} className="mt-4 mt-lg-0">
            <Card>
              <Card.Body>
                <h5 className="mb-3">Free Reports</h5>
                <p>
                  Home valutions and forecasts.
                </p>
                <p>
                  Refinance options
                </p>
                <p>
                  Vetted renovation experts
                </p>
                <div className="mt-4">
                  <h5 className="mb-3">Your Account</h5>
                  <div>
                    You are signed in as <strong>{auth.user.email}</strong>.
                  </div>

                  {auth.user.stripeSubscriptionId && (
                    <>
                      <div>
                        You are subscribed to the{" "}
                        <strong>{auth.user.planId} plan</strong>.
                      </div>
                      <div>
                        Your plan status is{" "}
                        <strong>{auth.user.stripeSubscriptionStatus}</strong>.
                      </div>
                    </>
                  )}

                  <div>
                    You can change your account info{` `}
                    {auth.user.stripeSubscriptionId && <>and plan{` `}</>}
                    in{` `}
                    <Link to="/settings/general">
                      <strong>settings</strong>
                    </Link>
                    .
                  </div>

                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default DashboardSection;
