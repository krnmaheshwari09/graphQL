export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }
    type Query {
        reviews: [Review]
        review(id: ID!): Review
        games: [Game]
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author
    }
    type Mutation {
        addGame(game: AddGameInput!): Game
        deleteGame(id: ID!): [Game]
        updateGame(id: ID!, edits: EditGameInput!): Game
        addAuthor(author: AddAuthorInput!): Author
        deleteAuthor(id: ID!): [Author]
        updateAuthor(id: ID!, edits: EditAuthorInput!): Author
        addReview(review: AddReviewInput!): Review
        deleteReview(id: ID!): [Review]
        updateReview(id: ID!, edits: EditReviewInput!): Review
    }
    input AddGameInput {
        title: String!
        platform: [String!]!
    }
    input AddAuthorInput {
        name: String!
        verified: Boolean!
    }
    input AddReviewInput {
        rating: Int!
        content: String!
        game_id: ID!
        author_id: ID!
    }
    input EditGameInput {
        title: String
        platform: [String!]
    }
    input EditAuthorInput {
        name: String
        verified: Boolean
    }
    input EditReviewInput {
        rating: Int
        content: String
    }
`