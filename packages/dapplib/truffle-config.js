require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture strong regret ranch purity harvest immense army gauge'; 
let testAccounts = [
"0x967dc5d860acc968589a4ee2016edab97b27f06d51bc6875f2729ecbcc18ad81",
"0xac89493aa4f17939ff22b1177620f26a903f3df0cd5ea5316816d47334f7d5a8",
"0x5210145a055f8080b9bfb1dd9be9a6b6b0294391cdeb1d9ce94bce2f49972ec1",
"0x7fa72d81998beaf61ff283d57c1beb3a7dfa4dd25f6f51a53cd3f823c62cc535",
"0xca18ad3c53cecb092e212e5699e276d1548d792d4ad013d163de440760e4f8e6",
"0x05b7a8a7eb89eae7ab5ebc4c41ff19c8df17e49ff3b3a496e63b7a882424e3e7",
"0xd527f16563e07b341a5d8ce7f2cebb358826701afe6676fbda9e448049f545cf",
"0x43a085fefac416c8116835c80c95a7826abcebbe0e627cd5ab7b923f4bb3bdb5",
"0xe8659989125fe7d1cb494e6634da2f1b50271d791da58cde66c890d106784152",
"0xe16cc6d07e5943555dc0de6f69464638ddf98e96bc30dc273bc8b5b14fbdb2a2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


