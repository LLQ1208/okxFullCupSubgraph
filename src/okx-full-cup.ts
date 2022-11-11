import {TransferBatch, TransferSingle} from "../generated/okxFullCup/okxFullCup";

import {
  TransferSingle as TransferSingleEntity,
  TransferBatch as TransferBatchEntity
} from "../generated/schema"

export function handleTransferSingle(event: TransferSingle): void {

  let entity = new TransferSingleEntity(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
  entity.operator = event.params.operator.toHex()
  entity.from = event.params.from.toHex()
  entity.to = event.params.to.toHex()
  entity.param_id = event.params.id
  entity.value = event.params.value
  entity.save();
}


export function handleTransferBatch(event: TransferBatch): void {

  let entity = new TransferBatchEntity(event.transaction.hash.toHex() + "-" + event.logIndex.toString());

  entity.operator = event.params.operator.toHex()
  entity.from = event.params.from.toHex()
  entity.to = event.params.to.toHex()
  let ids = event.params.ids;
  let idsStr = "[";
  for(let i=0;i<ids.length;i++){
    idsStr = idsStr + "," + ids[i].toHex()
  }
  idsStr = idsStr.substring(0,idsStr.length-1) + "]";
  entity.ids = idsStr
  let values = event.params.values;
  let valuesStr = "[";
  for(let i=0;i<values.length;i++){
    valuesStr = valuesStr + "," + values[i].toHex()
  }
  valuesStr = valuesStr.substring(0,idsStr.length-1) + "]";
  entity.values = valuesStr
  entity.save();
}