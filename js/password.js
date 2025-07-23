function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  if (input === "0112") {
    window.location.href = "home.html";
  } else {
    alert("비밀번호가 틀렸습니다.");
  }
}