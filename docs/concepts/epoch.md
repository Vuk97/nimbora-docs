---
id: epoch
title: Epoch
sidebar_position: 3
---

# Epoch

On Nimbora, keeping track of each processed batch is crucial. Since Starknet and Ethereum are asyncronous in their essence, we need a mechanism to syncronize the contracts state between both chains. To achieve that, each processed and closed batch send from L2 to L1 contains an epoch. This way we ensure that:

- Batches are processed in the correct order.
- No batch can be processed more than once.