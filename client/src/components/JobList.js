import React from "react";
import { Accordion, Badge, Row } from "react-bootstrap";
import JobItem from "./JobItem";

const JobList = (props) => {
  const { jobs } = props;

  return (
    <>
      <Accordion>
        {jobs.map((job, index) => {
          const { items } = job;

          return (
            <Row key={job._id} style={{ width: "100%" }}>
              <Accordion.Toggle
                as={Row}
                style={{ width: "100%", margin: "20px", cursor: "pointer" }}
                eventKey={job._id}
              >
                <Badge
                  variant="secondary"
                  style={{
                    width: "35px",
                  }}
                >
                  <span>{job.name.slice(0, 2).toUpperCase()}</span>
                </Badge>
                <span style={{ marginLeft: "20px" }}>
                  {job.total_jobs_in_hospital} jobs from {job.name}
                </span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={job._id}>
                <Row style={{ width: "100%" }}>
                  {items.map((item, index) => {
                    return <JobItem key={index} item={item} />;
                  })}
                </Row>
              </Accordion.Collapse>
            </Row>
          );
        })}
      </Accordion>
    </>
  );
};
export default JobList;
