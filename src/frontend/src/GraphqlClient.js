import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { WebSocketLink } from "apollo-link-ws"
import { getMainDefinition } from "apollo-utilities"
import { split } from "apollo-link"
const httpLink = createHttpLink({
  uri: "http://localhost/gql/v1/graphql",
})

const wsLink = new WebSocketLink({
  uri: "ws://localhost/gql/v1/graphql",
  options: {
    reconnect: true,
    connectionParams: () => {
      return {
        headers: {
          "x-hasura-admin-secret": "fullstackdemopw",
        },
      }
    },
  },
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "x-hasura-admin-secret": "fullstackdemopw",
    },
  }
})

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    )
  },
  wsLink,
  authLink.concat(httpLink)
)

export const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
})
