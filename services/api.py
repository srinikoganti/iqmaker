from flask import Flask
from flask_restful import reqparse, abort, Api, Resource
from flask_cors import CORS, cross_origin
import sys,yaml,json


import json
from pprint import pprint

app = Flask(__name__)
CORS(app)

api = Api(app)

def abort_if_todo_doesnt_exist(todo_id):
    if todo_id not in TODOS:
        abort(404, message="Todo {} doesn't exist".format(todo_id))

parser = reqparse.RequestParser()
parser.add_argument('task')


class QuizList(Resource):
    def get(self):
        with open('quiz.json') as data_file:    
            quizList = json.load(data_file)
        return quizList

    def post(self):
        args = parser.parse_args()
        todo_id = int(max(TODOS.keys()).lstrip('todo')) + 1
        todo_id = 'todo%i' % todo_id
        TODOS[todo_id] = {'task': args['task']}
        return TODOS[todo_id], 201


class Lab(Resource):
    labInfo={}
    def readConfig(self):
        print ( "Init is called")
        with open('labs.yaml', 'r') as f:
            doc = yaml.load(f)

        jsonData = json.dumps(doc,indent=4)
        
        self.labInfo = json.loads(jsonData)
        print (self.labInfo)

        
    def get(self, course_name, lab_id):
        self.readConfig()
        print ( course_name, lab_id )
        for course in self.labInfo["Courses"]:
            print ( course )
            if( course["Course"]["name"] == course_name ):       
                return course["Course"]
        return {}   

##
## Actually setup the Api resource routing here
##
api.add_resource(QuizList, '/quizlist')
api.add_resource(Lab, '/lab/<course_name>/<lab_id>')
#api.add_resource(Todo, '/todos/<todo_id>')


if __name__ == '__main__':
    app.run(debug=True, threaded=True)
