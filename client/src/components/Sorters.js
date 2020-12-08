import React from "react";
import { Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import services from "../services";
import { setParams, useQuery } from "../utils";

const Sorters = (props) => {
  const [totalCount, setTotalCount] = React.useState(0);
  const queries = useQuery();

  const location = queries.get("location");
  const department = queries.get("department");
  const role = queries.get("role");
  const experience = queries.get("experience");

  const [sorts, setSorts] = React.useState({
    location,
    role,
    department,
    experience,
  });

  const q = queries.get("q");

  const onSortClick = (name) => {
    const sortObj = {
      ...sorts,
    };

    if (!sorts[name]) {
      sortObj[name] = 1;
    }

    if (sorts[name] === 1) {
      sortObj[name] = -1;
    }

    if (sorts[name] === -1) {
      sortObj[name] = undefined;
    }

    setParams(props.history, sortObj);
    return setSorts(sortObj);
  };

  const renderIcon = (name) => {
    if (!sorts[name]) {
      return null;
    }

    if (sorts[name] === 1) {
      return "⇧";
    }

    return "⇩";
  };

  React.useEffect(() => {
    services.getTotalCount(q).then((res) => {
      setTotalCount(res.totalCount);
    });
  }, [q]);

  return (
    <Row
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: "20px",
        marginRight: "40px",
        marginBottom: "20px",
      }}
    >
      <Row>{totalCount} job postings</Row>

      <Row>
        Sort by
        <span className="sorters" onClick={() => onSortClick("location")}>
          <span style={{ textAlign: "center", justifyContent: "center" }}>
            {renderIcon("location")}
          </span>
          Location
        </span>
        <span className="sorters" onClick={() => onSortClick("role")}>
          {renderIcon("role")}
          Role
        </span>
        <span className="sorters" onClick={() => onSortClick("department")}>
          {renderIcon("department")}
          Department
        </span>
        <span className="sorters" onClick={() => onSortClick("experience")}>
          {renderIcon("experience")}
          Experience
        </span>
      </Row>
    </Row>
  );
};

export default withRouter(Sorters);
