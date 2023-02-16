import Section from "@/components/Section";
import styles from "../styles/Features.module.css"
import Card from "@/components/Card";

const BuyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
       stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round"
          d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"/>
  </svg>
)

const Airtime = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
  </svg>
)

const Love = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
)

const Support = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

const Features = () => {
  const features = [
    {
    id: 1,
    icon: (<BuyIcon/>),
    title: "Buy & Sell",
    content: "With real time monitoring, you can always verify prices on our platform before transaction."
    },
    {
      id: 2,
      icon: (<Airtime/>),
      title: "Airtime & Bills",
      content: "You can choose to cash out smaller withdrawals (Less than $5) with airtime, and in the near future, we would exchange your airtime for Naira."
    },
    {
      id: 3,
      icon: (<Support/>),
      title: "Support Chat",
      content: "Our support channels are always open 24/7, We would love to hear from you!"
    },
    {
      id: 4,
      icon: (<Love/>),
      title: "Users love MoshelSwap",
      content: "Checkout our ratings on Trustpilot to see how our users loved our service."
    }
  ]
  const intro = "Customer Satisfaction is our priority, trading comes second."

  return (
    <Section title="Features" intro={intro}>
      <div className={styles.features}>
        <p className="font-dm-sans md:w-[60%]">
          Our one-click service is revolutionary. Exchange your digital assets without much hassle.
        </p>

        <div className={styles.featuresWrapper}>

          {features.map(feature => (
            <Card key={feature.id} icon={feature.icon} title={feature.title} content={feature.content}/>
          ))}

        </div>
      </div>
    </Section>
  );
};

export default Features;
