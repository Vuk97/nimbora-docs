---
id: create_strategy
title: How to create new strategies
sidebar_position: 3
---

# Deploying and Interacting with Strategies

This guide will walk you through the process of deploying a new strategy and interacting with it.
We'll use sDAI as the L1 strategy and DAI as the underlying token.

## Create new strategy

To create new strategies you can interact directly with the [L2 Factory contract](https://starkscan.co/contract/0x06c1658299633f8d52069985421ab2717c8a4c2a6d1bdfe58532b760aeec9e0d). 

Use `deploy_strategy` method to create your new strategy on L2. This is how the function interface looks like:


| Args              | Description                                        |
|-------------------|----------------------------------------------------|
|`l1_strategy`      | L1 address for your strategy                       |
|`underlying`       | asset users will use to interact with the strategy |
|`token_name`       | name of the yield-bearing token                    |
|`token_symbol`     | simbol for the yield-bearing token                 |
|`performance_fees` | fees preceibed by the contract                     |
|`min_deposit`      | minimum amount users can deposit                   |
|`max_deposit`      | maximum amount users can deposit                   |
|`min_withrawal`    | minimum amount users can withdraw                  |
|`max_deposit`      | maximum amount users can withdraw                  |

This function will return you the token manager and the ERC20 yield-bearing token.

## User interaction

In order to interac with the strategy, users will deposit the underlying token using the token manager smart contract. Then, they will consult their balances using the underlying yield-bearer token.

`Deposit`

| Args              | Description                                        |
|-------------------|----------------------------------------------------|
|`assets`           | amount user wants to deposit within the strategy   |
|`receiver`         | address to receive the minted shares               |
|`referal`          | referral address for the deposit                   |

Users can withdraw their deposits by using the `request_withdrawal` method on first instance. 

`Request Withdrawal`

| Args              | Description                                        |
|-------------------|----------------------------------------------------|
|`shares`           | amount of shares to be withdrawn by the user       |

Then, a withdrawal petition will be sent to the Pooling Manager contract to fetch the assets from the L1 strategy. Once the assets are bridged to L2, the user will be able to `claim_withdrawal`. 

`Claim Withdrawal`

| Args              | Description                                        |
|-------------------|----------------------------------------------------|
|`id`               | withdraw id to be claimed                          |

As you can deduct from the previously described withdraw mechanism, the assets will take some time to get bridged to L2 and transferred to the user's wallet.

In order to keep track of the withdrawal request, users can use `withdrawal_info` to fetch the withdrawal status.

`Withdrawal Info`

| Args              | Description                                        |
|-------------------|----------------------------------------------------|
|`user`             | user's contract address                            |
|`id`               | withdrawal id                                      | 
