# Movies backend
That's a test backend service that consumes http://www.omdbapi.com/ and returns a DTO

## How To Run

You need to have NodeJs and npm installed

Clone this repository with:
```
git clone https://github.com/JoaoGuiMB/ntt-data-backend.git
```

Access directory and install dependencies
```
cd ntt-data-backend
npm install
```

Configure enviroment variables, creating a .env file
```
API_KEY=Your API key from omdbapi
```

Run the server

```
npm run start:dev
```