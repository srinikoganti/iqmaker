System.register(['angular2/http', 'rxjs/add/operator/map', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1;
    var QuizService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            QuizService = (function () {
                function QuizService(_http) {
                    this._http = _http;
                    this.quiz = [];
                    var require;
                    //  this.quiz = require("./quiz.json");
                    this.quiz = [
                        {
                            question: "Sample questions1",
                            choices: {
                                choice1: "First choice",
                                choice2: " Second choice"
                            }
                        },
                        {
                            question: "Sample questions2",
                            choices: {
                                choice1: "First choice2",
                                choice2: " Second choice2"
                            }
                        }
                    ];
                }
                QuizService.prototype.printQuestions = function () {
                    for (var _i = 0, _a = this.quiz; _i < _a.length; _i++) {
                        var qs = _a[_i];
                        console.log(qs.question);
                        for (var key in qs.choices) {
                            console.log(key, qs.choices[key]);
                        }
                        for (var _b = 0, _c = qs.choices; _b < _c.length; _b++) {
                            var choice = _c[_b];
                            console.log(choice);
                        }
                    }
                };
                QuizService.prototype.getQuestions = function () {
                    return this._http.get("http://localhost:5000/quizlist")
                        .map(function (res) { return res.json(); });
                };
                QuizService.prototype.getChoices = function () {
                    return [];
                };
                QuizService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], QuizService);
                return QuizService;
            }());
            exports_1("QuizService", QuizService);
        }
    }
});
//# sourceMappingURL=quiz.service.js.map