System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var QuizService;
    return {
        setters:[],
        execute: function() {
            QuizService = (function () {
                function QuizService() {
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
                    return this.quiz;
                };
                QuizService.prototype.getChoices = function () {
                    return [];
                };
                return QuizService;
            }());
            exports_1("QuizService", QuizService);
        }
    }
});
//# sourceMappingURL=quiz.service.js.map