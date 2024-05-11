---
id: points
title: Points
sidebar_position: 4
---


## What are Crypto Points?

**Crypto points**, within the context of Nimbora Protocol, are digital units designed to incentivize and reward users for actively engaging with our platform. These points serve as a metric for off-chain measuring user activity and contribution within the Nimbora ecosystem, providing insights and rewards based on participation levels.


### Key Features of Crypto Points:

1. **Incentivization**: Crypto points encourage participation and engagement by rewarding users for their contributions to the Nimbora ecosystem. These contributions may include providing liquidity or promoting adoption.

2. **Utility**: Beyond their monetary value, crypto points offer utility within the Nimbora ecosystem. Users can utilize these tokens to access premium features and get for additional rewards.

### Types of Crypto Points:

- **Borrow Points**: Earn points while using borrow strategies.
- **Earn Points**: Earn points while using earn strategies.
- **Rank Points**: Earn points based on your performance.
- **Referral Points**: Earn points by inviting your friends.
- **Social Points**: Earn points by engaging with the protocol (unactivated for now).

## How are on-chain points calculated?

### Borrow

The borrow points are calculated based on the daily user collateral `ETH` deposited in all Liquity troves. We use the ETH median daily price fetched from Pragma oracles to calculate the pts.

| Day | User’s daily ETH collateral balance | ETH price USD | earn pts |
| --- | --- | --- | --- |
| 1 | 1 | 3000 | 3000 |
| 2 | 0.5 | 3200 | 1600 |
| 3 | 0 | 2800 | 0 |
| / | total pts earn |  | 4600 |

### Earn

We employ a similar methodology to calculate the points for Yield DEX strategies. For instance, in the EtherFi strategy, we determine the points by converting the balance of `ETH`-equivalent yield-bearing tokens. The median daily price sourced from Pragma oracles is utilized in this calculation process.

| Day | User’s daily ETH balance | ETH price (USD) | pts earn |
| --- | --- | --- | --- |
| 1 | 1 | 3000 | 3000 |
| 2 | 0.5 | 3200 | 1600 |
| 3 | 0.1 | 2800 | 280 |
| / | total pts earn |  | 4880 |

### Referral

Before calculating the referral pts for each user, a boost is applied to the on-chain users pts (borrow + earn). By default, the boost is `10%`, but some users who used partner links (boosted links) can receive a higher boost.

The referral pts are calculated based on the referral relation between users.

For example, we have this referral table:

| parent | child |
| --- | --- |
| Alice | Bob |
| Alice | Carlo |
| Bob | Sarah |
| Carlo | Alex |

and this is the daily pts per user

| User | pts |
| --- | --- |
| Alice | 100 |
| Bob | 200 |
| Carlo | 300 |
| Sarah | 100 |
| Alex | 100 |

First, we boost the users’ pts

| User | pts |
| --- | --- |
| Alice | 100 |
| Bob | 200 |
| Carlo | 300 |
| Sarah | 100 |
| Alex | 100 |

`referral pts = (User points * boost) + (10% Bob + 10% Carlo + 5% Sarah + 5% Alex)`

Using the boosted pts we calculate the referral pts.

- `Alice` receives:
    - `10%` from `Bob` and `Carlo`direct child
    - `5%` from `Sarah` and `Alex` first child of a direct child.
- `Bob` receives:
    - `10%` from `Sarah` direct child
- `Carlo` receives:
    - `10%` from `Alex` direct child
- `Sarah` and `Alex` receive nothing because they don’t have a child.

The following table was calculated using boosted balances.

| User | Alice | Bob | Carlo | Sarah | Alex | TOTAL |
| --- | --- | --- | --- | --- | --- | --- |
| Alice | - | 22 | 33 | 11 | 11 | 77 |
| Bob | - | - | - | 11 | - | 11 |
| Carlo | - | - | - | - | 11 | 11 |
| Sarah | - | - | - | - | - | - |
| Alex | - | - | - | - | - | - |

### Rank

This is the user’s total pts

| User | earn pts | borrow pts | referral pts | total pts |
| --- | --- | --- | --- | --- |
| Alice | 50 | 50 | 87 | 187 |
| Bob | 150 | 50 | 31 | 231 |
| Carlo | 100 | 200 | 41 | 341 |
| Sarah | 80 | 20 | 10 | 110 |
| Alex | 30 | 70 | 10 | 110 |

Sort the users by total pts ( the following are only examples for more details about prod setup check this [[link](https://www.notion.so/Point-system-Tech-bbaba9b312f4402d842547bb4579a8e4?pvs=21)])

1. The first receives 20% boost
2. The second receives 15% boost
3. The second receives 10% boost
4. The second receives 5% boost
5. The second receives 0% boost

`Info: When users have the same pts the register timestamp is used to order them.`

| Rank | user | total pts | rank pts |
| --- | --- | --- | --- |
| 1 | Carlo | 341 | 68 |
| 2 | Bob | 221 | 33 |
| 3 | Alice | 187 | 18 |
| 4 | Sarah | 110 | 5 |
| 5 | Alex | 110 | 0 |

So, the total pts earn by each user during the last 24 hours:

| Rank | total pts | rank pts |
| --- | --- | --- |
| 1 | 341 | 68 |
| 2 | 221 | 33 |
| 3 | 187 | 18 |
| 4 | 110 | 5 |
| 5 | 110 | 0 |

### Social

TBD