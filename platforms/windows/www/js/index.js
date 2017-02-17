// This state represents the state of our application and will be saved and
// restored by onResume() and onPause()
var appState = {
  takingPicture: true,
  imageUri: ""
};

var APP_STORAGE_KEY = "AppCordova";

var app = {
  initialize: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    // Here we register our callbacks for the lifecycle events we care about
    document.addEventListener('deviceready', this.onDeviceReady, false);
    document.addEventListener('pause', this.onPause, false);
    document.addEventListener('resume', this.onResume, false);
    document.addEventListener('exit', this.onExit, false);
    document.addEventListener("backbutton", this.onBackbutton, false);
  },
  onDeviceReady: function() {
    console.log("App rodando...");
    mydb.initialize(function(result){
      if(result){
        console.log("DB inicializada...");
        bee.initialize();
      }else{
        console.log("DB não inicializada...");
      }
    });
  },
  onPause: function() {
    console.log("App em pause...");
  },
  onResume: function(event) {
    console.log("App retornando...");
  },
  onExit: function(event) {
    console.log("Saindo do App...");
    navigator.notification.alert("Saindo do App...", "", "Atenção", "Ok");
  },
  onBackbutton: function(e){
    // Recebe a pagina atual
    var page = myApp.getCurrentView().activePage;
    //myApp.hidePreloader();// esconde o preloader
    // Se estiver no index chama a função CLOSEAPP
    if(page.name == "index"){
      e.preventDefault();
      bee.closeApp()
    }
    // Se não, volta para a pagina anterior
    else {
      //console.log("Voltando");
      navigator.app.backHistory();
    }
  }
}

app.initialize();

$$(document).on('page:init', function (e) {
    var page = e.detail.page;
    // Code for About page
    if (page.name === 'about') {
        $$(page.container).find("#teste").html("<h1>Teste de inserção no Windows</h1>");
    }
});