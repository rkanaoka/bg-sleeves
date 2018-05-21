module.exports = function(app) {
  app.get("/sleeves",function(req, res) {
    res.send('PADRÃO');
  });
  app.post("/sleeves", function(req,res) {
    var jogo = req.body;
    console.log(jogo);
    res.send(jogo);
  })
}
