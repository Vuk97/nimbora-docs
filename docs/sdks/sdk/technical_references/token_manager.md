---
id: token_manager
title: Token Manager
sidebar_position: 2
---

# Token Manager References

### `constructor`

Creates an instance of the `TokenManager` class.

#### Parameters

| Name                 | Type         | Description                                                                                   | Required |
|----------------------|--------------|-----------------------------------------------------------------------------------------------|----------|
| `tokenManagerAddress`| `string`     | The address of the token manager contract.                                                    | Yes      |
| `web3Provider`       | `RpcProvider`| The web3 provider used to interact with the blockchain.                                       | Yes      |
| `account`            | `Account`    | The account used for transactions. If not provided, the default account will be used.         | No       |

#### Return Value

This constructor does not return a value but initializes an instance of the `TokenManager` class.

---

### `underlying`

Asynchronously retrieves the underlying token contract.

#### Parameters

This function does not take any parameters.

#### Return Value

| Type       | Description                          |
|------------|--------------------------------------|
| `Promise<Contract>` | A promise that resolves with the underlying token contract. |

---

### `token`

Asynchronously retrieves the token share contract.

#### Parameters

This function does not take any parameters.

#### Return Value

| Type       | Description                          |
|------------|--------------------------------------|
| `Promise<Contract>` | A promise that resolves with the token share contract. |

---

### `performanceFees`

Asynchronously retrieves the current performance fees.

#### Parameters

This function does not take any parameters.

#### Return Value

| Type       | Description                          |
|------------|--------------------------------------|
| `Promise<bigint>` | A promise that resolves with the current performance fees. |

---

### `depositLimitLow`

Asynchronously retrieves the low deposit limit.

#### Parameters

This function does not take any parameters.

#### Return Value

| Type             | Description                        |
|------------------|------------------------------------|
| `Promise<bigint>`| A promise that resolves with the low deposit limit. |

---

### `depositLimitHigh`

Asynchronously retrieves the high deposit limit.

#### Parameters

This function does not take any parameters.

#### Return Value

| Type             | Description                        |
|------------------|------------------------------------|
| `Promise<bigint>`| A promise that resolves with the high deposit limit. |

---

### `withdrawalLimitLow`

Asynchronously retrieves the low withdraw limit.

#### Parameters

This function does not take any parameters.

#### Return Value

| Type             | Description                        |
|------------------|------------------------------------|
| `Promise<bigint>`| A promise that resolves with the low withdraw limit. |

---

### `withdrawalLimitHigh`

Asynchronously retrieves the high withdraw limit.

#### Parameters

This function does not take any parameters.

#### Return Value

| Type             | Description                        |
|------------------|------------------------------------|
| `Promise<bigint>`| A promise that resolves with the high withdraw limit. |

---

### `_withdrawalInfo`

Fetches the request withdraw info by user address and id.

#### Parameters

| Name      | Type          | Description               | Required |
|-----------|---------------|---------------------------|----------|
| `address` | `string`      | The user address.         | Yes      |
| `id`      | `BigNumberish`| The request withdrawal id.| Yes      |

---

#### Return Value

| Type                        | Description               |
|-----------------------------|---------------------------|
| `Promise<WithdrawalInfo>`   | The withdraw request info.|

---

### `_userWithdrawalLen`

Fetches the total number of request withdrawals a user made.

#### Parameters

| Name      | Type     | Description       | Required |
|-----------|----------|-------------------|----------|
| `address` | `string` | The user address. | Yes      |

#### Return Value

| Type             | Description                       |
|------------------|-----------------------------------|
| `Promise<bigint>`| The total withdrawals.            |

---

### `totalAssets`

Fetches the total assets, including the buffered amount, the bridged amount to L1, and the tokens in transit.

#### Parameters

This function does not take any parameters.

#### Return Value

| Type             | Description                       |
|------------------|-----------------------------------|
| `Promise<bigint>`| The total assets.                 |

---

### `withdrawalExchangeRate`

Calculates the withdrawal exchange rate for a given epoch.

#### Parameters

| Name    | Type          | Description    | Required |
|---------|---------------|----------------|----------|
| `epoch` | `BigNumberish`| The epoch number.| Yes     |

---

#### Return Value

| Type             | Description                              |
|------------------|------------------------------------------|
| `Promise<bigint>`| The withdrawal exchange rate.            |

---

### `listUserRequestWithdrawal`

Lists all withdrawal requests made by a specific user.

#### Parameters

| Name      | Type     | Description       | Required |
|-----------|----------|-------------------|----------|
| `address` | `string` | The user address. | Yes      |

---

#### Return Value

| Type                              | Description                                      |
|-----------------------------------|--------------------------------------------------|
| `Promise<Array<RequestWithdrawal>>`| A promise that resolves with a list of withdrawal info made by the user. |

---

### `_formatRequestWithdrawal`

Formats the withdrawal request based on the provided withdrawal information.

#### Parameters

This function takes an object with the following properties:

