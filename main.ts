// Ridiculous at First Glance, Real by the Second — one pitch, 135 of 200 characters.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice, judged against the published criteria (seed-investor judge):
// 14 candidates drafted and compared. Winner:
//   "A dating app that matches you only with people who hate the same things
//    you do, because shared hatred lasts longer than shared hobbies."
// 1. A bizarre startup idea: a dating app whose whole matching engine runs
//    on shared hatred — genuinely strange, not a familiar business with a
//    strange adjective bolted on.
// 2. The business logic holds: dating apps sell subscriptions to people who
//    want to meet someone compatible, and shared hatred is a real bonding
//    mechanism — the "because" clause makes the absurd premise pencil out.
// 3. Lands as a pitch: the turn takes the reader from laughing ("matches
//    you by what you hate") to nodding ("shared hatred lasts longer than
//    shared hobbies").
// 4. Concrete and vivid: names the thing sold (matches) and who buys it
//    (daters), in 135 characters, one sentence.
// Runner-up: "A funeral parlour for dead phones that recovers your photos,
// reads a eulogy, and sells the bereaved a new handset on the spot." (126
// chars) — three concrete beats and the money is explicit in the upsell,
// but its turn (the upsell) is a smaller laugh-to-nod than the winner's
// psychological reframe, and "funeral parlour" leans more on shock.
// The rest lost: pigeon USB couriers ("a bird that never buffers") — funny,
// but a stunt, not a market offices would buy; actors nodding in video
// meetings so you can bill the hour walking your dog — fraud-adjacent and
// one-note; professional mourners for dead laptops — who approves that
// expense?; postcards to your houseplant so it stays alive out of guilt —
// plants feel no guilt, the logic fails; pothole naming rights — fuzzy
// customer, who pays the city?; the apologise-to-the-gym-equipment gym —
// weak logic, one-note; out-of-office replies in a medieval monk's voice —
// thin logic; goat lawn-mowing plus Zoom cameos — goatscaping is already a
// real business, not bizarre; the houseplant hotel with daily photos —
// plant hotels already exist; bottled silence from empty libraries — a
// known poetic trope with thin logic; matchmaking for left socks — nobody
// pays to reunite socks, no market; the ex-thriving subscription box —
// a deceptive service, and closure-by-letter is a weaker market than dating.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `A dating app that matches you only with people who hate the same things you do, because shared hatred lasts longer than shared hobbies.`;

const MAX_CHARS = 200; // competition cap
if (ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
