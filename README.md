# Book Management

## Project Description
My Book Management App is a solo project that reflects the skills I gained and learned during my universite study and in the SDA (Saudi Digital Academy) Bootcamp. It is a full-stack application designed to help users organize all their Books in one place.

## Tech stack
The backend was developed using 
- Django
- Python
- PostgreSQL
- psycopg2 
- djangorestframework 
- django-cors-headers 
The Frontend was developed using 


## RESTful Routing Table for both Client and Server


| Method | Url | discription |
| ------ | ------ |----------------------|
| GET | /subjects| fetch and display all subject |
| POST | /subjects/new | creat new subject |
| DELETE | /subjects/:id| Send a request to delete a subject |
| PUT/PATCH |  /subjects/:id | Send updated data for a specific subject |
| GET | /subjects/:id/notes | fetch and display all notes of a subject |
| POST | /subjects/:id/notes | creat new note |
| GET | /subjects/:id/notes/:id | fetch and display one note |
| DELETE |  /subjects/:id/notes/:id| Send a request to delete a note |
| PUT/PATCH |  /subjects/:id/notes/:id | Updated data for a specific note |
| GET | /subjects/:id/tasks | fetch and display all tasks of a subject |
| POST | /subjects/:id/tasks | creat new task |
| PUT/PATCH | /subjects/:id /tasks/:id | Updated data for a specific task |
| DELETE |  /subjects/:id/tasks/:id| Send a request to delete a task |


## Installation Instructions

### 1. Clone the Backend Repository

   Open your terminal and run the following command to clone the backend repository:

   ```
   git clone https://git.generalassemb.ly/maryam00/my_study_backend.git
   ```

### 2. Navigate to the Backend Directory

   Change into the backend project directory:

   ```
   cd my_study_backend
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


## IceBox Features
- testing the functions more
