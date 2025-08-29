    
    document.body.style.background = "black";
    document.body.style.color = "white";
    document.body.style.fontFamily = "Arial, sans-serif";
    document.body.style.textAlign = "center";
    document.body.style.marginTop = "50px";


    const userNumber = document.getElementById("userNumber");
    userNumber.style.padding = "10px";
    userNumber.style.borderRadius = "20px";
    userNumber.style.border = "none";
    userNumber.style.outline = "none";
    userNumber.style.width = "200px";
    userNumber.style.textAlign = "center";

    const buttons = document.querySelectorAll("button");
    buttons.forEach(btn => {
      btn.style.padding = "10px 20px";
      btn.style.margin = "10px";
      btn.style.borderRadius = "10px";
      btn.style.border = "none";
      btn.style.cursor = "pointer";
      btn.style.background = "#333";
      btn.style.color = "white";
      btn.style.fontSize = "16px";
    });

    const counterBox = document.querySelector(".counter-box");
    counterBox.style.display = "flex";
    counterBox.style.justifyContent = "center";
    counterBox.style.alignItems = "center";
    counterBox.style.background = "#222";
    counterBox.style.width = "250px";
    counterBox.style.margin = "20px auto";
    counterBox.style.padding = "20px";
    counterBox.style.borderRadius = "20px";

    
    const countEl = document.getElementById("count");
    countEl.style.fontSize = "30px";
    countEl.style.margin = "0 20px";


    let count = 0;
    const increaseBtn = document.getElementById("increase");
    const decreaseBtn = document.getElementById("decrease");
    const sendBtn = document.getElementById("sendBtn");

    increaseBtn.addEventListener("click", () => {
      count++;
      countEl.textContent = count;
    });


    decreaseBtn.addEventListener("click", () => {
      count--;
      countEl.textContent = count;
    });

    sendBtn.addEventListener("click", () => {
      if (userNumber.value !== "") {
        count = parseInt(userNumber.value); 
        countEl.textContent = count;       
      } else {
        alert("Please enter a number!");
      }
    });