import requests
from flask import Flask
from flask_cors import CORS

DB_API_HOST = 'localhost'
DB_API_PORT = 8001

app = Flask(__name__)
CORS(app)


@app.route('/balance/<username>')
def get_balances_by_username(username):
    url = f'http://{DB_API_HOST}:{DB_API_PORT}/balance/username/{username}'
    r = requests.get(url)
    return r.text


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
