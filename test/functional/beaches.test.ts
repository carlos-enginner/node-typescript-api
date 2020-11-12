describe('Beaches functional tests', () => {
    describe('When creating a beach', () => {
        it('Shoud create a beach wich success', async() => {
            const newBeach = {
                "lat":-33.792726,
                "lng": 151.289824,
                "name": "Manly",
                "position": 'E'
            };

            const response = await global.testRequest.post('/beaches').send(newBeach);
            expect(response.status).toBe(201);
            expect(response.body).toEqual(expect.objectContaining(newBeach));
        });
    })  
});