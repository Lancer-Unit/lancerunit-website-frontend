import React from 'react';
import styles from './CompaniesCard.module.css';
import companyLogo from '@/assets/CompanyLogo/download.png';
import companyLogo1 from '@/assets/CompanyLogo/download1.png';
import companyLogo3 from '@/assets/CompanyLogo/download3.png';
import companyLogo4 from '@/assets/CompanyLogo/download4.png';
import companyLogo5 from '@/assets/CompanyLogo/download5.png';
import companyLogo6 from '@/assets/CompanyLogo/download6.png';
import companyLogo7 from '@/assets/CompanyLogo/download7.png';
import companyLogo8 from '@/assets/CompanyLogo/download8.png';
import companyLogo9 from '@/assets/CompanyLogo/download9.png';
import companyLogo10 from '@/assets/CompanyLogo/download10.png';
import companyLogo11 from '@/assets/CompanyLogo/download11.png';
import companyLogo12 from '@/assets/CompanyLogo/download12.jpg';
import companyLogo13 from '@/assets/CompanyLogo/download13.png';
import companyLogo14 from '@/assets/CompanyLogo/download14.png';
import companyLogo15 from '@/assets/CompanyLogo/download15.png';
import companyLogo16 from '@/assets/CompanyLogo/download16.png';
import companyLogo17 from '@/assets/CompanyLogo/download17.png';
import companyLogo18 from '@/assets/CompanyLogo/download18.png';
import companyLogo19 from '@/assets/CompanyLogo/download19.png';
import companyLogo20 from '@/assets/CompanyLogo/download20.png';
import companyLogo21 from '@/assets/CompanyLogo/download21.png';

const CompaniesCard: React.FC = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.textContent}>
        <p>Find your dream job!</p>
        <p>Trusted by 300000+ students</p>
      </div>
      <div className={styles.companiesGrid}>
        <div className={styles.companyLogo}>
          <img src={companyLogo.src} alt="Company 1" />
        </div>
        <div className={styles.companyLogo}>
          <img src={companyLogo1.src} alt="Company 1" />
        </div>
        <div className={styles.companyLogo}>
          <img src={companyLogo3.src} alt="Company 1" />
        </div>
        <div className={styles.companyLogo}>
          <img src={companyLogo4.src} alt="Company 1" />
        </div>
        <div className={styles.companyLogo}>
          <img src={companyLogo5.src} alt="Company 1" />
        </div>
        <div className={styles.companyLogo}>
          <img src={companyLogo6.src} alt="Company 1" />
        </div>
        <div className={styles.companyLogo}>
          <img src={companyLogo7.src} alt="Company 1" />
        </div>
        <div className={styles.companyLogo}>
          <img src={companyLogo8.src} alt="Company 1" />
        </div>
        <div className={styles.companyLogo}>
          <img src={companyLogo9.src} alt="Company 1" />
        </div>
        <div className={styles.companyLogo}>
          <img src={companyLogo10.src} alt="Company 1" />
        </div>
        <div className={styles.companyLogo}>
          <img src={companyLogo11.src} alt="Company 1" />
        </div>
        <div className={styles.companyLogo}>
          <img src={companyLogo12.src} alt="Company 1" />
        </div>
        <div className={styles.companyLogo}>
          <img src={companyLogo13.src} alt="Company 1" />
        </div>
        <div className={styles.companyLogo}>
          <img src={companyLogo14.src} alt="Company 1" />
        </div>
        <div className={styles.companyLogo}>
          <img src={companyLogo15.src} alt="Company 1" />
        </div>
        <div className={styles.companyLogo}>
          <img src={companyLogo16.src} alt="Company 1" />
        </div>
        <div className={styles.companyLogo}>
          <img src={companyLogo17.src} alt="Company 1" />
        </div>
        <div className={styles.companyLogo}>
          <img src={companyLogo18.src} alt="Company 1" />
        </div>
        <div className={styles.companyLogo}>
          <img src={companyLogo19.src} alt="Company 1" />
        </div>
        <div className={styles.companyLogo}>
          <img src={companyLogo20.src} alt="Company 1" />
        </div>
        <div className={styles.companyLogo}>
          <img src={companyLogo21.src} alt="Company 1" />
        </div>


        {/* Add more logos similarly if needed */}
      </div>
    </div>
  );
};

export default CompaniesCard;
