import Image from "next/image";
import Link from "next/link";
import { Prata } from "next/font/google";

export const prata = Prata({ subsets: ['latin'], weight: '400' })

async function getCharacterByID (id) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  return res.json();
}

export async function generateMetadata({ params, searchParams }, parent){

  const {id} = params;
  const character = await getCharacterByID(id);
  
  return {
    title: `Rick and Morty - ${character.name}`,
    description: 'NextJS Demo App to demonstrate page routing and other features',
  }
}


export default async function Page({params}) {
  const {id} = params;
  const data = await getCharacterByID(id);
  const {name,image, status, species,location : {name:lastLocation}} = data
  return (
    <main className="main">
      <div className="main-wrapper">
        <Link href="/" className="button back-button">Back</Link>
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