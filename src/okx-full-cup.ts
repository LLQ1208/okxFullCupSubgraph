import { BigInt } from "@graphprotocol/graph-ts"
import {
  okxFullCup,
  AdminChanged,
  ApprovalForAll,
  BeaconUpgraded,
  Canceled,
  ClaimEnabled,
  Initialized,
  OwnershipTransferred,
  TransferBatch,
  TransferSingle,
  URI,
  UnStaked,
  Upgraded,
  WithdrawEnabled
} from "../generated/okxFullCup/okxFullCup"
import { ExampleEntity } from "../generated/schema"

export function handleAdminChanged(event: AdminChanged): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.previousAdmin = event.params.previousAdmin
  entity.newAdmin = event.params.newAdmin

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract._pauseClaimMap(...)
  // - contract.balanceOf(...)
  // - contract.balanceOfAll(...)
  // - contract.balanceOfBatch(...)
  // - contract.bonusContract(...)
  // - contract.claimEnabled(...)
  // - contract.claimPauseTimeMap(...)
  // - contract.exists(...)
  // - contract.getBlockList(...)
  // - contract.getImplementation(...)
  // - contract.isApprovedForAll(...)
  // - contract.mintEndTime(...)
  // - contract.mintPauseTimeMap(...)
  // - contract.mintStartTime(...)
  // - contract.mintedAmountOf(...)
  // - contract.name(...)
  // - contract.owner(...)
  // - contract.proxiableUUID(...)
  // - contract.snapshot(...)
  // - contract.stakeAmountMap(...)
  // - contract.stakeContract(...)
  // - contract.stakePrice(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.totalHolder(...)
  // - contract.totalHolder(...)
  // - contract.totalMintForDrop(...)
  // - contract.totalStaking(...)
  // - contract.totalSupply(...)
  // - contract.totalSupply(...)
  // - contract.uri(...)
  // - contract.withdrawEnabled(...)
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleBeaconUpgraded(event: BeaconUpgraded): void {}

export function handleCanceled(event: Canceled): void {}

export function handleClaimEnabled(event: ClaimEnabled): void {}

export function handleInitialized(event: Initialized): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleTransferBatch(event: TransferBatch): void {}

export function handleTransferSingle(event: TransferSingle): void {}

export function handleURI(event: URI): void {}

export function handleUnStaked(event: UnStaked): void {}

export function handleUpgraded(event: Upgraded): void {}

export function handleWithdrawEnabled(event: WithdrawEnabled): void {}
