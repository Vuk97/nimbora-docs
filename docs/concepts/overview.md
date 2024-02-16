---
id: overview
title: Overview
sidebar_position: 1
---

# Nimbora Overview

Nimbora is a platform that offers you the opportunity to interact with your favorite Layer 1 (L1) protocols at a fraction of the cost of Layer 2 (L2) solutions.

## L2 vs L1: Benefits of using Nimbora

The main benefit of using Nimbora is the decreases in gas fees, up to 7x compared with Ethereum mainnet. This significant reduction in gas fees is achieved through the utilization of innovative Layer 2 solutions. These solutions perform most transactions off-chain, only settling the final state on the Ethereum mainnet. This drastically reduces the number of transactions that need to be processed on the congested Ethereum network, thereby reducing overall gas fees. This makes transactions on Nimbora more affordable and accessible for all users, fostering a more inclusive DeFi ecosystem.

## What wallets can I connect with?

At the moment, Nimbora supports compatibility with [Argent X wallet](https://www.argent.xyz/argent-x/) and [Braavos wallet](https://braavos.app/). Argent X is a smart wallet designed to provide a simple and secure way to manage and invest digital assets. On the other hand, Braavos wallet is a decentralized wallet known for its user-friendly interface and high-level security features. The integration of these wallets with Nimbora allows users to conveniently interact with preferred Layer 1 protocols at a significantly reduced cost. Nimbora is committed to enhancing user experience and thus, plans to integrate more wallets in the near future.

## Transaction processing and batching

When the Nimbora [L2 Pooling Manager](/docs/contracts/architecture/L2_arch.md#pooling-manager) contract receives a requests, it opens a new batch and accumulates those requests until the batch is full. Once the batch is full, the contract will empack all the requests and send them to the [L1 Pooling Manager](/docs/contracts/architecture/L1_arch.md#pooling-manager) contract. This message will take some time to be verified on L1 depending on the network congestion, but it should not take more than 12h. Once the block is validated on L1, the message is ready to be consumed by the L1 Pooling Contract.

When consuming the message, the L1 Pooling Manager will get the assets to be handled from the Starkgate Bridge and deposit them within the strategies. Finally, the L1 Pooling Manager will generate a report to inform the L2 Pooling Manager that the deposits were made correctly.

## Where can I get help?

To report any issue, please click at "FEEDBACK" button directly on https://app.nimbora.io/ (see image below).

![feedback](/content/feedback.png)

If you have technical questions about this integration or Starknet in general, you can join [Nimbora Discord server](https://discord.gg/feJJnkmYzc).