import {
  getCustomNetworkWebsiteRentContract,
  getTronWebsiteRentContract,
  WebsiteRentContract,
} from "./WebsiteRent";
import { getProviderOrSigner } from "./accountsConnection";
import { getNileTronWeb } from "./TronAccountsManagement";
export const whitelistABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_maxWhitelistedAddresses",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "_baseURI",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "WhitelistByPrivilege",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "addAddressToWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "endTime",
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
    inputs: [],
    name: "getMaxWhitelistedAddresses",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "isWhitelisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxWhitelistedAddresses",
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
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numAddressesWhitelisted",
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
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
    ],
    name: "setWhitelistEndTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
    ],
    name: "setWhitelistStartTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startTime",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
export const whitelistByteCode = {
  object:
    "60806040523480156200001157600080fd5b50604051620012e8380380620012e8833981810160405281019062000037919062000241565b84600281905550866000908051906020019062000056929190620000e5565b5085600190805190602001906200006f929190620000e5565b5083600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260089080519060200190620000c9929190620000e5565b5081600681905550806007819055505050505050505062000547565b828054620000f39062000424565b90600052602060002090601f01602090048101928262000117576000855562000163565b82601f106200013257805160ff191683800117855562000163565b8280016001018555821562000163579182015b828111156200016257825182559160200191906001019062000145565b5b50905062000172919062000176565b5090565b5b808211156200019157600081600090555060010162000177565b5090565b6000620001ac620001a6846200037a565b62000351565b905082815260208101848484011115620001cb57620001ca620004f3565b5b620001d8848285620003ee565b509392505050565b600081519050620001f18162000513565b92915050565b600082601f8301126200020f576200020e620004ee565b5b81516200022184826020860162000195565b91505092915050565b6000815190506200023b816200052d565b92915050565b600080600080600080600060e0888a031215620002635762000262620004fd565b5b600088015167ffffffffffffffff811115620002845762000283620004f8565b5b620002928a828b01620001f7565b975050602088015167ffffffffffffffff811115620002b657620002b5620004f8565b5b620002c48a828b01620001f7565b9650506040620002d78a828b016200022a565b9550506060620002ea8a828b01620001e0565b945050608088015167ffffffffffffffff8111156200030e576200030d620004f8565b5b6200031c8a828b01620001f7565b93505060a06200032f8a828b016200022a565b92505060c0620003428a828b016200022a565b91505092959891949750929550565b60006200035d62000370565b90506200036b82826200045a565b919050565b6000604051905090565b600067ffffffffffffffff821115620003985762000397620004bf565b5b620003a38262000502565b9050602081019050919050565b6000620003bd82620003c4565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156200040e578082015181840152602081019050620003f1565b838111156200041e576000848401525b50505050565b600060028204905060018216806200043d57607f821691505b6020821081141562000454576200045362000490565b5b50919050565b620004658262000502565b810181811067ffffffffffffffff82111715620004875762000486620004bf565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b6200051e81620003b0565b81146200052a57600080fd5b50565b6200053881620003e4565b81146200054457600080fd5b50565b610d9180620005576000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636c0360eb1161008c5780638e7314d9116100665780638e7314d91461022957806395d89b4114610233578063b9d6ed3014610251578063ef87fa081461026d576100ea565b80636c0360eb146101cf57806378e97925146101ed5780638da5cb5b1461020b576100ea565b80633197cbb6116100c85780633197cbb61461014557806331a72188146101635780633af32abf146101815780634011d7cd146101b1576100ea565b806306fdde03146100ef57806316c1f0bb1461010d5780631c0ce3d314610129575b600080fd5b6100f761028b565b60405161010491906109ed565b60405180910390f35b6101276004803603810190610122919061086b565b610319565b005b610143600480360381019061013e9190610898565b6103e8565b005b61014d61044c565b60405161015a9190610a8f565b60405180910390f35b61016b610452565b6040516101789190610a8f565b60405180910390f35b61019b6004803603810190610196919061086b565b610458565b6040516101a891906109d2565b60405180910390f35b6101b96104b5565b6040516101c69190610a8f565b60405180910390f35b6101d76104bb565b6040516101e491906109ed565b60405180910390f35b6101f5610549565b6040516102029190610a8f565b60405180910390f35b61021361054f565b60405161022091906109b7565b60405180910390f35b610231610575565b005b61023b610745565b60405161024891906109ed565b60405180910390f35b61026b60048036038101906102669190610898565b6107d3565b005b610275610837565b6040516102829190610a8f565b60405180910390f35b6000805461029890610b97565b80601f01602080910402602001604051908101604052809291908181526020018280546102c490610b97565b80156103115780601f106102e657610100808354040283529160200191610311565b820191906000526020600020905b8154815290600101906020018083116102f457829003601f168201915b505050505081565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461037357600080fd5b6001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600460008282546103de9190610ac6565b9250508190555050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461044257600080fd5b8060068190555050565b60075481565b60025481565b600060011515600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515149050919050565b60045481565b600880546104c890610b97565b80601f01602080910402602001604051908101604052809291908181526020018280546104f490610b97565b80156105415780601f1061051657610100808354040283529160200191610541565b820191906000526020600020905b81548152906001019060200180831161052457829003601f168201915b505050505081565b60065481565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6006544210156105ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b190610a4f565b60405180910390fd5b60075442106105fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f590610a2f565b60405180910390fd5b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561068b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068290610a6f565b60405180910390fd5b600254600454106106d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c890610a0f565b60405180910390fd5b6001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060016004600082825461073c9190610ac6565b92505081905550565b6001805461075290610b97565b80601f016020809104026020016040519081016040528092919081815260200182805461077e90610b97565b80156107cb5780601f106107a0576101008083540402835291602001916107cb565b820191906000526020600020905b8154815290600101906020018083116107ae57829003601f168201915b505050505081565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461082d57600080fd5b8060078190555050565b6000600254905090565b60008135905061085081610d2d565b92915050565b60008135905061086581610d44565b92915050565b60006020828403121561088157610880610c27565b5b600061088f84828501610841565b91505092915050565b6000602082840312156108ae576108ad610c27565b5b60006108bc84828501610856565b91505092915050565b6108ce81610b1c565b82525050565b6108dd81610b2e565b82525050565b60006108ee82610aaa565b6108f88185610ab5565b9350610908818560208601610b64565b61091181610c2c565b840191505092915050565b6000610929602b83610ab5565b915061093482610c3d565b604082019050919050565b600061094c601683610ab5565b915061095782610c8c565b602082019050919050565b600061096f602083610ab5565b915061097a82610cb5565b602082019050919050565b6000610992602383610ab5565b915061099d82610cde565b604082019050919050565b6109b181610b5a565b82525050565b60006020820190506109cc60008301846108c5565b92915050565b60006020820190506109e760008301846108d4565b92915050565b60006020820190508181036000830152610a0781846108e3565b905092915050565b60006020820190508181036000830152610a288161091c565b9050919050565b60006020820190508181036000830152610a488161093f565b9050919050565b60006020820190508181036000830152610a6881610962565b9050919050565b60006020820190508181036000830152610a8881610985565b9050919050565b6000602082019050610aa460008301846109a8565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610ad182610b5a565b9150610adc83610b5a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610b1157610b10610bc9565b5b828201905092915050565b6000610b2782610b3a565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015610b82578082015181840152602081019050610b67565b83811115610b91576000848401525b50505050565b60006002820490506001821680610baf57607f821691505b60208210811415610bc357610bc2610bf8565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600080fd5b6000601f19601f8301169050919050565b7f4d6f7265206164647265737365732063616e742062652061646465642c206c6960008201527f6d69742072656163686564000000000000000000000000000000000000000000602082015250565b7f57686974656c697374696e672068617320656e64656400000000000000000000600082015250565b7f57686974656c697374696e6720686173206e6f74207374617274656420796574600082015250565b7f53656e6465722068617320616c7265616479206265656e2077686974656c697360008201527f7465640000000000000000000000000000000000000000000000000000000000602082015250565b610d3681610b1c565b8114610d4157600080fd5b50565b610d4d81610b5a565b8114610d5857600080fd5b5056fea2646970667358221220e52005126aa49a859ab3742026b0b273fbcbaf9b850025e4841c982235f76d8664736f6c63430008070033",
};

