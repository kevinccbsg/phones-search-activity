# Phone Searcher

You can check all your favorite phones. [Demo link](https://phone-searcher-kdrbslrogk.now.sh/)

# initiate the project

Clone the repository

## install dependencies

```
npm install
```

## Development config

If you want to develop in the project you will need to follow these steps

#### Run webpack

```
npm run webpack
```

**Watch mode**

```
npm run webpack -- -w
```

#### Run tests

```
npm test
```

**Watch mode**

```
npm test -- --watch
```

#### Run application

```
npm start
```

Application running on http://localhost:3000

## Production config

if you just want to run the app. You can use docker.

#### build image

```
docker build -t phone-search .
```

#### run image

```
docker run -d -p 3000:3000 phone-search
```
