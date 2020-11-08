import Head from 'next/head'
import Link from 'next/link'

const Sample = () => {

  return (
    <div>
      <Head>
        <title>Sample</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Sample" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sample.kazuhiroohara.jp/sample/" />
        <meta property="og:image" content="/sample2.jpg" />
        <meta property="og:description" content="Sample description" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <div>
        <Link href="/"><a>Home</a></Link>
      </div>

      <h1 className="title">Sample</h1>
    </div>
  )
}

export default Sample
