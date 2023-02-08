/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  EmployeeController,
  EmployeeControllerInterface,
} from "../../../controller/employee/EmployeeController";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "listEmployeeAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "listEmployeeSkillAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "listEmployeeApplyAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "listEmployeeAppointmenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "employeeId",
        type: "uint256",
      },
    ],
    name: "_checkApplyIdBelongsToEmployeeId",
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
    inputs: [
      {
        internalType: "uint256",
        name: "employeeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "postId",
        type: "uint256",
      },
    ],
    name: "_checkExistApply",
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
    name: "_checkExistEmployeeAccount",
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
    inputs: [
      {
        internalType: "uint256",
        name: "employeeId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
    ],
    name: "_checkExistSkill",
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
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "postId",
        type: "uint256",
      },
    ],
    name: "_checkIdBelongsToPostId",
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
    inputs: [
      {
        internalType: "uint256",
        name: "category",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "phone",
        type: "string",
      },
      {
        internalType: "string",
        name: "professional",
        type: "string",
      },
      {
        internalType: "string",
        name: "email",
        type: "string",
      },
      {
        internalType: "string",
        name: "github",
        type: "string",
      },
      {
        internalType: "string",
        name: "linkedin",
        type: "string",
      },
      {
        internalType: "string",
        name: "sourceImage",
        type: "string",
      },
    ],
    name: "addEmployee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
    ],
    name: "addSkill",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "employeeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "businessId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "postId",
        type: "uint256",
      },
    ],
    name: "applyPost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "destroy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "skillId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
    ],
    name: "editSkill",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllProfile",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "category",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "phone",
            type: "string",
          },
          {
            internalType: "string",
            name: "professional",
            type: "string",
          },
          {
            internalType: "string",
            name: "email",
            type: "string",
          },
          {
            internalType: "string",
            name: "github",
            type: "string",
          },
          {
            internalType: "string",
            name: "linkedin",
            type: "string",
          },
          {
            internalType: "string",
            name: "sourceImage",
            type: "string",
          },
        ],
        internalType: "struct Profile[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllSkill",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "employeeId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "level",
            type: "uint256",
          },
        ],
        internalType: "struct EmployeeSkill[]",
        name: "",
        type: "tuple[]",
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
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002db938038062002db98339818101604052810190620000379190620001f7565b80828486336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050505062000269565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001bf8262000192565b9050919050565b620001d181620001b2565b8114620001dd57600080fd5b50565b600081519050620001f181620001c6565b92915050565b600080600080608085870312156200021457620002136200018d565b5b60006200022487828801620001e0565b94505060206200023787828801620001e0565b93505060406200024a87828801620001e0565b92505060606200025d87828801620001e0565b91505092959194509250565b612b4080620002796000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806396b934241161008c578063c1fa897d11610066578063c1fa897d14610237578063e583267d14610267578063ec40a59b14610283578063f2fde38b146102a1576100ea565b806396b93424146101cd578063b08026ea146101e9578063bad5002914610207576100ea565b806364f3fe9d116100c857806364f3fe9d146101595780637be695691461018957806383197ef0146101a55780638da5cb5b146101af576100ea565b80631fe1d463146100ef5780633901d42d1461010b57806349e488a014610129575b600080fd5b6101096004803603810190610104919061137a565b6102bd565b005b61011361043a565b604051610120919061167e565b60405180910390f35b610143600480360381019061013e91906116a0565b6104bc565b60405161015091906116fb565b60405180910390f35b610173600480360381019061016e91906116a0565b6105ca565b60405161018091906116fb565b60405180910390f35b6101a3600480360381019061019e9190611716565b61068c565b005b6101ad6107b8565b005b6101b76107d9565b6040516101c4919061189f565b60405180910390f35b6101e760048036038101906101e291906118ba565b610802565b005b6101f161098c565b6040516101fe9190611a32565b60405180910390f35b610221600480360381019061021c91906116a0565b610a0e565b60405161022e91906116fb565b60405180910390f35b610251600480360381019061024c9190611a54565b610ad0565b60405161025e91906116fb565b60405180910390f35b610281600480360381019061027c91906118ba565b610bb0565b005b61028b610d07565b60405161029891906116fb565b60405180910390f35b6102bb60048036038101906102b69190611adc565b610de2565b005b826102c6610d07565b610305576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102fc90611b8c565b60405180910390fd5b61030e81610e65565b61034d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034490611c1e565b60405180910390fd5b83836103598282610ad0565b15610399576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039090611cb0565b60405180910390fd5b60006040518060800160405280888152602001600081526020018781526020018681525090506103c7610f21565b73ffffffffffffffffffffffffffffffffffffffff166363ba26b6826040518263ffffffff1660e01b81526004016103ff9190611d33565b600060405180830381600087803b15801561041957600080fd5b505af115801561042d573d6000803e3d6000fd5b5050505050505050505050565b6060610444610f4b565b73ffffffffffffffffffffffffffffffffffffffff166353ed51436040518163ffffffff1660e01b8152600401600060405180830381865afa15801561048e573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906104b79190612099565b905090565b600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166353ed51436040518163ffffffff1660e01b8152600401600060405180830381865afa15801561052c573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906105559190612245565b905060005b81518110156105bd5760008282815181106105785761057761228e565b5b602002602001015190508581602001511480156105985750848160600151145b156105a957600193505050506105c4565b5080806105b5906122ec565b91505061055a565b5060009150505b92915050565b600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e0886f90856040518263ffffffff1660e01b81526004016106289190612343565b60c060405180830381865afa158015610645573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610669919061235e565b602001519050808303610680576001915050610686565b60009150505b92915050565b610694610d07565b156106d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106cb906123fd565b60405180910390fd5b600033905060006040518061014001604052808b8152602001600081526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018a8152602001898152602001888152602001878152602001868152602001858152602001848152509050610742610f4b565b73ffffffffffffffffffffffffffffffffffffffff1663057f4d79826040518263ffffffff1660e01b815260040161077a9190612521565b600060405180830381600087803b15801561079457600080fd5b505af11580156107a8573d6000803e3d6000fd5b5050505050505050505050505050565b6107c0610f75565b3073ffffffffffffffffffffffffffffffffffffffff16ff5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b8261080b610d07565b61084a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084190611b8c565b60405180910390fd5b61085381610e65565b610892576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088990611c1e565b60405180910390fd5b838261089e82826104bc565b156108de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d5906125b5565b60405180910390fd5b60006040518060c001604052806000815260200188815260200187815260200186815260200142815260200160008152509050610919610fec565b73ffffffffffffffffffffffffffffffffffffffff1663a5b7e4bd826040518263ffffffff1660e01b81526004016109519190612650565b600060405180830381600087803b15801561096b57600080fd5b505af115801561097f573d6000803e3d6000fd5b5050505050505050505050565b6060610996610f21565b73ffffffffffffffffffffffffffffffffffffffff166353ed51436040518163ffffffff1660e01b8152600401600060405180830381865afa1580156109e0573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610a0991906127e0565b905090565b600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e0886f90856040518263ffffffff1660e01b8152600401610a6c9190612343565b60c060405180830381865afa158015610a89573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aad919061235e565b606001519050808303610ac4576001915050610aca565b60009150505b92915050565b600080600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166325f5477085856040518363ffffffff1660e01b8152600401610b30929190612862565b602060405180830381865afa158015610b4d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b719190612892565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610ba4576001915050610baa565b60009150505b92915050565b82610bb9610d07565b610bf8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bef90611b8c565b60405180910390fd5b610c0181610e65565b610c40576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3790611c1e565b60405180910390fd5b8383610c4c8282611016565b610c8b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8290612931565b60405180910390fd5b610c93610f21565b73ffffffffffffffffffffffffffffffffffffffff166370a93b3686866040518363ffffffff1660e01b8152600401610ccd929190612951565b600060405180830381600087803b158015610ce757600080fd5b505af1158015610cfb573d6000803e3d6000fd5b50505050505050505050565b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166368938870336040518263ffffffff1660e01b8152600401610d65919061189f565b602060405180830381865afa158015610d82573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610da69190612892565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8103610dd9576000915050610ddf565b60019150505b90565b610dea610f75565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610e59576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e50906129ec565b60405180910390fd5b610e62816110dd565b50565b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e0886f90846040518263ffffffff1660e01b8152600401610ec39190612343565b600060405180830381865afa158015610ee0573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610f099190612a0c565b9050610f198160400151336111a1565b915050919050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b3373ffffffffffffffffffffffffffffffffffffffff16610f946107d9565b73ffffffffffffffffffffffffffffffffffffffff1614610fea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fe190612aa1565b60405180910390fd5b565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e0886f90856040518263ffffffff1660e01b81526004016110749190612343565b600060405180830381865afa158015611091573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906110ba9190612ac1565b6020015190508281036110d15760019150506110d7565b60009150505b92915050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036111df57600190506111e4565b600090505b92915050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b611211816111fe565b811461121c57600080fd5b50565b60008135905061122e81611208565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6112878261123e565b810181811067ffffffffffffffff821117156112a6576112a561124f565b5b80604052505050565b60006112b96111ea565b90506112c5828261127e565b919050565b600067ffffffffffffffff8211156112e5576112e461124f565b5b6112ee8261123e565b9050602081019050919050565b82818337600083830152505050565b600061131d611318846112ca565b6112af565b90508281526020810184848401111561133957611338611239565b5b6113448482856112fb565b509392505050565b600082601f83011261136157611360611234565b5b813561137184826020860161130a565b91505092915050565b600080600060608486031215611393576113926111f4565b5b60006113a18682870161121f565b935050602084013567ffffffffffffffff8111156113c2576113c16111f9565b5b6113ce8682870161134c565b92505060406113df8682870161121f565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61141e816111fe565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061144f82611424565b9050919050565b61145f81611444565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561149f578082015181840152602081019050611484565b60008484015250505050565b60006114b682611465565b6114c08185611470565b93506114d0818560208601611481565b6114d98161123e565b840191505092915050565b6000610140830160008301516114fd6000860182611415565b5060208301516115106020860182611415565b5060408301516115236040860182611456565b506060830151848203606086015261153b82826114ab565b9150506080830151848203608086015261155582826114ab565b91505060a083015184820360a086015261156f82826114ab565b91505060c083015184820360c086015261158982826114ab565b91505060e083015184820360e08601526115a382826114ab565b9150506101008301518482036101008601526115bf82826114ab565b9150506101208301518482036101208601526115db82826114ab565b9150508091505092915050565b60006115f483836114e4565b905092915050565b6000602082019050919050565b6000611614826113e9565b61161e81856113f4565b93508360208202850161163085611405565b8060005b8581101561166c578484038952815161164d85826115e8565b9450611658836115fc565b925060208a01995050600181019050611634565b50829750879550505050505092915050565b600060208201905081810360008301526116988184611609565b905092915050565b600080604083850312156116b7576116b66111f4565b5b60006116c58582860161121f565b92505060206116d68582860161121f565b9150509250929050565b60008115159050919050565b6116f5816116e0565b82525050565b600060208201905061171060008301846116ec565b92915050565b600080600080600080600080610100898b031215611737576117366111f4565b5b60006117458b828c0161121f565b985050602089013567ffffffffffffffff811115611766576117656111f9565b5b6117728b828c0161134c565b975050604089013567ffffffffffffffff811115611793576117926111f9565b5b61179f8b828c0161134c565b965050606089013567ffffffffffffffff8111156117c0576117bf6111f9565b5b6117cc8b828c0161134c565b955050608089013567ffffffffffffffff8111156117ed576117ec6111f9565b5b6117f98b828c0161134c565b94505060a089013567ffffffffffffffff81111561181a576118196111f9565b5b6118268b828c0161134c565b93505060c089013567ffffffffffffffff811115611847576118466111f9565b5b6118538b828c0161134c565b92505060e089013567ffffffffffffffff811115611874576118736111f9565b5b6118808b828c0161134c565b9150509295985092959890939650565b61189981611444565b82525050565b60006020820190506118b46000830184611890565b92915050565b6000806000606084860312156118d3576118d26111f4565b5b60006118e18682870161121f565b93505060206118f28682870161121f565b92505060406119038682870161121f565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006080830160008301516119516000860182611415565b5060208301516119646020860182611415565b506040830151848203604086015261197c82826114ab565b91505060608301516119916060860182611415565b508091505092915050565b60006119a88383611939565b905092915050565b6000602082019050919050565b60006119c88261190d565b6119d28185611918565b9350836020820285016119e485611929565b8060005b85811015611a205784840389528151611a01858261199c565b9450611a0c836119b0565b925060208a019950506001810190506119e8565b50829750879550505050505092915050565b60006020820190508181036000830152611a4c81846119bd565b905092915050565b60008060408385031215611a6b57611a6a6111f4565b5b6000611a798582860161121f565b925050602083013567ffffffffffffffff811115611a9a57611a996111f9565b5b611aa68582860161134c565b9150509250929050565b611ab981611444565b8114611ac457600080fd5b50565b600081359050611ad681611ab0565b92915050565b600060208284031215611af257611af16111f4565b5b6000611b0084828501611ac7565b91505092915050565b600082825260208201905092915050565b7f4c697374456d706c6f796565437572736f723a206e6f7420657869737420616360008201527f636f756e74000000000000000000000000000000000000000000000000000000602082015250565b6000611b76602583611b09565b9150611b8182611b1a565b604082019050919050565b60006020820190508181036000830152611ba581611b69565b9050919050565b7f4c697374456d706c6f796565437572736f723a206964206973206e6f7420626560008201527f6c6f6e6720746f20616464726573730000000000000000000000000000000000602082015250565b6000611c08602f83611b09565b9150611c1382611bac565b604082019050919050565b60006020820190508181036000830152611c3781611bfb565b9050919050565b7f456d706c6f79656520536b696c6c20437572736f723a20616c7265616479206560008201527f78697374656420736b696c6c0000000000000000000000000000000000000000602082015250565b6000611c9a602c83611b09565b9150611ca582611c3e565b604082019050919050565b60006020820190508181036000830152611cc981611c8d565b9050919050565b6000608083016000830151611ce86000860182611415565b506020830151611cfb6020860182611415565b5060408301518482036040860152611d1382826114ab565b9150506060830151611d286060860182611415565b508091505092915050565b60006020820190508181036000830152611d4d8184611cd0565b905092915050565b600067ffffffffffffffff821115611d7057611d6f61124f565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b600081519050611d9f81611208565b92915050565b600081519050611db481611ab0565b92915050565b6000611dcd611dc8846112ca565b6112af565b905082815260208101848484011115611de957611de8611239565b5b611df4848285611481565b509392505050565b600082601f830112611e1157611e10611234565b5b8151611e21848260208601611dba565b91505092915050565b60006101408284031215611e4157611e40611d86565b5b611e4c6101406112af565b90506000611e5c84828501611d90565b6000830152506020611e7084828501611d90565b6020830152506040611e8484828501611da5565b604083015250606082015167ffffffffffffffff811115611ea857611ea7611d8b565b5b611eb484828501611dfc565b606083015250608082015167ffffffffffffffff811115611ed857611ed7611d8b565b5b611ee484828501611dfc565b60808301525060a082015167ffffffffffffffff811115611f0857611f07611d8b565b5b611f1484828501611dfc565b60a08301525060c082015167ffffffffffffffff811115611f3857611f37611d8b565b5b611f4484828501611dfc565b60c08301525060e082015167ffffffffffffffff811115611f6857611f67611d8b565b5b611f7484828501611dfc565b60e08301525061010082015167ffffffffffffffff811115611f9957611f98611d8b565b5b611fa584828501611dfc565b6101008301525061012082015167ffffffffffffffff811115611fcb57611fca611d8b565b5b611fd784828501611dfc565b6101208301525092915050565b6000611ff7611ff284611d55565b6112af565b9050808382526020820190506020840283018581111561201a57612019611d81565b5b835b8181101561206157805167ffffffffffffffff81111561203f5761203e611234565b5b80860161204c8982611e2a565b8552602085019450505060208101905061201c565b5050509392505050565b600082601f8301126120805761207f611234565b5b8151612090848260208601611fe4565b91505092915050565b6000602082840312156120af576120ae6111f4565b5b600082015167ffffffffffffffff8111156120cd576120cc6111f9565b5b6120d98482850161206b565b91505092915050565b600067ffffffffffffffff8211156120fd576120fc61124f565b5b602082029050602081019050919050565b600060c0828403121561212457612123611d86565b5b61212e60c06112af565b9050600061213e84828501611d90565b600083015250602061215284828501611d90565b602083015250604061216684828501611d90565b604083015250606061217a84828501611d90565b606083015250608061218e84828501611d90565b60808301525060a06121a284828501611d90565b60a08301525092915050565b60006121c16121bc846120e2565b6112af565b90508083825260208201905060c084028301858111156121e4576121e3611d81565b5b835b8181101561220d57806121f9888261210e565b84526020840193505060c0810190506121e6565b5050509392505050565b600082601f83011261222c5761222b611234565b5b815161223c8482602086016121ae565b91505092915050565b60006020828403121561225b5761225a6111f4565b5b600082015167ffffffffffffffff811115612279576122786111f9565b5b61228584828501612217565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006122f7826111fe565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612329576123286122bd565b5b600182019050919050565b61233d816111fe565b82525050565b60006020820190506123586000830184612334565b92915050565b600060c08284031215612374576123736111f4565b5b60006123828482850161210e565b91505092915050565b7f4c697374456d706c6f796565437572736f723a20616c7265616479206578697360008201527f746564206163636f756e74000000000000000000000000000000000000000000602082015250565b60006123e7602b83611b09565b91506123f28261238b565b604082019050919050565b60006020820190508181036000830152612416816123da565b9050919050565b6000610140830160008301516124366000860182611415565b5060208301516124496020860182611415565b50604083015161245c6040860182611456565b506060830151848203606086015261247482826114ab565b9150506080830151848203608086015261248e82826114ab565b91505060a083015184820360a08601526124a882826114ab565b91505060c083015184820360c08601526124c282826114ab565b91505060e083015184820360e08601526124dc82826114ab565b9150506101008301518482036101008601526124f882826114ab565b91505061012083015184820361012086015261251482826114ab565b9150508091505092915050565b6000602082019050818103600083015261253b818461241d565b905092915050565b7f4c697374427573696e6573734170706c79437572736f723a206861642061707060008201527f6c69656400000000000000000000000000000000000000000000000000000000602082015250565b600061259f602483611b09565b91506125aa82612543565b604082019050919050565b600060208201905081810360008301526125ce81612592565b9050919050565b60c0820160008201516125eb6000850182611415565b5060208201516125fe6020850182611415565b5060408201516126116040850182611415565b5060608201516126246060850182611415565b5060808201516126376080850182611415565b5060a082015161264a60a0850182611415565b50505050565b600060c08201905061266560008301846125d5565b92915050565b600067ffffffffffffffff8211156126865761268561124f565b5b602082029050602081019050919050565b6000608082840312156126ad576126ac611d86565b5b6126b760806112af565b905060006126c784828501611d90565b60008301525060206126db84828501611d90565b602083015250604082015167ffffffffffffffff8111156126ff576126fe611d8b565b5b61270b84828501611dfc565b604083015250606061271f84828501611d90565b60608301525092915050565b600061273e6127398461266b565b6112af565b9050808382526020820190506020840283018581111561276157612760611d81565b5b835b818110156127a857805167ffffffffffffffff81111561278657612785611234565b5b8086016127938982612697565b85526020850194505050602081019050612763565b5050509392505050565b600082601f8301126127c7576127c6611234565b5b81516127d784826020860161272b565b91505092915050565b6000602082840312156127f6576127f56111f4565b5b600082015167ffffffffffffffff811115612814576128136111f9565b5b612820848285016127b2565b91505092915050565b600061283482611465565b61283e8185611b09565b935061284e818560208601611481565b6128578161123e565b840191505092915050565b60006040820190506128776000830185612334565b81810360208301526128898184612829565b90509392505050565b6000602082840312156128a8576128a76111f4565b5b60006128b684828501611d90565b91505092915050565b7f456d706c6f79656520536b696c6c20437572736f723a2072657175657374207360008201527f6b696c6c00000000000000000000000000000000000000000000000000000000602082015250565b600061291b602483611b09565b9150612926826128bf565b604082019050919050565b6000602082019050818103600083015261294a8161290e565b9050919050565b60006040820190506129666000830185612334565b6129736020830184612334565b9392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006129d6602683611b09565b91506129e18261297a565b604082019050919050565b60006020820190508181036000830152612a05816129c9565b9050919050565b600060208284031215612a2257612a216111f4565b5b600082015167ffffffffffffffff811115612a4057612a3f6111f9565b5b612a4c84828501611e2a565b91505092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000612a8b602083611b09565b9150612a9682612a55565b602082019050919050565b60006020820190508181036000830152612aba81612a7e565b9050919050565b600060208284031215612ad757612ad66111f4565b5b600082015167ffffffffffffffff811115612af557612af46111f9565b5b612b0184828501612697565b9150509291505056fea264697066735822122065f0552ae2d00a63e39bb07babe9e5479c91fd9fe80bbfea09304acfb242854964736f6c63430008110033";

type EmployeeControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EmployeeControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EmployeeController__factory extends ContractFactory {
  constructor(...args: EmployeeControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    listEmployeeAddress: PromiseOrValue<string>,
    listEmployeeSkillAddress: PromiseOrValue<string>,
    listEmployeeApplyAddress: PromiseOrValue<string>,
    listEmployeeAppointmenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<EmployeeController> {
    return super.deploy(
      listEmployeeAddress,
      listEmployeeSkillAddress,
      listEmployeeApplyAddress,
      listEmployeeAppointmenAddress,
      overrides || {}
    ) as Promise<EmployeeController>;
  }
  override getDeployTransaction(
    listEmployeeAddress: PromiseOrValue<string>,
    listEmployeeSkillAddress: PromiseOrValue<string>,
    listEmployeeApplyAddress: PromiseOrValue<string>,
    listEmployeeAppointmenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      listEmployeeAddress,
      listEmployeeSkillAddress,
      listEmployeeApplyAddress,
      listEmployeeAppointmenAddress,
      overrides || {}
    );
  }
  override attach(address: string): EmployeeController {
    return super.attach(address) as EmployeeController;
  }
  override connect(signer: Signer): EmployeeController__factory {
    return super.connect(signer) as EmployeeController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EmployeeControllerInterface {
    return new utils.Interface(_abi) as EmployeeControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EmployeeController {
    return new Contract(address, _abi, signerOrProvider) as EmployeeController;
  }
}
