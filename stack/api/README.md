# Meowtime REST API

## Node.js version

16.16.0

## Port number

5000

## Install

`npm install`

## Run the server

`npm start`
`npm run dev`

&nbsp;

# REST API

The REST API for the Meowtime application.

# Get all pets

#### Request:

`GET /api`

`GET /api/pets`

#### Response:

```
{
    "status": 200,
    "message": "all pets",
    "data": {
        "pets": [
            {
                "_id": "630483cf80b7d0b1416a39cb",
                "uuid": "aa446c2c-42e3-463e-962f-682ec5930101",
                "ownerId": "google-oauth2|108104244842814913076",
                "petSpice": "cat",
                "name": "Luna",
                "age": 1,
                "breed": "Turkish Van",
                "gender": "m",
                "isCastrated": true,
                "isVaccinated": true,
                "isFleaTreated": true,
                "weight": 10,
                "createdAt": "2022-07-31T13:31:00.000Z",
                "updatedAt": "2022-08-02T13:02:00.000Z"
            },
        ],
        "page": 0,
        "filters": {},
        "entries_per_page": 20,
        "total_results": 24
    }
}
```

&nbsp;

# Get pet by uuid

#### Request:

`GET /api/pet/aa446c2c-42e3-463e-962f-682ec5930101`

#### Response:

```
{
    "status": 200,
    "message": "pet",
    "data": {
        "_id": "630483cf80b7d0b1416a39cb",
        "uuid": "aa446c2c-42e3-463e-962f-682ec5930101",
        "ownerId": "google-oauth2|108104244842814913076",
        "petSpice": "cat",
        "name": "Luna",
        "age": 1,
        "breed": "Turkish Van",
        "gender": "m",
        "isCastrated": true,
        "isVaccinated": true,
        "isFleaTreated": true,
        "weight": 10,
        "createdAt": "2022-07-31T13:31:00.000Z",
        "updatedAt": "2022-08-02T13:02:00.000Z",
        "reviews": [
            {
                "_id": "630486e580b7d0b1416a3a0d",
                "uuid": "e7781137-9cb3-4138-a4a8-4fb6468ffbc2",
                "reviewerId": "google-oauth2|108104244842814913076",
                "petId": "aa446c2c-42e3-463e-962f-682ec5930101",
                "review": "some text about pet",
                "rate": 3,
                "createdAt": "2022-08-25T13:25:00.000Z",
                "updatedAt": "2022-08-27T13:27:00.000Z"
            },
        ]
    }
}
```

&nbsp;

# Get non-existing pet by uuid

#### Request:

`GET /api/pet/12345`

#### Response:

```
{
    "status": 404,
    "reason": "Not found"
}
```

&nbsp;

# Create new pet

#### Request:

`POST /api/pet`

#### Response:

```
{
    "status": 200,
    "message": "New pet added",
    "mongodb_response": {
        "acknowledged": true,
        "insertedId": "6304e2dd84767963ad1539ab"
    },
    "data": {
        "_id": "6304e2dd84767963ad1539ab",
        "ownerId": "google-oauth2|108104244842814913076",
        "petSpice": "dog",
        "name": "Timmi",
        "age": 3,
        "photo": "some_url",
        "breed": "dvorny",
        "color": "gray",
        "gender": "m",
        "isCastrated": true,
        "isVaccinated": true,
        "isFleaTreated": true,
        "weight": 10,
        "fears": "no",
        "diseases": "no",
        "createdAt": "2022-08-23T14:23:25.911Z"
    }
}
```

&nbsp;

# Get the API version

#### Request:

`GET /api/version/`

#### Response:

```
{
    "status": 200,
    "message": "version",
    "data": {
        "api_version": "1.0.0"
    }
}
```
