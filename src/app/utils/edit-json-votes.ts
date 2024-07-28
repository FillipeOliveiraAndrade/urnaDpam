"use server";

import fs from "fs";

export default async function editJsonVotes(editedJson: any) {
  fs.writeFileSync(
    "src/app/utils/votos.json",
    JSON.stringify(editedJson)
  ) as any;
}
