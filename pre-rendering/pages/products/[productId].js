import {useRouter} from "next/router";

function ProductDetail({product}) {

  const router = useRouter()
  if(router.isFallback) {
    return <div>Loading</div>
  }

  return <div>
    <h1>Products Details for {product.title}</h1>
    <h2>{product.price}</h2>
    <h2>{product.description}</h2>
  </div>
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { productId: '1' }
      }
    ],
    fallback: true
  }
}

export async function getStaticProps(context) {
  console.log('Generating / regenerating product details')
  const {params} = context
  const resp = await fetch(`http://localhost:4000/products/${params.productId}`)
  const product = await resp.json()

  if(!product.id) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      product
    },
    revalidate: 10
  }
}

export default ProductDetail
