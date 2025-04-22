import db from "./db.js";

export const resolvers = {
    Query: {
        games() {
            return db.games
        },
        game(_, args) {
            return db.games.find((game) => game.id === args.id)
        },
        authors() {
            return db.authors
        },
        author(_, args) {
            return db.authors.find((author) => author.id === args.id)
        },
        reviews() {
            return db.reviews
        },
        review(_, args) {
            return db.reviews.find((review) => review.id === args.id)
        }
    },
    Game: {
        reviews(parent) {
            return db.reviews.filter((review) => review.game_id === parent.id)
        }
    },
    Author: {
        reviews(parent) {
            return db.reviews.filter((review) => review.author_id === parent.id)
        }
    },
    Review: {
        game(parent) {
            return db.games.find((game) => game.id === parent.game_id)
        },
        author(parent) {
            return db.authors.find((author) => author.id === parent.author_id)
        }
    },
    Mutation: {
        addGame(_, args) {
            let game = {
                ...args.game,
                id: Math.floor(Math.random() * 10000).toString()
            }
            db.games.push(game);
            return game;
        },
        deleteGame(_, args) {
            db.games = db.games.filter((game) => game.id !== args.id)
            return db.games;
        },
        addAuthor(_, args) {
            let author = {
                ...args.author,
                id: Math.floor(Math.random() * 10000).toString()
            }
            db.authors.push(author);
            return author;
        },
        deleteAuthor(_, args){
            db.authors = db.authors.filter((author) => author.id !== args.id);
            return db.authors;
        },
        addReview(_, args) {
            let review = {
                ...args.review,
                id: Math.floor(Math.random() * 10000).toString()
            }
            db.reviews.push(review);
            return review;
        },
        deleteReview(_, args){
            db.reviews = db.reviews.filter((review) => review.id !== args.id);
            return db.reviews;
        },
    }
}