---
id: l1_arch
title: L1 Architecture
sidebar_position: 2
---

## L1 Contracts

### Pooling Manager

The pooling manager plays an intermediate role with L1 strategies and L2 communication. The contract receives L2 user's requests, to deposit or withdraw their assets from the strategies. Also, it generates [reports](/docs/contracts/reports.md) based on the user's actions on the different strategies and sends this information back to the [L2 Pooling Manager](/docs/contracts/architecture/L2_arch.md#pooling-manager).

### Strategy

The Strategy contract handles commands from the L1 Pooling Manager and connects it to the targeted strategies. There will be one Strategy Contract addapter for each strategy Nimbora supports. This design enables full scalability regardless of the amount of strategies the platform handles or future integrations.

Nimbora Yield DEX off-chain services allow for the indexing and processing L1 and L2 reports. For more details, please check this link.

![l1_arch](/content/L1_arch.png)