# arbitrum extcodesize issue

To reproduce, create a .env and add a mnemonic with some testnet arbitrum in the default account:

```sh
MNEMONIC_TESTNET="mnemoic words here"
```

And then run

```
yarn
yarn hardhat run --network arbitrumTestnet ./scripts/1_contractA.ts
```

<hr />

### `extcodesize`

According to the [Ethereum yellow paper](https://ethereum.github.io/yellowpaper/paper.pdf), the `EXTCODESIZE` should return `0` during contract initialization:

> During initialization code execution,EXTCODESIZEon the address should return zero, which is the length of the code of the account whileCODESIZEshould return the length of the initialization code (as defined in H.2).

It seems this might not be the case for Arbitrum.