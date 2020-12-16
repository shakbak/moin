from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
@app.route("/index")
@app.route("/home")
def hello():
	return render_template('index.html')

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/blog")
def blog():
    return render_template('blog.html')

@app.route("/contact")
def contact():
    return render_template('contact.html')

@app.route("/json")
def json():
    return render_template('json.html')

@app.route("/login")
def login():
    return render_template('login.html')

@app.route("/registration")
def registration():
    return render_template('registration.html')

@app.route("/login/<login_id>")
def loginpost(login_id):
   return render_template('login.html') + login_id


app.run( debug=True )



