import React from 'react';
import styles from './News.module.css';

const News = () => {
    const newsItems = [
        { title: 'Tech Industry Sees Major Layoffs', link: '#' },
        { title: 'AI Revolutionizing Recruitment Processes', link: '#' },
        { title: 'Remote Work Trends in 2024', link: '#' },
        { title: 'Top Companies Hiring in Q4 :AI Revolutionizing Recruitment Processes', link: '#' },
        { title: 'Gig Economy Gaining Momentum', link: '#' },
        { title: 'How to Ace Your Job Interviews', link: '#' },
        { title: 'Upskilling: The Key to Success', link: '#' },
        { title: 'Freelancing: A Viable Career Path', link: '#' },
        { title: 'Demand for Data Scientists Soars', link: '#' },
        { title: 'Job Market for Freshers in 2024', link: '#' },
        { title: 'Tech Industry Sees Major Layoffs', link: '#' },
        { title: 'AI Revolutionizing Recruitment Processes', link: '#' },
        { title: 'Remote Work Trends in 2024', link: '#' },
        { title: 'Top Companies Hiring in Q4', link: '#' },
        { title: 'Gig Economy Gaining Momentum', link: '#' },
        { title: 'How to Ace Your Job Interviews', link: '#' },
        { title: 'Upskilling: The Key to Success', link: '#' },
        { title: 'Freelancing: A Viable Career Path', link: '#' },
        { title: 'Demand for Data Scientists Soars', link: '#' },
        { title: 'Job Market for Freshers in 2024', link: '#' },
    ];

    return (
        <div className={styles.cardContainer}>
            <div className={styles.newsContainer}>
                <h2 className={styles.title} >Buzz News in Job Market</h2>
                <ul className={styles.newsList}>
                    {newsItems.map((item, index) => (
                        <li key={index} className={styles.newsItem}>
                            <a href={item.link} className={styles.newsLink}>
                                <span className={styles.newsIcon}>➡️</span> {/* Or use an arrow: ➜ */}
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div></div>
    );
};

export default News;
