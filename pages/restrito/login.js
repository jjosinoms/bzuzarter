import paginaInicial from '../paginaInicial'
function Login() {
    return (
        <div className="container">
            <paginaInicial />
            <div className="row">
                <div className="col-md-12" style={{ textAlign: "center" }}>
                    <form className="form-signin">
                        <img className="mb-4" src="https://jonz.com.br/bzuzarte/logo_Barbara.png" width="200" height="200" />
                        <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Login</span>
                            </div>
                            <input id="login" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Senha</span>
                            </div>
                            <input id="senha" type="passworld" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                        </div><br></br>
                        <button className="btn btn-lg btn-primary btn-block" onClick={verificarLogin}  >Entrar</button>
                        <br></br>
                        <p id="mensagemErro" style={{ color: 'red', display: 'none' }}>Login e/ou senha incorretos</p>
                        <p className="mt-5 mb-3 text-muted">© 2020</p>

                    </form>
                </div>
            </div>

        </div>
    )
}

function verificarLogin() {
    const meuEmail = 'bzuzarte92@gmail.com';
    const minhaEntrada = 'internet';

    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;

    if (meuEmail == login && minhaEntrada == senha) {
        console.log("acesso concedido!");
    } else {
        let mensagemErro = document.getElementById('mensagemErro');
        mensagemErro.style.display = 'block';
        location.reload();

    }




    // localStorage.setItem("Login", login);
    // localStorage.setItem("Senha", senha);
    // Retrieve
    //document.getElementById("result").innerHTML = localStorage.getItem("Login");


    // $(document).ready(function () {

    // });
}



export default Login