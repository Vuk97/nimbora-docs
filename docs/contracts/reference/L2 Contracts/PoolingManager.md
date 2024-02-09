---
id: factpooling_managerory
title: Pooling Manager
sidebar_position: 2
---

### Pooling Manager

#### Constructor

| Function Name | Parameter(s)                          | Description                             |
|---------------|---------------------------------------|-----------------------------------------|
| `constructor` | `ref self: ContractState`, `owner: ContractAddress` | Initializes the contract with the given owner address. Sets up initial access control roles. |

#### Get methods

| Method Name                          | Parameter(s)                   | Return Type        | Description                                      |
|--------------------------------------|--------------------------------|--------------------|--------------------------------------------------|
| `factory`                            | `self: @TContractState`        | `ContractAddress`  | Returns the factory address.                     |
| `fees_recipient`                     | `self: @TContractState`        | `ContractAddress`  | Returns the fees recipient address.              |
| `l1_strategy_to_token_manager`       | `self: @TContractState`, `l1_strategy: EthAddress` | `ContractAddress` | Returns the token manager address for a given L1 strategy. |
| `underlying_to_bridge`               | `self: @TContractState`, `underlying: ContractAddress` | `ContractAddress` | Returns the bridge address for a given underlying asset. |
| `l2_bridge_to_l1_bridge`             | `self: @TContractState`, `bridge: ContractAddress` | `felt252`         | Returns the L1 bridge identifier for a given L2 bridge. |
| `l1_pooling_manager`                 | `self: @TContractState`        | `EthAddress`       | Returns the L1 pooling manager address.           |
| `is_initialised`                     | `self: @TContractState`        | `bool`             | Checks if the contract is initialised.           |
| `hash_l1_data`                       | `self: @TContractState`, `calldata: Span<StrategyReportL1>` | `u256` | Computes the hash of L1 data.                    |
| `hash_l2_data`                       | `self: @TContractState`, `new_epoch: u256`, `bridge_deposit_info: Span<BridgeInteractionInfo>`, `strategy_report_l2: Span<StrategyReportL2>`, `bridge_withdrawal_info: Span<BridgeInteractionInfo>` | `u256` | Computes the hash of L2 data.                    |
| `l1_report_hash`                     | `self: @TContractState`, `general_epoch: u256` | `u256`             | Returns the L1 report hash for a given epoch.    |
| `general_epoch`                      | `self: @TContractState`        | `u256`             | Returns the current general epoch.               |
| `pending_strategies_to_initialize`   | `self: @TContractState`        | `Array<EthAddress>`| Lists pending strategies to be initialized.      |

#### Set Methods

| Method Name                          | Parameter(s)                                                           | Description                                      |
|--------------------------------------|------------------------------------------------------------------------|--------------------------------------------------|
| `set_fees_recipient`                 | `ref self: TContractState`, `new_fees_recipient: ContractAddress`      | Sets the new fees recipient address.             |
| `set_l1_pooling_manager`             | `ref self: TContractState`, `new_l1_pooling_manager: EthAddress`       | Sets the new L1 pooling manager address.         |
| `set_factory`                        | `ref self: TContractState`, `new_factory: ContractAddress`             | Sets the new factory address.                    |
| `set_allowance`                      | `ref self: TContractState`, `spender: ContractAddress`, `token_address: ContractAddress`, `amount: u256` | Sets the allowance for a spender on a token. |
| `handle_mass_report`                 | `ref self: TContractState`, `calldata: Span<StrategyReportL1>`         | Handles mass reporting of L1 data.               |
| `register_strategy`                  | `ref self: TContractState`, `token_manager_deployed_address: ContractAddress`, `token_deployed_address: ContractAddress`, `l1_strategy: EthAddress`, `underlying: ContractAddress`, `performance_fees: u256`, `min_deposit: u256`, `max_deposit: u256`, `min_withdrawal: u256`, `max_withdrawal: u256` | Registers a new strategy with specified parameters. |
| `delete_all_pending_strategy`        | `ref self: TContractState`                                             | Deletes all pending strategies.                  |
| `register_underlying`                | `ref self: TContractState`, `underlying: ContractAddress`, `bridge: ContractAddress`, `l1_bridge: felt252` | Registers an underlying asset with its corresponding bridges. |