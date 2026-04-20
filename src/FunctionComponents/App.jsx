import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'

export default function App() {
    let [language, setLanguage] = useState("en")
    let [search, setSearch] = useState("")

    // function to change language
    function getLanguage(data) {
        setLanguage(data)
    }
    // function to get input from search bar
    function getSearch(data) {
        setSearch(data)
    }
    return (
        <>
            <BrowserRouter>
                <Navbar getLanguage={getLanguage} getSearch={getSearch} />
                <Routes>
                    <Route path='/' element={<Home q={search ? search : "All"} language={language} />} />
                    <Route path='/all' element={<Home q={search ? search : "All"} language={language} />} />
                    <Route path='/entertainment' element={<Home q={search ? search : "Entertainment"} language={language} />} />
                    <Route path='/education' element={<Home q={search ? search : "Education"} language={language} />} />
                    <Route path='/sports' element={<Home q={search ? search : "Sports"} language={language} />} />
                    <Route path='/science' element={<Home q={search ? search : "Science"} language={language} />} />
                    <Route path='/health' element={<Home q={search ? search : "Health"} language={language} />} />
                    <Route path='/technology' element={<Home q={search ? search : "Technology"} language={language} />} />
                    <Route path='/weather' element={<Home q={search ? search : "Weather"} language={language} />} />
                    <Route path='/foreign' element={<Home q={search ? search : "Foreign"} language={language} />} />
                    <Route path='/aviation' element={<Home q={search ? search : "Aviation"} language={language} />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}
