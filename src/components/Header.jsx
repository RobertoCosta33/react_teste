import React from "react";
import { Nav } from "./Nav";

export const Header = () => {
    return (
        <header className='header'>
            <h1>Restaurante do Romero</h1>
            <input type="search" name="search" id="search" placeholder='Faça aqui a sua busca...'/>
            <Nav/>
        </header>
    );
}