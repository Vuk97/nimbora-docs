---
id: liquity
title: Liquity Strategy
sidebar_position: 1
---

**Liquity strategy allows users to borrow LUSD**, a stablecoin pegged to the U.S. dollar, using ETH as collateral. This strategy is beneficial for users who want to leverage their assets without selling them.  If ETH value goes up while the loan is active, repaying it becomes more profitable as users get back their ETH, now more valuable. On top of this, participating in this strategy now comes with a bonus: a ~45% APR in STRK tokens, paid out every two weeks, thanks to the [DeFi Spring initiative.](https://medium.com/@Nimbora/defi-spring-just-got-better-earn-strk-with-nimbora-x-liquity-d7e881f22c38)


### What is Liquity?

  -Liquity is an interest-free borrowing protocol on Ethereum. Liquity offers decentralized, interest-free loans in LUSD against Ether collateral, requiring a minimum 110% collateral ratio.

  - Loan security is enhanced by a Stability Pool with LUSD and collective backing from borrowers as ultimate guarantors.

  - The protocol is non-custodial, immutable, and operates without governance.

  - It is highly secure, has several audits, and tops Defi Safety’s security list.

  - Additional resources about Liquity: 
    - [Website](https://www.liquity.org/)
    - [Docs](https://docs.liquity.org/)
    - [Analytics](https://dune.com/liquity/liquity)
    - [Liquity on Twittter](https://twitter.com/LiquityProtocol)

### What is LUSD

- LUSD is a stablecoin pegged to the US Dollar. It serves as the payment medium for loans in the Liquity protocol, offering redemption against collateral at face value.

  - LUSD can be only minted against ETH, making it very resilient and independent of any centralized parties. Due to this it is a very popular treasury asset, but also across protocols and LP pools on mainnet and many L2’s.

  - Additional resources about [LUSD](https://docs.liquity.org/faq/general#what-are-lusd-and-lqty)

### What is the LUSD contract on Starknet

- LUSD contract on Starknet is: 0x070a76fd48ca0ef910631754d77dd822147fe98a569b826ec85e3c33fde586ac

  - All official Liquity contracts can be found [here](https://docs.liquity.org/documentation/resources#contract-addresses).

### How frequently are borrows processed?

- Borrow takes a day to be processed.
  
### Do I really pay no interests on Liquity?

  - Yes, really! Liquity charges no interest, ever.

  - You pay only a one-off fee when opening the loan. This fee is almost always 0.50% but can go slightly higher at times. Read more about it [here](https://docs.liquity.org/faq/borrowing).

### I don’t have enough LUSD to pay my debt, what can I do?

  - If you don’t have enough LUSD in your account you can use the [Starkgate](https://starkgate.starknet.io/) bridge to bridge the LUSD amount required to pay your debt and get back your collateral.



### Understanding Risks Associated with Liquity

1. **Smart Contract Risk**:
  - Liquity, like any other DeFi protocol, is vulnerable to smart contract exploits. Despite efforts to audit and secure the smart contracts, there remains a risk of undiscovered vulnerabilities. Exploits can lead to loss of funds or manipulation of the protocol.
  
2. **Liquidation Risk**:
  - When users create a trove in Liquity, they must maintain a collateral ratio of at least 110%. Troves that fall below this threshold are subject to liquidation.

**Process**:
  1. **Stability Pool Usage**: The system uses funds from the Stability Pool to cancel the debt of undercollateralized troves.
  2. **Redistribution Mechanism**: If the Stability Pool lacks sufficient funds, a redistribution mechanism is activated, spreading the debt and collateral of liquidated troves among all trove holders.

**Penalty**:
Users facing liquidation may incur a penalty of up to 10%, which incentivizes them to maintain a safe collateral ratio.


3. **Redemption Risk**:
  - Liquity allows direct redemption of LUSD stablecoins for the underlying collateral, Ether. This process carries certain risks for borrowers.

**Process**:
  1. **Debt Cancellation**: Redeeming LUSD cancels debt from the riskiest trove in the system, i.e., the trove with the lowest collateral ratio.
  2. **Collateral Transfer**: The redeemer receives a corresponding amount of Ether from the trove used for debt cancellation.

**Impact**:
Redemptions reduce the borrower's leverage and increase the overall collateral ratio of the system. While there's no additional penalty for borrowers, redemptions can lead to collateral loss and deleveraging of positions.


### Vigilant Surveillance:

In the realm of Nimbora, your trove's collateralization ratio is closely monitored by the protocol itself. While you can't directly alter this ratio, rest assured that Nimbora diligently adjusts the risk levels to safeguard against potential liquidations or redemptions.