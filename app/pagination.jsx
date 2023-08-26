"use client"

import { usePathname, useRouter } from "next/navigation"
import { useTransition } from "react"

export default function Pagination ({page = 1,pages}) {
  const {replace} = useRouter()
  const pathname = usePathname()

  const [isPending, startTransition] = useTransition()

  function onPageChange (page) {
    const params = new URLSearchParams(window.location.search)
    params.set('page', page.toString())
    startTransition(() => {{
      replace(`${pathname}?${params.toString()}`)
    }})
  }
  
  return (
    <div className="pagination">
      {page > 1 && <button className="prev" onClick={() => onPageChange(parseInt(page) - 1)}>Prev</button>}
      {page != pages && <button className="next" onClick={() => onPageChange(parseInt(page) + 1)} >Next</button>}
      {isPending && <div className="loading">Loading...</div>}
    </div>
  )
}