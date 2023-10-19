routes.tipo("nome_da_rota", auth,metodo)


routes.get("/", async (req,res) => {
        try {
          const result = await client.query('SELECT * FROM pessoas');
          res.json(result.rows)
        } catch (err) {
          console.error('Erro na consulta:', err);
          return res.sendStatus(400)
        }
})

routes.post("/", async (req,res) => {
  try {
    const {userName, age, city} = req.body
    await client.query(
      `INSERT INTO pessoas ("nome", "idade", "cidade")  
       VALUES ($1, $2, $3)`, [userName, age, city]); // sends queries
  
    return res.sendStatus(200)
  } catch (err) {
    console.error('Erro na consulta:', err);
    return res.sendStatus(400)
  }
})

routes.delete("/:id", async (req,res) => {
  try {
    const {id} = req.params
    await client.query(`DELETE FROM pessoas WHERE id = ${id}`); // sends queries
        
    return res.sendStatus(200)
  } catch (err) {
    console.error('Erro na consulta:', err);
    return res.sendStatus(400)
  }
})

routes.put("/:id", async (req,res) => {
  try {
    const {id} = req.params
    const {userName,age,city} = req.body;
    await client.query(`UPDATE pessoas SET "nome" =($1), "idade"=($2), "cidade"=($3) WHERE id = ${id}`,[userName,age,city]); // sends queries
        
    return res.sendStatus(200)
  } catch (err) {
    console.error('Erro na consulta:', err);
    return res.sendStatus(400)
  }
})

module.exports = routes