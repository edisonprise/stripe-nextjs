import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>
          <p>PET-VENTURE, COMPRE AQUI.</p>
        </h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <Image
              src="/images/tiger-jpg.jpg"
              alt="jpg"
              width={200}
              height={200}
            />
            <p>very expensive product 1</p>
          </a>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <Image src="/images/tux.jpg" alt="jpg" width={200} height={200} />
            <p>very expensive product 2</p>
          </a>
        </div>
        <div className={styles.center}></div>
      </div>
    </main>
  );
}
