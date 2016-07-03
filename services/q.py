#!/usr/bin/python

import sys, getopt
import json




def toJson( inputfile):
    file = open(inputfile, "r");
    quizList = []
    quiz= {}
    choice = {}

    try:
        line = file.readline()

        while True:
            line = line.strip()
            if( line.startswith("==END==")):
                        break;
            if( line.startswith("===")): 
                quiz = {} 
                choices = {}
                #print ( "{ "  )
                #print ( "\"question \"" + ":"  + " \""  + line + "\"" +  "," )
                #print ( "\"choices\" : { "  )
                
                quiz["question"] = line.rstrip("=").lstrip("=")
           


                line = file.readline()
                InQuestion = True

                while InQuestion:
                   
                    if( line.startswith("==END==")):
                        break;
                    if( line.startswith("===")):
                        InQuestion = False
                    else:
                        if( line.startswith("A.") or line.startswith("B.") or line.startswith("C.") or line.startswith("D.") or line.startswith("E.")):
                            choice, *value  = line.split()
                            choices[choice ] = str.join(' ',value)
                            #print ( "\"" + choice + "\" : \"" + str.join('.', value) +  " \" ," )
                    line = file.readline()
                    if( line.startswith("==END==")):
                        print ( json.dumps(quizList,  indent=4, sort_keys=True ) )
                        break;
                    if( line.startswith("===")):
                        InQuestion = False

                quiz["choices"] = choices
                quizList.append(quiz)

            

    except(StopIteration):
        pass

def main(argv):
   inputfile = ''
   outputfile = ''
   try:
      opts, args = getopt.getopt(argv,"hi:o:",["ifile=","ofile="])
   except getopt.GetoptError:
      print ( 'test.py -i <inputfile> -o <outputfile>' )
      sys.exit(2)
   for opt, arg in opts:
      if opt == '-h':
         print ( 'test.py -i <inputfile> -o <outputfile>' )
         sys.exit()
      elif opt in ("-i", "--ifile"):
         inputfile = arg
      elif opt in ("-o", "--ofile"):
         outputfile = arg

   toJson(inputfile)



if __name__ == "__main__":
   main(sys.argv[1:])