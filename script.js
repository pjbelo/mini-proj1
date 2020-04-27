
// criar o módulo e incluir ngRoute
var myApp = angular.module('myApp', ['ngRoute']);

// configuração das rotas
myApp.config(function($routeProvider) {
    $routeProvider

        // rota para a página 'Quem sou eu?'
        .when('/', {
            templateUrl : 'pages/eu.html'

        })

        // rota para a página 'O que faço?'
        .when('/sobre', {
            templateUrl : 'pages/sobre.html'
        })

        // rota para a página 'Hobbies'
        .when('/hobbies', {
            templateUrl : 'pages/hobbies.html'
        });
});
    

    


        