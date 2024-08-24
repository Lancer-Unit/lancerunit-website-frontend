import React, { useState, useEffect } from "react";
import styles from "./Jobs.module.css";
import { IoBagOutline } from "react-icons/io5";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineDocumentText } from "react-icons/hi";
import { TfiTimer } from "react-icons/tfi";
import mockJobsData from "../../data/jobs.json";

interface Job {
  id: string;
  title: string;
  company: string;
  experience: string;
  salary: string;
  location: string;
  candidate: string;
  keySkills: string[];
  posted: string;
  url: string;
}

const Jobs: React.FC = () => {
  const Data: Job[] = mockJobsData;
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const jobsPerPage = 10;

  // Calculate the index for slicing the data
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = Data.slice(indexOfFirstJob, indexOfLastJob);

  // Calculate total number of pages
  const totalPages = Math.ceil(Data.length / jobsPerPage);

  // Fill the remaining jobs on the current page with empty placeholders if needed
  const filledJobs = [...currentJobs];
  while (filledJobs.length < jobsPerPage) {
    filledJobs.push({ id: "", title: "", company: "", experience: "", salary: "", location: "", candidate: "", keySkills: [], posted: "", url: "" });
  }

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(pageNumber);
        setIsTransitioning(false);
      }, 500); // Match this duration with your CSS transition time
    }
  };

  return (
    <div>
      <div className={styles.postingJobs}>
        <div className={`${styles.section1} ${isTransitioning ? "" : styles.active}`}>
          {filledJobs.map((item, index) => (
            item.id && (
              <div className={styles.jobData} key={index}>
                <Link href={`/jobspage/${item.id}`} className={styles.jobDataLink}>
                  <div className={styles.dataMarked}>
                    <h2>{item.title}</h2>
                  </div>
                  <div className={styles.companyJobs}>{item.company}</div>
                  <div className={styles.education}>
                    <IoBagOutline className={styles.iconsExperience} />
                    <ul>{item.experience}</ul>
                    <ul>{item.salary}</ul>
                    <ul style={{ display: "flex", gap: "3px" }}>
                      <CiLocationOn className={styles.locIcon} />
                      {item.location}
                    </ul>
                  </div>
                  <div className={styles.textOutline}>
                    <HiOutlineDocumentText className={styles.locIcon} /> {item.candidate}
                  </div>
                  <div className={styles.keyskill}>
                    {item.keySkills.slice(0, 2).map((elem, index) => (
                      <span key={index} className={styles.jobSkills}>
                        {elem}
                      </span>
                    ))}
                  </div>
                  <div className={styles.timeBtn}><Button size="xs">
                  <TfiTimer />
                  {item.posted}
                </Button></div>
                </Link>
                <Link href={`/jobspage/${item.id}`} className={styles.applyButton}>
                  Apply Now
                </Link>
              </div>
            )
          ))}
        </div>
        <div className={styles.pagination}>
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={styles.pageButton}
          >
            Previous
          </Button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
            <Button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`${styles.pageNumber} ${currentPage === number ? styles.currentPage : ""}`}
            >
              {number}
            </Button>
          ))}
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={styles.pageButton}
          >
            Next
          </Button>
        </div>
      </div>

    </div>
  );
};

export default Jobs;
