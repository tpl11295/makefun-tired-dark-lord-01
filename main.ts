// The Tired Dark Lord: A 100-Word Villain Monologue — one monologue of about
// 100 words, spoken by a fantasy villain who is secretly just very tired.
// The tiredness lives in the rhythm and the small deflections, never in a
// plain statement of weariness; the speaker keeps a scheme and a history.
import * as fs from "node:fs";

const MONOLOGUE =
  "Come in. Mind the candles — I lit them myself; the servants left around the third siege, and frankly they never dusted the skulls properly. You want the crown, the girl, the kingdom. Take a number. Forty-seven heroes stand ahead of you. Three are still in the waiting room, arguing over who monologues first. I had a plan once. A beautiful plan: a comet, a betrayal, a coronation at dawn. Dawn came. I watched it from this chair. I have not moved since. So swing your sword, hero. Just give me a moment. I seem to have misplaced my dramatic pause.";
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", MONOLOGUE, "utf8");
