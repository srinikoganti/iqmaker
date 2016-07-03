import {Component, Input} from 'angular2/core'

@Component({
    selector: 'question',
    template: `
    <h3> {{ mcq.question }} </h3>
  
    <li *ngFor="#key of keys();"> 
    <div class="checkbox">
          <label><input type="checkbox" (click) = "answerSelected()"  value="">{{mcq["choices"][key]}}</label>
    </div>
 
         
    </li>
    `
})
export class QuestionComponent{
@Input() mcq = {};


constructor(){
    console.log("Question is called")
}

keys() : Array<string> {
    return Object.keys(this.mcq["choices"]);
  }
answerSelected(){
    console.log("Answer selected");
}

}