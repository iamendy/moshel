import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className="mb-14">
      <div className="wrapper">
        <h1 className={styles.heroTitle}>
          Exchange your BTC, ETH, USDT, BNB, and BUSD with <span className={styles.highlight}>Ease</span>
        </h1>

        <p className={styles.subtitle}>
          At MoshelSwap, you are one click away from converting your digital assets into ₦NGN. Our team has
          been
          trading digital assets professionally since 2015 and we offer the best rates.
        </p>

        <div className="flex justify-center lg:justify-start items-center font-exo-bold">
          <button className={styles.chatBtn}> Chat on WhatsApp</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
