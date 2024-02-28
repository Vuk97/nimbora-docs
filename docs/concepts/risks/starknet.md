---
id: starknet
title: Starknet
sidebar_position: 1
---

# Understanding Risks in Starknet

Starknet, a Layer 2 scaling solution for Ethereum, offers significant benefits in terms of transaction speed and cost. However, like any technology, it comes with its own set of risks. Here, we break down some of these risks in simple terms.

## State Validation: Ensuring Correctness with ZK Proofs

- **What It Means**: Starknet uses a technology called zkSTARKs (zero-knowledge Scalable Transparent ARguments of Knowledge) to make sure that all transactions and states (basically, the current information and balance of your account) on the network are correct and valid.
- **Why It Matters**: This technology is crucial for maintaining the integrity and trustworthiness of the network, ensuring that your transactions are accurately recorded.

## Data Availability: Keeping Information Accessible

- **What It Means**: All the necessary data (referred to as state diffs or SD) for constructing proofs of transactions are published and stored directly on the blockchain.
- **Why It Matters**: This practice ensures transparency and allows for the verification of transactions by anyone at any time, contributing to the security and reliability of the network.

## Exit Window: The Challenge of Instant Upgrades

- **What It Means**: Starknet allows for contracts to be upgraded instantly, but it doesn't provide a specific window for users to exit or withdraw their funds if they disagree with an upgrade.
- **Why It Matters**: This could potentially leave users with less control over their assets in the event of a controversial or unwanted network upgrade.

## Sequencer Failure: A Single Point of Failure

- **What It Means**: Starknet relies on a component called a sequencer to process transactions. If the sequencer fails or starts censoring transactions, there's no alternative mechanism in place to include those transactions in the network.
- **Why It Matters**: This could lead to delays or the inability to execute transactions, impacting the network's reliability.

## Proposer Failure: Limited Withdrawal Options

- **What It Means**: Only certain approved participants (whitelisted proposers) can submit state updates to the Ethereum mainnet. If these proposers fail, users cannot withdraw their funds.
- **Why It Matters**: This limitation could freeze users' assets on the network, preventing access when needed.

---

While Starknet presents a promising solution to Ethereum's scalability challenges, it's important for users to be aware of these potential risks. Understanding these aspects can help users make informed decisions when interacting with the network.