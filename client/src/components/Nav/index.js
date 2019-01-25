import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-dark navbar-expand-md navigation-clean nav-color">
    <div className="container text-light"><a className="navbar-brand text-light" href="/">Google Books</a>
      <button className="navbar-toggler text-light" data-toggle="collapse" data-target="#navcol-1">
        <span className="sr-only">Toggle navigation</span>
        <span className="navbar-toggler-icon"></span>
      </button>
        <div
            className="collapse navbar-collapse d-xl-flex" id="navcol-1">
            <ul className="nav navbar-nav ml-auto">
                <li className="nav-item" role="presentation">
                  <a className="nav-link active d-xl-flex text-light" href="/">Search</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link  text-light" href="/saved">Saved</a>
                </li>
            </ul>
    </div>
</div>
</nav>
  );
}

export default Nav;
