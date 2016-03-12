## Kibbutz
[WIP]

Ethereum-based commune contract, where members can join, contribute funds, and anyone can distribute the group's funds equally to all members at any time.


#Dev Setup

1. Download and install [solc compiler] (https://github.com/ethereum/webthree-umbrella/wiki) for Solidity.
2. Download and install your test RPC of choice. I'm using [testrpc](https://github.com/ConsenSys/eth-testrpc), which also requires Python and pip.
3. Download and install the [Truffle] (https://github.com/ConsenSys/truffle) framework.
4. When you clone down this repo, run testrpc to start up the rpc in the root of the project, and run truffle deploy.
5. Navigate to [yourprojectroot]/build/index.html and open it up. You should see the Kibbutz homepage initialized to a new, lonely commune of one.
