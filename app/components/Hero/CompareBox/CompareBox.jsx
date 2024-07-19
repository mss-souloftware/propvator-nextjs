import BTNClicks from "./BTNClicks";
import styles from './CompareBox.module.css';

export default function CompareBox() {
  return (
    <div className={styles.compareBox}>
      <h2>What plan do you want to compare?</h2>
      <p>Select Asset Type</p>
      <div className={`flex gap-3 flex-wrap ${styles.slectionWrapper}`}>
        <BTNClicks title="Forex" />
        <BTNClicks title="Stocks" />
        <BTNClicks title="Indices" />
        <BTNClicks title="Crypto" />
        <BTNClicks title="Futures" />
        <BTNClicks title="Commodities" />
      </div>
      <p>Select your account size</p>
      <div className={`flex gap-3 flex-wrap ${styles.slectionWrapper}`}>
        <BTNClicks title="5k" />
        <BTNClicks title="10k" />
        <BTNClicks title="25k" />
        <BTNClicks title="50k" />
        <BTNClicks title="100k" />
        <BTNClicks title="2000k" />
      </div>
      <p>Select number of step</p>
      <div className={`flex gap-3 flex-wrap ${styles.slectionWrapper}`}>
        <BTNClicks title="None" />
        <BTNClicks title="1 Steps" />
        <BTNClicks title="2 Steps" />
        <BTNClicks title="3 Steps" />
      </div>

      <p>Select countries</p>
      <div className={`flex gap-3 flex-wrap ${styles.slectionWrapper}`}>
        <BTNClicks title="USA" />
        <BTNClicks title="Pakistan" />
        <BTNClicks title="Nigeria" />
        <BTNClicks title="Iran" />
        <BTNClicks title="Turkiye" />
        <BTNClicks title="Dubai" />
      </div>

      <p>Select platforms</p>
      <div className={`flex gap-3 flex-wrap ${styles.slectionWrapper}`}>
        <BTNClicks title="MT4" />
        <BTNClicks title="MT5" />
        <BTNClicks title="cTrader" />
        <BTNClicks title="DXtrade" />
        <BTNClicks title="TradeLocker" />
        <BTNClicks title="Match Trader" />
      </div>

      <p>Select brokers</p>
      <div className={`flex gap-3 flex-wrap ${styles.slectionWrapper}`}>
        <BTNClicks title="Think Markets" />
        <BTNClicks title="Purple Trading" />
        <BTNClicks title="Virtual Markets" />
        <BTNClicks title="Capital Markets" />
        <BTNClicks title="Match Trade" />
        <BTNClicks title="Finesse FX" />
        <BTNClicks title="Taurex" />
        <BTNClicks title="FXPig" />
        <BTNClicks title="FXFlat" />
        <BTNClicks title="GBE Brokers" />
        <BTNClicks title="CBT Limited" />
        <BTNClicks title="Own Broker" />
      </div>

      <button type="button" className={styles.searchBtn}>
        Search
      </button>

    </div>
  )
}
