import Head from 'next/head'
import Link from 'next/link'

const stories = [{ pid: 'first' }, { pid: 'second' }, { pid: 'third' }]

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Index</title>
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:title" content="Index" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sample.kazuhiroohara.jp/" />
      <meta property="og:image" content="/sample1.jpg" />
      <meta property="og:description" content="Index description" />
      <meta name="twitter:card" content="summary" />
    </Head>

    <main>
      <h1 className="title">Stories Home</h1>

      <Link href="/sample">
        <a>Sample</a>
      </Link>

      <ul>
        {stories.map((story) => (
          <li key={story.pid}>
            <Link href={`/stories/${encodeURIComponent(story.pid)}`}>
              <a>{story.pid} Stories</a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  </div>
)

export default Home
