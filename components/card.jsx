import Link from "next/link"
import Image from "next/image"

export default function Card({data}){
  const {id,name,image,status} = data

  let statusColor = ''
  switch(status){
    case "Dead":
      statusColor = "red"
      break
    case "Alive":
      statusColor = "green"
      break
    default:
      break
  }
  
  return(
    <Link href={`list/${id}`} className={statusColor}>
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