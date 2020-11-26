/**

The describe function is used for grouping together related tests
The it is an alias of test function which runs the actual test.
The expect function tests a value using a set of matcher functions.

visit the Jest docs for a full list and details of jest functions.

**/

describe('Sample Test for upload', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
})


// const request = require('supertest')
// // const app = require('../app')
// // const express = require('express')
// const filePath = '../api/public/images/lena-small-bw1.jpg'

// describe('Post Endpoints', () => {
//     var app = require('../app')
//     it('should create a new post', async () => {
//         const res = await request(app)
//         .post('/upload')
//         .attach('file', filePath, { contentType: 'application/octet-stream' })
//         // .expect(200)

//       expect(res.statusCode).toEqual(200)
//       expect(res.body).toHaveProperty('dataCV')
//       expect(res.body).toHaveProperty('dataTF')
//     })

//     afterAll(async () => {
//       if (app) {
//         await app.close();
//       }
//     });
// })
