function image() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("select");
        resolve("image");
      }, 4000);
    });
  }
  
  function filter(image) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("filter ");
        resolve("image");
      }, 3000);
    });
  }
  
  function caption(image) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulating caption addition process
        console.log("add");
        resolve("caption");
      }, 5000);
    });
  }
  
  function image(image) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("uploaded");
        resolve("image");
      }, 4000);
    });
  }
  
  image()
    .then(filter)
    .then(caption)
    .then(image)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  