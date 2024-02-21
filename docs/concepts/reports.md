---
id: reports
title: Reports
sidebar_position: 2
---

# Reports

The reports exist within both L1 and L2 Pooling Manager contracts and they are the means of communication between those two contracts.

## L1 Reports

From the L1 Pooling Manager perspective, reports represent messages received by the L1 Pooling Manager contract and it contains relevant data regarding the strategy status.
More specifically, contains the L1 strategy address, L1 net asset value (deposited asset's value), the amount to be deposited or withdrawn to/from the strategy and finally the status of the L1 strategy process.

With this information, the L1 Pooling Manager is able to communicate with the Starkgate bridge in order to fetch and bridge assets to and from L2. and it is also able to target the strategy it needs to interact with.

## L2 Reports

From the L2 Pooling Manager perspective, reports represent incoming messages from L1. This data is used to process and update L2 startegies (Token Manager and Token contracts) according to the new L1 strategy status. Once the data integrity is verified, it fetches bridge assets in order to, later, tansfers it to users and updates the strategy data.

This report is crucial for syncronizing L1 strategies data with the L2 contract state and it ensures only valid data is processed, all while contract's state remains consistent with L1.
