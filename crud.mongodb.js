use("crudDb")
//console.log(db)
db.createCollection("courses")
db.courses.insertOne({
    name: "Deepa Dazzles",
    price:0,
    assignments: 45,
    projects: 12
})

db.courses.insertMany([
    [
        {
            "name": "Deepa Dazzles",
            "price": 0,
            "assignments": 45,
            "projects": 12
        },
        {
            "name": "Sonia Shines",
            "price": 0,
            "assignments": 32,
            "projects": 8
        },
        {
            "name": "Raj Rises",
            "price": 0,
            "assignments": 50,
            "projects": 15
        },
        {
            "name": "Maya Mystifies",
            "price": 0,
            "assignments": 27,
            "projects": 10
        },
        {
            "name": "Vikram Vibes",
            "price": 0,
            "assignments": 60,
            "projects": 20
        },
        {
            "name": "Nina Nurtures",
            "price": 0,
            "assignments": 40,
            "projects": 11
        },
        {
            "name": "Amit Ascends",
            "price": 0,
            "assignments": 55,
            "projects": 13
        },
        {
            "name": "Leela Lights",
            "price": 0,
            "assignments": 30,
            "projects": 7
        },
        {
            "name": "Ravi Rises",
            "price": 0,
            "assignments": 48,
            "projects": 14
        },
        {
            "name": "Neha Navigates",
            "price": 0,
            "assignments": 33,
            "projects": 9
        }
    ]
    
])