/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ListBusinessPostCursor,
  ListBusinessPostCursorInterface,
} from "../../../../cursor/business/post/ListBusinessPostCursor";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "businessId",
        type: "uint256",
      },
    ],
    name: "_checkPostIdBelongstoBusinessId",
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
] as const;

export class ListBusinessPostCursor__factory {
  static readonly abi = _abi;
  static createInterface(): ListBusinessPostCursorInterface {
    return new utils.Interface(_abi) as ListBusinessPostCursorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ListBusinessPostCursor {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ListBusinessPostCursor;
  }
}