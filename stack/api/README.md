# Meowtime REST API  

## Node.js version

16.16.0

## Port number
5000

## Install  

```npm install```

## Run the server  

```node server```

# REST API
The REST API for the Meowtime application.

## Get the main page

### Request
```GET /```

### Response

```Connection: keep-alive
Content-Length: 17
Content-Type: application/json
Date: Tue, 16 Aug 2022 11:23:56 GMT
Keep-Alive: timeout=5
X-Powered-By: Express

{ "simple": "data" }
```


## Get the API version

### Request
```GET /version/```

### Response

```
Connection: keep-alive
Content-Length: 18
Content-Type: text/html; charset=utf-8
Date: Tue, 16 Aug 2022 11:35:23 GMT
ETag: W/"12-GOK2Ij6jENtNxg9usdLNYCPxQLw"
Keep-Alive: timeout=5
X-Powered-By: Express

API version: 1.0.0
```
