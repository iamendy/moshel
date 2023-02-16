import Section from "@/components/Section";
import styles from "../styles/Calculator.module.css"
import Image from "next/image";

const Calculator = () => {
  const intro = "Let's see how much your tokens are worth";
  return (
    <Section title="Calculator" intro={intro}>
      <div className={styles.calculatorWrapper}>
          <div className={styles.display}>
            N50,383
          </div>

          <div className="flex items-center space-x-4 my-5">
            <div className="select ">
              BTC
            </div>

            <div className="select selected">
              ETH
            </div>

            <div className="select ">
              USDT
            </div>
          </div>

          <div className="mt-3">
            <input type="number" className={styles.value} placeholder="Enter amount"/>
          </div>

      </div>

      <div>
        <Image src="/img/map.png" alt="map" width={100} height={100} layout="responsive"/>
      </div>
    </Section>
  );
};

export default Calculator;
