---
id: liquity_lsud
title: Liquity LUSD
sidebar_position: 2
---

# Understanding the Risks and Mechanisms of Liquity

Liquity is a decentralized borrowing protocol that allows users to take out loans against Ethereum collateral without paying interest. These loans are paid out in LUSD, a stablecoin pegged to the USD. While our previous guide covered the basic risks associated with using Liquity, this expanded guide incorporates insights from recent discussions about price stability and addresses concerns within the Liquity ecosystem.

## Expanded Risks and Features in Liquity

### Price Stability and the Redemption Mechanism

- **Redemption Mechanism**: A unique feature of Liquity is its redemption mechanism, allowing LUSD holders to redeem their LUSD for the underlying ETH collateral at face value anytime. This mechanism is crucial for maintaining the price stability of LUSD and ensuring it remains pegged to $1.
- **Impact on Borrowers**: If one Trove (the term for a loan account in Liquity) is redeemed against, you won't experience a net loss but may lose some of your ETH exposure while receiving a lesser debt. To minimize the risk of being affected by redemptions, maintaining a collateral ratio significantly above the minimum requirement (110%) is advisable. A ratio of 150% or higher is generally recommended according to Liquity sources.

### Strategic Considerations for Trove Owners

- **Monitoring and Adjusting**: Nimbora Troves are monitored to stay out of the "line of fire" of redemptions. This proactive approach can help maintain a desired level of ETH exposure while managing your debt in LUSD.

### Liquity's Funding and Development

- **Series A Funding**: Liquity has secured $6 million in Series A funding, led by Pantera Capital and supported by other notable investors. This investment underscores the confidence in Liquity's potential and its role in the DeFi ecosystem.
- **Ongoing Development**: Liquity is built on experimental technology that is still under active development. The team's commitment to security, evidenced by regular audits and a significant bug bounty program, aims to minimize risks related to smart contract vulnerabilities.

## Conclusion

Liquity's innovative approach to decentralized borrowing, characterized by its no-interest loans, low collateral requirements, and unique redemption mechanism, offers significant opportunities for users. However, understanding the associated risks, especially those related to price stability and the redemption mechanism, is crucial for informed participation in the Liquity ecosystem. By staying informed and strategically managing your loan, you can navigate these risks while taking advantage of what Liquity has to offer.

Remember, informed decision-making is key to navigating the complexities of decentralized finance (DeFi).
