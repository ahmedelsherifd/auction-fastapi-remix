# auction-fastapi-remix

## Make sure you have these packages installed

- [Python](https://www.python.org)
- [NodeJS](https://www.python.org)
- [Postgres](https://www.python.org)
- [Git](https://www.python.org)

## Create database in postgress

```
# log in into the psql console
sudo -u postgres psql
# create databases
CREATE DATABASE auction;
CREATE DATABASE auction_testing;
```

## Set postgres username password

set password to "postgres"

```
# log in into the psql console
sudo -u postgres psql
# log in into the psql console
postgres=# \password postgres
```

## Clone repo

```
git clone https://github.com/ahmedelsherifd/auction-fastapi-remix
```

## Install frontend

```
cd auction-fastapi-remix
cd services/frontend
npm install
# to run remix
npm run dev
```

# Install backend

```
cd auction-fastapi-remix
cd services/backend
python -m venv venv
# activate venv in linux
source venv/bin/activate
# install requirements
pip install requirements.txt
# migrate database
alembic upgrade head
# run server
uvicorn app.main:app --reload
```
