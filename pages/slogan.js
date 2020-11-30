import React from 'react';

function Slogan() {
    return (

        <div className="container" style={{ backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundImage: 'url()' }}>
            {/* Primeiro bloco de itens */}
            <div className="row" style={{ marginTop: '5%' }}>
                <div className="col-md-12">
                    <h1 className="display-6" style={{ textAlign: "center", fontFamily: 'roboto' }} >Barbara Zuzarte</h1>
                    <p className="lead" style={{ textAlign: "center", fontFamily: 'roboto' }}>Fisioterapeuta 🐍⚡
                    Especializada Uroginecologia/Obstetrícia🌺
                    Instrutora Pilates clínico 🤸🏻‍♀️
                        📌 Vila da Penha/RJ</p>
                </div>
            </div>
           
        </div >
    )
}

export default Slogan;