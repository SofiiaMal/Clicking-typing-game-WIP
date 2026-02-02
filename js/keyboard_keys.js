window.addEventListener("keydown", (event) => {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  console.log(event.key);
  switch (event.key) {
    case "ArrowDown":
      press_down_key("key_arrowdown");
      break;
    case "ArrowUp":
      press_down_key("key_arrowup");
      break;
    case "ArrowLeft":
      press_down_key("key_arrowleft");
      break;
    case "ArrowRight":
      press_down_key("key_arrowright");
      break;
    case " ":
      press_down_key("key_space");
      break;

    case "1":
    case "!":
      press_down_key("key_1");
      break;
    case "2":
    case "@":
      press_down_key("key_2");
      break;
    case "3":
    case "#":
      press_down_key("key_3");
      break;
    case "4":
    case "$":
      press_down_key("key_4");
      break;
    case "5":
    case "%":
      press_down_key("key_5");
      break;
    case "6":
    case "^":
      press_down_key("key_6");
      break;
    case "7":
    case "&":
      press_down_key("key_7");
      break;
    case "8":
    case "*":
      press_down_key("key_8");
      break;
    case "9":
    case "(":
      press_down_key("key_9");
      break;
    case "0":
    case ")":
      press_down_key("key_0");
      break;
    case "`":
    case "~":
      press_down_key("key_~");
      break;
    case "-":
    case "_":
      press_down_key("key_-");
      break;
    case "=":
    case "+":
      press_down_key("key_=");
      break;
    case "Backspace":
      press_down_key("key_backspace");
      break;
    case "Tab":
      press_down_key("key_tab");
      break;
    case "q":
    case "Q":
      press_down_key("key_q");
      break;
    case "w":
    case "W":
      press_down_key("key_w");
      break;
    case "e":
    case "E":
      press_down_key("key_e");
      break;
    case "r":
    case "R":
      press_down_key("key_r");
      break;
    case "t":
    case "T":
      press_down_key("key_t");
      break;
    case "y":
    case "Y":
      press_down_key("key_y");
      break;
    case "u":
    case "U":
      press_down_key("key_u");
      break;
    case "i":
    case "I":
      press_down_key("key_i");
      break;
    case "o":
    case "O":
      press_down_key("key_o");
      break;
    case "p":
    case "P":
      press_down_key("key_p");
      break;
    case "[":
    case "{":
      press_down_key("key_[");
      break;
    case "]":
    case "}":
      press_down_key("key_]");
      break;
    case '\\':
    case '|':
      press_down_key("key_\\");
      break;
    case "CapsLock":
      press_down_key("key_caps");
      break;
    case "a":
    case "A":
      press_down_key("key_a");
      break;
    case "s":
    case "S":
      press_down_key("key_s");
      break;
    case "d":
    case "D":
      press_down_key("key_d");
      break;
    case "f":
    case "F":
      press_down_key("key_f");
      break;
    case "g":
    case "G":
      press_down_key("key_g");
      break;
    case "h":
    case "H":
      press_down_key("key_h");
      break;
    case "j":
    case "J":
      press_down_key("key_j");
      break;
    case "k":
    case "K":
      press_down_key("key_k");
      break;
    case "l":
    case "L":
      press_down_key("key_l");
      break;
    case ";":
    case ":":
      press_down_key("key_;");
      break;
    case "'":
    case `"`:
      press_down_key("key_'");
      break;
    case "Enter":
      press_down_key("key_enter");
      break;
    case "z":
    case "Z":
      press_down_key("key_z");
      break;
    case "x":
    case "X":
      press_down_key("key_x");
      break;
    case "c":
    case "C":
      press_down_key("key_c");
      break;
    case "v":
    case "V":
      press_down_key("key_v");
      break;
    case "b":
    case "B":
      press_down_key("key_b");
      break;
    case "n":
    case "N":
      press_down_key("key_n");
      break;
    case "m":
    case "M":
      press_down_key("key_m");
      break;
    case ",":
    case "<":
      press_down_key("key_,");
      break;
    case ".":
    case ">":
      press_down_key("key_.");
      break;
    case "/":
    case "?":
      press_down_key("key_/");
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
});

window.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "ShiftLeft":
      press_down_key("key_leftshift");
      break;
    case "ShiftRight":
      press_down_key("key_rightshift");
      break;
    case "ControlLeft":
      press_down_key("key_leftcontrol");
      break;
    case "ControlRight":
      press_down_key("key_rightcontrol");
      break;
    case "AltLeft":
      press_down_key("key_leftalt");
      break;
    case "AltRight":
      press_down_key("key_rightalt");
      break;
  }
});

function press_down_key(id) {
  const key = document.getElementById(id);
  const p = key.querySelector("p");
  const img = key.querySelector("img");

  if (!img.src.includes("_pressed")) {
    playClick()
    key.style.marginTop = "+10px";
    p.style.marginTop = "+10px";
    img.src = img.src.replace(".png", "_pressed.png");

    setTimeout(() => {
      img.src = img.src.replace("_pressed.png", ".png");
      p.style.marginTop = "-10px";
      key.style.marginTop = "-0px";
    }, 300)
  }
}

function playClick() {
    const sound = click_sound.cloneNode();
    sound.currentTime = 0;
    sound.play();
}

const click_sound = new Audio();
click_sound.src = "./assets/misc/click_sample_9.mp3";