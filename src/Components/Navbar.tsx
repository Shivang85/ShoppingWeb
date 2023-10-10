import './Navbar.css';

function Navbar() {
  return (
    <><div>
      {/* <h3 className="font-italic"><a className='display-5 '>Myntra</a></h3> */}
        <nav className="navbar navbar-light">
        
        <form className="form">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
        </form>

        <p className='icon'><a>Myntra</a></p>
        </nav>
        </div>
    </>
  );
}
export default Navbar;