import Cabecalho from "../../componets/Cabecalho/Cabecalho";
import Welcome from "../../componets/Wellcome/Wellcome";
import Rodape from "../../componets/Rodape/Rodape"

import TabelaAluno from "../../Tabelas/TabelaAluno/TabelaAluno";
import TabelaEmprestimo from "../../Tabelas/TabelaEmprestimo/tabelaEmprestimo";
import TabelaLivro from "../../Tabelas/TabelaLivro/TabelaLivro";

function PHome() {
    return (
        <>
            <Cabecalho />
            <TabelaEmprestimo/>
            <Rodape />
        </>
    );
}

export default PHome;