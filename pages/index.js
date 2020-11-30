// import { useState } from 'react';
import PaginaInicial from './paginaInicial/paginaInicial';


function Home() {
    return (
        <div >

            <PaginaInicial />

            {/* <div className="row">
                <Contador />
            </div> */}


        </div>
    )
}

// function Contador() {
//     const [contador, setContador] = useState(1);
//     function adicionarContador() {
//         setContador(contador + 1);
//     }
//     return (
//         <div>
//             {contador} <br></br>
//             <button className="btn btn-success" onClick={adicionarContador}> Adicionar</button>
//         </div>

//     )
// }

export default Home;