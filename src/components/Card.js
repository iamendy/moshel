import styles from "@/styles/Features.module.css";

const Card = ({icon, title, content}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        {icon}
        <span className={styles.cardTitle}> {title} </span>
      </div>

      <p className={styles.cardBody}>
        {content}
      </p>
    </div>
  );
};

export default Card;
