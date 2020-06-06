import React, { useEffect, useState } from 'react'
import Novel from './Novel'
import Search from './Search'
import { allNovels, filterNovels } from '../utilities/novels.js'

export default () => {
  const [state, setState] = useState('')
  const [novelList, setNovelList] = useState([])
  const [filteredNovelList, setFilteredNovelList] = useState([])

  useEffect(
    () => {
      async function pullData() {
        const novels = await allNovels()

        setNovelList(novels)
        setFilteredNovelList(novels)
      }
      pullData()
    }, [])

  useEffect(
    () => {
      const filtered = filterNovels(novelList, state)

      setFilteredNovelList(filtered)
    }, [state])

  return (
    <div className="page" >
      <div className="title"> Great Novels</div>
      <div className="subtitle"> Search for your favorite Great Novel</div>
      <Search term={state} setter={setState} />
      {
        filteredNovelList.map(novel => (
          <Novel
            key={novel.id}
            id={novel.id}
            title={novel.title}
            authorFirstName={novel.author.nameFirst}
            authorLastName={novel.author.nameLast}
          />))
      }
    </div>
  )
}
