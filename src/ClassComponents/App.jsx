import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            language: "en",
            search: ""
        }
        // this.getLanguage = this.getLanguage.bind(this)
        // this.getSearch = this.getSearch.bind(this)
    }

    // getLanguage(data) {
    //     this.setState({ language: data })
    //     console.log(this.state.language)
    // }

    // function to change language
    getLanguage = (data) => {
        this.setState({ language: data })
    }
    // function to get input from search bar
    getSearch = (data) => {
        this.setState({ search: data })
    }

    render() {
        return (
            <>
                <BrowserRouter>
                    <Navbar getLanguage={this.getLanguage} getSearch={this.getSearch} />
                    <Routes>
                        <Route path='/' element={<Home q={this.state.search ? this.state.search : "All"} language={this.state.language} />} />
                        <Route path='/all' element={<Home q={this.state.search ? this.state.search : "All"} language={this.state.language} />} />
                        <Route path='/entertainment' element={<Home q={this.state.search ? this.state.search : "Entertainment"} language={this.state.language} />} />
                        <Route path='/education' element={<Home q={this.state.search ? this.state.search : "Education"} language={this.state.language} />} />
                        <Route path='/sports' element={<Home q={this.state.search ? this.state.search : "Sports"} language={this.state.language} />} />
                        <Route path='/science' element={<Home q={this.state.search ? this.state.search : "Science"} language={this.state.language} />} />
                        <Route path='/health' element={<Home q={this.state.search ? this.state.search : "Health"} language={this.state.language} />} />
                        <Route path='/technology' element={<Home q={this.state.search ? this.state.search : "Technology"} language={this.state.language} />} />
                        <Route path='/weather' element={<Home q={this.state.search ? this.state.search : "Weather"} language={this.state.language} />} />
                        <Route path='/foreign' element={<Home q={this.state.search ? this.state.search : "Foreign"} language={this.state.language} />} />
                        <Route path='/aviation' element={<Home q={this.state.search ? this.state.search : "Aviation"} language={this.state.language} />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </>
        )
    }
}