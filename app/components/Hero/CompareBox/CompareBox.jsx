import BTNClicks from "./BTNClicks";
import styles from './CompareBox.module.css';

export default function CompareBox({ filter, setfilter }) {
  return (
    <div className={styles.compareBox}>
      <h2>What plan do you want to compare?</h2>
      <p>Select Asset Type</p>
      <div className={`flex gap-3 flex-wrap ${styles.slectionWrapper}`}>
        <BTNClicks filter={filter} setfilter={setfilter} title="Forex" />
        <BTNClicks filter={filter} setfilter={setfilter} title="Stocks" />
        <BTNClicks filter={filter} setfilter={setfilter} title="Indices" />
        <BTNClicks filter={filter} setfilter={setfilter} title="Crypto" />
        <BTNClicks filter={filter} setfilter={setfilter} title="Futures" />
        <BTNClicks filter={filter} setfilter={setfilter} title="Commodities" />
      </div>
      <p>Select your account size</p>
      <div className={`flex gap-3 flex-wrap ${styles.slectionWrapper}`}>
        <BTNClicks filter={filter} setfilter={setfilter} title="5k" />
        <BTNClicks filter={filter} setfilter={setfilter} title="10k" />
        <BTNClicks filter={filter} setfilter={setfilter} title="25k" />
        <BTNClicks filter={filter} setfilter={setfilter} title="50k" />
        <BTNClicks filter={filter} setfilter={setfilter} title="100k" />
        <BTNClicks filter={filter} setfilter={setfilter} title="2000k" />
      </div>
      <p>Select number of step</p>
      <div className={`flex gap-3 flex-wrap ${styles.slectionWrapper}`}>
        <BTNClicks filter={filter} setfilter={setfilter} title="None" />
        <BTNClicks filter={filter} setfilter={setfilter} title="1 Steps" />
        <BTNClicks filter={filter} setfilter={setfilter} title="2 Steps" />
        <BTNClicks filter={filter} setfilter={setfilter} title="3 Steps" />
      </div>

      <p>Select countries</p>
      <div className={`flex gap-3 flex-wrap ${styles.slectionWrapper}`}>
        <BTNClicks filter={filter} setfilter={setfilter} title="USA" />
        <BTNClicks filter={filter} setfilter={setfilter} title="Pakistan" />
        <BTNClicks filter={filter} setfilter={setfilter} title="Nigeria" />
        <BTNClicks filter={filter} setfilter={setfilter} title="Iran" />
        <BTNClicks filter={filter} setfilter={setfilter} title="Turkiye" />
        <BTNClicks filter={filter} setfilter={setfilter} title="Dubai" />
      </div>

      <p>Select platforms</p>
      <div className={`flex gap-3 flex-wrap ${styles.slectionWrapper}`}>
        <BTNClicks filter={filter} setfilter={setfilter} title="MT4" />
        <BTNClicks filter={filter} setfilter={setfilter} title="MT5" />
        <BTNClicks filter={filter} setfilter={setfilter} title="cTrader" />
        <BTNClicks filter={filter} setfilter={setfilter} title="DXtrade" />
        <BTNClicks filter={filter} setfilter={setfilter} title="TradeLocker" />
        <BTNClicks filter={filter} setfilter={setfilter} title="Match Trader" />
      </div>

      <p>Select brokers</p>
      <div className={`flex gap-3 flex-wrap ${styles.slectionWrapper}`}>
        <BTNClicks filter={filter} setfilter={setfilter} title="Think Markets" />
        <BTNClicks filter={filter} setfilter={setfilter} title="Purple Trading" />
        <BTNClicks filter={filter} setfilter={setfilter} title="Virtual Markets" />
        <BTNClicks filter={filter} setfilter={setfilter} title="Capital Markets" />
        <BTNClicks filter={filter} setfilter={setfilter} title="Match Trade" />
        <BTNClicks filter={filter} setfilter={setfilter} title="Finesse FX" />
        <BTNClicks filter={filter} setfilter={setfilter} title="Taurex" />
        <BTNClicks filter={filter} setfilter={setfilter} title="FXPig" />
        <BTNClicks filter={filter} setfilter={setfilter} title="FXFlat" />
        <BTNClicks filter={filter} setfilter={setfilter} title="GBE Brokers" />
        <BTNClicks filter={filter} setfilter={setfilter} title="CBT Limited" />
        <BTNClicks filter={filter} setfilter={setfilter} title="Own Broker" />
      </div>

      <button type="button" className={styles.searchBtn}>
        Search
      </button>

    </div>
  )
}
