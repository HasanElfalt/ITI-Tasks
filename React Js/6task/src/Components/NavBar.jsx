import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [t, i18n] = useTranslation();
    //console.log(t);

    const objStyle={backgroundColor:"aqua" ,display:"flex", justifyContent:"space-evenly",padding:"10px"}
    return (
        <div style={objStyle}>
            <Link to='/'>{t("Home")}</Link>
            <Link to='/movies'>{t("Movies")}</Link>
            <Link to='/movies/add'>{t("AddMovie")}</Link>
            { i18n.language === "en" && <input type="button" value="AR" onClick={()=>{i18n.changeLanguage("ar")}}/>} 
            { i18n.language === "ar" && <input type="button" value="EN" onClick={()=>{i18n.changeLanguage("en")}}/>} 
        </div>
    );
};

export default NavBar;