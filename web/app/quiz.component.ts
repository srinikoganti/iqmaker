import { Component, Input } from 'angular2/core';
import { QuestionComponent} from './question.component';
import {QuestionService} from './question.service';

@Component({
    directives: [ QuestionComponent],
    providers: [ QuestionService ],
    templateUrl: './app/quiz.component.html',
    selector: 'quiz'
})

export class QuizComponent {
    questions = []

    constructor(private _questionService: QuestionService){
        
       
        console.log( "Questions are " + this.questions[0]);
        this.getQuestionList();

    }

    getQuestionList(){
        this.error = "";
        this.questions = [];
        this._questionService.getQuestionList()
         .subscribe(
            data => this.questions = data,
            error => this.error = "Couldn't get questions"
         );
    }

}
