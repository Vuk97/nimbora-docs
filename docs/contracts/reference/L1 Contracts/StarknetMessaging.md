---
id: starknet_messaging
title: Starknet Messaging
sidebar_position: 2
---

### starknetCore

```solidity
contract IStarknetMessaging starknetCore
```

Starknet messaging interface.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _starknetCore | address | Starknet core interface. |

### depositToBridgeToken

```solidity
function depositToBridgeToken(address l1BridgeAddress, uint256 _l2Receiver, uint256 _amount, uint256 _value) internal
```

deposit tokens to Starknet bridge.

### depositCancelRequestToBridgeToken

```solidity
function depositCancelRequestToBridgeToken(address l1BridgeAddress, uint256 _l2Receiver, uint256 _amount, uint256 _nonce) internal
```

cancel deposit tokens to Starknet bridge.

### depositReclaimToBridgeToken

```solidity
function depositReclaimToBridgeToken(address l1BridgeAddress, uint256 _l2Receiver, uint256 _amount, uint256 _nonce) internal
```

cancel deposit tokens to Starknet bridge.

### u256

```solidity
function u256(uint256 _value) internal pure returns (uint256 low, uint256 high)
```

