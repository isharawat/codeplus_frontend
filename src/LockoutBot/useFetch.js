import React,{useState,useEffect} from 'react'

function useFetch(URL) {
  const [articles, setArticles] = useState(null)
  const fetchUserData = () => {
    fetch(URL)
      .then(response => {
        return response.json()
      })
      .then(results => {
        setArticles(results.result.problems);
      }).catch(err => {
        console.log(err.message);
      })
  }

  useEffect(() => {
    fetchUserData()
 }, [URL])
 return articles;
}

export default useFetch
