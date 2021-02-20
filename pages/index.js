import Link from 'next/link'

function Index({ stars }) {
  return (
    <div>
      <p>Next.js has {stars} ⭐️</p>
      <Link href="/preact-stars">
        <a>How about preact?</a>
      </Link>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://scdhub.org/api/peacewater_forms.json')
  const json = await res.json()

  return {
    props: {
      stars: json[0].Name_of_System,
    },
  }
}

export default Index
