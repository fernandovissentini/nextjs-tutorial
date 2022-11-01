import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import clientPromise from "../../../lib/mongodb"
import {MongoDBAdapter} from "@next-auth/mongodb-adapter";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  adapter: MongoDBAdapter(clientPromise),
  session: {
    jwt: true
  },
  jwt: {
    secret: 'RandomS tring'
  }
})

