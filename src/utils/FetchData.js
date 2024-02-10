export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2980d7bf30msh564127b7e67add3p1a1556jsnab6c153e86d6',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};


export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2980d7bf30msh564127b7e67add3p1a1556jsnab6c153e86d6',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
