# Visa to the Moon

In this repository you will find the project **Visa to the Moon**

---

## Start Project

There are two ways to start this project

### Easy Way: Docker

Clone this repository and locate inside it

```git clone https://github.com/zamoks95/visatomoon.git```

```cd visatomoon```

Start docker-compose services

```docker-compose up```

Using a web browser.. navigate to [localhost:8000](http://localhost:8000)


### Not such easy way: Install Locally

Clone this repository and locate inside it

```git clone https://github.com/zamoks95/visatomoon.git```

```cd visatomoon```

#### Start API service.

```cd api```

Install dependencies

```npm install``` or ```yarn install```

Start the API

```node index.js```

Now the API is running at ```localhost:3003```,
we can test it navigating to [/assets/images/logo.png](http://localhost:3003/assets/images/logo.png)


#### Start Web Service

```cd web```

Install dependencies

```npm install``` or ```yarn install```

Start the web server

```npm start``` or ```yarn start```

The webserver is running at  **[localhost:3000](http://localhost:3000)**

