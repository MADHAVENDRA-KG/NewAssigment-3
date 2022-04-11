var mongo = require("mongodb");
var MongoClient = require("mongodb").MongoClient;
var url =
  "mongodb://madhav:I1V2CtaMRjztgQrbwsDcF03UYnn64ARaqg31FROjyUKrhRyHWDVPOYGF8HWIPW8fBQArCHmIEpG3HuFvp6FdkA==@madhav.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@madhav@/mydb";
const readline = require("readline-sync");
const task = Number(readline.question());
if (task === 1) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = [];
    const inp = Number(readline.question());
    for (let i = 0; i < inp; i++) {
      const p = new Object();
      p.address = readline.question();
      p.name = readline.question();
      myobj.push(p);
    }
    dbo.collection("customers").insertMany(myobj, function (err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
      db.close();
    });
  });
} else if (task === 0) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    const y = readline.question();
    const arr = y.split(" ");
    for (let i = 0; i < arr.length; i++) {
      var query = { $or: [{ name: arr[i] }, { address: arr[i] }] };
      dbo
        .collection("customers")
        .find(query)
        .toArray(function (err, result) {
          if (err) throw err;
          else if (i == arr.length - 1) {
            db.close();
          }
          console.log(result);
          // db.close();
        });
    }
  });
}
console.log("finish");
