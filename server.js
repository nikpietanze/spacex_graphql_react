import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/types/QueryType.mjs';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.static('public'));

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true,
	}),
);

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'public', index.html)));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
