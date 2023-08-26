import Image from "next/image";
import Link from "next/link";
import { prata } from "@/app/layout";

async function getCharacterByID (id) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  return res.json();
}

export default async function Page({params}) {
  const {id} = params;
  const data = await getCharacterByID(id);
  const {name,image, status, species,location : {name:lastLocation}} = data
  return (
    <main className="main">
      <div className="main-wrapper">
        <Link href="/" className="back-button">Back</Link>
        <h1 className={`title ${prata.className}`}>{name}</h1>
        <div>
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            style={{
              borderRadius: "0.5rem",
              marginBottom: "1rem",
            }}
          />
          <div className="property-value">{status} - {species}</div>
          <div className="property-name">Last Known Location:</div>
          <div className="property-value">{lastLocation}</div>
        </div>
      </div>
    </main>
  )
}