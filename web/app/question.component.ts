import {Component, Input} from "angular2/core"

@Component ({
    selector: "question",
    templateUrl: './app/question.component.html'

})

export class QuestionComponent {

@Input() question = {};
            
    constructor(){
        console.log("Question component is called");
        console.log(this.question.question);
    }

keys() : Array<string> {
    return Object.keys(this.question.choices);
}

}
