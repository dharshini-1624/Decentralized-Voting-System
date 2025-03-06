# Decentralized Voting System

## Overview
The **Decentralized Voting System** is a blockchain-based voting platform built with **Solidity**, **Truffle**, **Node.js**, and **Web3.js**. It ensures secure, transparent, and tamper-proof elections using Ethereum smart contracts.

## Features
- **Secure Voting**: Uses blockchain for transparency and integrity.
- **Tamper-proof Elections**: Eliminates vote manipulation.
- **Smart Contract Enforcement**: Prevents double voting.
- **RESTful API**: Provides interaction between frontend, backend, and blockchain.

## Prerequisites
Ensure you have the following installed:
- **Node.js** (>= v14.0.0)
- **NPM** (comes with Node.js)
- **Truffle** (for smart contract management)
- **Ganache CLI** (for local blockchain testing)
- **Redis** (for caching, optional but recommended)

## Installation
### 1. Clone the Repository
```bash
git clone https://github.com/dharshini-1624/Decentralized-Voting-System.git
cd Decentralized-Voting-System
```

### 2. Install Dependencies
```bash
npm install
```

## Smart Contract Deployment
### 1. Compile Contracts
```bash
truffle compile
```

### 2. Deploy Contracts (Local Network)
```bash
truffle migrate --network development
```
- Deployed contract addresses and **ABI** are stored in `build/contracts/`.

## Backend Setup
### 1. Create a `.env` File
Add the following details in the `.env` file:
```
INFURA_API_KEY=<your_infura_api_key>
PRIVATE_KEY=<your_wallet_private_key>
NETWORK=<Ethereum_network>
```

### 2. Start the Backend Server
```bash
npm start
```

## Running Tests
### 1. Smart Contract Tests
```bash
truffle test
```

## How to Use
1. Deploy the smart contracts.
2. Run the backend server.
3. Integrate the frontend with the backend API.
4. Users can register, vote, and view election results securely.

## Future Enhancements
- **Gas Optimization**: Reduce transaction costs.
- **Scalability**: Implement layer-2 solutions.
- **User Authentication**: Improve security measures.

## License
This project is open-source and available under the MIT License.
