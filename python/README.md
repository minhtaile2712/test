## using venv

python3 -m venv venv
. venv/bin/activate

pip install Flask

export FLASK_APP=main
flask run

<variable_name> or <converter:variable_name>
string
(default) accepts any text without a slash

int
accepts positive integers

float
accepts positive floating point values

path
like string but also accepts slashes

uuid
accepts UUID strings

### Ensure pip, setuptools, and wheel are up to date

python3 -m pip install --upgrade pip setuptools wheel
