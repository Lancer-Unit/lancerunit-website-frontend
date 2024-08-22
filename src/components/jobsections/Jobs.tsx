import React from "react";
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
  url: string; // Add URL field
}

const Jobs: React.FC = () => {
  const Data: Job[] = mockJobsData;

  return (
    <div>
      <div className={styles.postingJobs}>
        <div className={styles.section1}>
          {Data.map((item) => (
            <div className={styles.jobData} key={item.id}>
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
                <div className={styles.timeBtn}>
                  <Button size="xs">
                    <TfiTimer />
                    {item.posted}
                  </Button>
                </div>
              </Link>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.applyNowButton}>
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Jobs;
