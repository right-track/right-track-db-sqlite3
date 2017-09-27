'use strict';

const sqlite3 = require("sqlite3").verbose();


/**
 * Right Track Database Interface
 * -------------------------------
 * This class is a wrapper for the SQLite functions
 * performed on the Right Track Database.
 *
 * This interface implementation is using the sqlite3
 * module to perform all SQLite functions on the database.
 *
 * @class
 */
class RightTrackDB {

    /**
     * Right Track Database Constructor
     * @constructor
     * @param {string} id Agency ID
     * @param {string} location File path to the Right Track database
     */
    constructor(id, location) {
        this.id = id;
        this.location = location;
        this.db = new sqlite3.Database(location);
    }

    /**
     * Select multiple rows from the database
     * @param {string} statement Select Statement
     * @param {RightTrackDB~selectCallback} callback Select callback function
     */
    select(statement, callback) {
        this.db.all(statement, function(err, rows) {
            if (err) {
                console.error("ERROR SELECTING RESULTS FROM DB");
                console.error(statement);
                console.error(err);
                return callback(err);
            }
            return callback(null, rows);
        });
    }

    /**
     * Select a single row from the database
     * @param {string} statement Select Statement
     * @param {RightTrackDB~getCallback} callback Get callback function
     */
    get(statement, callback) {
        this.db.get(statement, function(err, row) {
            if (err) {
                console.error("ERROR SELECTING FIRST RESULT FROM DB");
                console.error(statement);
                console.error(err);
                return callback(err);
            }
            return callback(null, row);
        });
    }

}


// ==== CALLBACK DEFINITIONS ==== //

/**
 * This callback is performed after performing a SELECT query
 * that can return multiple rows.
 * @callback RightTrackDB~selectCallback
 * @param {Error} error Database Query Error
 * @param {object[]} [rows] Selected rows
 */

/**
 * This callback is performed after performing a SELECT query
 * that will return the first row.
 * @callback RightTrackDB~getCallback
 * @param {Error} error Database Query Error
 * @param {object} [row] First selected row
 */



module.exports = RightTrackDB;