let saveBtn = document.querySelector("#save");
let api = document.querySelector("#apikey");
let toastError = document.querySelector(".toast-error");
let toastSuccess = document.querySelector(".toast-success");

saveBtn.addEventListener("click", () => {
  if (api.value) {
    toastSuccess.classList.remove("d-hide");
    chrome.storage.local.set({ urlMinifyAPIKey: api.value }, function () {
      console.log("Value is set to " + api.value);
    });
  } else {
    toastError.classList.remove("d-hide");
    setTimeout(() => {
      toastError.classList.add("d-hide");
    }, 2000);
  }
});
