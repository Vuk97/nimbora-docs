---
id: l1_arch
title: L1 Architecture
sidebar_position: 2
---

## L1 Contracts

### Pooling Manager

The pooling manager plays an intermediate role with L1 strategies and L2 communication. The contract receives a payload of data, containing all the information required to cover L2 strategy requests: deposit more in a strategy, inform the underlying NAV, or withdraw some assets.

### Strategy handler

The strategy handler is an adapter used to interact with strategies, it receives data of payload similar for each handler and processes the request before returning the new NAV of the strategy and potentially some ETH to bridge.

Nimbora Yield DEX off-chain services allow for the indexing and processing L1 and L2 reports. For more details, please check this link.

![l1_arch](/content/L1_arch.png)