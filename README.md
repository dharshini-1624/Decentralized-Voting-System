# Decentralized Voting System
A decentralized online voting application using the Ethereum Blockchain

## 1. Prepare your environment
Get the latest code from `develop` branch and proceed with the following instructions to run the application. Ensure that the required tools are installed in your environment.
- NPM: https://nodejs.org
- Truffle version 5.4.29: https://github.com/trufflesuite/truffle
```
$ npm install -g truffle@5.4.29
```
- Ganache: http://truffleframework.com/ganache/
- Metamask: https://metamask.io/

## Step 2. Install dependencies
```
$ cd DecentralizedVotingSystem
$ npm install
```
## Step 3. Start Ganache
Open the Ganache GUI client that you downloaded and installed. This will start your local blockchain instance.

## Step 4. Compile & Deploy Election Smart Contract
```
$ truffle migrate --reset
```
You must migrate the election smart contract each time your restart ganache.

## Step 5. Configure Metamask
- Unlock Metamask
- Connect metamask to your local Etherum blockchain provided by Ganache.
- Import an account provided by ganache.

## Step 6. Run the Front End Application
```
$ npm run dev
```
You are ready!