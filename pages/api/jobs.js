import jobs from '@/data/jobs';

export default async (req, res) => {
	if (req.method === 'GET') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(jobs);
	} else {
		res.statusCode = 404;
	}
}