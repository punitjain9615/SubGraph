import {
  LogAccountCreated as LogAccountCreatedEvent,
} from "../generated/InstaIndex/InstaIndex"
import {
  LogAccountCreated,
} from "../generated/schema"

export function handleLogAccountCreated(event: LogAccountCreatedEvent): void {
  let entity = new LogAccountCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.sender = event.params.sender
  entity.owner = event.params.owner
  entity.account = event.params.account
  entity.origin = event.params.origin
  entity.save()
}
