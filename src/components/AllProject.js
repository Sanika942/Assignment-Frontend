import React from "react";
import { Button, Col, Row, Table, Container } from "reactstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import base_url from "../api/bootapi";
import Header from "./Header";
import SearchProject from "./Search";
import SortProject from "./Sort";
import PaginationComponent from "./PaginationComponent";
import Navbar from "../Login/Navbar";

function AllProject() {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("");

  const handleUpdate = (projectName, newStatus) => {
    axios
      .put(`${base_url}/project/${projectName}/status`, { status: newStatus })
      .then(() => {
        fetchPaginatedProjects(currentPage);
      })
      .catch((err) => {
        console.error("Failed to update status", err);
      });
  };

  const fetchPaginatedProjects = (page = 0) => {
    setCurrentPage(page);

    let url = `${base_url}/project?page=${page}&size=4`;
    if (searchTerm) url += `&search=${searchTerm}`;
    if (sortKey) url += `&sort=${sortKey}`;

    axios
      .get(url)
      .then((res) => {
        setProjects(res.data.content);
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => {
        console.error("Error fetching projects", err);
      });
  };

  useEffect(() => {
    fetchPaginatedProjects(0);
  }, [searchTerm, sortKey]);

  return (
    <div>
      <Navbar />
      <div className="position-relative">
        <Header name="Project Listing" />
        <Container
          fluid
          className="border rounded px-3 px-md-5 pt-4 pb-4 mt-4 bg-white shadow position-relative"
          style={{
            top: "-40px",
            left: "0%",
            right: "2%",
            zIndex: 10,
            maxWidth: "95%",
          }}
        >
          <Row className="mb-3">
            <Col xs="12" md="6" className="mb-2">
              <SearchProject setSearchTerm={setSearchTerm} />
            </Col>
            <Col xs="12" md="6" className="text-md-end">
              <SortProject
                setSortKey={setSortKey}
                currentPage={currentPage}
                fetchPaginatedProjects={fetchPaginatedProjects}
              />
            </Col>
          </Row>
          <div className="table-responsive">
            <Table bordered responsive>
              <thead>
                <tr className="table-info">
                  <th>Project Name</th>
                  <th>Reason</th>
                  <th>Type</th>
                  <th>Division</th>
                  <th>Category</th>
                  <th>Priority</th>
                  <th>Dept.</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {projects.length > 0 ? (
                  projects.map((proj, index) => (
                    <tr key={index}>
                      <td>
                        <strong>{proj.projectName}</strong>
                        <br />
                        <small>
                          {proj.startDate} to {proj.endDate}
                        </small>
                      </td>
                      <td>{proj.reason}</td>
                      <td>{proj.type}</td>
                      <td>{proj.division}</td>
                      <td>{proj.category}</td>
                      <td>{proj.priority}</td>
                      <td>{proj.department}</td>
                      <td>{proj.location}</td>
                      <td>{proj.status}</td>
                      <td>
                        <Button
                          onClick={() =>
                            handleUpdate(proj.projectName, "Running")
                          }
                          disabled={proj.status === "Running"}
                          color="primary"
                          className="rounded-pill"
                        >
                          Start
                        </Button>
                      </td>
                      <td>
                        <Button
                          onClick={() =>
                            handleUpdate(proj.projectName, "Closed")
                          }
                          disabled={proj.status === "Closed"}
                          color="primary"
                          outline
                          className="rounded-pill"
                        >
                          Close
                        </Button>
                      </td>
                      <td>
                        <Button
                          onClick={() =>
                            handleUpdate(proj.projectName, "Cancelled")
                          }
                          disabled={proj.status === "Cancelled"}
                          color="primary"
                          outline
                          className="rounded-pill"
                        >
                          Cancel
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="12" className="text-center">
                      No Projects Found
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>

          <div className="d-flex justify-content-center mt-3">
            <PaginationComponent
              page={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => fetchPaginatedProjects(page)}
            />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default AllProject;
