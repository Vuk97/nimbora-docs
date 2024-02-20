---
id: deposit
title: Depositing into strategy
sidebar_position: 3
---

Depositing tokens into the Layer 2 Token Manager contract is achieved by calling the `deposit` function. This function is capable of executing a `multi-call` under certain conditions. 

A `multi-call` is a type of transaction that allows you to perform multiple actions within a single transaction. In this context, it is executed if the current allowance, or the amount of tokens that the Token Manager contract is authorized to withdraw from the user's account, is insufficient to cover the deposit. 

When the `deposit` function is called, if the amount of tokens the user wants to deposit exceeds the current allowance, the function will first call the `approve` function to increase the allowance to cover the deposit amount, and then call the `transfer` function to transfer the tokens. 

This sequence of actions is packaged into a single transaction, hence the term `multi-call`.

```typescript
...
try {
    const { shares, hash } = await tokenManager.deposit({
        amount: "100",
        receiver: account.address, // The shares receiver account address.
        referral: account.address, // The referral account address.
        onTxStageChange: txStageChangeCallback, // Optional callback for getting information about transaction stage
    })
} catch (e) {
    // Handle Errors
}
```

