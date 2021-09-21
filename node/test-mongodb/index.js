const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "test";

async function main() {
  await client.connect();
  console.log("Connected successfully to mongodb server");

  const db = client.db(dbName);
  const Rule = db.collection("rules");
  Rule.updateOne({});

  const insertResult = await Rule.insertOne({
    type: "function",
    entity: "abc1",
    attr: "attr1",
    expression: {
      $add: [
        { entity: "abc2", attr: "voltage1" },
        { entity: "abc3", attr: "voltage1" },
      ],
    },
  });
  console.log("insertResult", insertResult);

  const addedRuleId = insertResult.insertedId;

  const findOneResult = await Rule.findOne({ _id: addedRuleId });
  console.log("findOneResult", findOneResult);

  const findResult = await Rule.find({ _id: addedRuleId }).toArray();
  console.log("findResult", findResult);

  const updateResult = await Rule.updateOne(
    { _id: addedRuleId },
    { $set: { a: 1 } }
  );
  console.log("updateResult", updateResult);
  const updateResult1 = await Rule.updateOne(
    { _id: addedRuleId },
    { $set: { a: 1 } }
  );
  console.log("updateResult1", updateResult1);
  const updateResult2 = await Rule.updateOne({ _id: "aa" }, { $set: { a: 1 } });
  console.log("updateResult2", updateResult2);

  const deleteResult = await Rule.deleteOne({ _id: addedRuleId });
  console.log("deleteResult", deleteResult);

  const deleteResult1 = await Rule.deleteOne({ _id: addedRuleId });
  console.log("deleteResult1", deleteResult1);

  return "finished";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
