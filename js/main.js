function displayChanger() {
  let x = document.getElementById("methods");
  if (x.value === "GET")
    document.getElementById("requestText").style.display = "none";
  else document.getElementById("requestText").style.display = "block";
}
function gettingAjax(method, url, func, str) {
  let req = new XMLHttpRequest();
  req.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      func(this);
    }
    if (this.readyState == 4 && this.status == 201) {
      func(this);
    }
  };
  req.open(method, url, false);
  if (method === "GET") {
    req.send();
  } else {
    req.setRequestHeader("content-type", "application/json");
    req.send(str);
  }
}
function reqhandler() {
  let method = document.getElementById("methods").value;
  console.log(document.getElementById("reqtext").value);
  method === "GET"
    ? gettingAjax(method, document.getElementById("url").value, showResponse)
    : gettingAjax(
        method,
        document.getElementById("url").value,
        showResponse,
        document.getElementById("reqtext").value
      );
}
function showResponse(xhttp) {
  // console.log(xhttp.responseText);
  document.getElementById("responsetext").value = xhttp.responseText;
  document.getElementById("status").value = `status is: ${
    xhttp.status
  }  Plain-Text: ${xhttp.getResponseHeader("content-type")}`;
}