| Name      | Type             | Description                       | Required |
|-----------|------------------|-----------------------------------|----------|
| `claimed` | `boolean`        | Status of the claim.              | Yes      |
| `epoch`   | `number`         | The epoch of the withdrawal.      | Yes      |
| `shares`  | `BigNumberish`   | The amount in shares.             | Yes      |

---

#### Return Value

| Type                        | Description                              |
|-----------------------------|------------------------------------------|
| `Promise<RequestWithdrawal>`| The formatted withdrawal request.        |

---

### `lastUserRequestWithdrawal`

Lists the last withdrawal request made by a specific user.

#### Parameters

| Name      | Type     | Description       | Required |
|-----------|----------|-------------------|----------|
| `address` | `string` | The user address. | Yes      |

#### Return Value

| Type                        | Description                                     |
|-----------------------------|-------------------------------------------------|
| `Promise<RequestWithdrawal>`| The last request withdrawal made by the user.   |

---

### `shareToUnderlying`

Converts shares token to the underlying amount.

#### Parameters

| Name      | Type          | Description            | Required |
|-----------|---------------|------------------------|----------|
| `shares`  | `BigNumberish`| The amount in shares.  | Yes      |

#### Return Value

| Type             | Description                                     |
|------------------|-------------------------------------------------|
| `Promise<bigint>`| The amount of underlying corresponding to the shares. |

---

### `UnderlyingToShare`

Converts underlying token amount to shares.

#### Parameters

| Name      | Type          | Description                 | Required |
|-----------|---------------|-----------------------------|----------|
| `assets`  | `BigNumberish`| The amount in underlying.   | Yes      |

#### Return Value

| Type             | Description                                     |
|------------------|-------------------------------------------------|
| `Promise<bigint>`| The amount of shares corresponding to the underlying. |

---

Let's continue with the structured Markdown documentation for the remaining function interfaces you've provided. Here's how you can document them:

### `deposit`

Deposits tokens into the token manager.

#### Parameters

This function takes an object with the following properties:

| Name               | Type            | Description                        | Required |
|--------------------|-----------------|------------------------------------|----------|
| `amount`           | `bigint`        | The amount to deposit in underlying token. | Yes |
| `receiver`         | `string`        | The receiver address.              | Yes      |
| `referral`         | `string`        | The referral address.              | No       |
| `onTxStageChange`  | `function`      | Transaction status hook.           | No       |

#### Return Value

| Type                        | Description                              |
|-----------------------------|------------------------------------------|
| `Promise<DepositResponse>`  | The deposit request response data.       |

---

### `requestWithdrawal`

Requests withdrawal to the token manager.

#### Parameters

This function takes an object with the following properties:

| Name               | Type            | Description                                    | Required |
|--------------------|-----------------|------------------------------------------------|----------|
| `shares`           | `BigNumberish`  | The amount of shares user want to convert to underlying. | Yes |
| `onTxStageChange`  | `function`      | Transaction status hook.                       | No       |

#### Return Value

| Type                                  | Description                              |
|---------------------------------------|------------------------------------------|
| `Promise<RequestWithdrawalResponse>`  | The request withdrawal response data.    |

---

### `claimWithdrawal`

Claims a request withdrawal from the token manager by ID.

#### Parameters

This function takes an object with the following properties:

| Name               | Type            | Description                        | Required |
|--------------------|-----------------|------------------------------------|----------|
| `id`               | `bigint`        | The request withdrawal ID.         | Yes      |
| `onTxStageChange`  | `function`      | Transaction status hook.           | No       |

#### Return Value

| Type              | Description                              |
|-------------------|------------------------------------------|
| `Promise<string>` | Transaction hash.                        |

---

### `_enoughAllowance`

Checks if the user has enough allowance to the token manager.

#### Parameters

| Name      | Type     | Description                     | Required |
|-----------|----------|---------------------------------|----------|
| `address` | `string` | The user address.               | Yes      |
| `assets`  | `bigint` | The amount in underlying token. | Yes      |

#### Return Value

| Type                | Description                              |
|---------------------|------------------------------------------|
| `Promise<boolean>`  | Whether the user has enough allowance.   |

---

### `_validateDepositLimit`

Validates the deposit call data.

#### Parameters

| Name      | Type     | Description                     | Required |
|-----------|----------|---------------------------------|----------|
| `assets`  | `bigint` | The amount in underlying token. | Yes      |

#### Return Value

This function does not return a value but throws an error if validation fails.

---

### `_validateRequestWithdraw`

Validates the request withdraw call data.

#### Parameters

| Name      | Type     | Description                     | Required |
|-----------|----------|---------------------------------|----------|
| `address` | `string` | The user address.               | Yes      |
| `shares`  | `bigint` | The amount in share token.      | Yes      |

#### Return Value

This function does not return a value but throws an error if validation fails.

---

### `_validateClaimWithdrawal`

Validates the claim request withdraw call data.

#### Parameters

| Name      | Type     | Description                     | Required |
|-----------|----------|---------------------------------|----------|
| `address` | `string` | The user address.               | Yes      |
| `id`      | `bigint` | The request withdraw ID.        | Yes      |

#### Return Value

This function does not return a value but throws an error if validation fails.

---
