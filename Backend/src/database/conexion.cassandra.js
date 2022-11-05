const cassandra = require('cassandra-driver');
const keyspace="basesdos";
const contactPoints = ['3.84.95.246'];

const client = new cassandra.Client({
    contactPoints: contactPoints, 
    keyspace: keyspace, 
    localDataCenter:'datacenter1'
});

module.exports = client



