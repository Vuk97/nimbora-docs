---
id: sdai
title: Deposit sDAI
sidebar_position: 3
---

# sDAI Strategy

**This strategy allows users to leverage their DAI holdings** by depositing them into an sDAI vault, which is a specialized financial vehicle. This depositing action allows their DAI to be put to work, generating potential profits over time. The approach combines the security of DAI, a stablecoin, with the revenue-generating power of DeFi strategies. This mechanism is designed to provide users with a more effective way to maximize the potential return on their DAI investments.

<details>
  <summary>What is sDAI</summary>

    - sDAI is an ERC-4626 representation of DAI, offering users the ability to earn yield via the Maker protocol while maintaining full flexibility over their funds.

    - Users can convert between DAI and sDAI not through a DEX, but directly by depositing into or withdrawing from the DSR module.

    - Interaction with sDAI is facilitated through a specific frontend platform, allowing for straightforward deposit, withdrawal, and other operations with sDAI.

    - More about sDAI:
      - [Docs](https://docs.spark.fi/defi-infrastructure/sdai-overview/dsr-and-sdai#what-is-sdai)

</details>

<details>
  <summary>What is DSR</summary>

    - The Dai Savings Rate (DSR) is a feature within the Maker Protocol that enables Dai holders to earn savings by actively engaging with the DSR contract.

    - To earn savings, users must manually transfer Dai from their wallet to the Maker Protocol, with the assurance that Dai can be instantly redeemed without liquidity constraints, but only back to the original depositing account.

    - Integration of DSR functionality by custodians, decentralized exchanges, wallets, or dapps is advantageous as it allows any user to earn savings on their Dai holdings.

    - More about DSR:
      - [Docs](https://docs.spark.fi/defi-infrastructure/sdai-overview/dsr-and-sdai#what-is-dsr)

</details>

<details>
  <summary>What is Spark</summary>

    - Spark aims to enhance the DAI ecosystem as part of the MakerDAO community, positioning itself as a next-generation DeFi infrastructure.

    - It introduces SparkLend, a DAI-focused money market protocol that integrates liquidity from Maker and other top DeFi protocols.

    - sDAI, a yield-bearing stablecoin within Spark, represents DAI in the Dai Savings Rate (DSR) module, funneling revenue from the Maker protocol back to DAI holders.

    - Spark features SparkConduits for direct liquidity transfer from Maker to various protocols and is governed by SparkDAO, a subDAO of Maker Allocator, with its governance launch set for May 2024.

    - More about Spark:
      - [Website](https://spark.fi/)
      - [Docs](https://docs.spark.fi/)
      - [Analytics](https://dune.com/facundol2/spark-protocol)
      - [Spark on Twitter](https://twitter.com/sparkdotfi)

</details>

<details>
  <summary>What is MakerDAO</summary>

    - MakerDAO aims to stabilize the crypto economy using a dual-token system: Dai for stability and MKR token for governance, emphasizing the necessity of a decentralized stablecoin for digital financial benefits.

    - It champions decentralized finance (DeFi) accessibility, striving for economic empowerment and equal access to the global financial market for all.

    - The Multi Collateral Dai (MCD) update expands collateral options to include various Ethereum-based assets, contingent on approval by MKR holders.

    - This enhancement introduces new features to the protocol, promoting broader asset acceptance and flexibility. 

    - More about Maker:
      - [Website](https://makerdao.com/en/)
      - [Docs](https://docs.makerdao.com/)
      - [MakerDAO on Twitter](https://twitter.com/MakerDAO)

</details>

## How to deposit

To interact with the sDAI strategy, you'll first need to connect to Nimbora. You can do this through available wallets such as Argent or Braavos. Ensure you have some DAI tokens in your wallet.

***Screenshot connect with wallet***

After connecting to Nimbora, find and select the sDAI strategy. Here, you'll see various metrics like Annual Percentage Rate (APR) and Total Value Locked (TVL). On the same screen, you'll find a place to enter the type and amount of tokens you want to deposit into the sDAI strategy. It will also display the amount of sDAI tokens you'll get once the transaction is completed.

***Screenshot token selection and amount with expected sDAI return***

The number of sDAI tokens you receive can vary depending on the asset you deposit. You can always chose to deposit the underlying token which is DAI, but some users might want to deposit other tokens. In this case, Nimbora converts your deposit into the underlying asset.

***Screenshot swap AVNU integration***

Finally, when you've selected the type and amount of token to deposit, click on "deposit" and follow the prompts on your wallet (Argent or Braavos) to complete the transaction.

## How to request a withdrawal

If you've been using the sDAI strategy and decided that you want to take your assets back, you can do that. It's important to note though, Nimbora won't be able to process this withdrawal request for you. You'll have to do it yourself, but don't worry, the steps are simple.

First, you need to decide on the amount you want to withdraw. This could be all or a portion of your assets. Once you've made up your mind, locate and click on the 'withdraw' button.

When you click 'withdraw', your Wallet will guide you through the next steps. Just follow the instructions provided there to complete the transaction.

Remember, when you withdraw, you won't receive your assets in the form they were when you deposited them. Instead, you'll get them in the form of DAI, which is the underlying asset used in the sDAI strategy. This means that no matter what type of asset you initially deposited, what you get when you withdraw will always be DAI.

## How to claim a withdrawal

After you have decided to withdraw your assets and made a request, Nimbora takes over the task of processing this request. This involves preparing your assets in order to be transferred back to your Wallet, a process that is handled entirely behind the scenes to ensure a smooth and efficient operation.

In a process that is akin to preparing a parcel for shipment, Nimbora packages your assets and makes them ready for delivery back to you, the owner. During this phase, you don't have to worry about doing anything - Nimbora takes care of all the technical aspects involved.

Once the processing and preparation phase is finished, a claim button will appear on your screen. This button is your signal that the withdrawal process has reached its final stage and that your assets are ready to be claimed.

Think of the claim button as a notification that your parcel (in this case, your assets) has arrived at its destination and is ready for pickup. Once you see the claim button, simply click on it to receive your DAI tokens, completing the withdrawal process.