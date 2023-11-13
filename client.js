const { Kafka } = require("kafkajs");
const key = "4T3OSMOL6T3GTS63";
const secret = "ZKaE2kT9UrVEJPPBuEKVU4CTg4awrlzKmZlnkOVnJC+hbTA/bEQXmnL8FhWzrrKX";
const endPoint = "pkc-41p56.asia-south1.gcp.confluent.cloud:9092";
const protocol = "SASL_SSL";
const mechanisms = "PLAIN";

exports.kafka = new Kafka({
    clientId: "my-app",
    brokers: [`${endPoint}`],
    ssl: true,
    sasl: {
        mechanism: "plain",
        username: key,
        password: secret,
    }
});