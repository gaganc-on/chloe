import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Avatar from "./Avatar";

function TeamBiosSection(props) {
  const items = [
    {
      avatar: "ben.png",
      name: "Ben Guez",
      role: "Co-Founder & COO",
      bio: "Background ---Background ---Background ---Background ---Background ---Background ---Background ---Background ---Background ---Background ---",
    },
    {
      avatar: "eyal.png",
      name: "Eyal Cohen",
      role: "Co-Founder & CEO",
      bio: "Background ---Background ---Background ---Background ---Background ---Background ---Background ---Background ---Background ---Background ---",
    },
    {
      avatar: "aaron.png",
      name: "Aaron Murphy",
      role: "Co-Founder & CFO", 
      bio: "Background ---Background ---Background ---Background ---Background ---Background ---Background ---Background ---Background ---Background ---",
    },
  ];

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
          size={2}
          spaced={true}
          className="text-center"
        />
        <Row className="justify-content-center">
          {items.map((item, index) => (
            <Col
              xs={12}
              md={6}
              lg={4}
              className="py-3 d-flex align-items-stretch"
              key={index}
            >
              <Card>
                <Card.Body className="d-flex flex-column text-center align-items-center p-4">
                  <Avatar src={item.avatar} alt={item.name} size="128px" />
                  <h6 className="font-weight-bold mb-0 mt-4">{item.name}</h6>
                  <small>{item.role}</small>
                  <Card.Text className="mt-4">{item.bio}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}

export default TeamBiosSection;
