import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Home(props) {
  let [totalResults, setTotalResults] = useState(0)
  let [articles, setArticles] = useState([])
  let [page, setPage] = useState(1)

  async function getAPIdata() {
    const api_key = process.env.REACT_APP_API_KEY_FUNCTION_COMP
    const url = `https://newsapi.org/v2/everything?q=${props.q}&apiKey=${api_key}`
    let response = await fetch(url)
    response = await response.json()
    setArticles(response.articles)
    setTotalResults(response.totalResults)
  }
  let fetchData = async () => {
    let response = await fetch(``)
    response = await response.json()
    setPage(page + 1)
    setArticles(response.articles.concat(response.articles))
    setTotalResults(response.totalResults)
  }

  // useEffect - used as an alternative of ( componentDidMount and componentDidUpdate ) in function components
  // useEffect(() => {
  //   getAPIdata()
  // }, [props.q,props.language])
  useEffect(() => {
    getAPIdata()
  }, [props])

  return (
    <>
      <div className='container-fluid my-2'>
        <h5 className='bg-primary py-2 mt-1 text-center text-light text-capitalize'>{props.q}</h5>
        <InfiniteScroll
          dataLength={articles.length}    //This is important field to render the next data
          next={fetchData}                    //user defined function
          hasMore={articles.length < totalResults}
          loader={
            <div className='my-4 text-center'>
              <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }>
          <div className='row'>
            {
              articles.map((item, index) => {
                return <NewsItem
                  key={index}
                  title={item.title}
                  description={item.description}
                  source={item.source.name}
                  url={item.url}
                  pic={item.urlToImage}
                  publishedAt={item.publishedAt}
                />
              })
            }
          </div>
        </InfiniteScroll>
      </div >
    </>
  )
}
