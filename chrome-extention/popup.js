let generateBtn = document.querySelector("#shortURL");

const url = new URL("https://api.minfy.xyz/minify/api/addCustom"); //api url endpoint
let headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

generateBtn.addEventListener("click", () => {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var currentTabUrl = tabs[0].url;
    console.log(currentTabUrl);
  });
});
