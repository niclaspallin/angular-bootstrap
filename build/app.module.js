!function(){"use strict";var t="./src/client/app/";angular.module("app",["ngRoute","ui.bootstrap","app.core","app.widgets","app.layout","app.contact","app.customers"]).config(["$routeProvider",function(o){o.when("/customers",{templateUrl:t+"customers/customers.html",controller:"Customers",controllerAs:"cust"}).when("/contact",{templateUrl:t+"contact/contact.html",controller:"Contact",controllerAs:"cont"})}])}();