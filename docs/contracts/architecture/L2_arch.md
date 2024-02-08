---
id: l2_arch
title: L2 Architecture
sidebar_position: 3
---

## L2 Contracts

### Pooling Manager

The pooling manager plays an intermediate role with L2 strategies and L1 communication. The idea is to significantly reduce gas costs on L1 by hashing all of the data and mutualizing bridge transfer. He is also responsible for registering all available strategies and is the only one able to process reports. although he is processing all at once, he is also able to process only one report individually so a broken strategy has no impact on others.

### Pooling Factory

The pooling factory is the contract used to deploy new “strategy packages”: token, and token manager, those contracts are the same for any strategy.

### N-yield Token Manager

The token manager contains all the logic for token accountability through a strategy report, setting the share price at each epoch. It is also the entry point for deposit and withdraw, only this contract can mint or burn tokens.

### N-yield Token

The Nimbora yield token represents the l1 strategy yield-bearing token, increasing in value at each epoch. Once minted, it can be used in DeFi through the Starknet ecosystem.

![l2_arch](/content/L2_arch.png)