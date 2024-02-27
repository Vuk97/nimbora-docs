---
id: overview
title: About Nimbora
sidebar_position: 1
---

# Nimbora Overview

Nimbora is a 1-click DeFi pooling product, incubated by the [SpaceShard team](https://www.spaceshard.io/). 

It is a platform that offers you the opportunity to interact with your favorite Layer 1 (L1) protocols at a fraction of the cost of Layer 2 (L2) solutions. The idea behind it is to scale L1 DeFi through seamless L2 execution, all while maintaining super-low fees. The technology behind Nimbora is Zero-Knowledge Rollups, currently Starknet - a permissionless decentralized ZK-Rollup that operates as an L2 network over Ethereum. To put it simply, Nimbora scales L1 DeFi products completely trustlessly using rollups.

You can learn more about Nimbora by following us on [Medium](https://medium.com/@Nimbora), [Twitter](https://twitter.com/nimbora_io), or by joining our [Discord group](https://discord.gg/feJJnkmYzc).

## Starknet

Starknet is a Layer-2 network that utilizes zk-STARKs technology to enhance Ethereum transactions. It aims to make transactions faster, cheaper, and more secure. Official Starknet token is [STRK](https://www.starknet.io/en/content/claiming-your-strk), launched on Feb 20, 2024.

:::note
Key features:
- Low costs
- Developer-friendly
- Speed and efficiency
:::

More info at [Starknet website](https://www.starknet.io/en) or check [Spaceshard's blog](https://www.spaceshard.io/blog/learning-starknet-community-edu-resources) to learn about Starknet.

## L2 vs L1: Benefits of using Nimbora

The primary advantage of using Nimbora is the significant reduction in gas fees, up to 7x lower compared to Ethereum mainnet. This significant reduction in gas fees is achieved through the utilization of innovative Layer 2 solutions. These solutions perform most transactions off-chain, only settling the final state on the Ethereum mainnet. This drastically reduces the number of transactions that need to be processed on the congested Ethereum network, thereby reducing overall gas fees. This makes transactions on Nimbora more affordable and accessible for all users, fostering a more inclusive DeFi ecosystem.

## What wallets can I connect with?

At the moment, Nimbora supports compatibility with [Argent X wallet](https://www.argent.xyz/argent-x/) and [Braavos wallet](https://braavos.app/). Argent X is a smart wallet designed to provide a simple and secure way to manage and invest digital assets. On the other hand, Braavos wallet is a decentralized wallet known for its user-friendly interface and high-level security features. The integration of these wallets with Nimbora allows users to conveniently interact with preferred Layer 1 protocols at a significantly reduced cost. Nimbora is committed to enhancing user experience and thus, plans to integrate more wallets in the near future.

:::important

Please be aware that **there is still no official Nimbora token launched,** nor a public sale of Nimbora tokens by any entity! Be alert for scams around any token claims and provisions, including fake links and accounts impersonating Nimbora. Make sure to follow the information in our official channels only:

[Twitter](https://twitter.com/nimbora_)

[Discord](https://discord.gg/feJJnkmYzc)

[Website](https://www.nimbora.io/)

[Medium](https://medium.com/@Nimbora)

[LinkedIn](https://www.linkedin.com/company/nimbora/)

Email subscription: link coming soon
:::

## Transaction processing and batching

When the Nimbora [L2 Pooling Manager](/docs/contracts/architecture/L2_arch.md#pooling-manager) contract receives a requests, it opens a new batch and accumulates those requests until the batch is full. Once the batch is full, the contract will empack all the requests and send them to the [L1 Pooling Manager](/docs/contracts/architecture/L1_arch.md#pooling-manager) contract. This message will take some time to be verified on L1 depending on the network congestion, but it should not take more than 12h. Once the block is validated on L1, the message is ready to be consumed by the L1 Pooling Contract.

When consuming the message, the L1 Pooling Manager will get the assets to be handled from the Starkgate Bridge and deposit them within the strategies. Finally, the L1 Pooling Manager will generate a report to inform the L2 Pooling Manager that the deposits were made correctly.

## Where can I get help?

To report any issue, please click at "FEEDBACK" button directly on https://app.nimbora.io/ (see image below).

![feedback](/content/feedback.png)

If you have technical questions about this integration or Starknet in general, you can join [Nimbora Discord server](https://discord.gg/feJJnkmYzc).