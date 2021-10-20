require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad hockey clinic orient slice'; 
let testAccounts = [
"0x128a0525e3243140db1f9d2d79d9847d22eb6cdc327970a34b7cbdf71b2ae010",
"0x57741378541c14f3e24639ede5e89df287e8be6fdaf9a7442b3d4fe6a167243e",
"0x536cc2a22b2bdf729b8a3b69d31e46113e7912cb1cfdcac9ff55f2293905d957",
"0xd61e031b491fb1ec1fc749adabcda79b653cc66c0ac38f02056925f028c02a13",
"0x8d8f94122c35cab7052fc65e5a79a961a0119998eae780e72bf12ec7f4c812f4",
"0x77dcd87869b8fdab674b258d2f583bcb509bddbd5aaf1695a94ee47ff0d41ee6",
"0xfdbf8e2fdb10d098c0ff6a95a0eed1442014d707fc1b251cfca610f7b54aebc9",
"0xcb130b7d20ed9cbd73e9e222af9f0349fbe8b14556f5d1df336ab69680db5b20",
"0x78ee9ce888fe862249654699ee470ebc1e80c9cb30f66b4357b3678c0826bc95",
"0x6b19b9f74ffce59a280a61d13a33481a071cfe5c053f629085cd17559960330a"
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


