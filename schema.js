const{makeExecutableSchema} = require('graphql-tools')

const typeDefs = `
    type Curso{
        id: ID!
        titulo: String!
    }

    type Query {
        cursos: [Curso]
    }
`


const schema = makeExecutableSchema({
    //Definiciones de tipo = typeDefs
    typeDefs
})

module.exports = schema