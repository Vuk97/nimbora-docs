---
id: token_manager
title: Token Manager
sidebar_position: 3
---

### Token Manager

#### Constructor

| Function Name | Parameter(s)                                                                                                      | Description                                      |
|---------------|-------------------------------------------------------------------------------------------------------------------|--------------------------------------------------|
| `constructor` | `ref self: ContractState`, `pooling_manager: ContractAddress`, `l1_strategy: EthAddress`, `underlying: ContractAddress`, `performance_fees: u256`, `min_deposit: u256`, `max_deposit: u256`, `min_withdrawal: u256`, `max_withdrawal: u256`, `withdrawal_epoch_delay: u256`, `dust_limit: u256` | Initializes the contract with the specified parameters, setting up the initial state including the pooling manager, L1 strategy, underlying asset, performance fees, deposit limits, withdrawal limits, withdrawal epoch delay, and dust limit. Ensures the L1 strategy address is non-zero. |

#### Get Methods

| Method Name                       | Parameter(s)                                 | Return Type        | Description                                      |
|-----------------------------------|----------------------------------------------|--------------------|--------------------------------------------------|
| `pooling_manager`                 | `self: @TContractState`                      | `ContractAddress`  | Returns the pooling manager address.             |
| `l1_strategy`                     | `self: @TContractState`                      | `EthAddress`       | Returns the L1 strategy address.                 |
| `underlying`                      | `self: @TContractState`                      | `ContractAddress`  | Returns the underlying asset address.            |
| `token`                           | `self: @TContractState`                      | `ContractAddress`  | Returns the token address.                       |
| `performance_fees`                | `self: @TContractState`                      | `u256`             | Returns the performance fees.                    |
| `deposit_limit_low`               | `self: @TContractState`                      | `u256`             | Returns the lower limit of deposit.              |
| `deposit_limit_high`              | `self: @TContractState`                      | `u256`             | Returns the upper limit of deposit.              |
| `withdrawal_limit_low`            | `self: @TContractState`                      | `u256`             | Returns the lower limit of withdrawal.           |
| `withdrawal_limit_high`           | `self: @TContractState`                      | `u256`             | Returns the upper limit of withdrawal.           |
| `withdrawal_epoch_delay`          | `self: @TContractState`                      | `u256`             | Returns the withdrawal epoch delay.              |
| `handled_epoch_withdrawal_len`    | `self: @TContractState`                      | `u256`             | Returns the length of handled epoch withdrawals. |
| `epoch`                           | `self: @TContractState`                      | `u256`             | Returns the current epoch.                       |
| `l1_net_asset_value`              | `self: @TContractState`                      | `u256`             | Returns the L1 net asset value.                  |
| `underlying_transit`              | `self: @TContractState`                      | `u256`             | Returns the underlying in transit.               |
| `buffer`                          | `self: @TContractState`                      | `u256`             | Returns the buffer amount.                       |
| `withdrawal_info`                 | `self: @TContractState`, `user: ContractAddress`, `id: u256` | `WithdrawalInfo` | Returns withdrawal information for a user and ID.|
| `user_withdrawal_len`             | `self: @TContractState`, `user: ContractAddress` | `u256`          | Returns the length of withdrawals for a user.    |
| `dust_limit`                      | `self: @TContractState`                      | `u256`             | Returns the dust limit.                          |
| `total_assets`                    | `self: @TContractState`                      | `u256`             | Returns the total assets.                        |
| `total_underlying_due`            | `self: @TContractState`                      | `u256`             | Returns the total underlying due.                |
| `withdrawal_exchange_rate`        | `self: @TContractState`, `epoch: u256`       | `u256`             | Returns the withdrawal exchange rate for an epoch.|
| `withdrawal_pool`                 | `self: @TContractState`, `epoch: u256`       | `u256`             | Returns the withdrawal pool for an epoch.        |
| `withdrawal_share`                | `self: @TContractState`, `epoch: u256`       | `u256`             | Returns the withdrawal share for an epoch.       |

#### Set and operation methods

| Method Name                     | Parameter(s)                                                                 | Description                                      |
|---------------------------------|------------------------------------------------------------------------------|--------------------------------------------------|
| `initialiser`                   | `ref self: TContractState`, `token: ContractAddress`                         | Initialises the token manager with a token address. |
| `set_performance_fees`          | `ref self: TContractState`, `new_performance_fees: u256`                     | Sets the new performance fees.                   |
| `set_deposit_limit`             | `ref self: TContractState`, `new_deposit_limit_low: u256`, `new_deposit_limit_high: u256` | Sets the new deposit limits.                    |
| `set_withdrawal_limit`          | `ref self: TContractState`, `new_withdrawal_limit_low: u256`, `new_withdrawal_limit_high: u256` | Sets the new withdrawal limits.                |
| `set_withdrawal_epoch_delay`    | `ref self: TContractState`, `new_withdrawal_epoch_delay: u256`                | Sets the new withdrawal epoch delay.             |
| `set_dust_limit`                | `ref self: TContractState`, `new_dust_limit: u256`                           | Sets the new dust limit.                         |
| `deposit`                       | `ref self: TContractState`, `assets: u256`, `receiver: ContractAddress`, `referal: ContractAddress` | Handles deposit operations.                     |
| `request_withdrawal`            | `ref self: TContractState`, `shares: u256`                                   | Handles withdrawal requests.                     |
| `claim_withdrawal`              | `ref self: TContractState`, `id: u256`                                       | Processes withdrawal claims.                     |
| `handle_report`                 | `ref self: TContractState`, `new_l1_net_asset_value: u256`, `underlying_bridged_amount: u256` | Handles strategy reports and updates state accordingly. Returns a `StrategyReportL2`. |
