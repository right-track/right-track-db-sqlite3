Right Track Database (sqlite3)
==============================

This module provides an implementation of the **Right Track Database** 
using the [node-sqlite3](https://github.com/mapbox/node-sqlite3) module. The 
_RightTrackDB_ Class is used to query the SQLite database containing the GTFS 
data and additional Right Track data for a transit agency.  The SQLite database 
is generated using the **right-track-db-build** module.

### Implementation

The _RightTrackDB_ Class must have the following methods:

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
    object containing the first of the selected rows.  If no rows are selected, 
    then the row returned will be `undefined`.  If more than one row is selected, 
    then the first row will be returned.
    - **statement:** the full SQLite SELECT statement
    - **callback(err, row):** callback function accepting the object of the first 
    selected row
     