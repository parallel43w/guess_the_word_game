let words=["apple", "flower", "car"]
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
    function create_input(content,shuffeled_word) {
      content.innerHTML = "";

      for (let i = 0; i < shuffeled_word.length; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.className="input";
        input.maxLength = 1; // only one letter per box
        input.addEventListener("input", checkFilled);
        content.appendChild(input);
      }
    }
    function shuffle_random_word() {
      let word = words[getRndInteger(0, words.length - 1)];
      let shuffeled_word = word;
      
      while (shuffeled_word===word) {
        shuffeled_word="";
        let letters = word.split(""); // turn into array
         while (letters.length > 0) {
          
          let index = getRndInteger(0, letters.length - 1);
          shuffeled_word += letters[index];
          letters.splice(index, 1); // remove letter from array
        }
      
      }
      
      
      const content = document.getElementById("input_fields");

      create_input(content,shuffeled_word)
      document.getElementById("word").textContent = shuffeled_word;
      return shuffeled_word;
    }

    window.onload = function () {
      const shuffeled_word = shuffle_random_word();
      const content = document.getElementById("input_fields");

      create_input(content,shuffeled_word)

      const inputs=document.querySelectorAll("#input_fields input");
     inputs.forEach(input => input.value="");
    };
function reset() {
     const inputs=document.querySelectorAll("#input_fields input");
     inputs.forEach(input => input.value="");
};
function showPopup(message, autoClose = true) {
  // remove existing popup if present
  const existing = document.querySelector(".game-overlay");
  if (existing) existing.remove();

  const overlay = document.createElement("div");
  overlay.className = "game-overlay";
  Object.assign(overlay.style, {
    position: "fixed",
    inset: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0,0,0,0.45)",
  });

  const modal = document.createElement("div");
  modal.className = "game-modal";
  Object.assign(modal.style, {
    background: "#fff",
    padding: "16px 20px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 8px 24px rgba(0,0,0,0.2)"
  });

  const p = document.createElement("p");
  p.textContent = message;

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "Close";
  closeBtn.addEventListener("click", () => overlay.remove());
  Object.assign(closeBtn.style, { marginTop: "12px", padding: "6px 10px" });

  modal.appendChild(p);
  modal.appendChild(closeBtn);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  if (autoClose) {
    setTimeout(() => overlay.remove(), 1800);
  }
}

function checkFilled() {
  const body = document.body;

  const inputs = document.querySelectorAll("#input_fields input");
  if (!inputs || inputs.length === 0) return false;

  const allFilled = Array.from(inputs).every(input => input.value.trim() !== "");
  if (!allFilled) return false;

  const input_str = Array.from(inputs).map(input => input.value.trim()).join("");

  if (typeof originalWord !== "undefined" && originalWord !== null) {
    if (input_str.toLowerCase() === originalWord.toLowerCase()) {
      showPopup("You won!", true);
      return true;
    } else {
      return false;
    }
  }

  if (Array.isArray(words) && words.includes(input_str)) {
    showPopup("You won!", true);
    return true;
  }

  return false;
}
