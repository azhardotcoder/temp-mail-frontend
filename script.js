// let API = "https://temp-mail-aewa.onrender.com";
// let API = "http://localhost:5000/";
let API_KEY = "d1c0735d43mshee1e23f1b3198e4p178733jsn71164376e8e3";
let API_HOST = "temp-mail44.p.rapidapi.com";
let data = [
  {
    id: "c1302909-b83f-46c1-8b9d-9ee790358e33",
    from: '"Raising Gaming" <azar123khan456@gmail.com>',
    to: "tz1uxahdr5aj@rentforsale7.com",
    cc: null,
    subject: "hf",
    body_text: "OTP=51424",
    body_html:
      '<div dir="ltr"><div><div dir="ltr" class="gmail_signature" data-smartmail="gmail_signature"><div dir="ltr"><a href="mailto:tz1uxahdr5aj@rentforsale7.com">tz1uxahdr5aj@rentforsale7.com</a><br></div></div></div></div>\n',
    created_at: "2024-03-17T23:18:29.556961653Z",
    attachments: [],
  },
  {
    id: "03908f40-af88-4bfc-a5ab-3f05863e1f38",
    from: '"Raising Gaming" <azar123khan456@gmail.com>',
    to: "tz1uxahdr5aj@rentforsale7.com",
    cc: null,
    subject: "Re: hf",
    body_text: "OTP=417525",
    body_html:
      '<div dir="ltr">sfassffs<br clear="all"><div><div dir="ltr" class="gmail_signature" data-smartmail="gmail_signature"><div dir="ltr"><a href="https://www.instagram.com/azhar__khan23/" target="_blank"><img src="https://ci3.googleusercontent.com/mail-sig/AIorK4wBTcqpFVE18MTQNqjkey3DRyzMcUJHe0lydxRMgHePP6V8ROw9xYCumjUCxP4_aLownJzJwLs"></a><br></div></div></div><br></div><br><div class="gmail_quote"><div dir="ltr" class="gmail_attr">On Mon, Mar 18, 2024 at 4:48 AM Raising Gaming &lt;<a href="mailto:azar123khan456@gmail.com">azar123khan456@gmail.com</a>&gt; wrote:<br></div><blockquote class="gmail_quote" style="margin:0px 0px 0px 0.8ex;border-left:1px solid rgb(204,204,204);padding-left:1ex"><div dir="ltr"><div><div dir="ltr" class="gmail_signature"><div dir="ltr"><a href="mailto:tz1uxahdr5aj@rentforsale7.com" target="_blank">tz1uxahdr5aj@rentforsale7.com</a><br></div></div></div></div>\n</blockquote></div>\n',
    created_at: "2024-03-17T23:43:52.597832452Z",
    attachments: [],
  },
  {
    id: "03908f40-af88-4bfc-a5ab-3f05863e1f39",
    from: '"Raising Gaming" <azar123khan456@gmail.com>',
    to: "tz1uxahdr5aj@rentforsale7.com",
    cc: null,
    subject: "Re: hf",
    body_text: "OTP=417525",
    body_html:
      '<div dir="ltr">sfassffs<br clear="all"><div><div dir="ltr" class="gmail_signature" data-smartmail="gmail_signature"><div dir="ltr"><a href="https://www.instagram.com/azhar__khan23/" target="_blank"><img src="https://ci3.googleusercontent.com/mail-sig/AIorK4wBTcqpFVE18MTQNqjkey3DRyzMcUJHe0lydxRMgHePP6V8ROw9xYCumjUCxP4_aLownJzJwLs"></a><br></div></div></div><br></div><br><div class="gmail_quote"><div dir="ltr" class="gmail_attr">On Mon, Mar 18, 2024 at 4:48 AM Raising Gaming &lt;<a href="mailto:azar123khan456@gmail.com">azar123khan456@gmail.com</a>&gt; wrote:<br></div><blockquote class="gmail_quote" style="margin:0px 0px 0px 0.8ex;border-left:1px solid rgb(204,204,204);padding-left:1ex"><div dir="ltr"><div><div dir="ltr" class="gmail_signature"><div dir="ltr"><a href="mailto:tz1uxahdr5aj@rentforsale7.com" target="_blank">tz1uxahdr5aj@rentforsale7.com</a><br></div></div></div></div>\n</blockquote></div>\n',
    created_at: "2024-03-17T23:43:52.597832452Z",
    attachments: [],
  },
];

// bindData(data);
const url = "http://localhost:3001/email";
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
async function emailChangeHandler() {
  try {
    const response = await fetch(url, options);
    let newEmail = await response.json();
    bindData(newEmail)
  } catch (e) {
    console.log(e);
  }
}
let obj = { to: "codeguyakash@gmail.com" };
let arr = [];
// bindData(obj);

function bindData(kuch) {
  // console.log(kuch.email);
  if (kuch) {
    console.log("obj hai");
    document.getElementById("email").innerText = `${kuch.email}`;
  } else {
    kuch.forEach((element, index) => {
      document
        .getElementById("email-content")
        .appendChild(
          document.createElement("p")
        ).innerText = `${element.body_text}`;
      document.getElementById("email").innerText = `${element.to}`;
    });
  }
}

document.getElementById("change-email").addEventListener("click", () => {
  console.log("click");
  emailChangeHandler();
});
