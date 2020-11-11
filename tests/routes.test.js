/**

The describe function is used for grouping together related tests
The it is an alias of test function which runs the actual test.
The expect function tests a value using a set of matcher functions.

visit the Jest docs for a full list and details of jest functions.

**/

const fs = require('fs');
const request = require('supertest')
const app = require('../app')
const filePath = '../api/public/images/lena-small-bw1.jpg'

describe('Post Endpoints', () => {
    it('should create a new post', async () => {
        const res = await request(app)
        .post('/upload')
        .attach('file', filePath, { contentType: 'application/octet-stream' })
        .expect(200)
        .then(response => {
            console.log("response",response);
        })
        // .send({
        //   userId: 1,
        //   title: 'test is cool',
        // })

    //   expect(res.statusCode).toEqual(201)
    //   expect(res.body).toHaveProperty('post')
    })
  })

// --- original ---
// describe('Post Endpoints', () => {
//     it('should create a new post', async () => {
//       const res = await request(app)
//         .post('/api/posts')
//         .send({
//           userId: 1,
//           title: 'test is cool',
//         })
//       expect(res.statusCode).toEqual(201)
//       expect(res.body).toHaveProperty('post')
//     })
//   })