import React, { useEffect, useState } from "react";
import styles from "./Testament.module.css";

const testimonials = [
  {
    quote: "I enjoyed my gettingr",
    name: "Aayesha Sana",
    role: "Senior Software Engineer at HSBC",
    imgSrc: "https://i.pravatar.cc/120?img=1",
  },
  {
    quote: "Great experience!",
    name: "John Doe",
    role: "Project Manager at ABC Corp",
    imgSrc: "https://i.pravatar.cc/120?img=2",
  },
  {
    quote: "Amazing support!",
    name: "Jane Smith",
    role: "Designer at XYZ Inc.",
    imgSrc: "https://i.pravatar.cc/120?img=3",
  },
  {
    quote: "Highly recommend!",
    name: "Alice Johnson",
    role: "CEO at Acme Co.",
    imgSrc: "https://i.pravatar.cc/120?img=4",
  },
  // Add more testimonials as needed
];

const extendedTestimonials = [...testimonials, ...testimonials]; // Duplicate array for seamless scrolling

const testimonialHeight = 150; // Height of each testimonial in pixels

const Testament: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const speedFactor = 10; // Adjusted for faster speed
    const intervalTime = 20; // Shorter interval for faster updates
    const offsetIncrement = speedFactor; // Larger increment for faster scrolling

    const interval = setInterval(() => {
      setOffset((prevOffset) => {
        const newOffset = (prevOffset + offsetIncrement) % (testimonialHeight * testimonials.length);
        return newOffset;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.carouselContainer}>
        <div
          className={styles.carouselTrack}
          style={{
            transform: `translateY(-${offset}px)`,
          }}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonial}>
              <img
                src={testimonial.imgSrc}
                alt={testimonial.name}
                className={styles.image}
              />
              <p className={styles.quote}>"{testimonial.quote}"</p>
              <p className={styles.name}>{testimonial.name}</p>
              <p className={styles.role}>{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testament;
