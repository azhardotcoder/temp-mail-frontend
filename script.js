let res_msg = document.getElementById("res-msg");
let API_KEY = "d1c0735d43mshee1e23f1b3198e4p178733jsn71164376e8e32";
let API_HOST = "temp-mail44.p.rapidapi.com";
const newEmailURL = "https://temp-mail-aewa.onrender.com/email";
const readEmailURL = "https://temp-mail-aewa.onrender.com";
async function emailChangeHandler() {
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": API_HOST,
    },
    body: JSON.stringify({
      key1: "value",
      key2: "value",
    }),
  };
  try {
    res_msg.innerText = "Waiting....";
    const response = await fetch(newEmailURL, options);
    let newEmail = await response.json();

    bindData(newEmail);
  } catch (error) {
    res_msg.innerText = "Something went wrong, please try again later";
    console.log(error.message);
    
  }
}

async function getEmailHandler() {
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": API_HOST,
    },
    body: JSON.stringify({
      email: localStorage.getItem("email"),
    }),
  };

  try {
    res_msg.innerText = "Waiting....";
    let readEmailRes = await fetch(readEmailURL, options);
    let emails = await readEmailRes.json();
    res_msg.innerText = "";
    bindData(emails);
  } catch (error) {
    res_msg.innerText = "Something went wrong, please try again later";
    console.log(error);
  }
}
function bindData(kuch) {
  if (kuch && Array.isArray(kuch)) {
    // Clear previous content
    document.getElementById("email-content").innerHTML = "";
    kuch.forEach((element, index) => {
      res_msg.innerText = "";
      const listItem = document.createElement("li");
      listItem.innerText = `${element.body_text}`;
      document.getElementById("email-content").appendChild(listItem);
    });
  } else if (kuch && typeof kuch === "object") {
    localStorage.setItem("email", kuch.email);
    res_msg.innerText = "";
    document.getElementById("email").innerText = localStorage.getItem("email");
    
  }
}
document.getElementById("copy").addEventListener("click", () => {
  const copiedEmail = document.getElementById("email").innerText;
  navigator.clipboard.writeText(copiedEmail);
  res_msg.innerText = "Copied!!";
  setTimeout(() => {
    res_msg.innerText = "";
  }, 3000);
});
document.getElementById("change-email").addEventListener("click", () => {
  console.log("click");
  emailChangeHandler();
});
document.getElementById("refresh").addEventListener("click", () => {
  console.log("click, refresh");
  getEmailHandler();
});