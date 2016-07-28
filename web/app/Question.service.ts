import { Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';
import { Http } from 'angular2/http';

@Injectable()
export class QuestionService {
    questionList = [];
    endpoint_url :string = "http://localhost:5000/quizlist";

    constructor ( private _http: Http) {
        this.questionList = [ 
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

                    },
                     {
                        question:  "Sample questions3",
                        choices : {
                            choice1 : "First choice3",
                            choice2 : " Second choice3"
                        }

                    }

        ];
    }

    getQuestionList(){
        return this._http.get(this.endpoint_url).map( res => res.json());

       // return this.questionList;
    }
}