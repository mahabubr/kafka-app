const { Kafka } = require("kafkajs");

require("dotenv").config();

exports.kafka = new Kafka({
  clientId: "kafka-app",
  brokers: [process.env.IP_ADDRESS],
});
