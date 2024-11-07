import Link from "next/link";
import BTNClicks from "./BTNClicks";
import styles from './CompareBox.module.css';

export default function CompareBox({ filter, setfilter }) {
  return (
    <div className={styles.compareBox}>
      <h2>What plan do you want to compare?</h2>
      <p>Select Asset Type</p>
      <div className={`flex gap-3 flex-wrap ${styles.slectionWrapper}`}>
        <BTNClicks filter={filter} setfilter={setfilter} filterType="assetType" title="Forex" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="assetType" title="Stocks" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="assetType" title="Indices" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="assetType" title="Crypto" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="assetType" title="Futures" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="assetType" title="Commodities" />
      </div>
      <p>Select your account size</p>
      <div className={`flex gap-3 flex-wrap ${styles.slectionWrapper}`}>
        <BTNClicks filter={filter} setfilter={setfilter} filterType="sizeType" title="5" tempTitle="5K" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="sizeType" title="10" tempTitle="10K" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="sizeType" title="15" tempTitle="15K" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="sizeType" title="20" tempTitle="20K" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="sizeType" title="25" tempTitle="25K" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="sizeType" title="40" tempTitle="40K" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="sizeType" title="50" tempTitle="50K" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="sizeType" title="100" tempTitle="100K" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="sizeType" title="200" tempTitle="200K" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="sizeType" title="400" tempTitle="400K" />
      </div>
      <p>Select number of step</p>
      <div className={`flex gap-3 flex-wrap ${styles.slectionWrapper}`}>
        <BTNClicks filter={filter} setfilter={setfilter} filterType="accountTypes" title="Instant" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="accountTypes" title="1 Step" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="accountTypes" title="2 Step" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="accountTypes" title="3 Step" />
      </div>

      <p>Select countries</p>
      <div className={`flex gap-3 flex-wrap ${styles.slectionWrapper}`}>
        <BTNClicks filter={filter} setfilter={setfilter} filterType="countries" title="USA" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="countries" title="Pakistan" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="countries" title="Nigeria" />
        {/* <BTNClicks filter={filter} setfilter={setfilter} filterType="countries" title="Iran" /> */}
        <BTNClicks filter={filter} setfilter={setfilter} filterType="countries" title="Turkiye" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="countries" title="Dubai" />
      </div>

      <p>Select platforms</p>
      <div className={`flex gap-3 flex-wrap ${styles.slectionWrapper}`}>
        <BTNClicks filter={filter} setfilter={setfilter} filterType="platforms" title="MT4" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="platforms" title="MT5" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="platforms" title="cTrader" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="platforms" title="DXtrade" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="platforms" title="TradeLocker" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="platforms" title="Match Trader" />
      </div>

      <p>Select brokers</p>
      <div className={`flex gap-3 flex-wrap ${styles.slectionWrapper}`}>
        <BTNClicks filter={filter} setfilter={setfilter} filterType="broker" title="Think Markets" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="broker" title="Purple Trading" />
        {/* <BTNClicks filter={filter} setfilter={setfilter} filterType="broker" title="Virtual Markets" /> */}
        <BTNClicks filter={filter} setfilter={setfilter} filterType="broker" title="Capital Markets" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="broker" title="Match Trade" />
        {/* <BTNClicks filter={filter} setfilter={setfilter} filterType="broker" title="Finesse FX" /> */}
        <BTNClicks filter={filter} setfilter={setfilter} filterType="broker" title="Taurex" />
        {/* <BTNClicks filter={filter} setfilter={setfilter} filterType="broker" title="FXPig" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="broker" title="FXFlat" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="broker" title="GBE Brokers" />
        <BTNClicks filter={filter} setfilter={setfilter} filterType="broker" title="CBT Limited" /> */}
        <BTNClicks filter={filter} setfilter={setfilter} filterType="broker" title="Own Broker" />
      </div>

      <Link href="#table" className={styles.searchBtn}>
        Search
      </Link>

    </div>
  )
}
