/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export type EmployeeCVStruct = {
  id: PromiseOrValue<BigNumberish>;
  employeeId: PromiseOrValue<BigNumberish>;
  time: PromiseOrValue<BigNumberish>;
  source: PromiseOrValue<string>;
};

export type EmployeeCVStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  string
] & { id: BigNumber; employeeId: BigNumber; time: BigNumber; source: string };

export interface ListEmployeeCVInterface extends utils.Interface {
  functions: {
    "add((uint256,uint256,uint256,string))": FunctionFragment;
    "approve(address)": FunctionFragment;
    "at(uint256)": FunctionFragment;
    "destroy()": FunctionFragment;
    "getAll()": FunctionFragment;
    "list(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "retrive(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "add"
      | "approve"
      | "at"
      | "destroy"
      | "getAll"
      | "list"
      | "owner"
      | "retrive"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "add",
    values: [EmployeeCVStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "at",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "destroy", values?: undefined): string;
  encodeFunctionData(functionFragment: "getAll", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "list",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "retrive",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "at", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "destroy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAll", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "list", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "retrive", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "Add(tuple)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Remove(tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Add"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Remove"): EventFragment;
}

export interface AddEventObject {
  item: EmployeeCVStructOutput;
}
export type AddEvent = TypedEvent<[EmployeeCVStructOutput], AddEventObject>;

export type AddEventFilter = TypedEventFilter<AddEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface RemoveEventObject {
  item: EmployeeCVStructOutput;
}
export type RemoveEvent = TypedEvent<
  [EmployeeCVStructOutput],
  RemoveEventObject
>;

export type RemoveEventFilter = TypedEventFilter<RemoveEvent>;

export interface ListEmployeeCV extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ListEmployeeCVInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    add(
      item: EmployeeCVStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    approve(
      value: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    at(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[EmployeeCVStructOutput]>;

    destroy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAll(overrides?: CallOverrides): Promise<[EmployeeCVStructOutput[]]>;

    list(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string] & {
        id: BigNumber;
        employeeId: BigNumber;
        time: BigNumber;
        source: string;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    retrive(
      value: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  add(
    item: EmployeeCVStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  approve(
    value: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  at(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<EmployeeCVStructOutput>;

  destroy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAll(overrides?: CallOverrides): Promise<EmployeeCVStructOutput[]>;

  list(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, string] & {
      id: BigNumber;
      employeeId: BigNumber;
      time: BigNumber;
      source: string;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  retrive(
    value: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    add(item: EmployeeCVStruct, overrides?: CallOverrides): Promise<void>;

    approve(
      value: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    at(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<EmployeeCVStructOutput>;

    destroy(overrides?: CallOverrides): Promise<void>;

    getAll(overrides?: CallOverrides): Promise<EmployeeCVStructOutput[]>;

    list(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string] & {
        id: BigNumber;
        employeeId: BigNumber;
        time: BigNumber;
        source: string;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    retrive(
      value: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Add(tuple)"(item?: null): AddEventFilter;
    Add(item?: null): AddEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Remove(tuple)"(item?: null): RemoveEventFilter;
    Remove(item?: null): RemoveEventFilter;
  };

  estimateGas: {
    add(
      item: EmployeeCVStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    approve(
      value: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    at(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    destroy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAll(overrides?: CallOverrides): Promise<BigNumber>;

    list(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    retrive(
      value: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    add(
      item: EmployeeCVStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    approve(
      value: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    at(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    destroy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAll(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    list(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    retrive(
      value: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}