export const whitelistTrackerABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "whitelistAddress",
        type: "address",
      },
    ],
    name: "addUserWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalWhitelists",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userNumberOfWhitelists",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userToWhitelist",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
export const whitelistTrackerByteCode = {
  object:
    "608060405234801561001057600080fd5b506040516106563803806106568339818101604052810190610032919061008e565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610109565b600081519050610088816100f2565b92915050565b6000602082840312156100a4576100a36100ed565b5b60006100b284828501610079565b91505092915050565b60006100c6826100cd565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b6100fb816100bb565b811461010657600080fd5b50565b61053e806101186000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632187ed66146100515780633ed9602e146100815780639ef2dca7146100b1578063a1b89b70146100cd575b600080fd5b61006b600480360381019061006691906102ca565b6100eb565b60405161007891906103b0565b60405180910390f35b61009b60048036038101906100969190610337565b610103565b6040516100a89190610395565b60405180910390f35b6100cb60048036038101906100c691906102f7565b610151565b005b6100d561029a565b6040516100e291906103b0565b60405180910390f35b60016020528060005260406000206000915090505481565b6000602052816000526040600020818154811061011f57600080fd5b906000526020600020016000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60018060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461019c91906103cb565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600360008154809291906102919061045d565b91905055505050565b60035481565b6000813590506102af816104da565b92915050565b6000813590506102c4816104f1565b92915050565b6000602082840312156102e0576102df6104d5565b5b60006102ee848285016102a0565b91505092915050565b6000806040838503121561030e5761030d6104d5565b5b600061031c858286016102a0565b925050602061032d858286016102a0565b9150509250929050565b6000806040838503121561034e5761034d6104d5565b5b600061035c858286016102a0565b925050602061036d858286016102b5565b9150509250929050565b61038081610421565b82525050565b61038f81610453565b82525050565b60006020820190506103aa6000830184610377565b92915050565b60006020820190506103c56000830184610386565b92915050565b60006103d682610453565b91506103e183610453565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610416576104156104a6565b5b828201905092915050565b600061042c82610433565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061046882610453565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561049b5761049a6104a6565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600080fd5b6104e381610421565b81146104ee57600080fd5b50565b6104fa81610453565b811461050557600080fd5b5056fea264697066735822122072e74b0a2d1ecf78ddfda9de5194ec98b3bb821b038db5692110b28b5023421064736f6c63430008070033",
};
// Ethereum
// Goerli Network Deployed Address
export const whitelistTrackerAddress =
  "0x023C4FA23c25d3Ec5227E64593E65297F8eF8141";

