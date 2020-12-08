import React from "react";
import * as moment from "moment";
import { Button, Col, Row } from "react-bootstrap";

const JobItem = (props) => {
  const { item } = props;

  const [isExpanded, setExpanded] = React.useState(false);

  const [salary1, salary2] = item.salary_range;

  return (
    <Row
      onClick={() => setExpanded(!isExpanded)}
      style={{
        width: "100%",
        marginLeft: "60px",
      }}
    >
      <Row
        style={{
          flexDirection: "row",
          width: "100%",
          padding: "15px",
          borderTop: "1px solid grey",
          cursor: "pointer",
          justifyContent: "space-between",
        }}
      >
        <Row style={{ flexDirection: "column" }}>
          <span style={{ fontWeight: "bold" }}>{item.job_title}</span>
          <span>
            {item.job_type} | ${salary1} - ${salary2} an hour | {item.city}
          </span>
        </Row>

        <Row>{moment(item.created).fromNow()}</Row>
      </Row>
      {isExpanded && (
        <Row style={{ padding: "15px" }}>
          <Row style={{ width: "100%" }}>
            <Col span={3}>
              <span>Department:</span>
            </Col>
            <Col span={6}>
              {item.department.map((dep, index) => {
                if (index + 1 === item.department.length) {
                  return dep;
                }

                return dep + ", ";
              })}
            </Col>
            <Col span={3}></Col>
          </Row>

          <Row style={{ width: "100%", marginTop: "20px" }}>
            <Col span={3}>
              <span>Hours / shifts:</span>
            </Col>
            <Col span={6}>{item.work_schedule}</Col>
            <Col span={3}></Col>
          </Row>

          <Row style={{ width: "100%", marginTop: "20px" }}>
            <Col span={3}>
              <span>Summary: </span>
            </Col>
            <Col span={6}>{item.description}</Col>
            <Col span={3}>
              <Row style={{ flexDirection: "column", alignItems: "flex-end" }}>
                <Button style={{ width: "130px" }} variant="primary">
                  Job Details
                </Button>
                <Button
                  style={{ marginTop: "20px", width: "130px" }}
                  variant="outline-primary"
                >
                  Save Details
                </Button>
              </Row>
            </Col>
          </Row>
        </Row>
      )}
    </Row>
  );
};
export default JobItem;
