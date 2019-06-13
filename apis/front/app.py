import logging
import json
import requests
from flask import Flask, request
from flask_cors import CORS
from operator import itemgetter

DB_API_HOST = 'localhost'
DB_API_PORT = 8001

logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                    level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)


@app.route('/balance', methods=['POST'])
def get_balances():
    body = request.get_json()
    username, password = itemgetter('username', 'password')(body)
    logger.info(f'({username}, {password})')

    url = f'http://{DB_API_HOST}:{DB_API_PORT}/account'
    r = requests.get(url)
    accounts = json.loads(r.text)

    if [username, password] not in accounts:
        return 'Account not found', 404

    url = f'http://{DB_API_HOST}:{DB_API_PORT}/balance/username/{username}'
    r = requests.get(url)
    return r.text


@app.route('/balance/demo')
def get_demo_balances():
    logger.info('Demo')

    url = f'http://{DB_API_HOST}:{DB_API_PORT}/balance/username/20000173'
    r = requests.get(url)
    return r.text


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)