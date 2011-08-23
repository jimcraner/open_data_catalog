"""Settings for specific city implementations of the data catalog."""

import os

CITY_NAME = 'Boston'
CATALOG_URL = 'opendataboston.org'


# Number of days for the account activation registration window.
ACCOUNT_ACTIVATION_DAYS = 7


# This should work both locally and on DotCloud.
if os.path.exists('/home/dotcloud/current'):
    DB_PATH = '/home/dotcloud/'
else:
    DB_PATH = ''
