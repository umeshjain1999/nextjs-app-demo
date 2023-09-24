"use client"

import { usePathname, useRouter } from "next/navigation"
import { useTransition } from "react"
import "./loading.css"

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
      {page > 1 && <button className="button prev" onClick={() => onPageChange(parseInt(page) - 1)}>Prev</button>}
      {page != pages && <button className="button next" onClick={() => onPageChange(parseInt(page) + 1)} >Next</button>}
      {isPending &&
      <div className="loading">
        <div class="spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
      </div>}
    </div>
  )
}