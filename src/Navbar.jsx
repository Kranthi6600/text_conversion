import { Link } from "react-router-dom";


const Navbar = (props) => {
    return (

        <div>
            <nav className= {`navbar navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid d-flex">
                    <div className="">
                    <Link className="navbar-brand" to='/'> Text Conversion</Link>
                    <Link className="navbar-brand home" to='/'>Home</Link>
                    <Link className="navbar-brand about" to='/about'>Abouts</Link>
                    </div>
                    <form 
                        className="d-flex" 
                        role="search">
                        <input 
                            className="form-control me-2 outline-none" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search" />
                        <button 
                        className="btn btn-outline-secondary" 
                        type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;