# User Registration, Login, Profile, and Logout Endpoint Documentation

## Endpoint: `/users/register`

### Method: POST

### Description:
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns a JWT token along with the user details.

### Request Body:
The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname` (string, required, minimum length: 3)
  - `lastname` (string, optional, minimum length: 3)
- `email` (string, required, must be a valid email)
- `password` (string, required, minimum length: 6)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Response:
The response will be a JSON object containing the following fields:

- `token` (string): The JWT token.
- `user` (object): An object containing the user details:
  - `_id` (string): The user ID.
  - `fullname` (object): An object containing the user's full name:
    - `firstname` (string): The user's first name.
    - `lastname` (string): The user's last name.
  - `email` (string): The user's email address.
  - `socketId` (string|null): The user's socket ID, if available.

Example:
```json
{
  "token": "JWT_TOKEN",
  "user": {
    "_id": "USER_ID",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

### Error Response:
If there are validation errors, the response will be a JSON object containing the following fields:

- `errors` (array): An array of error objects, each containing:
  - `msg` (string): The error message.
  - `param` (string): The parameter that caused the error.
  - `location` (string): The location of the parameter.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

If there is an internal server error, the response will be a JSON object containing the following field:

- `message` (string): The error message.

Example:
```json
{
  "message": "Internal Server Error"
}
```
### Example Request
```bash
curl -X POST http://localhost:3000/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
    "password": "password123"
}'
```

# User Login Endpoint Documentation

## Endpoint: `/users/login`

### Method: POST

### Description:
This endpoint is used to log in an existing user. It validates the input data, checks the user's credentials, and returns a JWT token along with the user details.

### Request Body:
The request body should be a JSON object containing the following fields:

- `email` (string, required, must be a valid email)
- `password` (string, required, minimum length: 6)

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Response:
Success (200 OK):
Description: User logged in successfully.
Response Body:
```json
{
  "token": "JWT_TOKEN",
  "user": {
    "_id": "USER_ID",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

### Error Response:
If there are validation errors, the response will be a JSON object containing the following fields:

- `errors` (array): An array of error objects, each containing:
  - `msg` (string): The error message.
  - `param` (string): The parameter that caused the error.
  - `location` (string): The location of the parameter.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

If the email or password is invalid, the response will be a JSON object containing the following field:

- `message` (string): The error message.

Example:
```json
{
  "message": "Invalid email or password"
}
```

If there is an internal server error, the response will be a JSON object containing the following field:

- `message` (string): The error message.

Example:
```json
{
  "message": "Internal Server Error"
}
```

## Endpoint: `/users/profile`

### Method: GET

### Description:
Get the authenticated user's profile information. Requires a valid JWT token.

### Authentication:
Requires Bearer token in Authorization header or token in cookies.

### Responses:

#### Success (200 OK):

  ```json
  {
    "_id": "USER_ID",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
```

#### Error Response:
If authentication is required, the response will be a JSON object containing the following field:

- `message` (string): The error message.

Example:
```json
{
  "message": "Authentication required"
}
```

### Example Request
```bash
curl -X GET http://localhost:3000/users/profile \
-H "Authorization: Bearer JWT_TOKEN"
```

## Endpoint: `/users/logout`

### Method: GET

### Description:
This endpoint is used to log out an authenticated user. It invalidates the user's JWT token.

### Authentication:
Requires Bearer token in Authorization header or token in cookies.

### Response:
Success (200 OK):
Description: User logged out successfully.
Response Body:
```json
{
  "message": "Logged out successfully"
}
```

#### Error Response:
If authentication is required, the response will be a JSON object containing the following field:

- `message` (string): The error message.

Example:
```json
{
  "message": "Authentication required"
}
```

### Example Request
```bash
curl -X GET http://localhost:3000/users/logout \
-H "Authorization: Bearer JWT_TOKEN"
```

# Captain Registration and Login Endpoint Documentation

## Endpoint: `/captains/register`

### Method: POST

### Description:
This endpoint is used to register a new captain. It validates the input data, hashes the password, creates a new captain in the database, and returns a JWT token along with the captain details.

### Request Body:
The request body should be a JSON object containing the following fields:

- `firstname` (string, required, minimum length: 3)
- `lastname` (string, required, minimum length: 3)
- `email` (string, required, must be a valid email)
- `password` (string, required, minimum length: 6)
- `color` (string, required, minimum length: 3)
- `plate` (string, required, minimum length: 3)
- `capacity` (number, required, minimum value: 1)
- `vehicleType` (string, required, must be one of: 'car', 'motorcycle', 'auto')

Example:
```json
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@example.com",
  "password": "password123",
  "color": "Red",
  "plate": "ABC123",
  "capacity": 4,
  "vehicleType": "car"
}
```

### Response:
The response will be a JSON object containing the following fields:

- `token` (string): The JWT token.
- `captain` (object): An object containing the captain details:
  - `_id` (string): The captain ID.
  - `fullname` (object): An object containing the captain's full name:
    - `firstname` (string): The captain's first name.
    - `lastname` (string): The captain's last name.
  - `email` (string): The captain's email address.
  - `vehicle` (object): An object containing the captain's vehicle details:
    - `color` (string): The vehicle color.
    - `plate` (string): The vehicle plate number.
    - `capacity` (number): The vehicle capacity.
    - `vehicleType` (string): The vehicle type.
  - `socketId` (string|null): The captain's socket ID, if available.
  - `status` (string): The captain's status.
  - `location` (object): An object containing the captain's location:
    - `lat` (number|null): The latitude.
    - `lng` (number|null): The longitude.

Example:
```json
{
  "token": "JWT_TOKEN",
  "captain": {
    "_id": "CAPTAIN_ID",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "socketId": null,
    "status": "inactive",
    "location": {
      "lat": null,
      "lng": null
    }
  }
}
```

### Error Response:
If there are validation errors, the response will be a JSON object containing the following fields:

- `errors` (array): An array of error objects, each containing:
  - `msg` (string): The error message.
  - `param` (string): The parameter that caused the error.
  - `location` (string): The location of the parameter.

Example:
```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long.",
      "param": "firstname",
      "location": "body"
    },
    {
      "msg": "Last name must be at least 3 characters long.",
      "param": "lastname",
      "location": "body"
    },
    {
      "msg": "Please fill a valid email address.",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long.",
      "param": "password",
      "location": "body"
    },
    {
      "msg": "Color must be at least 3 characters long.",
      "param": "color",
      "location": "body"
    },
    {
      "msg": "Plate must be at least 3 characters long.",
      "param": "plate",
      "location": "body"
    },
    {
      "msg": "Capacity must be at least 1.",
      "param": "capacity",
      "location": "body"
    },
    {
      "msg": "Vehicle type must be car, motorcycle or auto.",
      "param": "vehicleType",
      "location": "body"
    }
  ],
  "error": "Captain already exists."
}
```

If there is an internal server error, the response will be a JSON object containing the following field:

- `message` (string): The error message.

Example:
```json
{
  "message": "Internal Server Error"
}
```
### Example Request
```bash
curl -X POST http://localhost:3000/captains/register \
-H "Content-Type: application/json" \
-d '{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@example.com",
  "password": "password123",
  "color": "Red",
  "plate": "ABC123",
  "capacity": 4,
  "vehicleType": "car"
}'
```

## Endpoint: `/captains/login`

### Method: POST

### Description:
This endpoint is used to log in an existing captain. It validates the input data, checks the captain's credentials, and returns a JWT token along with the captain details.

### Request Body:
The request body should be a JSON object containing the following fields:

- `email` (string, required, must be a valid email)
- `password` (string, required, minimum length: 6)

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Response:
Success (200 OK):
Description: Captain logged in successfully.
Response Body:
```json
{
  "token": "JWT_TOKEN",
  "captain": {
    "_id": "CAPTAIN_ID",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "socketId": null,
    "status": "inactive",
    "location": {
      "lat": null,
      "lng": null
    }
  }
}
```

### Error Response:
If there are validation errors, the response will be a JSON object containing the following fields:

- `errors` (array): An array of error objects, each containing:
  - `msg` (string): The error message.
  - `param` (string): The parameter that caused the error.
  - `location` (string): The location of the parameter.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

If the email or password is invalid, the response will be a JSON object containing the following field:

- `message` (string): The error message.

Example:
```json
{
  "message": "Invalid email or password"
}
```

If there is an internal server error, the response will be a JSON object containing the following field:

- `message` (string): The error message.

Example:
```json
{
  "message": "Internal Server Error"
}
```

### Example Request
```bash
curl -X POST http://localhost:3000/captains/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

