var redis = require("redis"),
    client = redis.createClient();

client.on("error", function (err) {
    console.log("Error " + err);
});

client.hset("todo", "value1", "123");
client.hset("todo", "value2", "1erw23");
client.hset("todo", "value3", "12d3");

client.hgetall( "todo",  function(err, result){

    console.log(result[0]);

} )

client.hdel('todo', "value1", function(err, response) {
    if (response == 1) {
       console.log("Deleted Successfully!")
    } else{
     console.log("Cannot delete")
    }
 })

 client.hgetall( "todo",  function(err, result){

    //console.log(result[0]);
    for(var id in result) {
        console.log("id " + id + ": " + result[id]);
    }

} )
