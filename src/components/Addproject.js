import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Row } from "reactstrap";
import Header from "./Header";
import axios from "axios";
import base_url from "../api/bootapi";
import Navbar from "../Login/Navbar";

function Addproject() {
  const initialProjectState = {
    projectName: "",
    reason: "",
    type: "",
    division: "",
    category: "",
    priority: "",
    department: "",
    startDate: "",
    endDate: "",
    location: "",
    status: "Registered",
  };
  const [project, setProject] = useState(initialProjectState);

  const handleForm = (e) => {
    console.log(project);
    postDataServer(project);
    e.preventDefault();
  };
  const postDataServer = (data) => {
    axios.post(`${base_url}/project`, data).then(
      (response) => {
        console.log(response);
        console.log("Project added");
        setProject(initialProjectState);
      },
      (error) => {
        console.log(error);
        console.log("Error,while project adding");
      }
    );
  };
  return (
    <div >
      <Navbar />
      <Header name="Create Project" />
      <Form
        className="border  rounded px-5 pt-4 pb-4 mx-5 position-absolute bg-white shadow"
        style={{ top: "150px", left: "-2%", right: "-2%", zIndex: 10 }}
        onSubmit={handleForm}
      >
        <Row>
          <Col md="8">
            <FormGroup>
              <Input
                type="text"
                placeholder="Enter Project Theme"
                name="projectName"
                id="projectName"
                style={{ height: "5rem" }}
                required
                value={project.projectName}
                onChange={(e) => {
                  setProject({ ...project, projectName: e.target.value });
                }}
              />
            </FormGroup>
          </Col>
          <Col md="4" className="text-end">
            <Button
              className="rounded-pill border-0 px-3"
              color="primary"
              type="submit"
            >
              Save Project
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <FormGroup>
              <label for="reason">Reason</label>
              <Input
                type="select"
                id="reason"
                name="reason"
                required
                value={project.reason}
                onChange={(e) => {
                  setProject({ ...project, reason: e.target.value });
                }}
              >
                <option value="">-- Select Reason --</option>
                <option value="Business">Business</option>
                <option value="Dealership">Dealership</option>
                <option value="Transport">Transport</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <label for="type">Type</label>
              <Input
                type="select"
                id="type"
                name="type"
                required
                value={project.type}
                onChange={(e) => {
                  setProject({ ...project, type: e.target.value });
                }}
              >
                <option value="">-- Select Type --</option>{" "}
                <option value="Internal">Internal</option>
                <option value="External">External</option>
                <option value="Vendor">Vendor</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <label for="division">Division</label>
              <Input
                type="select"
                id="division"
                name="division"
                required
                value={project.division}
                onChange={(e) => {
                  setProject({ ...project, division: e.target.value });
                }}
              >
                <option value="">-- Select Division --</option>
                <option value="Compressor">Compressor</option>
                <option value="Filters">Filters</option>
                <option value="Pumps">Pumps</option>
                <option value="Glass">Glass</option>
                <option value="Water Heater">Water Heater</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <FormGroup>
              <label for="category">Category</label>
              <Input
                type="select"
                id="category"
                name="category"
                required
                value={project.category}
                onChange={(e) => {
                  setProject({ ...project, category: e.target.value });
                }}
              >
                <option value="">-- Select Category --</option>{" "}
                <option value="Quality A">Quality A</option>
                <option value="Quality B">Quality B</option>
                <option value="Quality C">Quality C</option>
                <option value="Quality D">Quality D</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <label for="priority">Priority</label>
              <Input
                type="select"
                id="priority"
                name="priority"
                required
                value={project.priority}
                onChange={(e) => {
                  setProject({ ...project, priority: e.target.value });
                }}
              >
                <option value="">-- Select Priority --</option>{" "}
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <label for="department">Department</label>
              <Input
                type="select"
                id="department"
                name="department"
                required
                value={project.department}
                onChange={(e) => {
                  setProject({ ...project, department: e.target.value });
                }}
              >
                <option value="">-- Select Department --</option>
                <option value="Strategy">Strategy</option>
                <option value="Finance">Finance</option>
                <option value="Quality">Quality</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Stores">Stores</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <FormGroup>
              <label for="startDate">Start Date as per Project Plan</label>
              <br />
              <input
                type="date"
                id="startDate"
                name="startDate"
                className="form-control"
                required
                value={project.startDate}
                onChange={(e) => {
                  setProject({ ...project, startDate: e.target.value });
                }}
              />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <label for="endDate">End Date as per Project Plan</label>
              <br></br>
              <input
                type="date"
                id="endDate"
                name="endDate"
                className="form-control"
                required
                value={project.endDate}
                onChange={(e) => {
                  setProject({ ...project, endDate: e.target.value });
                }}
              />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <label for="location">Location</label>
              <Input
                type="select"
                id="location"
                name="location"
                required
                value={project.location}
                onChange={(e) => {
                  setProject({ ...project, location: e.target.value });
                }}
              >
                <option value="">-- Select Location --</option>
                <option value="Pune">Pune</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="4" className="ms-auto ">
            <FormGroup>
              <label for="status">
                Status:<span className="fw-bold text-dark">Registered</span>
              </label>s
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Addproject;
