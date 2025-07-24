import React from "react";
import logo1 from "../Login/logo1.png";
import { Card, CardBody, Col, Row } from "reactstrap";

function Header({ name }) {
  return (
    <div className="position-relative" style={{ zIndex: 1 }}>
      <Card
        className="py-3 text-white"
        style={{
          backgroundColor: "#05488bff",
          borderBottomLeftRadius: "1.5rem",
          borderBottomRightRadius: "0",
          borderTopLeftRadius: "0",
          borderTopRightRadius: "0",
        }}
      >
        <CardBody>
          <Row
            className="align-items-center text-center text-md-start"
            style={{
              maxWidth: "95%",
              marginTop: "20px",
              position: "relative",
              zIndex: 10,
            }}
          >
            <Col xs="12" md="6">
              <h3 style={{ marginTop: "-40px" }} className="mb-0 ms-md-2">
                &lt; {name}
              </h3>
            </Col>

            <Col xs="12" md="6" className="text-md-end mt-3 mt-md-0">
              <img
                src={logo1}
                alt="Logo"
                style={{
                  width: "130px",
                  height: "auto",
                  marginTop: "-50px",
                }}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
}

export default Header;
