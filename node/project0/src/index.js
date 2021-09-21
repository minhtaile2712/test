function connect(url, options, callback) {
  if (typeof options === "function") (callback = options), (options = {});
  options = options !== null && options !== void 0 ? options : {};
  try {
    // Create client
    const mongoClient = new MongoClient(url, options);
    // Execute the connect method
    if (callback) {
      return mongoClient.connect(callback);
    } else {
      return mongoClient.connect();
    }
  } catch (error) {
    if (callback) return callback(error);
    else return promise_provider_1.PromiseProvider.get().reject(error);
  }
}
