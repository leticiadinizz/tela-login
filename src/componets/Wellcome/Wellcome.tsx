import estilo from './Wellcome.module.css'

function wellcome(){
    return (
        <main className={estilo.princpal}>
            <p>Seja bem-vindo(a) á biblioteca</p>
            <p>Para ter uma melhor esperiência, faça o login no site</p>
        </main>
    )
}

export default wellcome;