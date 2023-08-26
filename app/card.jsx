import Link from "next/link"
import Image from "next/image"

export default function Card({id,name,image}){
  return(
    <Link href={`list/${id}`}>
      <Image
        src={image}
        alt={name}
        width={48}
        height={48}
        className="card-image"
        style={{
          borderRadius: "50%",
        }}
      />
      <span className="card-name">{name || "None"}</span>
    </Link>
  )
}