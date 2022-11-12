import { getProviderOrSigner } from "./accountsConnection";
import {getNetworkTronweb } from "./TronAccountsManagement";

export const WebsiteRentABI =[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_PLATFORM_BENEFICIARY",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "allWebsitesIPFSCid",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "deploymentToWebsite",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "website",
				"type": "string"
			}
		],
		"name": "getCurrentDeployment",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "website",
				"type": "string"
			}
		],
		"name": "getDappRentPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "website",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "deployment",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "rentDays",
				"type": "uint256"
			}
		],
		"name": "rentDapp",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "rentTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "website",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "updateDappRentPrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "Percentage",
				"type": "uint256"
			}
		],
		"name": "updateRentFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "cid",
				"type": "string"
			}
		],
		"name": "updateWebsitesIPFSLink",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "website",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "uploadWebsite",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "websiteExists",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "websiteOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "websiteToDeployment",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
export const WebsiteRentBytecode = {
	"object": "608060405260056008553480156200001657600080fd5b50604051620018a2380380620018a283398181016040528101906200003c91906200009b565b80600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000120565b600081519050620000958162000106565b92915050565b600060208284031215620000b457620000b362000101565b5b6000620000c48482850162000084565b91505092915050565b6000620000da82620000e1565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b6200011181620000cd565b81146200011d57600080fd5b50565b61177280620001306000396000f3fe6080604052600436106100c25760003560e01c8063b290e8491161007f578063d642c82611610059578063d642c8261461029e578063daa89953146102db578063dc007f2814610304578063e6f28a4114610341576100c2565b8063b290e849146101fb578063be756b0814610224578063c0ede36014610261576100c2565b8063153b483f146100c75780631f473b471461010457806322bfaa011461012f57806328dc3e7e1461016c5780632ca64e4d14610195578063abc74174146101be575b600080fd5b3480156100d357600080fd5b506100ee60048036038101906100e99190610f3b565b61035d565b6040516100fb9190611225565b60405180910390f35b34801561011057600080fd5b50610119610456565b604051610126919061125b565b60405180910390f35b34801561013b57600080fd5b5061015660048036038101906101519190610f3b565b6104e4565b6040516101639190611225565b60405180910390f35b34801561017857600080fd5b50610193600480360381019061018e91906110be565b61052d565b005b3480156101a157600080fd5b506101bc60048036038101906101b7919061104f565b610591565b005b3480156101ca57600080fd5b506101e560048036038101906101e09190610f3b565b61071c565b6040516101f29190611225565b60405180910390f35b34801561020757600080fd5b50610222600480360381019061021d9190610f3b565b610765565b005b34801561023057600080fd5b5061024b60048036038101906102469190610f0e565b61077f565b604051610258919061125b565b60405180910390f35b34801561026d57600080fd5b5061028860048036038101906102839190610f3b565b61081f565b60405161029591906112fd565b60405180910390f35b3480156102aa57600080fd5b506102c560048036038101906102c09190610f3b565b61084d565b6040516102d291906112fd565b60405180910390f35b3480156102e757600080fd5b5061030260048036038101906102fd9190610ff3565b610929565b005b34801561031057600080fd5b5061032b60048036038101906103269190610f3b565b610a35565b6040516103389190611240565b60405180910390f35b61035b60048036038101906103569190610f84565b610a6b565b005b600042600383604051610370919061120e565b90815260200160405180910390205411156103cb57600082604051610395919061120e565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610451565b60006003836040516103dd919061120e565b90815260200160405180910390208190555060008083604051610400919061120e565b908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600090505b919050565b6006805461046390611500565b80601f016020809104026020016040519081016040528092919081815260200182805461048f90611500565b80156104dc5780601f106104b1576101008083540402835291602001916104dc565b820191906000526020600020905b8154815290600101906020018083116104bf57829003601f168201915b505050505081565b6005818051602081018201805184825260208301602085012081835280955050505050506000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461058757600080fd5b8060088190555050565b600015156004846040516105a5919061120e565b908152602001604051809103902060009054906101000a900460ff16151514610603576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105fa906112dd565b60405180910390fd5b6001600484604051610615919061120e565b908152602001604051809103902060006101000a81548160ff0219169083151502179055508060058460405161064b919061120e565b908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600080846040516106a8919061120e565b908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600284604051610705919061120e565b908152602001604051809103902081905550505050565b6000818051602081018201805184825260208301602085012081835280955050505050506000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b806006908051906020019061077b929190610dd1565b5050565b6001602052806000526040600020600091509050805461079e90611500565b80601f01602080910402602001604051908101604052809291908181526020018280546107ca90611500565b80156108175780601f106107ec57610100808354040283529160200191610817565b820191906000526020600020905b8154815290600101906020018083116107fa57829003601f168201915b505050505081565b6003818051602081018201805184825260208301602085012081835280955050505050506000915090505481565b600081600481604051610860919061120e565b908152602001604051809103902060009054906101000a900460ff166108bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b29061127d565b60405180910390fd5b6000606460056002866040516108d1919061120e565b9081526020016040518091039020546108ea919061141c565b6108f491906113eb565b905080600285604051610907919061120e565b9081526020016040518091039020546109209190611395565b92505050919050565b8160048160405161093a919061120e565b908152602001604051809103902060009054906101000a900460ff16610995576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098c9061127d565b60405180910390fd5b826005816040516109a6919061120e565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a0c57600080fd5b82600285604051610a1d919061120e565b90815260200160405180910390208190555050505050565b6004818051602081018201805184825260208301602085012081835280955050505050506000915054906101000a900460ff1681565b82600481604051610a7c919061120e565b908152602001604051809103902060009054906101000a900460ff16610ad7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ace9061127d565b60405180910390fd5b42600385604051610ae8919061120e565b90815260200160405180910390205410610b37576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2e906112bd565b60405180910390fd5b600284604051610b47919061120e565b908152602001604051809103902054341015610b98576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8f9061129d565b60405180910390fd5b81603c610ba5919061141c565b42610bb09190611395565b600385604051610bc0919061120e565b90815260200160405180910390208190555082600085604051610be3919061120e565b908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209080519060200190610c82929190610dd1565b50600060646005600287604051610c99919061120e565b908152602001604051809103902054610cb2919061141c565b610cbc91906113eb565b9050600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610d26573d6000803e3d6000fd5b50600585604051610d37919061120e565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600287604051610d8f919061120e565b9081526020016040518091039020549081150290604051600060405180830381858888f19350505050158015610dc9573d6000803e3d6000fd5b505050505050565b828054610ddd90611500565b90600052602060002090601f016020900481019282610dff5760008555610e46565b82601f10610e1857805160ff1916838001178555610e46565b82800160010185558215610e46579182015b82811115610e45578251825591602001919060010190610e2a565b5b509050610e539190610e57565b5090565b5b80821115610e70576000816000905550600101610e58565b5090565b6000610e87610e828461133d565b611318565b905082815260208101848484011115610ea357610ea2611624565b5b610eae8482856114be565b509392505050565b600081359050610ec58161170e565b92915050565b600082601f830112610ee057610edf61161f565b5b8135610ef0848260208601610e74565b91505092915050565b600081359050610f0881611725565b92915050565b600060208284031215610f2457610f2361162e565b5b6000610f3284828501610eb6565b91505092915050565b600060208284031215610f5157610f5061162e565b5b600082013567ffffffffffffffff811115610f6f57610f6e611629565b5b610f7b84828501610ecb565b91505092915050565b600080600060608486031215610f9d57610f9c61162e565b5b600084013567ffffffffffffffff811115610fbb57610fba611629565b5b610fc786828701610ecb565b9350506020610fd886828701610eb6565b9250506040610fe986828701610ef9565b9150509250925092565b6000806040838503121561100a5761100961162e565b5b600083013567ffffffffffffffff81111561102857611027611629565b5b61103485828601610ecb565b925050602061104585828601610ef9565b9150509250929050565b6000806000606084860312156110685761106761162e565b5b600084013567ffffffffffffffff81111561108657611085611629565b5b61109286828701610ecb565b93505060206110a386828701610ef9565b92505060406110b486828701610eb6565b9150509250925092565b6000602082840312156110d4576110d361162e565b5b60006110e284828501610ef9565b91505092915050565b6110f481611476565b82525050565b61110381611488565b82525050565b60006111148261136e565b61111e8185611379565b935061112e8185602086016114cd565b61113781611633565b840191505092915050565b600061114d8261136e565b611157818561138a565b93506111678185602086016114cd565b80840191505092915050565b6000611180602683611379565b915061118b82611644565b604082019050919050565b60006111a3601783611379565b91506111ae82611693565b602082019050919050565b60006111c6601983611379565b91506111d1826116bc565b602082019050919050565b60006111e9601683611379565b91506111f4826116e5565b602082019050919050565b611208816114b4565b82525050565b600061121a8284611142565b915081905092915050565b600060208201905061123a60008301846110eb565b92915050565b600060208201905061125560008301846110fa565b92915050565b600060208201905081810360008301526112758184611109565b905092915050565b6000602082019050818103600083015261129681611173565b9050919050565b600060208201905081810360008301526112b681611196565b9050919050565b600060208201905081810360008301526112d6816111b9565b9050919050565b600060208201905081810360008301526112f6816111dc565b9050919050565b600060208201905061131260008301846111ff565b92915050565b6000611322611333565b905061132e8282611532565b919050565b6000604051905090565b600067ffffffffffffffff821115611358576113576115f0565b5b61136182611633565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b60006113a0826114b4565b91506113ab836114b4565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156113e0576113df611563565b5b828201905092915050565b60006113f6826114b4565b9150611401836114b4565b92508261141157611410611592565b5b828204905092915050565b6000611427826114b4565b9150611432836114b4565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561146b5761146a611563565b5b828202905092915050565b600061148182611494565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156114eb5780820151818401526020810190506114d0565b838111156114fa576000848401525b50505050565b6000600282049050600182168061151857607f821691505b6020821081141561152c5761152b6115c1565b5b50919050565b61153b82611633565b810181811067ffffffffffffffff8211171561155a576115596115f0565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f546865205765627369746520646f6573206e6f74206578697374206f6e20526560008201527f6e74576562330000000000000000000000000000000000000000000000000000602082015250565b7f496e73756666696369656e742046756e64732053656e74000000000000000000600082015250565b7f5765627369746520697320616c72656164792072656e74656400000000000000600082015250565b7f7765627369746520616c72656164792065786973747300000000000000000000600082015250565b61171781611476565b811461172257600080fd5b50565b61172e816114b4565b811461173957600080fd5b5056fea264697066735822122086af4cf6c32b0a017b7d3048d170a61dc2185037189171bb4f11d4667f5f20e364736f6c63430008070033",
   
}
// Ethereum 
// Goerli Network Deployed Address
export const WebsiteRentAddress = "0x5ff709DF67141512784BdD91F747F531149DE284"; 
// Tron 
// Nile
export const WebsiteRentNileAddress="TH8Ta1VMokE1GRtYHCv2E14QfHfipbcFwh";
// Shasta
export const WebsiteRentShastaAddress=null;
//

