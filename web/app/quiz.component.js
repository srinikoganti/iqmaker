System.register(['angular2/core', './question.component', './question.service'], function(exports_1, context_1) {
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
    var core_1, question_component_1, question_service_1;
    var QuizComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (question_component_1_1) {
                question_component_1 = question_component_1_1;
            },
            function (question_service_1_1) {
                question_service_1 = question_service_1_1;
            }],
        execute: function() {
            QuizComponent = (function () {
                function QuizComponent(_questionService) {
                    this._questionService = _questionService;
                    this.questions = [];
                    console.log("Questions are " + this.questions[0]);
                    this.getQuestionList();
                }
                QuizComponent.prototype.getQuestionList = function () {
                    var _this = this;
                    this.error = "";
                    this.questions = [];
                    this._questionService.getQuestionList()
                        .subscribe(function (data) { return _this.questions = data; }, function (error) { return _this.error = "Couldn't get questions"; });
                };
                QuizComponent = __decorate([
                    core_1.Component({
                        directives: [question_component_1.QuestionComponent],
                        providers: [question_service_1.QuestionService],
                        templateUrl: './app/quiz.component.html',
                        selector: 'quiz'
                    }), 
                    __metadata('design:paramtypes', [question_service_1.QuestionService])
                ], QuizComponent);
                return QuizComponent;
            }());
            exports_1("QuizComponent", QuizComponent);
        }
    }
});
//# sourceMappingURL=quiz.component.js.map