## Endpoint: `/captains/profile`

### Method: GET

### Description:
Get the authenticated captain's profile information. Requires a valid JWT token.

### Authentication:
Requires Bearer token in Authorization header or token in cookies.

### Responses:

#### Success (200 OK):

  ```json
  {
    "_id": "CAPTAIN_ID",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "socketId": null,
    "status": "inactive",
    "location": {
      "lat": null,
      "lng": null
    }
  }
  ```

#### Error Response:
If authentication is required, the response will be a JSON object containing the following field:

- `message` (string): The error message.

Example:
```json
{
  "message": "Authentication required"
}
```

### Example Request
```bash
curl -X GET http://localhost:3000/captains/profile \
-H "Authorization: Bearer JWT_TOKEN"
```

## Endpoint: `/captains/logout`

### Method: GET

### Description:
This endpoint is used to log out an authenticated captain. It invalidates the captain's JWT token.

### Authentication:
Requires Bearer token in Authorization header or token in cookies.

### Response:
Success (200 OK):
Description: Captain logged out successfully.
Response Body:
```json
{
  "message": "Logged out successfully"
}
```

#### Error Response:
If authentication is required, the response will be a JSON object containing the following field:

- `message` (string): The error message.

Example:
```json
{
  "message": "Authentication required"
}
```

### Example Request
```bash
curl -X GET http://localhost:3000/captains/logout \
-H "Authorization: Bearer JWT_TOKEN"
```
