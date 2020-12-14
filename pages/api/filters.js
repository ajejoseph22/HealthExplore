import filters from '@/data/filters';

export default async (req, res) => {
	if (req.method === 'GET') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(filters);
	} else {
		res.statusCode = 404;
	}
}