import { useEffect, useState } from "react";
import LivroRequests from "../../fetch/LivroRequests";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";

function TabelaLivro() {
    const [livros, setLivros] = useState([]);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-refresh" text />;

    useEffect(() => {
        const fetchLivros = async () => {
            try {
                const listaDeLivros = await LivroRequests.listarLivros();
                console.log("Livros recebidos:", listaDeLivros);
                setLivros(listaDeLivros);
            } catch (error) {
                console.error(`Erro ao buscar livros: ${error}`);
            }
        };

        fetchLivros();
    }, []); 

    return (
        <>
            <DataTable
              currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
              <Column field="aluno.nome" header="Nome do Aluno" style={{ width: '25%' }}></Column>
              <Column field="tituloLivro" header="Nome do Livro" style={{ width: '25%' }}></Column>
              <Column field="dataEmprestimo" header="Data de Emprestimo" style={{ width: '25%' }}></Column>
              <Column field="dataDevolucao" header="Data de Devolução" style={{ width: '25%' }}></Column>
              <Column field="statusEmprestimo" header="Status de Emprestimo" style={{ width: '25%' }}></Column>
            </DataTable>
        </>
    );
}

export default TabelaLivro;
