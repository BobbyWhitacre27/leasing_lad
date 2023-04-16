const { client } = require('./');
const { createUser } = require('./users');
const { createResident_Card } = require('./resident_card');

async function dropTables() {
    try {
        console.log('Dropping all tables...');
        await client.query(`
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS resident_card;
      `);

        console.log('finished dropping tables!');
    } catch (error) {
        console.error('Error dropping tables...');
        throw error;
    }
}

async function createTables() {
    try {
        console.log('Starting to create tables...');
        await client.query(`
      
      CREATE TABLE users (
        id SERIAL PRIMARY KEY, 
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      );
      
      CREATE TABLE resident_card (
        id SERIAL PRIMARY KEY, 
        name VARCHAR(255) NOT NULL,
        apartment VARCHAR(255) NOT NULL,
        move_in_date DATE NOT NULL,
        rent INTEGER NOT NULL,
        lease_term INTEGER NOT NULL,
        sent_approval_docs BOOLEAN,
        sent_lease BOOLEAN,
        received_electric BOOLEAN,
        received_insurance BOOLEAN,
        received_signed_lease BOOLEAN,
        received_payment BOOLEAN,
        notes TEXT,
        moved_in BOOLEAN,
        user_id INTEGER REFERENCES users(id)
      );
  
      `);
        console.log('finished creating tables!');
    } catch (error) {
        console.error('Error in creating tables...');
        throw error;
    }
}

async function createInitialUsers() {
    try {
        console.log('Starting to create users...');
        const usersToCreate = [
            { username: 'bobby', password: 'bobby123' },

        ];

        const users = await Promise.all(usersToCreate.map(createUser)); 

        console.log('Users created:');
        console.log(users);
        console.log('Finished creating users!');
    } catch (error) {
        console.error('Error creating users...');
        throw error;
    }
}

async function createInitialResident_Cards() {
    try {
        console.log('Starting to create resident_cards');
        const residentCardsToCreate = [
            {
                name: 'John Smith',
                apartment: '100',
                move_in_date: "2000-01-01",
                rent: 2000, 
                lease_term: 12,
                sent_approval_docs: true,
                sent_lease: true,
                received_electric: false,
                received_insurance: false,
                received_signed_lease: false,
                received_payment: false,
                notes: "none",
                moved_in: false,
                user_id: 1
            },

        ];

        const resident_cards = await Promise.all(residentCardsToCreate.map(createResident_Card));

        console.log('resident_cards created:');
        console.log(resident_cards);
        console.log('Finished creating resident_cards!');
    } catch (error) { }
}

async function rebuildDB() {
    try {
      client.connect();
      await dropTables();
      await createTables();
      await createInitialUsers();
      await createInitialResident_Cards();
    } catch (error) {
      console.log('Error during rebuildDB');
      throw error;
    }
  }
  
  rebuildDB()
    .catch(console.error)
    .finally(() => client.end());