# app_cordova

    Aplicativo Mobile Cordova, para o FrontEnd foi escolhido o Framework7.
    Documentação do cordova: http://cordova.apache.org/

## O projeto está em fase inicial.

    A estrutura inical do projeto

├──beeFinanceiro/<br>
| ├── www/<br>
| | ├── bower_components/<br>
| | | |── framework/<br>
| | | | └── dist/<br>
| | | | | └── css/<br>
| | | | | | |── framework7.ios.colors.css<br>
| | | | | | |── framework7.ios.colors.min.css<br>
| | | | | | |── framework7.ios.css<br>
| | | | | | |── framework7.ios.min.css<br>
| | | | | | |── framework7.ios.rtl.css<br>
| | | | | | |── framework7.ios.rtl.min.css<br>
| | | | | | |── framework7.material.colors.css<br>
| | | | | | |── framework7.material.colors.min.css<br>
| | | | | | |── framework7.material.css<br>
| | | | | | |── framework7.material.min.css<br>
| | | | | | |── framework7.material.rtl.css<br>
| | | | | | |── framework7.material.rtl.min.css<br>
| | | | | | └── my-app.css<br>
| | | | | └── img/<br>
| | | | | | |── i-f7-ios.png<br>
| | | | | | └── i-f7-material.png<br>
| | | | | └── js/<br>
| | | | | | |── framework7.js<br>
| | | | | | |── framework7.js.map<br>
| | | | | | |── framework7.min.js<br>
| | | | | | |── framework7.min.js.map<br>
| | | | | | └── my-app.js<br>
| | | |── jquery/<br>
| | | | | └── dist/<br>
| | | | | | |── core.js<br>
| | | | | | |── jquery.js<br>
| | | | | | |── jquery.min.js<br>
| | | | | | |── jquery.min.map<br>
| | | | | | |── jquery.slim.js<br>
| | | | | | |── jquery.slim.min.js<br>
| | | | | | └── jquery.slim.min.map<br>
| | | └── material-icons/<br>
| | | | |── css/<br>
| | | | | | |── material-icons.css<br>
| | | | | | └── material-icons.min.css<br>
| | | | └── src/<br>
| | | | | | └── map.js<br>
| | ├── css/<br>
| | │ └── index.css<br>
| | ├── js/<br>
| | | └── model/<br>
| | | | └── mydb.js<br>
| | │ └── index.js<br>
| | └── img/<br>
| └── index.html<br>
    
## bower

    Componentes instalados pelo Bower
  * framework7 
        Doumentação: https://framework7.io/
  * jquery
        Documentação: https://jquery.com/
  * material-icons
        Documentação: https://material.io/icons/
        
## Bando de Dados

    Nesse projeto, utilizaremos o WEB SQL para armazenar os dados off-line , para mais informações consulte: http://cordova.apache.org/docs/en/6.x/cordova/storage/storage.html#websql
