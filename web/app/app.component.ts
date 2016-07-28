import {Component} from 'angular2/core';
import { QuestionComponent} from './question.component';
import {QuizComponent}  from './quiz.component';

@Component({
    directives : [ QuestionComponent, QuizComponent],
    selector: 'my-app',
    templateUrl: './app/app.component.html'

})
export class AppComponent {
    username: string;

    constructor(){
        this.username = "test";
    }

    usernameChanged(){
        console.log( "username is  changed" + this.username);
    }
 }