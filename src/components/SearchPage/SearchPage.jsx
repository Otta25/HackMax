import React from 'react'
import Style from '../SearchPage/SearchPage.module.css'

function SearchPage() {
  return (
    <div className={Style.SearchPage} >
      <div className={Style.SearchPageContainer}>
        <input id={Style.searchBox} type="text" />
      </div>
    </div>
  )
}

export default SearchPage