// Tron
// Nile
export const whitelistTrackerTronNileAddress =
  "TEy4cELfgsoEgiLvsMqwannhXvLz8pYKB9";

// Shasta
export const whitelistTrackerTronShastaAddress = null;
//

// Polygon

const ethers = require("ethers");
// const privateKey =
//   "d4cf4655e36805f04fe2c1238ca872367021378c93bd12e9d8dcba3a55b44c0b";

// export const wallet = new ethers.Wallet(privateKey, provider);

// export const WhitelistTrackerContract = new ethers.Contract(
//   whitelistTrackerAddress,
//   whitelistTrackerABI,
//   wallet
// );

export const fetchWhitelistAddresses = async (
  contract,
  owner,
  setter,
  Blockchain
) => {
  console.log("Tracker  is ", contract);
  let TrackerContract = contract;
  let numWhitelists = 0;
  if (Blockchain == "tron") {
    numWhitelists = await TrackerContract.userNumberOfWhitelists(owner).call();
  } else {
    numWhitelists = await TrackerContract.userNumberOfWhitelists(owner);
  }

  let allWhitelists = [];
  console.log("Owner has ", numWhitelists, " Whitelists");
  for (let index = 0; index < numWhitelists; index++) {
    let whitelistAddress = null;
    if (Blockchain == "tron") {
      whitelistAddress = await TrackerContract.userToWhitelist(
        owner,
        index
      ).call();
    } else if (
      !Blockchain ||
      Blockchain == "ethereum" ||
      Blockchain == "polygon"
    ) {
      whitelistAddress = await TrackerContract.userToWhitelist(owner, index);
    }
    allWhitelists.push(whitelistAddress);
  }

  if (setter != undefined) {
    setter(allWhitelists);
  }
  return allWhitelists;
};

