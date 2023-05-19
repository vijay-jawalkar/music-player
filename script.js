// theme changer code

function themeConverter(color) {
  return function () {
    document.body.style.backgroundColor = color;
  };
}

document.getElementById("light").onclick = themeConverter("#69C162");
document.getElementById("dark").onclick = themeConverter("#152238");
