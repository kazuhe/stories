import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import styles from './style.module.scss'

const Stories = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <div className={styles.container}>
      <Head>
        <title>Stories: {pid}</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content={'Stories: ' + pid} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={'https://sample.kazuhiroohara.jp/stories/' + pid} />
        <meta property="og:image" content="/sample2.jpg" />
        <meta property="og:description" content="Index description" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <div>
        <Link href="/"><a>Home</a></Link>
      </div>

      <h1 className="title">Stories</h1>
      <p>Stories: {pid}</p>
    </div>
  )
}

export default Stories
