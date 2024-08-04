// Create a map to store contact information
const contacts = new Map();

// Function to add a contact
function addContact(name, age, email, location) {
    contacts.set(name, { age, email, location });
}

// Function to retrieve contact details by name
function getContactDetails(name) {
    if (contacts.has(name)) {
        return contacts.get(name);
    } else {
        return 'Contact not found';
    }
}

// Adding some contacts
addContact('Alice', 25, 'alice@example.com', 'New York');
addContact('Bob', 30, 'bob@example.com', 'San Francisco');
addContact('Charlie', 22, 'charlie@example.com', 'Los Angeles');

// Retrieving and printing contact details
const nameToRetrieve = 'Bob';
const contactDetails = getContactDetails(nameToRetrieve);
console.log(`Details for ${nameToRetrieve}:`, contactDetails);
