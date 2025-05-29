# 👥 Angular People Management App (Angular + Node.js + MongoDB)

A full-stack CRUD application that allows users to **Add**, **Edit**, **List**, and **Delete** people using:

- **Frontend (angular verion:8):** Angular (moduler Components, Angular Router, HttpClient)
- **Frontend latest:** Angular (Standalone Components, Angular Router, HttpClient)
- **Backend:** Node.js + Express
- **Database:** MongoDB

---

## 🛠️ Tech Stack

| Layer    | Technology                           |
| -------- | ------------------------------------ |
| Frontend | Angular (v15+ standalone components) |
| Backend  | Node.js, Express                     |
| Database | MongoDB                              |

---

## 📁 Directory Structure

```
THE RIGHT DOCTOR/
│
├── backend/
│ ├── server.js
│ ├── controllers/
│ │ └── person.controller.js
│ ├── models/
│ │ └── person.models.js
│ ├── routes/
│ │ └── person.routes.js
│ └── package.json
│
frontend(version 8)/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── add-person/
│   │   │   │   ├── add-person.component.ts
│   │   │   │   ├── add-person.component.html
│   │   │   │   └── add-person.component.css
│   │   │   ├── edit-person/
│   │   │   │   ├── edit-person.component.ts
│   │   │   │   ├── edit-person.component.html
│   │   │   │   └── edit-person.component.css
│   │   │   ├── delete-person/
│   │   │   │   ├── delete-person.component.ts
│   │   │   │   ├── delete-person.component.html
│   │   │   │   └── delete-person.component.css
│   │   │   └── list-people/
│   │   │       ├── list-people.component.ts
│   │   │       ├── list-people.component.html
│   │   │       └── list-people.component.css
│   │   ├── services/
│   │   │   └── person.service.ts
│   │   ├── app.module.ts
│   │   └── app.component.ts / html / css
│   └── index.html
├── angular.json
├── package.json
|
├── frontend(latest)/
│
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yesiamkriti/TheRightDoctor.git
cd TheRightDoctor

# 🔧 Frontend Setup (Angular)
cd frontend_latest #prefered for backend test
# or cd frontend
npm install
ng serve
# 🌐 Frontend runs at: http://localhost:4200


# ⚙️ Backend Setup (Node + MongoDB)
cd backend
npm install
node server.js

# 🌐 Backend runs at: http://localhost:5000
# 📌 MongoDB: Make sure your MongoDB server is running locally on default port 27017. You can modify the DB connection in server.js.
```

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| GET    | /api/person      | Get all people      |
| POST   | /api/person      | Create a new person |
| PUT    | /api/person/\:id | Update person by ID |
| DELETE | /api/person/\:id | Delete person by ID |

{
"name": "John Doe",
"age": 30,
"gender": "Male",
"mobile": "1234567890"
}

UI Features
Home (List People)

Add Person

Edit Person

Delete Person

📌 Notes
Built using Angular Standalone Components, no AppModule.

Angular communicates with backend using HttpClient.

🤝 Contributing
Fork the repo

Create your branch (git checkout -b feature)

Commit your changes

Push and create a PR
