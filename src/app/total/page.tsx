'use client'

import { useEffect, useState } from "react"
import getJsonVotes from "../utils/get-json-votes"

export default function Total() {
  const [votos, setVotos] = useState([]);

  useEffect(() => {
    async function getAllVotes() {
      const totalDeVotos = await getJsonVotes()
      setVotos(totalDeVotos.sort((a: any, b: any) => b.votos - a.votos));
    }

    getAllVotes();
  }, [])
  return (
    <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        { votos && votos.map((candidate: any) => (
          <li key={candidate.name}> {candidate.name}, { candidate.votos } votos </li>
        )) }
    </div>
  )
}