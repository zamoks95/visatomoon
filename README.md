# Visa to the Moon

In this repository, you will find the project **Visa to the Moon**

You can find a *README.md* at each folder containing [Web DocumentationS](
https://github.com/zamoks95/visatomoon/blob/main/web/README.md) and [API DocumentationS](
https://github.com/zamoks95/visatomoon/blob/main/api/README.md)

Also, you can check [this video]https://youtu.be/svO95wQ_zjs) to see how to start this project.

---

# Start Project

There are two ways to start this project

### 🐳 Easy Way: using Docker

Clone this repository using a terminal and locate inside the folder in which `docker-compose.yml` is saved and start the docker service:

```
git clone https://github.com/zamoks95/visatomoon.git

cd visatomoon

docker-compose up

```

Using a web browser.. navigate to [localhost:8000](http://localhost:8000)


### 🔨 Not such easy way: Install Locally

Clone this repository and locate inside it

```git clone https://github.com/zamoks95/visatomoon.git```

```cd visatomoon```

#### Start API service

```cd api```

Install dependencies

```npm install``` or ```yarn install```

Start the API Service

```node index.js```

Now the API is listening at ```localhost:3003```,
we can test that everything is working properly navigating to [/assets/images/logo.png](http://localhost:3003/assets/images/logo.png)

#### Start Web Service

```cd web```

Install dependencies

```npm install``` or ```yarn install```

Start the Web Server

```npm start``` or ```yarn start```

The webserver is running at  **[localhost:3000](http://localhost:3000)**

