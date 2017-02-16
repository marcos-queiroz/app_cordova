
window.app = {
  // Construtor de Aplicações
  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  // deviceready Manipulador de eventos
  //
  // Ligue quaisquer eventos cordova aqui. Eventos comuns são:
  // 'pause', 'resume', etc.
  onDeviceReady: function() {
    this.receivedEvent('starApp');
  },

  // Atualizar DOM em um Evento Recebido
  receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
    console.log('Evento recebido: ' + id);

    mydb.initialize(function(status){
      if(status){
        console.log("mydb.initialize");
        app.starApp();
      }else{
        myApp.hidePreloader();
        console.log("Erro ao inicializar o mydb");
      }
    });
  },

  starApp: function(){
    console.log("starApp");
    app.checkBanco(function(result){
      if(result){
        console.log("Tipos de lançamentos cadastrados.");
      }else{
        app.configuraBanco();
      }
    });
    // checa se existe usuárecebido
    app.checkUsuario(function(result){
      if(result.length > 0){
        console.log("Existe usuário");
        mainView.router.loadPage('view/home.html');
      }else{
        console.log("Não existe usuário");
        mainView.router.loadPage('view/cadastroUsuario.html');
      }
    });
    myApp.hidePreloader();;
  },
  // Verifica se existe os tipos de lançamentos cadastrados
  checkBanco: function(callback) {
    mydb.selectAll("tipos", function(result){
      if(result.length > 0){
        callback(true);
      }else{
        callback(false);
      }
    });
  },
  // Configura o BD com as configurações iniciais
  configuraBanco: function() {
    // Cria as tabelas
    mydb.query("CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(45), email VARCHAR(145), sexo VARCHAR(20), senha VARCHAR(32), celular VARCHAR(15))", function(result){});
    mydb.query("CREATE TABLE IF NOT EXISTS tipos (id INTEGER PRIMARY KEY AUTOINCREMENT, descricao VARCHAR(45), cor VARCHAR(7), operador CHAR(1))", function(result){});
    mydb.query("CREATE TABLE IF NOT EXISTS contas (id INTEGER PRIMARY KEY AUTOINCREMENT, descricao VARCHAR(45))", function(result){});
    mydb.query("CREATE TABLE IF NOT EXISTS lancamentos (id INTEGER PRIMARY KEY AUTOINCREMENT, valor DECIMAL(5,2), data DATE, descricao VARCHAR(45), observacao TINYTEXT, lancamentoId INT, tipoId INT, contaId INT, usuarioCadastro INT, dataCadastro TIMESTAMP, usuarioAtualizacao INT, dataAtualizacao TIMESTAMP)", function(result){});

    // Tipos de Lançamento
    var tiposLancamento = [
      {"id":1, "descricao":"Receita", "cor":"#009688", "operador":"+"},
      {"id":2,"descricao":"Despesa", "cor":"#F44336", "operador":"-"}
    ];

    // Insere os tipos no BD
    $$.each(tiposLancamento, function(i, tipo) {
      mydb.replace('tipos', tipo, function(){});
    });

    // Contas
    var contas = [
      {"id":1, "descricao":"Pessoal"},
      {"id":2, "descricao":"Casa"}
    ];

    // Insere as Contas no BD
    $$.each(contas, function(i, conta) {
      mydb.replace('contas', conta, function(){});
    });
  },
  // Função para verificar se existe usuario cadastrados
  checkUsuario: function(callback){
    mydb.selectAll("usuarios", function(result){
      callback(result);
    });
  },
  // Cadastro de usuario
  cadastraUsuario: function(){

  }
};

app.initialize();
