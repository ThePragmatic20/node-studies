const express = require('express');
const { request, response } = require('express');


const app = express();

app.use(express.json());
/*
*   Tipos de parametros:
*
*   Query Params:   Filtros & Paginação (Parametros Get)
*   Route Params:   Identifiacar recursos (Atualizar/Deletar)
*   Request Params: Conteudo na hora de criar editar um recurso (JSON)
*/

app.get('/projects', (request, response) => {
    
    const {tittle, owner} = request.query;  //Query params

    console.log(tittle);
    console.log(owner);

    return response.json([
        "Project 1",
        "Project 2",
    ]);
});

app.post('/projects', (request, response) => {
    const {tittle, owner} = request.body;

    console.log(tittle);
    console.log(owner);

 
    return response.json([
        "Project 1",
        "Project 2",
        "Project 3",
    ]);
});

app.put('/projects/:id', (request, response) => {
   
    const {id} = request.params;  // Route Params

    console.log(id);
    
    return response.json([
        "Project 4",
        "Project 2",
        "Project 3",
    ])
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        "Project 2",
        "Project 3",
    ]);
});

app.listen(3333, () => {
    console.log("🚀 Backend Started! 😅");
});
