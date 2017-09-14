Right Track Database (node-sqlite3)
===================================

This module provides an implementation of the _Right Track Database_ 
using the [node-sqlite3](https://github.com/mapbox/node-sqlite3) module. 

### Implementation

The **RightTrackDB** class must have the following methods:

- **constructor(id, location)**
    - **id:** the agency id
    - **location:** the path to the sqlite database
    
- **select(statement, callback)**
    - this function performs a SELECT on the sqlite database and returns an 
    array containing the selected rows
    - **statement:** the full SQLite SELECT statement
    - **callback:** callback function accepting the array of results
    
- **get(statement, callback)**
    - this function performs a SELECT on the sqlite database and returns an 
    object containing the first of the selected rows
    - **statement:** the full SQLite SELECT statement
    - **callback:** callback function accepting the object of the first 
    selected row
     