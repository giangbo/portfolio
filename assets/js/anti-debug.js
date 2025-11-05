document.addEventListener("keydown", function (e) {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
    e.preventDefault();
    alert("Bạn không nên làm thế đâu!");
    window.location.href = "chuidebug.html";
  }
  if (e.key === "F12" || (e.ctrlKey && e.shiftKey && ["I", "C", "J", "S"].includes(e.key)) || (e.ctrlKey && e.key.toLowerCase() === "u")) {
    e.preventDefault();
    alert("Bạn không nên làm thế đâu!");
    window.location.href = "chuidebug.html";
  }
});

document.addEventListener("contextmenu", e => e.preventDefault());

(function () {
  const threshold = 160;
  setInterval(() => {
    if (window.outerHeight - window.innerHeight > threshold) {
      alert("Bạn không nên làm thế đâu!");
      window.location.href = "chuidebug.html";
    }
  }, 1000);
})();

// Blur Overlay on focus loss
const blurOverlay = document.getElementById("blur-overlay");
window.addEventListener("blur", () => blurOverlay.style.opacity = 1);
window.addEventListener("focus", () => blurOverlay.style.opacity = 0);
window.addEventListener("blur", () => {
  blurOverlay.style.opacity = 1;
  document.getElementById("myVideo")?.pause();
  document.getElementById("myAudio")?.pause();
});
window.addEventListener("focus", () => {
  blurOverlay.style.opacity = 0;
  document.getElementById("myVideo")?.play();
  document.getElementById("myAudio")?.play();
});

(function(){
  const devtools = () => {
    const before = new Date();
    debugger;
    const after = new Date();
    return after - before > 10;
  };
  setInterval(() => {
    if (devtools()) {
      alert("DevTools bị chặn.");
      window.location.href = "chuidebug.html";
    }
  }, 1000);
})();

(function () {
  const bait = new Image();
  Object.defineProperty(bait, "id", {
    get() {
      // Bị gọi khi console.log mở ra
      alert("Bạn không nên làm thế đâu!");
      window.location.href = "chuidebug.html";
    }
  });
  setInterval(() => console.log(bait), 1000);
})();

(function () {
  setInterval(() => {
    const detect = new Function("debugger;");
    detect();
  }, 500);
})();

(function () {
  const original = Function.prototype.toString;
  setInterval(() => {
    if (Function.prototype.toString !== original) {
      alert("Đừng cố gắng nữa!");
      window.location.href = "chuidebug.html";
    }
  }, 1000);
})();

(function () {
  const detectDevtools = () => {
    const widthDiff = window.outerWidth - window.innerWidth > 160;
    const heightDiff = window.outerHeight - window.innerHeight > 160;
    return widthDiff || heightDiff;
  };

  setInterval(() => {
    if (detectDevtools()) {
      document.body.innerHTML = '';
      document.body.style.display = 'none';
    }
  }, 1000);
})();

(function () {
  const startAnti = () => {
    while (true) {} // Treo luôn trình duyệt
  };

  const detect = () => {
    const start = performance.now();
    debugger;
    const end = performance.now();
    return end - start > 100;
  };

  setInterval(() => {
    if (detect()) startAnti();
  }, 1000);
})();

console.log = function () {
  console.warn(">:(");
  window.location.href = "chuidebug.html";
};
console.error = console.debug = console.warn = console.info = console.log;
