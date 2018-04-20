import fetchJSON from './fetch'

const loadSearch = (searchTerm) => fetchJSON('search/' + searchTerm)
const loadVersions = (entryID) => fetchJSON('versions/' + entryID)

export {
  loadSearch,
  loadVersions
}