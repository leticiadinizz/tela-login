import { SERVER_CFG } from '../appConfig';

export class AlunoRequests {

    private serverURL;
    private routeListaLivro;
    private routeCadastroLivro;
    private routeAtualizaLivro;
    private routeRemoveLivro;

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListaLivro = '/lista/livro';
        this.routeCadastroLivro = '/novo/livro';
        this.routeAtualizaLivro = '/atualiza/livro';
        this.routeRemoveLivro = '/remove/livro';
    }

/**
 * função que busca ,ista de livros na api
 * @returns Lista com os livros cadastrados no sistema
 */

    async listarLivros(){
        try{
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaLivro}`);

            if(respostaAPI.ok){
             const listadeLivros = await respostaAPI.json();
             return listadeLivros;
            }
        }catch (error){
            console.log('Erro ao fazer a consulta: ${error}');
            return null;
        }
    }
}

export default new AlunoRequests;