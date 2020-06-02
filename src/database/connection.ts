import knex from 'knex'
import path from 'path'

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite') //padroniza caminho da pasta
    },
    useNullAsDefault: true
})

export default connection