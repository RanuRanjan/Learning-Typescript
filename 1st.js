// var decalre
var start = "hELLO WORLD";
// console
console.warn(start);
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.test = function () {
        console.warn("first class");
    };
    return App;
}());
var obj = new App();
obj.test();
