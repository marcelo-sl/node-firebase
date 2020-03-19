'use strict';

const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

exports.getProjects = functions.https.onRequest(async (req, res) => {
    const projects = await admin.firestore().collections('projects').get();
    
    return res.json(projects);
});

exports.addProject = functions.https.onRequest(async (req, res) => {
    const { authorFirstName, authorLastName, content, title } = req.body;

    const result = await admin.firestore().collections('projects').add({authorFirstName, authorLastName, content, title});

    return res.json({ message: `Project with ID: ${result.id} added.` });
});
