import Link from "next/link";
import styled from "styled-components";

const Pressable = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: left;
  color: white;
  cursor: pointer;
  user-select: none;
`;

function ListProducts({products}) {
  return <>
    <h1>List of Products</h1>
    {
      products.map(product => {
        return (
            <div key={product.id}>
              <Link href={`products/${product.id}`} passHref>
                <Pressable>
                  <h2>{product.id} {product.title}</h2>
                </Pressable>
              </Link>
              <hr/>
            </div>
        )
      })
    }
  </>
}

export async function getStaticProps() {
  const resp = await fetch('http://localhost:4000/products')
  const products = await resp.json()
  return {
    props: {
      products
    }
  }
}

export default ListProducts
