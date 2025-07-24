import React, { useEffect, useState } from "react";
import axios from "axios";
import base_url from "../api/bootapi";
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Row,
  Spinner,
  Container,
} from "reactstrap";

function Status() {
  const [counters, setCounters] = useState({
    totalProjects: 0,
    closedProjects: 0,
    runningProjects: 0,
    delayedProjects: 0,
    cancelledProjects: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${base_url}/project/counters`)
      .then((response) => {
        setCounters(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching counters:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Container
      fluid
      className="mt-4 px-0"
      style={{ paddingLeft: "12px", paddingRight: "12px" }}
    >
      {loading ? (
        <div className="text-center">
          <Spinner color="primary" />
        </div>
      ) : (
        <Row className="gx-4 gy-3">
          <Col xs="12" style={{ width: "20%" }}>
            <Card className="shadow-sm text-center">
              <CardBody>
                <CardTitle tag="h5">Total Projects</CardTitle>
                <h3>{counters.totalProjects}</h3>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" style={{ width: "20%" }}>
            <Card className="shadow-sm text-center">
              <CardBody>
                <CardTitle tag="h5">Closed</CardTitle>
                <h3>{counters.closedProjects}</h3>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" style={{ width: "20%" }}>
            <Card className="shadow-sm text-center">
              <CardBody>
                <CardTitle tag="h5">Running</CardTitle>
                <h3>{counters.runningProjects}</h3>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" style={{ width: "20%" }}>
            <Card className="shadow-sm text-center">
              <CardBody>
                <CardTitle tag="h5">Delayed</CardTitle>
                <h3>{counters.delayedProjects}</h3>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" style={{ width: "20%" }}>
            <Card className="shadow-sm text-center">
              <CardBody>
                <CardTitle tag="h5">Cancelled</CardTitle>
                <h3>{counters.cancelledProjects}</h3>
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Status;
