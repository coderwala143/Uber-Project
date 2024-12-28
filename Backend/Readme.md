Save this content to a file named `README.md` in the backend directory.

```markdown
# User Registration Endpoint Documentation

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

### Example Request:
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