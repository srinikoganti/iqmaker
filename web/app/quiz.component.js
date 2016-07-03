System.register(['angular2/core', './question.component', './quiz.service', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, question_component_1, quiz_service_1, http_1;
    var QuizComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (question_component_1_1) {
                question_component_1 = question_component_1_1;
            },
            function (quiz_service_1_1) {
                quiz_service_1 = quiz_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            QuizComponent = (function () {
                function QuizComponent(quizList) {
                    this.questions = [];
                    this.qu = {
                        question: "Sample question 99 ",
                        choice1: "Answer choice 1"
                    };
                    console.log("Quiz is called");
                    for (var _i = 0, _a = this.questions; _i < _a.length; _i++) {
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
                }
                QuizComponent = __decorate([
                    core_1.Component({
                        selector: 'quiz',
                        template: "\n       <ul>\n        <li *ngFor = \"#que of questions\">\n        <question [mcq] =  \"que\" > </question> \n        </li>\n       </ul>\n       ",
                        directives: [question_component_1.QuestionComponent],
                        providers: [quiz_service_1.QuizService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [quiz_service_1.QuizService])
                ], QuizComponent);
                return QuizComponent;
            }());
            exports_1("QuizComponent", QuizComponent);
        }
    }
});
//# sourceMappingURL=quiz.component.js.map