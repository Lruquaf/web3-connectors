const {ethers} = require("ethers")

async function connect() {
    if (typeof ethereum !== "undefined") {
        console.log("I see a metamask!")
        await ethereum.request({method: "eth_requestAccounts"})
    }
}
async function execute() {
    // contract address
    // contract ABI
    // function
    // node connection
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    const contractAbi = [
        {
            stateMutability: "payable",
            type: "fallback",
        },
        {
            inputs: [
                {
                    internalType: "string",
                    name: "_name",
                    type: "string",
                },
                {
                    internalType: "uint256",
                    name: "_favoriteNumber",
                    type: "uint256",
                },
            ],
            name: "addPerson",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string",
                },
            ],
            name: "nameToFavoriteNumber",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            name: "people",
            outputs: [
                {
                    internalType: "uint256",
                    name: "favoriteNumber",
                    type: "uint256",
                },
                {
                    internalType: "string",
                    name: "name",
                    type: "string",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "retrieve",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "_favoriteNumber",
                    type: "uint256",
                },
            ],
            name: "store",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            stateMutability: "payable",
            type: "receive",
        },
    ]
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(contractAddress, contractAbi, signer)
    try {
        await contract.store("42")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {connect, execute}
