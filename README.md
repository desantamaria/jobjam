# JobJam

A job tracker using next.js

# Development setup

Install the dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

## Setup Enviroment Variables


- **DATABASE_URL**: Create a Neon Postgres Database [here](https://console.neon.tech/app/projects) and click 'connect' on the Neon Dashboard. Ensure 'Conection pooling' is enabled and copy the Database Url.
- **AUTH_SECRET**: Run ```npx auth``` to create a secret.

- **Google Auth Provider**: Create a project on the Google Cloud Platform. In the API Dashboard visit the OAuth Platform and create a new instance. Read more [here](https://support.google.com/googleapi/answer/6158849?hl=en)
  - **AUTH_GOOGLE_ID**
  - **AUTH_GOOGLE_SECRET**


## Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
