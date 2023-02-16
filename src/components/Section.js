import styles from '../styles/section.module.css';

const Section = ({title, intro, children}) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          {title}
        </h2>

        <p className={styles.sectionIntro}>
          {intro}
        </p>

        {children}

      </div>
    </section>
  );
};

export default Section;