async function getBlockchainSpecificWebsiteRentContract(
  Blockchain,
  NetworkChain,
  web3modalRef
) {
  let websiteRentContract = null;
  if (Blockchain == "tron") {
    websiteRentContract = await getTronWebsiteRentContract(NetworkChain);
  } else if (!Blockchain || Blockchain == "ethereum") {
    websiteRentContract = await getCustomNetworkWebsiteRentContract(
      NetworkChain,
      web3modalRef
    );
  } else if (Blockchain == "polygon") {
    //to be implemented yet
  }
  return websiteRentContract;
}
async function getBlockchainSpecificWhitelistTrackerContract(
  Blockchain,
  NetworkChain,
  web3modalRef
) {
  let WhitelistTracker = null;
  if (Blockchain == "tron") {
    WhitelistTracker = await getTronWhitelistTrackerContract(NetworkChain);
    console.log("want to return whitelistTracker ", WhitelistTracker);
    return WhitelistTracker;
  } else if (!Blockchain || Blockchain == "ethereum") {
    WhitelistTracker = await getCustomNetworkWhitelistTrackerContract(
      NetworkChain,
      web3modalRef
    );
    return WhitelistTracker;
  } else if (Blockchain == "polygon") {
    //to be implemented yet
    return WhitelistTracker;
  } else {
    return null;
  }
}
async function getBlockchainSpecificWhitelistFactoryContract(
  Blockchain,
  NetworkChain,
  web3modalRef,
  contractAddress
) {
  let contract = null;
  if (Blockchain == "tron") {
    contract = await getTronWhitelistFactory(NetworkChain, contractAddress);
    console.log("want to return whitelistTracker ", contract);
    return contract;
  } else if (!Blockchain || Blockchain == "ethereum") {
    contract = await getCustomNetworkWhitelistContract(
      NetworkChain,
      web3modalRef,
      contractAddress
    );
    return contract;
  } else if (Blockchain == "polygon") {
    //to be implemented yet
    return contract;
  } else {
    return null;
  }
}

