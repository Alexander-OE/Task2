# Project Documentation

Welcome to the API documentation for hngx person resource api.

## Table of Contents

- [PERSON RESOURCE API Documentation](#person-resource-api-documentation)
  - [Sample Usage](#sample-usage)
    - [Creating a Person](#creating-a-person)
    - [Getting all persons](#getting-all-persons)
    - [Getting a person](#getting-a-person)
    - [Updating a Person by ID](#updating-a-person-by-id)
    - [Deleting a person](#deleting-a-person)
    - [Setting Up and Deploying](#setting-up-and-deploying)

---

## Introduction

This API allows you to manage a person resource. It provides endpoints to perfrom CRUD operations (create, read, update, and delete) person records.

## Endpoints

### Create Person

- **Endpoint**: `POST /api`
- **Description**: Create a new person record.
- **Request Format**:
  ```json
  {
    "name": "sam smith",
    "age": 35,
  }
  ```
- **Response Format**:
  ```json
  {
    "user": {
      "_id": "6500c64dc2084f54e2e0940e",
      "name": "sam smith",
      "age": 35,
    }
  }
  ```

### Get All Persons

- **Endpoint**: `GET /api `
- **Description**: Retrieve a list of all persons.
- **Response Format**:
  ```json
  {
    "user": [
      {
        "_id": "6500c64dc2084f54e2e0940e",
        "name": "sam smith",
        "age": 35,
      }
    ]
  }
  ```

### Get Person by ID or Name

- **Endpoint**: `GET /api/:idOrName`
- **Description**: Retrieve a person by their ID or name.
- **Response Format**:
  ```json
  {
    "person": {
      "_id": "6500c64dc2084f54e2e0940e",
      "name": "sam smith",
      "age": 35,
    }
  }
  ```

### Update Person

- **Endpoint**: `PUT /api/:idOrName`
- **Description**: Update a person's information by their ID or name.
- **Request Format**:
  ```json
  {
    "name": "Updated Name",
    "age": 30,
  }
  ```
- **Response Format**:
  ```json
  {
    "updatedPerson": {
      "_id": "6500c64dc2084f54e2e0940e",
      "name": "updated name",
      "age": 30
    }
  }
  ```

### Delete Person

- **Endpoint**: `DELETE /api/:idOrName`
- **Description**: Delete a person by their ID or name.
- **Response Format**: A success message.

## Request and Response Formats

- Requests should be made using JSON format.
- Responses will be in JSON format.
