function serializeJSON (form) {
    // Create a new FormData object
    const formData = new FormData(form);
  
    // Create an object to hold the name/value pairs
    const pairs = {};
  
    // Add each name/value pair to the object
    for (const [name, value] of formData) {
      pairs[name] = value;
    }
  
    // Return the JSON string
    return JSON.stringify(pairs, null, 2);
  }

document.getElementById("addClient").addEventListener("click", function () {
    
  fetch("/home", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: serializeJSON(document.querySelector("form"))
  });
 
});

