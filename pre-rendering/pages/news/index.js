function NewsArticleList({articles}) {
  return <div>
    <h1>News Article List</h1>
    {
      articles.map((article) => {
        return (
            <div key={article.id}>
              <h2>
                {article.id} {article.title} | {article.category}
              </h2>
            </div>
        )
      })
    }
  </div>
}

export default NewsArticleList

export async function getServerSideProps() {
  const response = await fetch('http://localhost:4000/news')
  const articles = await response.json()

  return {
    props: {
      articles
    }
  }
}
