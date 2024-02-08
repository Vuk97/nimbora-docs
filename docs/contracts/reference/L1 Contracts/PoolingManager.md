---
id: pooling_manager
title: Pooling Manager
sidebar_position: 1
---

### l2PoolingManager

```solidity
uint256 l2PoolingManager
```

### strategyInfo

```solidity
mapping(address => struct StrategyInfo) strategyInfo
```

### batchCounter

```solidity
uint256 batchCounter
```

### ethBridge

```solidity
address ethBridge
```

### ethWrapped

```solidity
address ethWrapped
```

### pendingRequests

```solidity
struct StrategyReportL2[] pendingRequests
```

### pendingRequestsExecuted

```solidity
struct StrategyReportL1[] pendingRequestsExecuted
```

### pendingRequestsExecutedCounter

```solidity
uint256 pendingRequestsExecutedCounter
```

### PendingRequestsExecuted

```solidity
event PendingRequestsExecuted(uint256[] indices)
```

### MessageResentToL2

```solidity
event MessageResentToL2()
```

### BridgeCancelDepositRequestClaimedAndDeposited

```solidity
event BridgeCancelDepositRequestClaimedAndDeposited(address l1BridgeAddress, uint256 amount, uint256 nonce)
```

### CancelDepositRequestBridgeSent

```solidity
event CancelDepositRequestBridgeSent(address l1BridgeAddress, uint256 amount, uint256 nonce)
```

### ReportHandled

```solidity
event ReportHandled(uint256 epoch, uint256 strategyReportL1Length, struct StrategyReportL1[] strategyReportL1)
```

### StrategyRegistered

```solidity
event StrategyRegistered(address strategy, struct StrategyInfo strategyInfo)
```

### L2_HANDLER_SELECTOR

```solidity
uint256 L2_HANDLER_SELECTOR
```

### RELAYER_ROLE

```solidity
bytes32 RELAYER_ROLE
```

### receive

```solidity
receive() external payable
```

_Receive Ether function_

### fallback

```solidity
fallback() external payable
```

_Fallback function_

### constructor

```solidity
constructor() public
```

### initialize

```solidity
function initialize(address _owner, uint256 _l2PoolingManager, address _starknetCore, address _relayer, address _ethBridge, address _ethWrapped) public
```

Initialier the contract state.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address |  |
| _l2PoolingManager | uint256 | troveManager address |
| _starknetCore | address | starknetCore address |
| _relayer | address | relayer address |
| _ethBridge | address |  |
| _ethWrapped | address |  |

### hashFromReportL2

```solidity
function hashFromReportL2(uint256 epoch, struct BridgeInteractionInfo[] bridgeWithdrawInfo, struct StrategyReportL2[] strategyReportL2, struct BridgeInteractionInfo[] bridgeDepositInfo) public pure returns (uint256)
```

### hashFromReportL1

```solidity
function hashFromReportL1(uint256 strategyReportL1Length, struct StrategyReportL1[] strategyReportL1) public pure returns (uint256)
```

### bridgeEthFeesMultiplicator

```solidity
function bridgeEthFeesMultiplicator(struct BridgeInteractionInfo[] bridgeDepositInfo) public view returns (uint256)
```

### registerStrategy

```solidity
function registerStrategy(address _strategy, address _underlying, address _bridge) public payable
```

### setPoolingManager

```solidity
function setPoolingManager(uint256 _l2PoolingManager) public payable
```

### cancelDepositRequestBridge

```solidity
function cancelDepositRequestBridge(address l1BridgeAddress, uint256 amount, uint256 nonce) public
```

### claimBridgeCancelDepositRequestAndDeposit

```solidity
function claimBridgeCancelDepositRequestAndDeposit(address l1BridgeAddress, uint256 amount, uint256 nonce, uint256 l2BridgeEthFee) public payable
```

### pause

```solidity
function pause() external
```

### unpause

```solidity
function unpause() external
```

### executePendingRequests

```solidity
function executePendingRequests() public
```

### handleReport

```solidity
function handleReport(uint256 epoch, struct BridgeInteractionInfo[] bridgeWithdrawInfo, struct StrategyReportL2[] strategyReportL2, struct BridgeInteractionInfo[] bridgeDepositInfo, uint256 l2BridgeEthFee, uint256 l2MessagingEthFee, uint256 minSuccessCall) public payable
```

### getMessagePayloadData

```solidity
function getMessagePayloadData(uint256 epoch, uint256 strategyReportL1Hash) internal pure returns (uint256[])
```

### deleteElement

```solidity
function deleteElement(struct StrategyReportL2[] array, uint256 index) internal
```

### verifyCallData

```solidity
function verifyCallData(uint256 epoch, struct BridgeInteractionInfo[] bridgeWithdrawInfo, struct StrategyReportL2[] strategyReportL2, struct BridgeInteractionInfo[] bridgeDepositInfo) internal
```

### withdrawFromBridges

```solidity
function withdrawFromBridges(struct BridgeInteractionInfo[] bridgeWithdrawalInfo) internal
```

### depositToBridges

```solidity
function depositToBridges(struct BridgeInteractionInfo[] bridgeDepositInfo, uint256 l2BridgeEthFee, bool withdrawEth) internal
```

### handleMassReport

```solidity
function handleMassReport(struct StrategyReportL2[] strategyReportL2, struct BridgeInteractionInfo[] bridgeDepositInfo) internal returns (uint256, struct StrategyReportL1[], struct BridgeInteractionInfo[])
```

### processStrategyReports

```solidity
function processStrategyReports(struct StrategyReportL2[] strategyReportL2) internal returns (uint256 strategyReportL1Length, struct StrategyReportL1[] strategyReportL1, uint256 tempBridgeLossLength, struct BridgeInteractionInfo[] tempBridgeLoss)
```

### processPendingRequests

```solidity
function processPendingRequests(uint256 strategyReportL1Length, struct StrategyReportL1[] strategyReportL1, struct BridgeInteractionInfo[] bridgeDepositInfo, uint256 pendingRequestsExecutedLength) internal returns (uint256, struct StrategyReportL1[], struct BridgeInteractionInfo[])
```

### mergeReportsAndUpdateDeposits

```solidity
function mergeReportsAndUpdateDeposits(uint256 strategyReportL1Length, struct StrategyReportL1[] strategyReportL1, struct BridgeInteractionInfo[] bridgeDepositInfo, uint256 pendingRequestsExecutedLength) internal view returns (uint256 newStrategyReportL1Length, struct StrategyReportL1[] newStrategyReportL1, uint256 tempBridgeAdditionalDepositLength, struct BridgeInteractionInfo[] tempBridgeAdditionalDeposit)
```

### processPendingRequest

```solidity
function processPendingRequest(uint256 i, uint256 strategyReportL1Length, struct StrategyReportL1[] newStrategyReportL1, struct BridgeInteractionInfo[] bridgeDepositInfo, struct BridgeInteractionInfo[] tempBridgeAdditionalDeposit, uint256 tempBridgeAdditionalDepositLength) internal view returns (uint256)
```


