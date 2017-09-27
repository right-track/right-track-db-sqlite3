Right Track Database (sqlite3)
==============================

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
    - **callback(err, rows):** callback function accepting the array of results
    
- **get(statement, callback)**
    - this function performs a SELECT on the sqlite database and returns an 
    object containing the first of the selected rows.  **This ensures that only 
    1 row is selected.  It will return an Error if 0 or more than 1 rows are 
    selected**.
    - **statement:** the full SQLite SELECT statement
    - **callback(err, row):** callback function accepting the object of the first 
    selected row
     