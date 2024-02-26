---
id: mainnet_contracts
title: Mainnet
sidebar_position: 2
---

## L1 Mainnet contracts

| Contract Name                                                                                      | Class Hash                             |
|----------------------------------------------------------------------------------------------------|----------------------------------------|
| [Pooling Manager](https://etherscan.io/address/0x56B4518E4053eB3C24f68852899F7a6d57530caF)         | Communication between L1-L2 strategies |
| [Saving Dai Strategy](https://etherscan.io/address/0xAFa27423F3bb4c0337946dDcd1802588807571bf)     | sDAI strategy                          |
| [wstETH Strategy](https://etherscan.io/address/0xE5e2134e536fbfD7513094646E27C401bbb03eF6)         | Liquid Staking strategy with wstETH    |



## L2 Mainnet Contracts
You can declare a contract only once on each network. So if you don't do any modification into our current contract implementation you may face an error while declaring. Therefore here you can find the current class hash of each contract on Mainnet.


| Contract Name                                                                                                            | Class Hash                                          |
|--------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| [Pooling Manager](https://starkscan.co/contracts/0x065a953f89a314a427e960114c4b9bb83e0e4195f801f12c25e4a323a76da0a9)     | Register and communication between L1-L2 strategies |
| [Factory](https://starkscan.co/contract/0x04a1436a5b9074d1682b58d368e4c4d5cafccc3f048b8e96c5c815bae7c7d466)              | Deploy new strategies                               |
| [Token Manager sDAI](https://starkscan.co/contract/0x02ab4c62add88f102f1f1f3ff6185e5fc00a3ffccf1b7b85505615f68096feed)   | Strategy accountability                             |
| [Nimbora Token sDAI](https://starkscan.co/contract/0x23309ad3a5d9f7311460d6c65181dca024c4067a1fb68dfd6dae370551f2098)    | L1 strategy yield-bearing sDAI token                |
| [Token Manager ETH](https://starkscan.co/contract/0x0790370ce248020ee58e413a0d6c82e8250248aa346a90abc293c52d8bef9c1b)    | L1 strategy yield-bearing token                     |
| [Nimbora Token ETH](https://starkscan.co/contract/0xe7cf77a75239f3e704ff11160ac5935971115e5c359a679fc9612900e8ce19)      | L1 strategy yield-bearing token                     |