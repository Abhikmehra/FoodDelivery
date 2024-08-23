import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const [location, setLocation] = useState({ lat: null, lon: null, city: null });
  const navigate = useNavigate();

  const API_KEY = "AIzaSyCLTYuZcI5HHh7SyjtI_GJmIsapVRzs6ic";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lon: longitude });

        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`)
          .then(response => response.json())
          .then(data => {
            console.log(data); // Log the API response
            if (data.results.length > 0) {
              const addressComponents = data.results[0].address_components;
              const cityComponent = addressComponents.find(component => component.types.includes("locality"));
              const cityName = cityComponent ? cityComponent.long_name : "City not found";
              setLocation(prevLocation => ({
                ...prevLocation,
                city: cityName
              }));
            } else {
              setLocation(prevLocation => ({
                ...prevLocation,
                city: "City not found"
              }));
            }
          })
          .catch(error => {
            console.error("Error fetching city name: ", error);
            setLocation(prevLocation => ({
              ...prevLocation,
              city: "City not found"
            }));
          });
      },
      (error) => {
        console.error("Error getting location: ", error);
        setLocation(prevLocation => ({
          ...prevLocation,
          city: "City not found"
        }));
      }
    );
  }, [API_KEY]);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="log" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => {
            setMenu("home");
          }}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => {
            setMenu("menu");
          }}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#footer"
          onClick={() => {
            setMenu("contact-us");
          }}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="current-location">
        <p>
          {location.city && <span className="city">{location.city}, </span>}
          Lat: {location.lat ? location.lat.toFixed(2) : "N/A"}, Lon: {location.lon ? location.lon.toFixed(2) : "N/A"}
        </p>
      </div>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign-in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
