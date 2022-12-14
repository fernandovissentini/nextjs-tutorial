function ArticleListByCategory({articles, category}) {
  return (
      <div>
        <h1>Showing news for catogory: <i>{category}</i></h1>
        {
          articles.map(article => {
            return (
                <div key={article.id}>
                  <h2>{article.id} {article.title}</h2>
                  <p>{article.description}</p>
                  <hr/>
                </div>
            )
          })
        }
      </div>
  )
}

export default ArticleListByCategory

export async function getServerSideProps(context) {
  const {params, req, res, query} = context

  console.log(query)
  console.log(req.headers.cookie)
  res.setHeader('Set-Cookie', ['name=Fernando'])

  const {category} = params
  const response = await fetch(
      `http://localhost:4000/news?category=${category}`)
  const articlesByCategory = await response.json()

  return {
    props: {
      articles: articlesByCategory,
      category
    }
  }
}
