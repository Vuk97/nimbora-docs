---
id: overview
title: Overview
sidebar_position: 1
---

# Architecture Overview

## **Introduction**

This document aims to delineate the architectural framework of the Nimbora Yield DEX system comprehensively. It employs various architectural perspectives to portray the multifaceted components and interactions within the system. The objective is to furnish stakeholders with an in-depth understanding of the system's structural blueprint.

## **Problem Statement**

A significant challenge encountered by users within the Ethereum Mainnet ecosystem pertains to the elevated gas fees associated with transactions. The Ethereum Mainnet, renowned for its robust security mechanisms, hosts an extensive array of DEFI protocols accompanied by considerable liquidity pools. This ecosystem's popularity invariably leads to escalated transaction costs, rendering operations such as staking, swapping, or withdrawing assets financially burdensome for users.

## **Solution Overview**

To mitigate the aforementioned issue, the Nimbora Yield DEX system introduces an innovative solution facilitating user access to Layer 1 (L1) yields through a Layer 2 (L2) framework without incurring additional gas fees, facing delays, or meeting extra liquidity prerequisites. This system hinges on the issuance of a proprietary share token that mirrors the value of an L1 yield token. The valuation of the share token is regularly updated based on yield reports from L1 strategies, thereby informing L2 users of the accrued yield in a timely and efficient manner.

## **Architectural Framework**

The architectural design of the Nimbora Yield DEX system is fundamentally built around the share token mechanism. This core component serves as the linchpin for the system's operational functionality, enabling seamless integration between L1 yield generation and L2 accessibility.

### **Architectural Views**

- **Structural View:** This view focuses on the system's static components, such as the share token and its interactions with both the L1 and L2 networks.
- **Behavioral View:** This perspective outlines the dynamic processes within the system, including the mechanism for updating share token values and the flow of yield information from L1 to L2.
- **Deployment View:** This aspect details the system's infrastructure requirements and deployment strategies, ensuring optimal performance and scalability.

## **Conclusion**

The Nimbora Yield DEX system introduces a pioneering approach to circumventing the high transaction fees associated with the Ethereum Mainnet. By bridging L1 yield generation with L2 accessibility, without imposing additional costs or requirements on users, it offers a viable solution for cost-efficient interaction with DEFI protocols. This architectural design document provides a foundational understanding of the system's structure and functionality, serving as a guide for further development and implementation efforts.

## Contact architecture

![arch](/content/arch.png)



