const jobs = require("../../../data/jobs");
import { applyFullSearch, applySorting } from "../jobListingsService";

describe("GIVEN jobListingsService", () => {
  describe("WHEN testing .applyFullSearch()", () => {
    it("SHOULD return all job listings for fullSearch=null", () => {
      const filteredJobs = applyFullSearch(jobs, null);
      expect(filteredJobs.length).toBe(jobs.length);
    });

    it('SHOULD return all job listings for fullSearch=""', () => {
      const filteredJobs = applyFullSearch(jobs, "");
      expect(filteredJobs.length).toBe(jobs.length);
    });

    it('SHOULD return 1 job listings for fullSearch="mammoth"', () => {
      const filteredJobs = applyFullSearch(jobs, "mammoth");
      expect(filteredJobs.length).toBe(1);
    });

    it('SHOULD return 13 job listings for fullSearch="hospital"', () => {
      const filteredJobs = applyFullSearch(jobs, "hospital");
      expect(filteredJobs.length).toBe(13);
    });

    it('SHOULD return 5 job listings for fullSearch="center"', () => {
      const filteredJobs = applyFullSearch(jobs, "center");
      expect(filteredJobs.length).toBe(5);
    });
  });

  describe("WHEN testing .applySorting()", () => {
    it("SHOULD return all job listings and sorting by location DESC", () => {
      const sortedJobs = applySorting(jobs, { location: "DESC" });
      expect(sortedJobs[0].items[0].address).toBe("85 Sierra Park Road");
      expect(sortedJobs[1].items[0].address).toBe("733 Cedar Street");
      expect(sortedJobs[sortedJobs.length - 1].items[0].address).toBe(
        "1067 Peachtree Street"
      );
    });

    it("SHOULD return all job listings and sorting by location ASC", () => {
      const sortedJobs = applySorting(jobs, { location: "ASC" });
      expect(sortedJobs[0].items[0].address).toBe("1067 Peachtree Street");
      expect(sortedJobs[1].items[0].address).toBe("1097 Northwest Blvd");
      expect(sortedJobs[sortedJobs.length - 1].items[0].address).toBe(
        "85 Sierra Park Road"
      );
    });

    it("SHOULD return all job listings and sorting by location ASC and experience DESC", () => {
      const sortedJobs = applySorting(jobs, {
        location: "ASC",
        experience: "DESC",
      });
      expect(sortedJobs[0].items[0].address).toBe("1067 Peachtree Street");
      expect(sortedJobs[1].items[0].address).toBe("1097 Northwest Blvd");
      expect(sortedJobs[sortedJobs.length - 1].items[0].address).toBe(
        "85 Sierra Park Road"
      );
      expect(sortedJobs[0].items.map((item) => item.experience)).toEqual([
        "Intermediate",
        "Internship",
      ]);
      expect(sortedJobs[1].items.map((item) => item.experience)).toEqual([
        "Junior",
        "Junior",
        "Junior",
        "Internship",
        "Internship",
      ]);
    });
  });
});
