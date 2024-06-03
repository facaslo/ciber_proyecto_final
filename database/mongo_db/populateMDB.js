db = db.getSiblingDB('userDB'); // Switch to userDB

db.dropDatabase(); // Drop the database if it exists

// Create and populate the collection
db.users.insertMany([
  {
    username: "user1",
    password: "password1",
    email: "user1@example.com",
    firstName: "John",
    lastName: "Doe",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "Anystate",
      zip: "12345"
    }
  },
  {
    username: "user2",
    password: "password2",
    email: "user2@example.com",
    firstName: "Jane",
    lastName: "Smith",
    address: {
      street: "456 Elm St",
      city: "Othertown",
      state: "Otherstate",
      zip: "67890"
    }
  },
  {
    username: "user3",
    password: "password3",
    email: "user3@example.com",
    firstName: "Alice",
    lastName: "Johnson",
    address: {
      street: "789 Oak St",
      city: "Somewhere",
      state: "Somestate",
      zip: "11223"
    }
  }
]);

print("Database populated successfully!");
