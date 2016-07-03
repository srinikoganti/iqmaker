import {Component} from 'angular2/core'
import {QuestionComponent} from './question.component'
import {QuizService} from './quiz.service'
import {HTTP_PROVIDERS} from 'angular2/http'

@Component({
    selector: 'quiz',
    template : 
       `
       <ul>
        <li *ngFor = "#que of questions">
        <question [mcq] =  "que" > </question> 
        </li>
       </ul>
       `,
    directives: [ QuestionComponent ],
    providers: [QuizService,HTTP_PROVIDERS]
})
export class QuizComponent {

questions = [];

constructor(quizList : QuizService ){
    console.log("Quiz is called");
    
    

    for (var qs of this.questions) {
            console.log(qs.question);
            for ( var key in qs.choices){
                console.log( key, qs.choices[key] )
            }
            for ( var choice of qs.choices){
                console.log( choice);
            }
        }
   
}
qu = {
    question : "Sample question 99 ",
    choice1 : "Answer choice 1"
}

}