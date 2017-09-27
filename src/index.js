'use strict';

const sqlite3 = require('sqlite3');


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

      // SQLite Error
      if (err) {
        console.error('ERROR SELECTING RESULTS FROM DB');
        console.error(statement);
        console.error(err);
        return callback(err);
      }

      // Return Results
      return callback(null, rows);

    });
  }

  /**
   * Select a single row from the database.  This ensures that only a single
   * row is selected.  It will return an error if 0 or more than 1 rows
   * are returned.
   * @param {string} statement Select Statement
   * @param {RightTrackDB~getCallback} callback Get callback function
   */
  get(statement, callback) {
    this.db.all(statement, function(err, rows) {

      // SQLite ERROR
      if (err) {
        console.error('ERROR SELECTING FIRST RESULT FROM DB');
        console.error(statement);
        console.error(err);
        return callback(err);
      }

      // No Result
      if ( rows.length === 0 ) {
        return callback(
          new Error('No Result returned from select/get statement')
        );
      }

      // Too many results
      else if ( rows.length > 1 ) {
        return callback(
          new Error('More than 1 result returned from select/get statement')
        );
      }

      // Return Result
      return callback(null, rows[0]);

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