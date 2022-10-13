import User from "../components/user";

export default function ListUsers({users}) {
  return <><h1>List Users</h1>
    {
      users.map(user => {
        return (
            <div id={user.id}>
              <User user={user}  />
            </div>
        )
      })
    }
  </>
}

export async function getStaticProps() {
  const usersResponse = await fetch(
      'https://jsonplaceholder.typicode.com/users')
  const data = await usersResponse.json()
  console.log(data)

  return {
    props: {
      users: data
    }
  }
}
