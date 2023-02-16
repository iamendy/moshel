import Section from './Section';
import styles from "../styles/Reviews.module.css"
import Review from "@/components/Review";

const Reviews = () => {
  return (
    <Section title="Reviews" intro="See what our returning users have to say">
      <div className={styles.reviewWrapper}>
        <Review />

        <Review />

        <Review />
      </div>


    </Section>
  );
};

export default Reviews;
