import Section from './Section';
import styles from "../styles/Prices.module.css";
import {useEffect, useState} from "react";

const Prices = () => {
  const [prices, setPrices] = useState([]);

  const getPrices = async () => {
    try {
      const res = await fetch("https://breet.app/data-api/crypto-price-data")
      const resPrices = await res.json();
      setPrices([...resPrices])
      console.log(resPrices)
    } catch (e) {
      console.log(e);
    }
  }

  const roundUp = (number) => {
    const format = (Math.round(number * 100) / 100).toFixed(2)
    return new Intl.NumberFormat('en-US').format(format);
  }

  useEffect(() => {
    getPrices();
  }, [])


  const intro = "Get crypto price updates. We also update our prices to reflect the current market price."
  return (
    <Section title="Price Listings" intro={intro}>
      <p className="font-dm-sans md:w-[60%]">
        Ensure you verify prices before contacting us to ensure a seamless transactions.
      </p>

      <div className={styles.prices}>

        {
          prices &&
          prices.map(price => (
            <div className={styles.priceCard}>
              <div className={styles.signWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664"/>
                </svg>
              </div>

              <div className={styles.price} key={price.name}>
                <p className={styles.dols}> ${roundUp(price.latestQuote)} </p>
                <p className={styles.naira}> ₦746.98 </p>
                <div className="ml-3">
                  {
                    price.percentChange1hr > 0 ?
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="text-green-500 w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round"
                                d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"/>
                        </svg>
                        <p className="text-sm ml-1">{price.percentChange1hr}%</p>
                      </div>
                      :
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                        </svg>
                        <p className="text-sm ml-1">{price.percentChange1hr}%</p>
                      </div>
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </Section>
  );
};

export default Prices;
