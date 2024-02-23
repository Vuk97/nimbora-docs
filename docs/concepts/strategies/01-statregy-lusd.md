---
id: lusd
title: Borrow LUSD
sidebar_position: 3
---

# LUSD Strategy

**This strategy allows users to borrow LUSD**, a stablecoin pegged to the U.S. dollar, using their collateral. The process begins by depositing collateral into the Nimbora platform. Once the collateral is deposited and locked, users can borrow against it according to the platform's loan-to-value ratio. This strategy is beneficial for users who want to leverage their assets without selling them. However, users must monitor their collateral value to avoid liquidation. If the value of the collateral falls below certain thresholds, the system may automatically liquidate the assets to repay the loan.

To get started, make sure you have a Starknet-compatible wallet, such as Argent X or Braavos. If you plan to bridge your assets to use as collateral, ensure you have an Ethereum-compatible wallet e.g. Metamask.

<details>
  <summary>What is Liquity?</summary>

  [Liquity Docs](https://docs.liquity.org/)

  - Liquity offers decentralized, interest-free loans in LUSD against Ether collateral, requiring a minimum 110% collateral ratio.

  - Loan security is enhanced by a Stability Pool with LUSD and collective backing from borrowers as ultimate guarantors.

  - The protocol is non-custodial, immutable, and operates without governance.

</details>

<details>
  <summary>What is LUSD?</summary>

  [LUSD Docs](https://docs.liquity.org/faq/general#what-are-lusd-and-lqty)

  - LUSD, a stablecoin pegged to the USD, serves as the payment medium for loans in the Liquity protocol, offering redemption against collateral at face value.

  - For details on its stability mechanism, further information is available.

</details>

<details>
  <summary>What is the LUSD contract on Starknet?</summary>

  - LUSD contract on Starknet is: 0x070a76fd48ca0ef910631754d77dd822147fe98a569b826ec85e3c33fde586ac

  - All official Liquity contracts can be found [here](https://docs.liquity.org/documentation/resources#contract-addresses).

</details>

<details>
  <summary>How much LUSD can I borrow?</summary>

  - The maximum is currently capped at 1.75 ETH, but this will change over time.

</details>

<details>
  <summary>Do I really pay no interests on Liquity?</summary>

  - Yes, really! Liquity charges no interest, ever.

  - You pay only a one-off fee when opening the loan. This fee is almost always 0.50% but can go slightly higher at times. Read more about it [here](https://docs.liquity.org/faq/borrowing).

</details>

<details>
  <summary>I don't have enough LUSD to pay my debt, what can I do?</summary>

  - If you don’t have enough LUSD in your account you can use the [Starkgate](https://starkgate.starknet.io/) bridge to bridge the LUSD amount required to pay your debt and get back your collateral.

</details>

<details>
  <summary>Step-by-Step Guide for LUSD strategy</summary>

  - [Link to the guide](https://medium.com/@Nimbora/unlocking-quick-lusd-minting-a-step-by-step-guide-for-nimbora-users-1dc0b876a122)

</details>


### How to interact

**Step 1: Visit Nimbora's Front End**
Visit Nimbora's front end at [https://www.nimbora.io/](https://www.nimbora.io/)  to connect [Starknet](/docs/concepts/overview#starknet) to Ethereum, reducing gas costs for your interactions with Ethereum. 

![Cookies.png](/content/strategy_lusd/Cookies.png)

Feel free to explore the platform, but now let's head straight to the ‘Integrations’ page, and scroll down the integration list to find Liquity.

![Screenshot 2023-11-02 at 11.02.24.png](/content/strategy_lusd/Screenshot_2023-11-02_at_11.02.24.png)

Click on “ABOUT THIS COLLAB” and you will be directed to [https://www.nimbora.io/liquity](https://www.nimbora.io/liquity)

**Step 2: Explore Liquity Integration**
Before proceeding, we recommend reading the extensive FAQ section to understand what you're getting into. 

![Screenshot 2023-11-02 at 11.05.56.png](/content/strategy_lusd/Screenshot_2023-11-02_at_11.05.56.png)

Once you're well-informed, it's time to connect your wallet.

**Step 3: Connect Your Wallet**
If your wallet isn't already connected, click "Connect Wallet" and select your preferred option. We've chosen Argent for this demonstration (see detailed steps in the video below)

**Step 4: Bridge Assets to Starknet**
Before borrowing, you may want to bridge some assets from Starknet to Ethereum. We recommend using [Starkgate](https://starkgate.starknet.io/) for this purpose. Connect both your Ethereum and Starknet wallets and bridge your assets conveniently. The exact steps are shown in the video below.

**Step 5: Start Borrowing**
Now, let's dive into the borrowing process. Please note that the collateral ratio and the assets you can borrow are predetermined. Currently, the ratios are 453 and 300, but they may change with the fluctuating ETH price. If you find yourself asking more questions, please return to FAQs section.

**Step 6: Select Your Asset and Borrow**
Pick your desired asset, such as ETH, and choose your borrowing amount. Keep in mind that the LUSD amount you receive is tied to the amount of ETH you input, following the predetermined collateral ratio. The gas fees are relatively lower on Starknet, making the borrowing process more cost-effective.

**Step 7: Confirm and Wait**
After selecting your asset and borrowing amount, click "Borrow." Your Starknet wallet will appear, and once the calculations are complete, click "Confirm." The transaction is now pending, and your LUSD is on its way. However, it's essential to understand that it might take some time due to the batching and Starknet finality process, which usually takes between 8 to 12 hours.

**Step 8: Be Patient and Stay Informed**
While your transaction is pending, we recommend reading the FAQ section and seeking answers to your questions. If you have technical questions about this integration or Starknet in general, you can join [Nimbora Alpha Testers](https://t.me/+606MBKpVsdthYTU0) Telegram group. If you have questions about borrowing or Liquity in general please join the [Liquity Discord](https://discord.com/invite/2up5U32).

To report any issue, please click on "FEEDBACK" button directly on [https://app.nimbora.io/](https://app.nimbora.io/) (see image below)

![https://assets-global.website-files.com/650947fe4f71ddba91014897/653f7d4def71d885d387e46c_1.png](https://assets-global.website-files.com/650947fe4f71ddba91014897/653f7d4def71d885d387e46c_1.png)

‍

Have fun navigating DeFi with Nimbora and enjoy the efficiency of the Starknet integration! 

Stay patient while your transaction processes, and in no time, your LUSD will be in your wallet.

HERE’S A DETAILED STEP-BY-STEP VIDEO TUTORIAL👇👇👇

[![VIDEO TUTORIAL](https://img.youtube.com/vi/DluxuqM4XHo&t/0.jpg)](https://www.youtube.com/watch?v=DluxuqM4XHo&t=1s&ab_channel=LiquityProtocol)