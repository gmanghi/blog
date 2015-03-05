$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("cOSipw6bHqAKAXfhCaerP9rvNuw3cRg0U8JdgzrR", "kmW4P3eAlvfOWs8zGxrjh1XjTUVTctBXAENW8ide");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "blog"}).then(function(object) {
      alert("yay! it worked");
    });
 
});