import React from "react";
import styles from "./AfterYT.module.css";

export default function AfterYT() {
  return (
    <div className={`${styles.wrapperSec} mx-auto`}>
      <div className="p-0 md:p-6">
        <h4 className="text-white text-3xl my-5">
          Monevis Prop Firm - Information & Discount Code
        </h4>
        <p className="text-white mb-3">
          Monevis, a prop trading firm founded by Milos Mosovsky in March 2024,
          operates from Slovakia and presents a unique approach to prop trading.
          With a professional and streamlined service, Monevis aims to provide
          traders with the necessary tools for their trading journey.
        </p>

        <p className="text-white mb-3">
          To access the best Monevis discount, traders can use the code
          PROPVATOR at checkout. This discount code, available through
          Propvator.com, offers the highest discount at the time of purchase.
        </p>

        <h4 className="text-white text-2xl my-5">
          Monevis Prop Firm - Accepted Trading Styles
        </h4>

        <h4 className="text-white text-xl my-5">Swaps with Monevis</h4>
        <p className="text-white mb-3">
          Monevis has a clear policy regarding swaps: there are none. Traders
          can hold positions overnight and over the weekend without incurring
          any swap fees. This provides flexibility for various trading
          strategies.
        </p>

        <h4 className="text-white text-xl my-5">
          Expert Advisors with Monevis
        </h4>
        <p className="text-white mb-3">
          Monevis allows the use of Expert Advisors (EAs), giving traders the
          option to automate their strategies. While most EAs are permitted,
          it’s advisable to confirm any specific EA with Monevis’s support team
          through live chat.
        </p>

        <p className="text-white mb-3">
          High-Frequency Trading (HFT) bots are prohibited, as they exploit
          market inefficiencies through rapid transactions. Traders should
          verify compliance with Monevis’s guidelines before deploying any EA.
        </p>

        <h4 className="text-white text-xl my-5">News Trading with Monevis</h4>
        <p className="text-white mb-3">
          Monevis permits news trading during the challenge phase, allowing
          traders to engage with market-moving events. However, in the funded
          stage, traders cannot open positions during major news events two
          minutes before and two minutes after the event, which is a precaution
          to manage risk effectively.
        </p>

        <h4 className="text-white text-xl my-5">
          Weekend Holding with Monevis
        </h4>
        <p className="text-white mb-3">
          Traders can keep positions open over the weekend without any
          restrictions. This allows for the continuation of trading strategies
          without interruption.
        </p>

        <h4 className="text-white text-xl my-5">Hedging with Monevis</h4>
        <p className="text-white mb-3">
          Hedging strategies are allowed within a single trading account,
          permitting traders to open opposing positions on the same asset.
          However, hedging across different accounts is strictly prohibited,
          meaning traders cannot use one account to hedge positions from
          another.
        </p>

        <h4 className="text-white text-xl my-5">HFT with Monevis</h4>
        <p className="text-white mb-3">
          Monevis has a clear stance against high-frequency trading (HFT). This
          strategy involves ultra-fast trading bots that seek to capitalize on
          minor market inefficiencies through rapid, high-volume trades. Monevis
          maintains strict guidelines to preserve market integrity by banning
          all forms of HFT.
        </p>

        <h4 className="text-white text-2xl my-5">
          Monevis Prop Firm - Account Types
        </h4>
        <p className="text-white mb-3">
          Monevis offers a straightforward account structure, focusing on
          accessibility for traders. Here’s a closer look at their account
          options:
        </p>

        <h4 className="text-white text-xl my-5">Account Sizes</h4>
        <p className="text-white mb-3">
          Traders can select from the following account sizes:
        </p>

        <p className="text-white mb-3">
          <b>$5K</b>
        </p>
        <p className="text-white mb-3">
          <b>$10K</b>
        </p>
        <p className="text-white mb-3">
          <b>$25K</b>
        </p>
        <p className="text-white mb-3">
          <b>$50K</b>
        </p>
        <p className="text-white mb-3">
          <b>$100K</b>
        </p>

        <h4 className="text-white text-xl my-5">Two-Step Challenge </h4>
        <p className="text-white mb-3">
          The Two-Step Account requires traders to complete two phases before
          receiving funding, with specific profit targets in each step.
        </p>

        <p className="text-white mb-3">
          <b>Profit Target:</b> Step 1: 10%, Step 2: 5%
        </p>
        <p className="text-white mb-3">
          <b>Daily Drawdown:</b>5%
        </p>
        <p className="text-white mb-3">
          <b>Max Drawdown: </b> 10%
        </p>
        <p className="text-white mb-3">
          <b>Profit Split: </b> 70%
        </p>
        <p className="text-white mb-3">
          <b>Minimum Trading Days:</b> 3
        </p>
        <p className="text-white mb-3">
          <b>Maximum Trading Days:</b> None
        </p>
        <p className="text-white mb-3">
          <b>Holding Overnight:</b> Permitted
        </p>
        <p className="text-white mb-3">
          <b>Holding Over Weekends:</b> Permitted
        </p>

        <h4 className="text-white text-2xl my-5">
          Monevis Prop Firm - Drawdown Method{" "}
        </h4>
        <p className="text-white mb-3">
          Monevis uses a static drawdown calculation method, which helps in
          managing risk. All accounts have a Maximum Daily Drawdown of 5% based
          on the end-of-day closing balance, calculated daily at 23:05 CET
        </p>

        <h4 className="text-white text-xl my-5">
          How is Maximum Daily Drawdown Calculated?
        </h4>
        <p className="text-white mb-3">
          <b>
            Example 1: Equity is Higher than the Balance at the Start of the Day
          </b>
        </p>
        <p className="text-white mb-3">
          On day 5, if your account balance is $105,000 and your equity is
          $107,000, the Daily Loss Limit will be calculated based on equity:
        </p>

        <p className="text-white mb-3">
          <b>Daily Loss = $107,000 * 5% = $5,350 Daily Loss Limit.</b>
        </p>

        <p className="text-white mb-3">
          This means your equity can't drop below $107,000 - $5,350, resulting
          in a Daily Loss Limit of $101,650 on day 5. If your equity falls below
          $101,650 at any time during that day, your account will be closed.
        </p>

        <p className="text-white mb-3">
          <b>
            Example 2: Balance is Higher than the Equity at the Start of the Day
          </b>
        </p>

        <p className="text-white mb-3">
          On day 7, if your account balance is $100,000 but your equity is only
          $99,000, the Daily Loss Limit will be based on balance:
        </p>

        <p className="text-white mb-3">
          <b>Daily Loss = $100,000 * 5% = $5,000 Daily Loss Limit.</b>
        </p>

        <p className="text-white mb-3">
          This means your equity can't drop below $100,000 - $5,000, giving a
          Daily Loss Limit of $95,000 on day 7. If your equity falls below
          $95,000 at any moment that day, your account will be closed.
        </p>

        <p className="text-white mb-3">
          Understanding these drawdown calculations is essential for maintaining
          your trading account.
        </p>

        <h4 className="text-white text-2xl my-5">
          Monevis Review - Available Platforms
        </h4>
        <p className="text-white mb-3">
          Monevis provides access to MT5, a widely-used trading platform known
          for its versatility and range of features.
        </p>

        <h4 className="text-white text-xl my-5">MetaTrader 5 (MT5)</h4>
        <p className="text-white mb-3">
          MT5 offers additional asset classes, timeframes, and order types,
          allowing traders various options for their strategies.
        </p>

        <h4 className="text-white text-2xl my-5">Monevis Review - Leverage</h4>
        <p className="text-white mb-3">
          Monevis provides leverage options for different asset classes,
          allowing traders to manage risk effectively.
        </p>

        <p className="text-white mb-3">
          <b>Forex:</b> 1:50
        </p>
        <p className="text-white mb-3">
          <b>Gold:</b>1:20
        </p>
        <p className="text-white mb-3">
          <b>Indices:</b>1:20
        </p>
        <p className="text-white mb-3">
          <b>Crypto:</b>1:5
        </p>

        <p className="text-white mb-3">
          These leverage levels enable traders to adjust their position sizes
          according to their strategies.
        </p>

        <h4 className="text-white text-2xl my-5">
          Monevis Review - Commissions
        </h4>
        <p className="text-white mb-3">
          Monevis has a transparent commission structure across its trading
          assets. Commissions are calculated per round lot.
        </p>

        <h4 className="text-white text-xl my-5">Commissions</h4>

        <p className="text-white mb-3">
          <b>Forex:</b> $3 per round lot
        </p>
        <p className="text-white mb-3">
          <b>Gold:</b> $3 per round lot
        </p>
        <p className="text-white mb-3">
          <b>Indices:</b> $3 per round lot
        </p>
        <p className="text-white mb-3">
          <b>Crypto:</b> $3 per round lot
        </p>

        <p className="text-white mb-3">
          This consistent commission rate simplifies the cost calculations for
          traders.
        </p>

        <h4 className="text-white text-2xl my-5">
          Monevis Prop Firm - Restricted Countries
        </h4>
        <p className="text-white mb-3">
          Monevis restricts access to its platform for users from the following
          countries:
        </p>

        <p className="text-white mb-3">Afghanistan</p>
        <p className="text-white mb-3">Central African Republic</p>
        <p className="text-white mb-3">Congo (Brazzaville)</p>
        <p className="text-white mb-3">Congo (Kinshasa)</p>
        <p className="text-white mb-3">Crimea</p>
        <p className="text-white mb-3">Donetsk</p>
        <p className="text-white mb-3">Cuba</p>
        <p className="text-white mb-3">Guinea-Bissau</p>
        <p className="text-white mb-3">Iran</p>
        <p className="text-white mb-3">Iraq</p>
        <p className="text-white mb-3">North Korea</p>
        <p className="text-white mb-3">Libya</p>
        <p className="text-white mb-3">Luhansk</p>
        <p className="text-white mb-3">Mali</p>
        <p className="text-white mb-3">Russian Federation</p>
        <p className="text-white mb-3">Somalia</p>
        <p className="text-white mb-3">South Sudan</p>
        <p className="text-white mb-3">Sudan</p>
        <p className="text-white mb-3">Syria</p>
        <p className="text-white mb-3">United States</p>
        <p className="text-white mb-3">Venezuela</p>
        <p className="text-white mb-3">Yemen</p>

        <p className="text-white mb-3">
          For the most current list of prohibited countries and further details,
          please refer to Monevis’s official support page.
        </p>

        <h4 className="text-white text-2xl my-5">Monevis Discount Code</h4>
        <p className="text-white mb-3">
          To secure the highest available discount with Monevis, use the code
          PROPVATOR at checkout. This code offers a discount, making it more
          affordable to get started with Monevis. Additionally, Propvator
          provides discounts with other top prop firms.
        </p>

        <p className="text-white mb-3">
          Visit our homepage to explore these offers, compare firms, and select
          the one that best suits your trading needs. All firms listed on
          Propvator are vetted for reliability.
        </p>

        <h4 className="text-white text-2xl my-5">
          Monevis Prop Firm - Conclusion
        </h4>
        <p className="text-white mb-3">
          Monevis prop firm provides traders with a flexible trading environment
          and clear guidelines. With straightforward rules on drawdowns,
          competitive commissions, and a single-platform approach, Monevis is
          designed to cater to traders seeking a simple trading experience. Use
          the Monevis discount code PROPVATOR to take advantage of your trading
          opportunities with Monevis.
        </p>
      </div>
    </div>
  );
}
