const checkbox = document.getElementById("myCheckbox");
const checkboxTrue = document.getElementById("checkboxTrue");
const checkboxFalse = document.getElementById("checkboxFalse");

// validate email
const emailInput = document.getElementById("user-email");

const email = emailInput.value;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (emailPattern.test(email)) {
  console.log("Email введен корректно");
} else {
  console.log("Email введен некорректно");
}

// checkbox
checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    checkboxTrue.style.display = "inline-block";
    checkboxFalse.style.display = "none";
  } else {
    checkboxTrue.style.display = "none";
    checkboxFalse.style.display = "inline-block";
  }
});
