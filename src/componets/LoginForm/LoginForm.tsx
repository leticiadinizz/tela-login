import estilo from './LoginForm.module.css';

function LoginForm(){
    return(
        <section className={estilo['form-section']}>
            <h3>LOGIN</h3>

            <form action="" className={estilo['form-login']}>
                <label>
                    E-mail
                    <input
                     type="email" 
                    placeholder='Informe o seu e-mail'/>
                </label>
                <label>
                    Senha
                    <input 
                     type="password"
                    placeholder='Informe sua senha' />
                </label>

                <input 
                type="button" 
                value="Entrar" 
                className={estilo['input-button-login']}/>
            </form>
        </section>
    );
}

export default LoginForm;