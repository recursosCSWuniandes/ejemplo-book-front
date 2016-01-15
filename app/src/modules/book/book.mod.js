(function (ng) {
    var mod = ng.module("bookModule", ["ui.bootstrap"]);

    mod.constant("bookContext", "http://localhost:8080/BookBasico.api/api/books");

})(window.angular);
