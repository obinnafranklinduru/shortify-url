# shortify-url

URL Shortener application provides a simple API to shorten long URLs and uses Google OAuth 2.0 for user authentication.

### Shorten URL

This endpoint allows authenticated users to shorten a long URL.

- **URL**: `/api/shorten`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "longUrl": "https://www.example.com/long-url-to-shorten"
  }
  ```
