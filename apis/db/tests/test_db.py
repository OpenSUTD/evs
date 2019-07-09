import time
import docker
from psycopg2 import OperationalError
from unittest import TestCase
from psql import (get_connection,
                  get_accounts, insert_account)


class TestDatabase(TestCase):
    def test_connection(self):
        conn = get_connection()
        self.assertTrue(conn)

    def test_account(self):
        # empty on start
        result = get_accounts()
        self.assertEqual(result, [])

        # correct insertion
        data = [
            ('12345678', 'password'),
            ('12341234', 'pass1234'),
        ]
        for account in data:
            insert_account(*account)

        result = get_accounts()
        self.assertEqual(result, data)

        # repeated insertion
        data.append(('43214321', 'pass4321'))
        for account in data:
            insert_account(*account)

        result = get_accounts()
        self.assertEqual(result, data)

    @classmethod
    def setUpClass(cls):
        cls.client = docker.from_env()
        cls.container = cls.client.containers.run('pg_test', detach=True, auto_remove=True)
        # wait for container to fully set up
        while True:
            try:
                get_connection()
                break
            except OperationalError:
                time.sleep(0.1)

    @classmethod
    def tearDownClass(cls):
        cls.container.stop(timeout=0)