window.bee = {
  versao: "1.0.0",
  initialize: function(){
    // Cria a tabela, para armazenar a data e hora que o app foi inicializado
    mydb.query("CREATE TABLE IF NOT EXISTS beeApp (id INTEGER PRIMARY KEY AUTOINCREMENT, data TIMESTAMP DEFAULT CURRENT_TIMESTAMP)", function(data){
      console.log(data);
    });
    // Verifica se o app foi inicializado alguma vez
    mydb.selectAll("beeApp", function(data){
      if(data.length > 0){
        console.log("APP Inicializado");
        bee.checkUser();
      }else{
        console.log("APP não Inicializado");
        bee.setsDB(); // Seta as principais configurações
      }
    });
  },
  // Função para verificar se existe usuário cadastrado
  checkUser: function(){
    mydb.selectAll("usuarios", function(usuarios){
      if(usuarios.length > 0){
        console.log(";-)\n\rUsuário cadastrado");
        navigator.notification.alert(";-)\n\rUsuário está cadastrado", "", "Atenção", "Ok");
      }else{
        console.log(":-(\n\rUsuário não cadastrado");
        navigator.notification.alert(":-(\n\rUsuário não está cadastrado", "", "Atenção", "Ok");
      }
    });
  },
  // Função para inserir as primeiras tabelas e dados padrão
  setsDB: function(){
    console.log("Inicializando APP");
    // Cria as tabelas
    mydb.query("CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(45), email VARCHAR(145), sexo VARCHAR(20), celular VARCHAR(15))", function(result){});
    mydb.query("CREATE TABLE IF NOT EXISTS tipos (id INTEGER PRIMARY KEY AUTOINCREMENT, descricao VARCHAR(45), cor VARCHAR(7), operador CHAR(1))", function(result){});
    mydb.query("CREATE TABLE IF NOT EXISTS contas (id INTEGER PRIMARY KEY AUTOINCREMENT, descricao VARCHAR(45))", function(result){});
    mydb.query("CREATE TABLE IF NOT EXISTS lancamentos (id INTEGER PRIMARY KEY AUTOINCREMENT, valor DECIMAL(5,2), data DATE, descricao VARCHAR(45), observacao TINYTEXT, lancamentoId INT, tipoId INT, contaId INT, usuarioCadastro INT, dataCadastro TIMESTAMP, usuarioAtualizacao INT, dataAtualizacao TIMESTAMP)", function(result){});
    // Tipos de Lançamento
    var tiposLancamento = [
      {"id":1, "descricao":"Receita", "cor":"#009688", "operador":"+"},
      {"id":2,"descricao":"Despesa", "cor":"#F44336", "operador":"-"}
    ];
    // Insere os tipos no BD
    $.each(tiposLancamento, function(i, tipo) {
      mydb.replace('tipos', tipo, function(){});
    });
    // Contas
    var contas = [
      {"id":1, "descricao":"Pessoal"},
      {"id":2, "descricao":"Casa"}
    ];
    // Insere Contas no BD
    $.each(contas, function(i, conta) {
      mydb.replace('contas', conta, function(){});
    });
    mydb.insert("beeApp", {"id":1}, function(data){
      console.log(data);
      bee.initialize();
    });
  },
  //Função para Sair do APP
  closeApp: function(){
    myApp.confirm('Deseja sair do APP?', 'Atenção', function () {
      //console.log("Saindo");
      navigator.app.clearHistory();
      navigator.app.exitApp();
    });
  }
}
