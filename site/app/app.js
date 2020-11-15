var app = angular.module("myApp", ["ngRoute"]);


app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/home.html",
            controller: "controllers/homeCtrl"
        })
        .when("/home", {
            templateUrl: "views/home.html",
            controller: "controllers/homeCtrl"
        }).when("/services", {
        templateUrl: "services.html",
        controller: "controllers/servicesCtrl"
    }).when("/automation", {
        templateUrl: "views/automation.html",
        controller: "controllers/automationCtrl"
    }).when("/cybersecurity", {
        templateUrl: "views/cybersecurity.html",
        controller: "controllers/cybersecurityCtrl"
    }).when("/devsecops", {
        templateUrl: "views/devsecops.html",
        controller: "controllers/devsecopsCtrl"
    }).when("/about", {
        templateUrl: "views/about.html",
        controller: "controllers/aboutCtrl"
    }).when("/spikesite", {
        templateUrl: "views/spikesite.html",
        controller: "controllers/spikesiteCtrl"
    }).when("/expert", {
        templateUrl: "views/expert.html",
        controller: "controllers/expertCtrl"
    }).when("/phishaa", {
        templateUrl: "views/phishaa.html",
        controller: "controllers/phishaaCtrl"
    }).when("/contact", {
        templateUrl: "views/contact.html",
        controller: "controllers/contactCtrl"
    }).when("/course1", {
        templateUrl: "views/course1.html",
        controller: "controllers/course1Ctrl"
    });

});
app.controller("controllers/homeCtrl", function ($scope) {
});
app.controller("controllers/contactCtrl", function ($scope) {
});

app.controller("controllers/spikesiteCtrl", function ($scope) {
});
app.controller("controllers/expertCtrl", function ($scope) {
});
app.controller("controllers/phishaaCtrl", function ($scope) {
});
app.controller("controllers/course1Ctrl", function ($scope) {
});



