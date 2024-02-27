---
id: reports
title: Reports
sidebar_position: 4
---

# Reports

The reports exist within both L1 and L2 Pooling Manager contracts and they are the means of communication between those two contracts.

## L1 Reports

From the L1 Pooling Manager perspective, reports represent messages received by the L1 Pooling Manager contract and they contain relevant data regarding the strategy status.

More specifically, they contain the following:
- L1 strategy address.
- L1 net asset value (deposited asset's value).
- The amount to be deposited or withdrawn (to/from the strategy).
- Status of the L1 strategy process.

With this information, the L1 Pooling Manager can communicate with the Starkgate bridge to fetch and bridge assets to and from L2. Additionally, it can target the strategy it needs to interact with.

## L2 Reports

From the L2 Pooling Manager perspective, reports represent incoming messages from L1. This data is used to process and update L2 strategies (Token Manager and Token contracts) according to the new L1 strategy status. Once the L1 data integrity is verified, it enables the contract to fetch bridge assets and later transfer them to users and update the strategy data.

This report is crucial for synchronizing L1 strategies data with the L2 contract state and it ensures only valid data is processed, all while contract's state remains consistent with L1.
