import SQLite, { openDatabase } from 'react-native-sqlite-storage';
import WebSQLite from 'websqlite';


errorCB = (err) => {
    console.log("SQL Error: " + err);
},
  
successCB = () => {
    console.log("SQL executed fine");
},
  
openCB = () => {
    console.log("Database OPENED");
},

db = SQLite.openDatabase("news.db", "1.0", "Test Database", 200000, openCB, errorCB);


const SQLiteManager = new WebSQLite();


export default class Data {

    init() {
        SQLiteManager.init({
            id: 'news',
            dbObject: SQLite,
        })
    }

    async select(tableName, columns, where) {
        if (where) {
            var whereKey = Object.keys(where)[0]
            var whereValue = where[whereKey]
            return await SQLiteManager.select(tableName, ((columns || columns === "") ? "*" : columns), whereKey + " = ?", [whereValue])
        }
        else {
            return await SQLiteManager.select(tableName, ((columns || columns === "") ? "*" : columns))
        }
    }

    insert(tableName, data) {
        var keys = Object.keys(data)
        var values = keys.map((key) => data[key])
        SQLiteManager.insert(tableName, keys, values)
    }

    insertAll(tableName, data) {
        data.forEach(oneOfData => {
            delete oneOfData.source
            this.insert(tableName, oneOfData)
        });
    }

    update(tableName, data, where) {
        var keys = Object.keys(data)
        var values = keys.map((key) => data[key])

        var whereKey = Object.keys(where)[0]
        var whereValue = where[whereKey]

        SQLiteManager.update(tableName, keys, values, whereKey + " = ?", [whereValue])
    }

    deleteAll(tableName){
        SQLiteManager.delete(tableName)
    }

    delete(tableName, where) {
        var whereKey = Object.keys(where)[0]
        var whereValue = where[whereKey]

        SQLiteManager.delete(tableName, whereKey + " = ?", [whereValue])
    }

    executeSQL(query) {
        SQLiteManager.query(query)
    }

    // createTable() {
    //     db.transaction(function (txn) {
    //         txn.executeSql(
    //           `SELECT name FROM sqlite_master WHERE type='table' AND name='news'`,
    //           [],
    //           function (tx, res) {
    //             if (res.rows.length == 0) {
    //               txn.executeSql(`DROP TABLE IF EXISTS news`, []);
    //               txn.executeSql(
    //                 `CREATE TABLE IF NOT EXISTS news(id INTEGER PRIMARY KEY AUTOINCREMENT, author VARCHAR(30), title VARCHAR(500), description VARCHAR(500), url VARCHAR(500), urlToImage VARCHAR(500), publishedAt DATE, content VARCHAR(500))`,
    //                 []
    //               );
    //             }
    //           }
    //         );
    //       })
    //     Alert.alert('SQLite Database and Table Successfully Created...');
    // }

    createTable(tableName, columns) {
        var query = "";
        for (var i = 0; i < columns.length; i++) {
            if (i === columns.length - 1) {
                query += '"' + columns[i].name + '" ' + columns[i].dataType + ' ' + ((columns[i].isNotNull) ? "NOT NULL " : "") + (columns[i].options ? columns[i].options : "")
            } else {
                query += '"' + columns[i].name + '" ' + columns[i].dataType + ' ' + ((columns[i].isNotNull) ? "NOT NULL " : "") + (columns[i].options ? columns[i].options : "") + ','
            }
        }
        this.executeSQL("CREATE TABLE IF NOT EXISTS " + tableName + ' (' + query + ')')
    }
}