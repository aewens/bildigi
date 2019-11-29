#!env/bin/python3

from flask import Flask, render_template, jsonify

app = Flask(__name__, static_folder="../static", 
    template_folder="../templates")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/v1")
def api_v1():
    return jsonify({
        "version": 1
    })

if __name__ == "__main__":
    app.run()
