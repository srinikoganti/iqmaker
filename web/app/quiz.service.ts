
export class QuizService{
    quiz = [];
  

    constructor(){
       
        var require: any
      //  this.quiz = require("./quiz.json");
    
        this.quiz = [
                    {
                        question:  "Sample questions1",
                        choices : {
                            choice1 : "First choice",
                            choice2 : " Second choice"
                        }
                    },
                    {
                        question:  "Sample questions2",
                        choices : {
                            choice1 : "First choice2",
                            choice2 : " Second choice2"
                        }

                    }
        ];
        
    }

    printQuestions(){
    
       
        
        for (var qs of this.quiz) {
            console.log(qs.question);
            for ( var key in qs.choices){
                console.log( key, qs.choices[key] )
            }
            for ( var choice of qs.choices){
                console.log( choice);
            }
        }
    }

    getQuestions(){
        return this.quiz;
    }
    getChoices():string[]{
        return [];
    }
}