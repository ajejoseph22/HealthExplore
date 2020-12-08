import React from "react";
import { Card, Col, Modal, Nav, Row } from "react-bootstrap";
import services from "../services";

const Sidenav = () => {
  const [filters, setFilters] = React.useState({});

  const [show, setShow] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState("");

  const handleClose = () => setShow(false);

  React.useEffect(() => {
    services.getFilters().then((res) => {
      setFilters(res);
    });
  }, []);

  return (
    <>
      <Nav className="col-md-12 d-none d-md-block sidebar">
        <Card>
          <Card.Body>
            <Card.Title>
              <span>JOB TYPE</span>
            </Card.Title>
            {(filters.job_type || []).map((jobType, index) => {
              return (
                <Card.Text key={index}>
                  <a href="#">{jobType.key}</a> {jobType.doc_count}
                </Card.Text>
              );
            })}
          </Card.Body>
        </Card>

        <Card style={{ marginTop: "20px" }}>
          <Card.Body>
            <Card.Title>
              <span>DEPARTMENT</span>
            </Card.Title>
            {(filters.department || []).slice(0, 5).map((dep, index) => {
              return (
                <Card.Text key={index}>
                  <a href="#">{dep.key}</a> {dep.doc_count}
                </Card.Text>
              );
            })}

            {(filters.department || []).slice(0, 5).length <
              (filters.department || []).length && (
              <Card.Text
                onClick={() => {
                  setShow(true);
                  setModalTitle("department");
                }}
              >
                <span style={{ cursor: "pointer" }}>show more</span>
              </Card.Text>
            )}
          </Card.Body>
        </Card>

        <Card style={{ marginTop: "20px" }}>
          <Card.Body>
            <Card.Title>
              <span>WORK SCHEDULE</span>
            </Card.Title>
            {(filters.work_schedule || []).map((sched, index) => {
              return (
                <Card.Text key={index}>
                  <a href="#">{sched.key}</a> {sched.doc_count}
                </Card.Text>
              );
            })}
          </Card.Body>
        </Card>

        <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Card.Body>
            <Card.Title>
              <span>EXPERIENCE</span>
            </Card.Title>
            {(filters.experience || []).map((exp, index) => {
              return (
                <Card.Text key={index}>
                  <a href="#">{exp.key}</a> {exp.doc_count}
                </Card.Text>
              );
            })}
          </Card.Body>
        </Card>
      </Nav>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="xl"
        dialogClassName="modal-70w"
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row xs={1} md={4}>
            {modalTitle &&
              filters[modalTitle].map((item) => {
                return (
                  <Col span={4}>
                    <a href="#">{item.key}</a> {item.doc_count}
                  </Col>
                );
              })}
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Sidenav;
