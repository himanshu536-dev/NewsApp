import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            search: ""
        }
    }
    postSearch(e) {
        e.preventDefault()
        this.props.getSearch(this.state.search)
        this.setState({ search: "" })
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-primary sticky-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-light" to="/" onClick={() => this.props.getSearch("")}>NEWSAPP</Link>
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
                                <li className="nav-item"><Link className="nav-link text-light active" aria-current="page" to="/all" onClick={() => this.props.getSearch("")}>All</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/entertainment" onClick={() => this.props.getSearch("")}>Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/education" onClick={() => this.props.getSearch("")}>Education</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/sports" onClick={() => this.props.getSearch("")}>Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/science" onClick={() => this.props.getSearch("")}>Science</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/health" onClick={() => this.props.getSearch("")}>Health</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/technology" onClick={() => this.props.getSearch("")}>Tech.</Link></li>
                                <li className="nav-item dropdown">
                                    <button
                                        className="nav-link text-light dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >Others</button>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/weather" onClick={() => this.props.getSearch("")}>Weather</Link></li>
                                        <li><Link className="dropdown-item" to="/foreign" onClick={() => this.props.getSearch("")}>Foreign</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" to="/aviation" onClick={() => this.props.getSearch("")}>Aviation</Link></li>
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
                                        <li><button className="dropdown-item" onClick={() => this.props.getLanguage("en")}>English</button></li>
                                        <li><button className="dropdown-item" onClick={() => this.props.getLanguage("hi")}>Hindi</button></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex" role="search" onSubmit={(e) => this.postSearch(e)}>
                                <input
                                    className="form-control me-2"
                                    type="search" name="search" value={this.state.search}
                                    placeholder="Search"
                                    aria-label="Search" onChange={(e) => this.setState({ search: e.target.value })}
                                />
                                <button className="btn btn-outline-light" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
