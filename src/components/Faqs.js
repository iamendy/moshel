import styles from '../styles/Faqs.module.css';
import Section from "@/components/Section";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'

const Faqs = () => {

  const intro = "Here are a curated list questions we receive.";

  return (
    <Section title="Frequently Asked Questions" intro={intro}>

      <p className="mb-4">Feel free to reach out to us, if you need further clarifications</p>

      <div className="lg:flex items-center">
        <Accordion className={styles.accordion} allowToggle={true}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' className={styles.title}>
                  How does MoshelSwap work?
                </Box>
                <AccordionIcon/>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Transactions in MoshelSwap are done via WhatsApp or Website Livechat. This is a beta version of the
              website
              and subsequent updates would include an advanced user interface. Just click the “Chat on WhatsApp” button
              to
              get started.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' className={styles.title}>
                  Which cryptocurrencies does Moshel Swap accept?
                </Box>
                <AccordionIcon/>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              We currently support Bitcoin, Ethereum, BNB and Stable coinslike USDT & BUSD.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' className={styles.title}>
                  Which banks does MoshelSwap support?
                </Box>
                <AccordionIcon/>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              We currently have support for every Nigerian bank that is capable of receiving Naira or eNaira.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' className={styles.title}>
                  What is the minimum trade amount in MoshelSwap?
                </Box>
                <AccordionIcon/>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              We purchase every cryptocurrency irrespective of size, however, payments less than $5 would be paid in
              airtime to any network of your choice.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' className={styles.title}>
                  How many blockchain confirmation is required before payment?
                </Box>
                <AccordionIcon/>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              We require transactions sent to our wallet to have a minimum of 3 blockchain confirmations before we
              initiate payment to your bank account.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' className={styles.title}>
                  Which Region does MoshelSwap supports
                </Box>
                <AccordionIcon/>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              MoshelSwap offers support for customers worldwide as long as they are able to receive payments in Naira.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <div className={styles.tech}>
          <img src="/img/tech.png" alt="tech"/>
        </div>
      </div>
    </Section>
  );
};

export default Faqs;
