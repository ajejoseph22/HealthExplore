import { testApiHandler } from '../test-server';
import jobsHandler from '../pages/api/jobs';

test('testing', async () => {
  expect.hasAssertions();
  await testApiHandler({
    handler: jobsHandler,
    test: async ({ fetch }) => {
      expect((await fetch()).status).toBe(200)
    }
  })
})