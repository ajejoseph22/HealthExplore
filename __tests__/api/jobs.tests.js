// import "babel-polyfill"
import { createMocks } from 'node-mocks-http';
import searchJobs from '../../pages/api/jobs';


describe('/api/jobs', () => {

    test('returns a list of places without any filters or query', async () => {
        const { req, res } = createMocks({
            method: 'GET',
        });

        await searchJobs(req, res);

        expect(res._getStatusCode()).toBe(200);
        expect(JSON.parse(res._getData()).jobs.length).toBe(20);
    });
    

    test('returns a list of places with LPN in name', async () => {
        const { req, res } = createMocks({
            method: 'GET',
            query: {
                search: 'LPN',
            },
        });

        await searchJobs(req, res);

        expect(res._getStatusCode()).toBe(200);
        expect(JSON.parse(res._getData()).jobs.length).toBe(3);
    });
});
