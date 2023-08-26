import { API_ENDPOINT } from "@/constant";
import Image from "next/image";
import Pagination from "./pagination";
import Card from "./card";

async function getCharacters (page) {
  const res = await fetch(`${API_ENDPOINT}/character/?page=${page}`,{
    cache: "no-store"
  });
  return res.json();
}

export default async function Home({searchParams}) {
  
  const {page = 1} = searchParams
  const characters = await getCharacters(page)
  const {results,info} = characters
  
  return (
    <main className="main">
      <Image
        src="/logo.png"
        alt="Rick and Morty"
        width={"300"}
        height={"100"}
        style={{
          marginBottom: "2rem",
        }}
      />
      <ul className="card-wrapper">
        {results && results.map(data => {
          return (
            <li className="card" key={`${data.id}`}>
              <Card data={data} />
            </li>
          )
        })}
      </ul>
      <Pagination page = {page} pages={info?.pages} />
    </main>
  )
}
