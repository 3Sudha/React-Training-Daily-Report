import react from "react";

const Navbar =()=>{
    return(
        <nav className="ui raised very padded segment">
        <a className="ui teal inverted segment">Aapna Infotech</a>
        <div className="ui right floated header">
            <button className="ui butto">
                <a href="/Home">Home</a>
            </button>

            <button className="ui butto">
                <a href="/About">About</a>
            </button>

            <button className="ui butto">
                <a href="/Contact">Contact</a>
            </button>
        </div>



        </nav>
    )
}

export default Navbar;