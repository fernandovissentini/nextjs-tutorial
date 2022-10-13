import { useRouter } from "next/router";

function Review() {
  const router = useRouter()
  const { productId, reviewId } = router.query
  return <h1>Review for product {productId}: Review {reviewId} </h1>
}

export default Review
