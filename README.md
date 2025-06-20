# Book Management

## Project Description
My Book Management App is a solo project that reflects the skills I gained and learned during my universite study and in the SDA (Saudi Digital Academy) Bootcamp. It is a full-stack application designed to help users organize all their Books in one place.

## Tech stack used in the Backend
- Django
- Python
- PostgreSQL
- psycopg2 
- djangorestframework 
- django-cors-headers 

## Tech stack used in the Frontend
- React
- JavaScrept
- css


## RESTful Routing Table for both Client and Server for the Backend


| Method | Url | discription |
| ------ | ------ |----------------------|
| GET | /Books| fetch and display all Books |
| POST | /Books/new | creat new Book |
| DELETE | /Books/:id| Send a request to delete a Book |
| PUT/PATCH |  /Books/:id | Send updated data for a specific Book |

## RESTful Routing Table for both Client and Server for the Frontend

| Method | Url | discription |
| ------ | ------ |----------------------|
| GET | /signup| Fetch and display the signup form |
| POST | /signup| Submit signup data to create a new account |
| GET | /login| Fetch and display the login form |
| POST | /login| Submit login credentials for authentication|
| GET | /| fetch and display all Books |
| POST | /books/new | creat new books |
| DELETE | /books/:id/| Send a request to delete a book |
| PUT/PATCH |  /books/:id/edit/ | Send updated data for a specific book |


## Installation Instructions for the Backend

### 1. Clone the Backend Repository

   Open your terminal and run the following command to clone the backend repository:

   ```
   git clone https://git.generalassemb.ly/maryam00/my_study_backend.git
   ```

### 2. Navigate to the Backend Directory

   Change into the book management project directory:

   ```
   cd book_management
   ```

### 3. Create a Virtual Environment (optional but recommended)

   ```
    pipenv shell 
   ```

### 4. Install Dependencies

   ```
   pipenv install django
   ```

### 5. Set Up the Database

   Make sure you have PostgreSQL installed and running. Create a new database for the application and update your database settings in the Django settings file.

### 6. Run Migrations

   ```
python manage.py makemigrations
python manage.py migrate
   ```

### 7. Start the Development Server

   ```
   python manage.py runserver
   ```
## Installation Instructions for the frontend
Follow these steps to get the Notebook App up and running on your local machine:

### 1. Install Dependencies
```
npm install
```
### 2. Start the Development Server
```
npm start
```

### 3. Open the Application in Your Browser

Visit [http://localhost:3000](http://localhost:3000) to view the app.

## IceBox Features
- Add book rating feature
- Add a book description
