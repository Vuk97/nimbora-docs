---
id: factory
title: Factory 
sidebar_position: 1
---

### Factory

#### Constructor

| Argument Name              | Description                                        |
|----------------------------|----------------------------------------------------|
| `pooling_manager`          | The address of the pooling manager.                |
| `token_class_hash`         | The class hash of the token.                       |
| `token_manager_class_hash` | The class hash of the token manager.               |

#### Get methods

| Method Name                | Parameter(s)                     | Return Type        | Description                                      |
|----------------------------|----------------------------------|--------------------|--------------------------------------------------|
| `token_manager_class_hash` | `self: @TContractState`          | `ClassHash`        | Returns the class hash of the token manager.    |
| `token_class_hash`         | `self: @TContractState`          | `ClassHash`        | Returns the class hash of the token.            |
| `pooling_manager_address`  | `self: @TContractState`          | `ContractAddress`  | Returns the address of the pooling manager.     |

#### Operation methods

| Method Name                     | Parameter(s)                                                                 | Return Type                       | Description                                      |
|---------------------------------|------------------------------------------------------------------------------|-----------------------------------|--------------------------------------------------|
| `deploy_strategy`               | `ref self: TContractState`, `l1_strategy: EthAddress`, `underlying: ContractAddress`, `token_name: felt252`, `token_symbol: felt252`, `performance_fees: u256`, `min_deposit: u256`, `max_deposit: u256`, `min_withdrawal: u256`, `max_withdrawal: u256`, `withdrawal_epoch_delay: u256`, `dust_limit: u256` | `(ContractAddress, ContractAddress)` | Deploys a new strategy with the specified parameters and returns the addresses of the deployed token manager and token. |
| `set_token_manager_class_hash`  | `ref self: TContractState`, `new_token_manager_class_hash: ClassHash`         | None                              | Sets a new class hash for the token manager.    |
| `set_token_class_hash`          | `ref self: TContractState`, `new_token_class_hash: ClassHash`                 | None                              | Sets a new class hash for the token.            |