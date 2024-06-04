// Create Users
CREATE (user1:User {username: "user1"})
CREATE (user2:User {username: "user2"})
CREATE (user3:User {username: "user3"})

// Create Categories for user1
CREATE (user1)-[:HAS_CATEGORY]->(user1_todo:Category {name: "to do"})
CREATE (user1)-[:HAS_CATEGORY]->(user1_inprogress:Category {name: "in progress"})
CREATE (user1)-[:HAS_CATEGORY]->(user1_finished:Category {name: "finished"})

// Add example tasks for user1
CREATE (user1_todo)-[:HAS_TASK]->(:Task {title: "Buy groceries", description: "Milk, Bread, Cheese"})
CREATE (user1_inprogress)-[:HAS_TASK]->(:Task {title: "Learn GraphQL", description: "Complete the tutorial"})
CREATE (user1_finished)-[:HAS_TASK]->(:Task {title: "Read a book", description: "Finished reading '1984'"})

// Create Categories for user2
CREATE (user2)-[:HAS_CATEGORY]->(user2_todo:Category {name: "to do"})
CREATE (user2)-[:HAS_CATEGORY]->(user2_inprogress:Category {name: "in progress"})
CREATE (user2)-[:HAS_CATEGORY]->(user2_finished:Category {name: "finished"})

// Add example tasks for user2
CREATE (user2_todo)-[:HAS_TASK]->(:Task {title: "Clean the house", description: "Living room, Kitchen, Bathroom"})
CREATE (user2_inprogress)-[:HAS_TASK]->(:Task {title: "Write a blog post", description: "Draft for the new article"})
CREATE (user2_finished)-[:HAS_TASK]->(:Task {title: "Exercise", description: "Completed today's workout"})

// Create Categories for user3
CREATE (user3)-[:HAS_CATEGORY]->(user3_todo:Category {name: "to do"})
CREATE (user3)-[:HAS_CATEGORY]->(user3_inprogress:Category {name: "in progress"})
CREATE (user3)-[:HAS_CATEGORY]->(user3_finished:Category {name: "finished"})

// Add example tasks for user3
CREATE (user3_todo)-[:HAS_TASK]->(:Task {title: "Plan vacation", description: "Research destinations and flights"})
CREATE (user3_inprogress)-[:HAS_TASK]->(:Task {title: "Complete project report", description: "Work on the final draft"})
CREATE (user3_finished)-[:HAS_TASK]->(:Task {title: "Grocery shopping", description: "Bought everything on the list"})
