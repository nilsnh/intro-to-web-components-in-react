import Head from 'next/head'
import AppNav from '../components/appNav'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src={`${process.env.NEXT_PUBLIC_BASE_PATH}/chill-counter.js`} />
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.ico`}
        />
      </Head>
      <main>
        <AppNav />
        <Component {...pageProps} />
      </main>
      <style jsx>{`
        main {
          padding: var(--spacing);
          margin: 0 auto;
          max-width: 600px;
        }
      `}</style>
      <style global jsx>
        {`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }

          a:visited {
            color: blue;
          }

          li {
            margin: 12px 0;
          }

          :root {
            --moz-green: #7d835f;
            --chill-blue: #638a89;
            --brown-light: #93733a;
            --brown: #8d6e3f;
            --graynish: #7c7b66;

            --spacing: 24px;
            --spacing-small: 12px;
          }
        `}
      </style>
    </>
  )
}

export default MyApp
