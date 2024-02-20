---
id: token_manager
title: Using the Token Manager
sidebar_position: 2
---


# Token Manager

The Token Manager is a core component in the system that allows users to interact with the Strategy. This interaction may include actions such as sending, receiving, or managing tokens. Setting it up involves several steps. 

First, necessary packages and modules such as TokenManager and RpcProvider are imported. 

The tokenManagerAddress is then defined, followed by the initialization of the provider using the RpcProvider. The user's account details, including the accountAddress and accountPrivateKey, are then set. 

Finally, a new instance of TokenManager is created, using the previously defined tokenManagerAddress, provider, and account. This instance can then be used to interact with the Strategy.

For this guide, the following packages are used:

- [nimbora-token-manager](https://www.npmjs.com/package/nimbora-token-manager)
- [starknet.js](https://www.npmjs.com/package/starknet)


```typescript
import { TokenManager } from 'nimbora-token-manager';
import { RpcProvider } from 'starknet';

const tokenManagerAddress: string = '';
const provider = new RpcProvider({ nodeUrl: 'https://starknet-goerli.g.alchemy.com/v2/XXX' });

const accountAddress = process.env.ACCOUNT_ADDRESS;
const accountPrivateKey = process.env.ACCOUNT_PRIVATE_KEY;
const account = new Account(provider, accountAddress, accountPrivateKey);

const tokenManager = new TokenManager(tokenManagerAddress, provider, account);
```