// Polygon


const ethers = require("ethers");
let Network = "goerli";
const provider = ethers.providers.getDefaultProvider(
  "wss://autumn-necessary-frost.ethereum-goerli.quiknode.pro/07319f15c47c89543c7bf75aa284cc5347ace6e1/"
);

// Use your wallet's private key to deploy the contract

// const platformPrivateKey =
//   "d09eb95eabc1d6e02595e40aa8899a58e78d616e8618752a492a72df1f0f49d1"; // goerli test
// const PlatformWallet = new ethers.Wallet(platformPrivateKey, provider);
// export const WebsiteRentContract = new ethers.Contract(
//   WebsiteRentAddress,
//   WebsiteRentABI,
//   PlatformWallet
// );
export const getCustomNetworkWebsiteRentContract=async (network,web3modalRef,contractSetter)=>{
try{
	// console.log("connection for ",{network,web3modalRef})
	let signer = await getProviderOrSigner(network,web3modalRef,true);
const websiteRentContract = new ethers.Contract(
	WebsiteRentAddress,
	WebsiteRentABI,
	signer
  ); 
  if(contractSetter){
	contractSetter(websiteRentContract);
  }
return websiteRentContract;

}
catch(e){
	alert("Make sure your wallet is connected !");
	return null;
}
}

export const getTronWebsiteRentContract=async (network)=>{
	let contractAddress=null;
	if(network=="nile"){	
		contractAddress=WebsiteRentNileAddress;
	}
	// let tronWeb =await getNetworkTronweb(network);
	// console.log("tronlink is ",  window.tronLink)
	let tronWeb=await window.tronLink.tronWeb;

	let contract = await tronWeb.contract().at(contractAddress);
	return contract;
	
}


	