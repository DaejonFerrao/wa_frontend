import "./NavBar.css"

const NavBar = () => {
    return (

        <div className="container">
            
            <div className="topnav">
                <a href="Home">Home</a>
                <a href="Register">Register</a>
                <a href="AirQuality">AirQuality</a>
                <a href="Forecast">Forecast</a>
                <a href="Health">Health</a>
            </div>
        </div>
    );
};

export default NavBar;