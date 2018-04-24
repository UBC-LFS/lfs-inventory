import fetchJSON from './fetch'

const loadSearch = (searchTerm) => fetchJSON('search/' + searchTerm)
const loadVersions = (entryID) => fetchJSON('versions/' + entryID)


/* EXAMPLE
export const fetchGetById = ( myid ) => {
  return (
    fetch(`${api.API_URL}stores/v1/getById?id=myid`, {
      method: 'get',
      headers: {
        mall: api.API_MALL,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => data.result.store)
      .catch(err => err)
  );
}
*/

export {
  loadSearch,
  loadVersions
}