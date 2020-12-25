import { createMocks } from "node-mocks-http";
import jobs from "../pages/api/jobs";
import jobsData from "../data/jobs.json";

describe("Jobs", () => {
  it("should respond with the jobs from all hospitals on initial load", async () => {
    // Arrange
    const { req, res } = createMocks({
      method: "GET",
    });

    // Act
    await jobs(req, res);

    // Assert
    const { result } = JSON.parse(res._getData());
    expect(result).toBeDefined();
    expect(Object.keys(result).length).toEqual(jobsData.length);
  });

  it("should respond with 0 jobs when the user's search doesn't match", async () => {
    // Arrange
    const dummyQuery = "something";
    const { req, res } = createMocks({
      method: "GET",
      query: {
        query: dummyQuery,
      },
    });

    // Act
    await jobs(req, res);

    // Assert
    const { result } = JSON.parse(res._getData());
    expect(result).toEqual({});
  });

  it("should respond with filtered jobs when filters are applied", async () => {
    // Arrange
    const jobType = "Per-Diem";
    const department = "Orthopaedic Surgery";
    const workShift = "Day shift";
    const experience = "Internship";
    const { req, res } = createMocks({
      method: "GET",
      query: {
        jobType,
        department,
        workShift,
        experience,
      },
    });

    // Act
    await jobs(req, res);

    // Assert
    const { result } = JSON.parse(res._getData());
    const item = result[Object.keys(result)[0]][0];
    expect(Object.keys(result).length).toEqual(1);
    expect(item.job_type).toBe(jobType);
    expect(item.department).toContain(department);
    expect(item.work_schedule).toBe(workShift);
    expect(item.experience).toBe(experience);
  });
});
