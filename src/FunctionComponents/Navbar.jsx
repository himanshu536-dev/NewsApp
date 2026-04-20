import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    let [search, setSearch] = useState("")
    function postSearch(e) {
        e.preventDefault()
        props.getSearch(search)
        setSearch("")
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/" onClick={() => props.getSearch("")}>NEWSAPP</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link text-light active" aria-current="page" to="/all" onClick={() => props.getSearch("")}>All</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" to="/entertainment" onClick={() => props.getSearch("")}>Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" to="/education" onClick={() => props.getSearch("")}>Education</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" to="/sports" onClick={() => props.getSearch("")}>Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" to="/science" onClick={() => props.getSearch("")}>Science</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" to="/health" onClick={() => props.getSearch("")}>Health</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" to="/technology" onClick={() => props.getSearch("")}>Tech.</Link></li>
                            <li className="nav-item dropdown">
                                <button
                                    className="nav-link text-light dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >Others</button>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/weather" onClick={() => props.getSearch("")}>Weather</Link></li>
                                    <li><Link className="dropdown-item" to="/foreign" onClick={() => props.getSearch("")}>Foreign</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/aviation" onClick={() => props.getSearch("")}>Aviation</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <button
                                    className="nav-link text-light dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >Language</button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" onClick={() => props.getLanguage("en")}>English</button></li>
                                    <li><button className="dropdown-item" onClick={() => props.getLanguage("hi")}>Hindi</button></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={(e) => postSearch(e)}>
                            <input
                                className="form-control me-2"
                                type="search" name="search" value={search}
                                placeholder="Search"
                                aria-label="Search" onChange={(e) => setSearch(e.target.value)}
                            />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

