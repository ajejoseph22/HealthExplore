
import { applyActiveFilters, applySearchfilter, applySortingModifiers } from '../../utils/jobFilteringUtils';


describe('jobFilteringUtils', () => {
    test('unit test job functionality search with keyword', async () => {
        let jobs = [{
            job_title: 'paresh',
            name: 'wow',
            items: [{
                city: 'bhopal',
                job_type: 'paresh',
                title: 'LPN'
            }]
        }, {
            job_title: 'xxxx',
            name: 'woxxxw',
            items: [{
                city: 'bhxxxxopal',
                job_type: 'nuxxxrse',
                title: 'LxxxPN'
            }]
        }];
        jobs = applySearchfilter(jobs, new RegExp('paresh', 'ig'));
        expect(jobs.length).toBe(1);
        expect(jobs[0].items.length).toBe(1);
    });
    test('unit test job functionality search with no keyword', async () => {
        let jobs = [{
            job_title: 'paresh',
            name: 'wow',
            items: [{
                city: 'bhopal',
                job_type: 'paresh',
                title: 'LPN'
            }]
        }, {
            job_title: 'xxxx',
            name: 'woxxxw',
            items: [{
                city: 'bhxxxxopal',
                job_type: 'nuxxxrse',
                title: 'LxxxPN'
            }]
        }];
        jobs = applySearchfilter(jobs, new RegExp('', 'ig'));
        expect(jobs.length).toBe(2);
        expect(jobs[0].items.length).toBe(1);
        expect(jobs[1].items.length).toBe(1);
    });

});