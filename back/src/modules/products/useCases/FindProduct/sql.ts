export const sql = (codproduto?: string) => `
    SELECT 
        P.CODPRODUTO,
        P.CODGRUPO,
        P.CODBARRA,
        P.DESCRICAO,
        P.PRECOVENDA,
        P.OBSERVACAO,
        G.NOME
    FROM PRODUTO P
    INNER JOIN GRUPO G ON  G.CODGRUPO = P.CODGRUPO
    WHERE P.SITUACAO = "NORMAL"
    AND P.ATIVO = "S"
    AND P.CODPRODUTO = ${codproduto}
    `;
