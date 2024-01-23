import React from "react";
import { usePagination } from "../../../hooks/usePagenation";

export default function Pagination({totalPages, page, changePage, ...props}) {
  const pagesArray = usePagination(totalPages);
  return (
    <div style={{marginTop: "30px"}}>
      {pagesArray.map((p) => 
        <span 
          className={page === p ? 'page page_current' : 'page'}
          onClick={() => changePage(p)}
        >
          {p}
        </span>
      )}
    </div>
  )
}