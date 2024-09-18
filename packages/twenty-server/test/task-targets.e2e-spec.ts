import request from 'supertest';

const client = request(`http://localhost:${APP_PORT}`);

describe('taskTargetsResolver (e2e)', () => {
  it('should find many taskTargets', () => {
    const queryData = {
      query: `
        query taskTargets {
          taskTargets {
            edges {
              node {
                id
                createdAt
                updatedAt
                deletedAt
                taskId
                personId
                companyId
                opportunityId
              }
            }
          }
        }
      `,
    };

    return client
      .post('/graphql')
      .set('Authorization', `Bearer ${ACCESS_TOKEN}`)
      .send(queryData)
      .expect(200)
      .expect((res) => {
        expect(res.body.data).toBeDefined();
        expect(res.body.errors).toBeUndefined();
      })
      .expect((res) => {
        const data = res.body.data.taskTargets;

        expect(data).toBeDefined();
        expect(Array.isArray(data.edges)).toBe(true);

        const edges = data.edges;

        if (edges.length > 0) {
          const taskTargets = edges[0].node;

          expect(taskTargets).toHaveProperty('id');
          expect(taskTargets).toHaveProperty('createdAt');
          expect(taskTargets).toHaveProperty('updatedAt');
          expect(taskTargets).toHaveProperty('deletedAt');
          expect(taskTargets).toHaveProperty('taskId');
          expect(taskTargets).toHaveProperty('personId');
          expect(taskTargets).toHaveProperty('companyId');
          expect(taskTargets).toHaveProperty('opportunityId');
        }
      });
  });
});