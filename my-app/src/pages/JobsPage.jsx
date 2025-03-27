import React, { useState, useEffect } from "react";
import "../styles/jobs.css";
import jobsData from "../data/jobs.json";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    setJobs(jobsData);
  }, []);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="jobs-container">
        <Sidebar />
        <div className="jobs-content">
          <input
            type="text"
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="job-search"
          />
          <div className="job-list">
            {filteredJobs.map((job) => (
              <div key={job.id} className="job-card">
                <img src={job.logo} alt={job.company} className="job-logo" />
                <h3>{job.title}</h3>
                <p>{job.company} - {job.location}</p>
                <button className="save-job">Save Job</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;