# URL Shortening Application

This is a robust URL shortening application built using Node.js, Typescript Express, MongoDB, and EJS.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Description

The URL shortening application allows users to shorten long URLs into short, easy-to-share links. The application provides a user-friendly interface where users can input their long URLs, and the application generates a shortened version for easy sharing.

## Features

- Shorten long URLs into short, easy-to-share links.
- User-friendly interface with instant feedback for shortened URLs.
- Security features like Rate Limiting and Content Security Policy (CSP) to prevent abuse and enhance security.
- Redirects users to the original long URL when they access the shortened link.
- Responsive design for a seamless experience on various devices.

## Installation

1. Clone this repository to your local machine:

```bash
  git clone https://github.com/your-username/url-shortener.git
  cd url-shortener
```

2. Install the required dependencies:

```bash
  npm install
```

OR

```bash
  yarn install
```

3. Set up the environment variables:
   Rename the `.env.example` file in the root directory to `.env` and provide the necessary configuration. For example:

```bash
  PORT=3000
  MONGODB_URI=mongodb://localhost:27017/url_shortener_db
  BASE_URL=http://localhost:3000
```

4. Start the application:

```bash
  npm run start
```

OR

```bash
  yarn run start
```

## Usage

1. Access the application by navigating to https://localhost:3000 in your web browser.
2. Enter a long URL in the input field and click the "Shorten" button.
3. The application will generate a shortened URL, which you can copy and share.

## API Endpoints

The application also provides API endpoints to programmatically shorten URLs and access the redirection information.

- Shorten a URL

  ```bash
    POST /v1/shorten
    Request Body: { "longUrl": "https://www.example.com/some/long/url" }
    Response: { "shortUrl": "http://localhost:3000/s/abc123" }
  ```

- Redirect to the Original URL
  ```bash
    GET /v1/shorten/:code
    Response: Redirects to the original long URL
  ```

## License

This project is licensed under the [MIT License]('').
