'use strict';

const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

exports.getProjects = functions.https.onRequest((req, res) => {
    admin.firestore().collection('projects').get()
      .then(data => {

          let projects = [];

          data.forEach(doc => {
            projects.push(doc.data());
          });

          return res.json(projects);
      })
      .catch(err => console.log(err));
    
});

exports.addProject = functions.https.onRequest(async (req, res) => {
    const { authorFirstName, authorLastName, content, title } = req.body;

    const result = await admin.firestore().collection('projects').add({authorFirstName, authorLastName, content, title});

    return res.json({ message: `Project with ID: ${result.id} added.` });
});
