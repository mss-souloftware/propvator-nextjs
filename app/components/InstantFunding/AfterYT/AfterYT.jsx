import React from "react";
import Link from "next/link";
import styles from "./AfterYT.module.css";

export default function AfterYT() {
  return (
    <div className={`${styles.wrapperSec} mx-auto`}>
      <div className="p-0 md:p-6">
        <h4 className="text-white text-center text-3xl mb-3">
          Instant Funding Prop Firm - Information & Discount Code
        </h4>
        <p className="text-white text-center">
          Instant Funding has made a name for itself in the prop trading
          industry, boasting a rating of 4.6 on Trustpilot from over 1,900
          reviews. This UK-based instant funding prop firm stands out for its
          quick funding options, providing a range of challenge methods,
          including Instant Challenge, 1 Step, and 2 Step accounts. The details
          and targets for these challenge methods are available in the table
          above. Plus, don’t miss our instant funding review, which highlights
          key insights, and be sure to use the Instant Funding discount code
          'PROPVATOR' from{" "}
          <Link href="/" className="text-primary">
            {" "}
            propvator.com
          </Link>{" "}
          to secure the highest discount available at checkout.
        </p>

        <h4 className="text-white text-center text-2xl my-5">
          Instant Funding Prop Firm - Accepted Trading Styles
        </h4>

        <h4 className="text-white text-center text-xl my-5">Swing Trading</h4>
        <p className="text-white text-center">
          Swing trading is encouraged during the challenge phases, allowing
          traders to take advantage of market fluctuations over several days.
          Traders can benefit from the longer holding periods associated with
          this style. However, once funded, you cannot hold trades over the
          weekend.
        </p>

        <h4 className="text-white text-center text-xl my-5">Scalping</h4>
        <p className="text-white text-center">
          Scalping is a highly active trading style allowed in Instant Funding's
          models. It involves making numerous trades throughout the day, aiming
          to profit from small price movements. Scalpers must stay alert and
          execute trades quickly to maximise profits. Instant Funding supports
          this strategy, providing traders with the opportunity to capitalise on
          market volatility with quick execution.
        </p>

        <h4 className="text-white text-center text-xl my-5">
          Position Trading
        </h4>
        <p className="text-white text-center">
          Position trading is another accepted style, focusing on long-term
          market trends. Traders can hold positions for weeks or even months,
          relying on fundamental analysis to guide their decisions. This style
          aligns well with traders looking to capture larger market moves
          without the need for constant monitoring.
        </p>

        <h4 className="text-white text-center text-xl my-5">
          Prohibited Strategies
        </h4>
        <p className="text-white text-center">
          While Instant Funding prop firm offers flexibility, there are specific
          strategies and practices that are strictly prohibited. Adhering to
          these rules is crucial for maintaining a funded account and avoiding
          penalties. We'll go over the prohibited strategies in this Instant
          Funding review.
        </p>
        <p className="text-white text-center my-5">Prohibited Strategies</p>

        <ul className="my-5">
          <li>
            <p className="text-white text-center">
              Martingale: This strategy involves increasing the size of a
              position after a loss, leading to potential over-leverage and
              significant losses. For example, you have bought 2 lots of EURUSD
              and the trade is running in loss, if you open another EURUSD
              position with 4 lots (increasing the size of your position) this
              will constitute as martingale.
            </p>
          </li>
          <li>
            <p className="text-white text-center">
              Grid Trading: This strategy involves placing multiple buy and sell
              orders at regular intervals, which can lead to increased risk
              exposure.
            </p>
          </li>
          <li>
            <p className="text-white text-center">
              High-frequency Trading (HFT): Defined as holding trades for 5
              seconds or less, HFT is prohibited due to the risks associated
              with rapid trading. HFT is mostly done with EAs, and this is what
              most prop firms are against.
            </p>
          </li>
        </ul>

        <h4 className="text-white text-center text-xl my-5">
          Instant Funding Prop Firm - Prohibited Practices
        </h4>
        <ul className="my-5">
          <li>
            <p className="text-white text-center">
              Gambling: This refers to excessive leverage use, risking more than
              50% of your margin on a single trade. Such actions can result in
              account resets and significant losses
            </p>
          </li>
          <li>
            <p className="text-white text-center">
              Major News Trading: This involves trading within an 8-minute
              window before and after significant news events (4 minutes before
              and 4 minutes after). Profits made during this window may be
              deducted from your account, and in rare cases, the account may
              need to be reset. This rule affects only instruments related to
              the news event (e.g., EUR news doesn't restrict trading XAU/USD).
            </p>
          </li>
          <li>
            <p className="text-white text-center">
              Copy Trading Between Accounts: Mirroring trades from one account
              to another not owned by the same individual is prohibited.
            </p>
          </li>
          <li>
            <p className="text-white text-center">
              Usage of Public Third-Party Expert Advisors (EAs): The use of
              non-approved EAs is not permitted, as they can pose risks to
              account integrity. Remember to check the EA you want to use with
              Instant Funding support team before you start trading.
            </p>
          </li>
          <li>
            <p className="text-white text-center">
              Exploiting Inefficiencies of Trading Platforms: This includes
              practices such as latency arbitrage, reverse arbitrage, gap
              trading, toxic order flow, account management, tick scalping, and
              server execution.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
