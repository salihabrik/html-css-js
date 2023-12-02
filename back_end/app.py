from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/sample', methods=['GET'])
def sample_api():
    data = {'message': 'Hello from the API!'}
    return jsonify(data)

@app.route('/api/another', methods=['GET'])
def another_api():
    data = {'message': 'Another API route!'}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
