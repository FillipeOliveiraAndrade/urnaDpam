"use server";

import fs from "fs";

export default async function getJsonVotes() {
  const jsonData = JSON.parse(
    fs.readFileSync("src/app/utils/votos.json") as any
  );
  return jsonData;
}
