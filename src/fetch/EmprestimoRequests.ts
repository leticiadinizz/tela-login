import { SERVER_CFG } from '../appConfig';

export class EmprestimoRequests {

    private serverURL;
    private routeListaEmprestimo;
    private routeCadastraEmprestimo;
    private routeAtualizaEmprestimo;
    private routeRemoveEmprestimo;

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListaEmprestimo = '/lista/emprestimo';
        this.routeCadastraEmprestimo = '/novo/emprestimo';
        this.routeAtualizaEmprestimo = '/atualiza/emprestimo';
        this.routeRemoveEmprestimo = '/remove/Emprestimo';
    }

/**
 * função que busca ,ista de emprestimos na api
 * @returns Lista com os emprestimos cadastrados no sistema
 */

    async listarEmprestimos(){
        try{
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaEmprestimo}`);

            if(respostaAPI.ok){
             const listadeEmprestimos = await respostaAPI.json();
             return listadeEmprestimos;
            }
        }catch (error){
            console.log('Erro ao fazer a consulta: ${error}');
            return null;
        }
    }
}

export default new EmprestimoRequests;