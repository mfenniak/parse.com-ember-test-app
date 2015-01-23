
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.beforeSave("TestObject", function(request, response) {
  if (request.object.get("foo") == null) {
    response.error("property 'foo' is required");
  } else if (request.object.get("foo").length < 3) {
    response.error("foo must be at least three characters long");
  } else {
    response.success();
  }
});
