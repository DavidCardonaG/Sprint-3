import React from 'react';
const App = () => {
    return (
        <div>
            <div className="items">
                <button id="one" className="btn-items"><i id="fas" class="fas fa-bars"></i>Todo</button>
                <button className="btn-items">Tarjeta de Regalo</button>
                <button className="btn-items">Prime</button>
                <button className="btn-items">Lo Más Vendido</button>
                <button className="btn-items">Amazonas Basics</button>
                <button className="btn-items">Cómputo y Tabletas</button>
                <button className="btn-items">Los Más Regalados</button>

            </div>
            <h1 className="title">AMAZONAS</h1>
            <p className="description">Design By David</p>
            
        </div>
    )
}

export default App;
