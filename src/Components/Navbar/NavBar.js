import "./NavBar.css"

// import sunny from "../../Assets/sunny.png";

const NavBar = () => {
    return (
        <div>
            <div className="container">
                <div className="topnav">
                    <a href="Home">Home</a>
                    <a href="News">News</a>
                    <a href="Contact">Contact</a>
                    <a href="About">About</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;