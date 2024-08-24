import React from 'react';
import styles from './SocialCard.module.css'; // Import your CSS module

const SocialCard: React.FC = () => {
    return (
        <div className={styles.postingCards}><div className={styles.cardContainer}>
            <div className={styles.socialLinks}>
                <a href="https://t.me/+AAc3gc2BNsRhNTI1" className={styles.telegramLink} target="_blank" rel="noopener noreferrer">
                    <img src="/assets/telegramlogo.jpg" alt="Telegram" />
                </a>
                <a href="https://wa.me/your-number" className={styles.whatsappLink} target="_blank" rel="noopener noreferrer">
                    <img src="/assets/whatsapplogo.jpg" alt="WhatsApp" />
                </a>

            </div>
            <br />
            <div className={styles.textContent}>            
                <p>Join our Telegram and Whatsapp Groups for Regular Updates</p>
            </div>
        </div>
        </div>

    );
};

export default SocialCard;
