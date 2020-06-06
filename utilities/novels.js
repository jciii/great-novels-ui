import axios from 'axios'

export const allNovels = async () => {
  const { data } = await axios.get('http://localhost:1337/api/novels')

  return data
}

export const filterNovels = (novelList, state) => novelList.filter(novel => (novel
  .title
  .toLowerCase()
  .includes(state.toLowerCase())
))
