// This script connects to a MongoDB database and inserts
// the OSINT templates from the 'templates' directory.

const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

// --- Configuration ---
// Update this with your MongoDB connection string
const mongoUri = 'mongodb://localhost:27017';
const dbName = 'osint_db';
const collectionName = 'osint_templates';
const templatesDir = path.join(__dirname, 'templates');

// --- Main Function ---
async function setupMongoDB() {
  const client = new MongoClient(mongoUri);

  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB successfully!');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Clear existing templates to avoid duplicates
    await collection.deleteMany({});
    console.log(`Cleared existing documents in '${collectionName}' collection.`);

    // Read all markdown files from the templates directory
    const files = fs.readdirSync(templatesDir).filter(file => file.endsWith('.md'));

    const documentsToInsert = [];

    // Process each file
    for (const file of files) {
      const filePath = path.join(templatesDir, file);
      const content = fs.readFileSync(filePath, 'utf8');

      // Extract the title from the first line of the markdown file
      const titleMatch = content.match(/^# (.+)/);
      const title = titleMatch ? titleMatch[1] : file.replace('.md', '');

      documentsToInsert.push({
        title,
        filepath: path.join('templates', file),
        content,
      });
    }

    // Insert the documents into the collection
    if (documentsToInsert.length > 0) {
      const insertResult = await collection.insertMany(documentsToInsert);
      console.log(`Successfully inserted ${insertResult.insertedCount} documents.`);
    } else {
      console.log('No markdown files found to insert.');
    }

  } catch (err) {
    console.error('An error occurred:', err);
  } finally {
    // Close the connection
    await client.close();
    console.log('Connection closed.');
  }
}

setupMongoDB();

