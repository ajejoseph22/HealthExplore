import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useDebounce } from "use-debounce";
import Footer from "./Footer";
import Header from "./Header";
import JobList from "./JobList";
import Sidenav from "./Sidenav";
import services from "../services";
import Sorters from "./Sorters";
import { setParams, useQuery } from "../utils";
import { withRouter } from "react-router-dom";

const Home = (props) => {
  const [jobs, setJobs] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [value] = useDebounce(searchValue, 1000);

  const queries = useQuery();

  const q = queries.get("q");

  const location = queries.get("location");
  const department = queries.get("department");
  const role = queries.get("role");
  const experience = queries.get("experience");

  const fetchJobs = React.useCallback(() => {
    services.getJobs(q, location, department, role, experience).then((res) => {
      setJobs([...res]);
    });
  }, [q, location, department, role, experience]);

  React.useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  React.useEffect(() => {
    setParams(props.history, { q: value });
  }, [props.history, value]);

  return (
    <Container fluid>
      <Header />

      <Row style={{ marginTop: "20px" }}>
        <Col xs={12}>
          <Form.Control
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="search for any keyword or company"
          />
        </Col>
      </Row>

      <Row style={{ marginTop: "20px" }}>
        <Col xs={2}>
          <Sidenav />
        </Col>

        <Col xs={10}>
          <Sorters />
          <JobList jobs={jobs} />
        </Col>
      </Row>

      <Footer />
    </Container>
  );
};

export default withRouter(Home);
