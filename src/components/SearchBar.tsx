import React from "react";

interface SearchBarProps {
    msg: string
}

export default function SearchBar({ msg }: SearchBarProps) {

    return (
        <div className="search-bar-container flex items-center p-0 w-99/100">
            <div>
                <nav className="navbar bg-secondary">

                    <button className="navbar-toggler" type="button"
                        data-toggle="collapse" data-target="#nav-collapse" aria-controls="nav-collapse"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="nav-collapse">
                        <ul className="navbar-nav m-auto">

                            <li className="nav-item">
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control searchBar mr-lg-2" type="search" 
                                        placeholder="Search" aria-label="Search" size="small"/>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" size="small">
                                        Search
                                    </button>
                                </form>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Filters
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">EN</a>
                                    <a className="dropdown-item" href="#">ES</a>
                                    <a className="dropdown-item" href="#">RU</a>
                                    <a className="dropdown-item" href="#">FA</a>
                                </div>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    More Filters
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Filter-One</a>
                                    <a className="dropdown-item" href="#">Filter-Two</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>
        </div>
    );
}
