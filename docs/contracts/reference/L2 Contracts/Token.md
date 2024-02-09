---
id: token
title: Token
sidebar_position: 4
---

### Token

#### Constructor

| Function Name | Parameter(s)                                                                 | Description                                                                                              |
|---------------|------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `constructor` | `ref self: ContractState`, `token_manager: ContractAddress`, `name: felt252`, `symbol: felt252`, `decimals: u8` | Initializes the Token contract with the specified parameters, setting up the token's basic attributes such as its manager, name, symbol, and decimals. Initializes the ERC20 related functionality with the given name and symbol, and sets the token manager and decimals. |

#### Operation methods

| Method Name | Parameter(s)                                                             | Description                                     |
|-------------|--------------------------------------------------------------------------|-------------------------------------------------|
| `mint`      | `ref self: TContractState`, `recipient: ContractAddress`, `amount: u256` | Mints tokens to a specified recipient address.  |
| `burn`      | `ref self: TContractState`, `account: ContractAddress`, `amount: u256`   | Burns tokens from a specified account address.  |
