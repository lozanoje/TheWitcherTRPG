export default class WitcherActor extends Actor {
    async rollItem(itemId) {
      this.sheet._onItemRoll(null, itemId)
    }

    
    async rollSpell(itemId) {
      this.sheet._onSpellRoll(null, itemId)
    }
}