export const fetchWhitelists = async (
  NetworkChain,
  web3modalRef,
  owner,
  arraySetter,
  Blockchain
) => {
  //   console.log("obtaining whitelists for ", owner);

  // console.log("fetching whitelists");
  let websiteRentContract = await getBlockchainSpecificWebsiteRentContract(
    Blockchain,
    NetworkChain,
    web3modalRef
  );
  let whitelistTracker = await getBlockchainSpecificWhitelistTrackerContract(
    Blockchain,
    NetworkChain,
    web3modalRef
  );
  // console.log(websiteRentContract,"\n\n");
  // console.log(whitelistTracker,"\n\n");

  let whitelists = await fetchWhitelistAddresses(
    whitelistTracker,
    owner,
    arraySetter,
    Blockchain
  );
  console.log("all whitelists are ", whitelists);
  let allWhitelists = [];
  // console.log("iterating over");
  whitelists.map(async (_whitelist, index) => {
    let whitelistContract = await getBlockchainSpecificWhitelistFactoryContract(
      Blockchain,
      NetworkChain,
      web3modalRef,
      _whitelist
    );

    let hostedWebsite;
    let rentTime;
    if (Blockchain == "tron") {
      rentTime = await websiteRentContract.rentTime(_whitelist).call();
      hostedWebsite = await websiteRentContract
        .deploymentToWebsite(_whitelist)
        .call();
    } else if (!Blockchain || Blockchain == "ethereum") {
      rentTime = await websiteRentContract.rentTime(hostedWebsite);
      hostedWebsite = await websiteRentContract.deploymentToWebsite(_whitelist);
    } else if (Blockchain == "polygon") {
      // polygon pull
    } else {
      // no support
    }

    hostedWebsite =
      rentTime * 1000 > new Date().getTime() ? hostedWebsite : null;

    let name, symbol, baseURI, whitelistedCount, startTime, endTime;
    if (Blockchain == "tron") {
      name = await whitelistContract.name().call();
      symbol = await whitelistContract.symbol().call();
      baseURI = await whitelistContract.baseURI().call();
      whitelistedCount = await whitelistContract
        .numAddressesWhitelisted()
        .call();
      startTime = await whitelistContract.startTime().call();
      endTime = await whitelistContract.endTime().call();
    } else if (!Blockchain || Blockchain == "ethereum") {
      name = await whitelistContract.name();
      symbol = await whitelistContract.symbol();
      baseURI = await whitelistContract.baseURI();
      whitelistedCount = await whitelistContract.numAddressesWhitelisted();
      startTime = await whitelistContract.startTime();
      endTime = await whitelistContract.endTime();
    }

    let whitelistInstance = {
      id: index + 1,
      name,
      symbol,
      baseURI,
      address: _whitelist,
      website: hostedWebsite === "" ? null : hostedWebsite,
      users: whitelistedCount,
      startTime,
      endTime,
      owner,
      rentTime: rentTime * 1000,
    };
    console.log("whitelist instance", whitelistInstance);
    allWhitelists.push(whitelistInstance);
    if (index + 1 == whitelists.length) {
      if (arraySetter != undefined) {
        arraySetter(allWhitelists);
      }
    }
  });
  // console.log("returning");
  return allWhitelists;
};

export const getCustomNetworkWhitelistContract = async (
  network,
  web3modalRef,
  contractAddress
) => {
  let signer = await getProviderOrSigner(network, web3modalRef, true);
  let whitelistfactory = new ethers.ContractFactory(
    whitelistABI,
    whitelistByteCode.object,
    signer
  );
  if (contractAddress) {
    whitelistfactory = new ethers.Contract(
      contractAddress,
      whitelistABI,
      signer
    );
  }
  return whitelistfactory;
};

export const getCustomNetworkWhitelistTrackerContract = async (
  network,
  web3modalRef
) => {
  let signer = await getProviderOrSigner(network, web3modalRef, true);
  const whitelistTrackerContract = new ethers.Contract(
    whitelistTrackerAddress,
    whitelistTrackerABI,
    signer
  );
  return whitelistTrackerContract;
};

export const getTronWhitelistTrackerContract = async (network) => {
  let contractAddress = null;
  if (network == "nile") {
    contractAddress = whitelistTrackerTronNileAddress;
  }
  let tronWeb = getNileTronWeb();
  let contract = await tronWeb.contract().at(contractAddress);
  return contract;
};
export const getTronWhitelistFactory = async (network, contractAddress) => {
  let tronWeb = getNileTronWeb();
  let contract = await tronWeb.contract().at(contractAddress);
  return contract;
};
