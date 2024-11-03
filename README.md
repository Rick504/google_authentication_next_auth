# NextAuth

    - Create credentials:
        - Google:
            site: https://karthickragavendran.medium.com/setup-guide-for-nextauth-with-google-and-credentials-providers-in-next-js-13-8f5f13414c1e
            videos:
                - https://www.youtube.com/watch?v=avSIzMivb6U&t=190s&ab_channel=TypeDev%7CRodrigoLima (Autenticação NextAuth com Google | Next.js 14+)
                - https://www.youtube.com/watch?v=tgO_ADSvY1I&t=266s&ab_channel=Appwrite (Setup Google OAuth sign in 6 minutes)

## Getting Started

To run this project, you need to create a .env file in the project root with the following environment variables:

```javascript
GOOGLE_ID=
GOOGLE_SECRET=

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=
```

Get GOOGLE_ID and GOOGLE_SECRET from Google Cloud Credentials under Credentials > OAuth 2.0 Client IDs.

## ⚠️ Alerta Importante

**You can quickly create a good value on the command line via this openssl command.**

Genereted NEXTAUTH_SECRET:

```bash
$ openssl rand -base64 32
```

Documentation:
https://next-auth.js.org/configuration/options#nextauth_secret

Be sure to replace the values ​​as needed for your environment.

## Start Project

First, run the development server:

```bash
npm install --legacy-peer-deps

npm run dev
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
