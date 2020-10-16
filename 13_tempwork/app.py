
#The Blob Seizure Crew - Helena Williams, Ishita Gupta, Jessica Yeung
#SoftDev
#K13 -- Template for Success: the CSS gets worse. Helena's teammates cry.
#2020-10-15

from flask import Flask, render_template #Q0: What happens if you remove render_template from this line?
import random
app = Flask(__name__)

@app.route("/")
def hello_world():
    return "No hablo queso!"


@app.route("/occupyflaskst") #Q1: Can all of your teammates confidently predict the URL to use to load this page?
def test_tmplt():
    jobsPercentages = {}

    occupations = open("data/occupations.csv")
    for line in occupations:
        if line.startswith("Job Class") or line.startswith("Total"): continue
        line = line.strip().split(",")
        jobTitle = "".join(line[:-1])
        percentage = float(line[-1])
        jobsPercentages[jobTitle] = percentage
    code=((random.choices(list(jobsPercentages.keys()), weights=list(jobsPercentages.values()), k=1))[0])
    table="<marquee><t style='color:yellow;'><br><table style='width:50%'; border='1px'><b><i><tr><th>Job CLASS because Ishita said so</th><th>Percentage</th></tr>"
    for i in jobsPercentages:
        table+="<tr><td>"+i+"</td><td>"+str(jobsPercentages[i])+"</td></tr>"
    table+="<i><b></table></t></marquee>"
    return (render_template('tablified.html')+code+table) #Q2: What is the significance of each argument?

if __name__ == "__main__":
    app.debug = True
    app.run()
