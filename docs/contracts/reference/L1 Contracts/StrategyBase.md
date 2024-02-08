---
id: strategy_base
title: Strategy Base
sidebar_position: 3
---

### poolingManager

```solidity
address poolingManager
```

### underlyingToken

```solidity
address underlyingToken
```

### yieldToken

```solidity
address yieldToken
```

### bridge

```solidity
address bridge
```

### depositCalldata

```solidity
function depositCalldata(uint256 _amount) external view virtual returns (address, bytes)
```

### addressToApprove

```solidity
function addressToApprove() external view virtual returns (address)
```

### withdraw

```solidity
function withdraw(uint256 _amount) external returns (uint256)
```

### nav

```solidity
function nav() external view returns (uint256)
```

### yieldToUnderlying

```solidity
function yieldToUnderlying(uint256 _amount) external view returns (uint256)
```

### underlyingToYield

```solidity
function underlyingToYield(uint256 _amount) external view returns (uint256)
```

### yieldBalance

```solidity
function yieldBalance() external view returns (uint256)
```


