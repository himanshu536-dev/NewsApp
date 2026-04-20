import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      totalResults: 0, articles: [], page: 1
    }
  }
  async getAPIdata() {
    const api_key = process.env.REACT_APP_API_KEY_CLASS_COMP
    const url = `https://newsapi.org/v2/everything?q=${this.props.q}&apiKey=2683c2fa6f994106b719297ee62f8a54`
    let response = await fetch()
    response = await response.json()
    this.setState({
      totalResults: response.totalResults,
      articles: response.articles
    })
  }
  fetchData = async () => {
    let response = await fetch(``)
    response = await response.json()
    this.setState({ page: this.state.page + 1 })
    this.setState({
      totalResults: response.totalResults,
      articles: response.articles.concat(response.articles)
    })
  }
  componentDidMount() {
    this.getAPIdata()
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props)
      this.getAPIdata()
  }
  render() {
    return (
      <>
        <div className='container-fluid my-2'>
          <h5 className='bg-primary py-2 mt-1 text-center text-light text-capitalize'>{this.props.q}</h5>
          <InfiniteScroll
            dataLength={this.state.articles.length}    //This is important field to render the next data
            next={this.fetchData}                    //user defined function
            hasMore={this.state.articles.length < this.state.totalResults}
            loader={
              <div className='my-4 text-center'>
                <div className="spinner-border text-secondary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            }>
            <div className='row'>
              {
                this.state.articles.map((item, index) => {
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
}