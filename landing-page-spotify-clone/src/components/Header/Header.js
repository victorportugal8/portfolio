import React from "react";
import './Header.css';
import smallRight from '../../assets/small-right.png';
import smallLeft from '../../assets/small-left.png';
import search from '../../assets/search.png';

const Header = () => {
  return (
    <nav className="header__navigation">
        <div className="navigation">
            <button className="arrow-left">
                <img src={smallLeft} alt="Seta esquerda" />
            </button>
            <button className="arrow-right">
                <img src={smallRight} alt="Seta direita" />
            </button>
        </div>
        <div className="header__search">
            <img src={search} alt="Pesquisar" />
            <input id="search-input" maxLength="800" autoCorrect="off" autoCapitalize="off" spellCheck="false" placeholder="O que você quer ouvir?" />
        </div>
        <div className="header__login">
            <button className="subscribe">Inscreva-se</button>
            <button className="login">Entrar</button>
        </div>
    </nav>
  );
}
export default Header;