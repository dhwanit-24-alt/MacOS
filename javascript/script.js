/********** ELEMENTS **********/
var body = document.querySelector("body");
var adding = document.querySelector(".adding");
var backfull = document.querySelector(".backfull");
var backfullnote = document.querySelector(".backfull-note");
var app_name_calculator = document.querySelector("#calculator");
var calculator = document.querySelector(".calculator");
var closecal = document.querySelector(".close-cal");
var close = document.querySelector(".close");
var closenote = document.querySelector(".close-note");
var container = document.querySelector(".container__Window");
var deleting = document.querySelector(".deleting");
var full = document.querySelector(".full");
var fullnote = document.querySelector(".full-note");
var launchpad = document.querySelector(".launchpad");
var launchpad_searchbox = document.querySelector(".launchpad .searchbox");
var launchpad_app_container = document.querySelector(".Apps-container");
var navbar = document.querySelector(".navbar");
var note = document.querySelector(".note");
var app_name_notes = document.querySelector("#Notes");
var opencalculator = document.querySelector(".open-cal");
var point_cal = document.querySelector("#point-cal");
var openNote = document.querySelector(".openNote");
var opencalculator_lunchpad = document.querySelector(".open-cal-lunching");
var opening = document.querySelector(".opening");
var point_launchpad = document.querySelector("#point-launchpad");
var point_terminal = document.querySelector("#point-terminal");
var point_note = document.querySelector("#point-note");
var terminal = document.querySelector(".terminal");
var content__typing = document.querySelector(".content__typing");
var app_name_terminal = document.querySelector("#Terminal");
var terminal_content = document.querySelector(".terminal .terminal_content");
var terminal_taskbar = document.querySelector(".terminal .window__taskbar");

var clockElement = document.getElementById("clock");
var clockWrapper = document.querySelector(".clock");
var widgetsPanel = document.querySelector(".widgets-panel");

const batteryButton = document.querySelector(".battery");
const batteryText = document.querySelector(".battery__text");
const batteryPopup = document.querySelector(".battery__popup");
const batteryPopupText = document.querySelector(".battery__popup header span");
const batteryProgress = document.querySelector(".battery__progress");
const batteryIsChargingLogo = document.querySelector(".is-charging");
const powerSource = document.querySelector(".power-source");

var clockElement = document.getElementById("clock");
var clockWrapper = document.querySelector(".clock");
var widgetsPanel = document.querySelector(".widgets-panel");

var open_vscode = document.querySelector(".open_vscode");
var Vscode_window = document.querySelector(".Vscode");
var app_name_VScode = document.querySelector("#VScode");
var close_Vscode = document.querySelector(".close-Vscode");
var notes = document.querySelector(".content__sidebar--notes");
var backfull_Vscode = document.querySelector(".backfull-Vscode");
var full_Vscode = document.querySelector(".full-Vscode");
var point_vscode = document.querySelector("#point-vscode");
var create_input = document.createElement("input");

var open_map = document.querySelector(".open_map");
var maps_window = document.querySelector(".maps");
var point_map = document.querySelector("#point-maps");
var app_name_maps = document.querySelector("#map");
var close_map = document.querySelector(".close-map");
var backfull_map = document.querySelector(".backfull-map");
var full_map = document.querySelector(".full-map");

var open_spotlight = document.querySelector(".open_Search");
var spotlight_serach = document.querySelector(".spotlight_serach");

var brightness_range = document.getElementById("brightness");
var sound_range = document.getElementById("sound");

function change_brightness() {
  var brightnessVal = brightness_range.value;

  body.style.filter = `brightness(${brightnessVal + "%"})`;
  body.style.backdropFilter = `brightness(${brightnessVal + "%"})`;
}

var open_chrome =
  document.querySelector(".open_chrome");

var chrome_window =
  document.querySelector(".chrome");

var point_chrome =
  document.querySelector("#point-chrome");

var chrome_close =
  document.querySelector(".chrome-close");

var chrome_minimize =
  document.querySelector(".chrome-minimize");

var chrome_fullscreen =
  document.querySelector(".chrome-fullscreen");

// Spotlight
function handleopen_spotlight() {
  if (spotlight_serach.style.display === "none") {
    spotlight_serach.style.display = "flex";
  } else {
    spotlight_serach.style.display = "none";
  }
}

// Notes app function start

function handleAdding() {
  var create_input = document.createElement("input");
  create_input.placeholder = "writing name";
  notes.append(create_input);
}
function handleDeleting() {
  var inputChild = document.querySelector(".content__sidebar--notes input");
  inputChild.remove();
  content__typing.style.display = "none";
}
function handleNotes() {
  content__typing.style.display = "block";
}
// Notes app function end
function handleMinimize(Minimize) {
  Minimize.style.maxWidth = "80%";
  Minimize.style.minWidth = "70%";
  Minimize.style.height = "430px";
}
function handleFullScreen(maximize) {
  maximize.style.maxWidth = "95%";
  maximize.style.minWidth = "95%";
  maximize.style.height = "90%";
}

function close_window(close, point, appName) {
  close.style.display = "none";

  point.style.display = "none";
  appName.style.display = "none";
}
function open_window(open, point, appName) {
  navbar.style.display = "flex";
  open.style.display = "block";
  container.style.display = "flex";
  launchpad.style.display = "none";
  point_launchpad.style.display = "none";
  appName.style.display = "block";

  point.style.display = "block";
}

function openChrome() {
  navbar.style.display = "flex";

  chrome_window.style.display = "block";

  container.style.display = "flex";

  launchpad.style.display = "none";

  point_launchpad.style.display = "none";

  point_chrome.style.display = "block";
}

// Launchpad function start
function handleOpenLaunching() {
  if (launchpad.style.display === "none") {
    launchpad.style.display = "block";
    navbar.style.display = "none";
    point_launchpad.style.display = "block";
  } else {
    launchpad.style.display = "none";
    navbar.style.display = "flex";
    point_launchpad.style.display = "none";
  }
  container.style.display = "none";
}

function handleLaunchpadSearch(e) {
  for (let app of launchpad_app_container.children) {
    if (e.target.value) {
      app.style.display = "none";
      if (app.dataset.keywords.includes(e.target.value)) {
        app.style.display = "flex";
      }
    } else app.style.display = "flex";
  }
}
// Launchpad function end

// Calculator app start
function handleOpenCal_lunchpad() {
  calculator.style.display = "block";
  container.style.display = "flex";
  navbar.style.display = "flex";
  launchpad.style.display = "none";
  point_cal.style.display = "block";
  point_launchpad.style.display = "none";
}
// Calculator app end

/********** LISTENERS **********/

handleopen_spotlight();
handleOpenLaunching();
adding.addEventListener("click", handleAdding);
backfull.addEventListener("click", () => handleMinimize(terminal));
backfullnote.addEventListener("click", () => handleMinimize(note));
close.addEventListener("click", () =>
  close_window(terminal, point_terminal, app_name_terminal)
);
closenote.addEventListener("click", () =>
  close_window(note, point_note, app_name_notes)
);
close_map.addEventListener("click", () =>
  close_window(maps_window, point_map, app_name_maps)
);
deleting.addEventListener("click", handleDeleting);
full.addEventListener("click", () => handleFullScreen(terminal));
fullnote.addEventListener("click", () => handleFullScreen(note));
full_Vscode.addEventListener("click", () => handleFullScreen(Vscode_window));
full_map.addEventListener("click", () => handleFullScreen(maps_window));
notes.addEventListener("click", handleNotes);
opening.addEventListener("click", () =>
  open_window(terminal, point_terminal, app_name_terminal)
);
open_chrome.addEventListener(
  "click",
  openChrome
);
chrome_close.addEventListener("click", () => {
  chrome_window.style.display = "none";

  point_chrome.style.display = "none";
});
chrome_minimize.addEventListener("click", () => {
  chrome_window.style.display = "none";
});
chrome_fullscreen.addEventListener("click", () => {
  chrome_window.style.maxWidth = "95%";
  chrome_window.style.minWidth = "95%";
  chrome_window.style.width = "95%";

  chrome_window.style.height = "90%";
});
openNote.addEventListener("click", () =>
  open_window(note, point_note, app_name_notes)
);
opencalculator.addEventListener("click", () =>
  open_window(calculator, point_cal, app_name_calculator)
);
open_vscode.addEventListener("click", () =>
  open_window(Vscode_window, point_vscode, app_name_VScode)
);
open_map.addEventListener("click", () =>
  open_window(maps_window, point_map, app_name_maps)
);
close_Vscode.addEventListener("click", () =>
  close_window(Vscode_window, point_vscode, app_name_VScode)
);
backfull_Vscode.addEventListener("click", () => handleMinimize(Vscode_window));
backfull_map.addEventListener("click", () => handleMinimize(maps_window));
closecal.addEventListener("click", () =>
  close_window(calculator, point_cal, app_name_calculator)
);
opencalculator_lunchpad.addEventListener("click", handleOpenCal_lunchpad);
open_spotlight.addEventListener("click", handleopen_spotlight);
launchpad_searchbox.addEventListener("input", handleLaunchpadSearch);
clockWrapper.addEventListener("click", () => {
  widgetsPanel.classList.toggle("open");
});

//calculator code
// select all the buttons
const buttons = document.querySelectorAll(".input button");
// select the <input type="text" class="display" disabled> element
const display = document.querySelector(".display");

// add eventListener to each button
buttons.forEach((button) => {
  button.addEventListener("click", (event) => calculate(event.target.value));
});

operators = ["+", "-", "*", "/"];
function lastNumber(value) {
  var tempChar = operators[0];
  for (var i = 1; i < operators.length; i++) {
    value = value.split(operators[i]).join(tempChar);
  }
  value = value.split(tempChar);
  return value[value.length - 1];
}

function calculate(value) {
  const latestChar = display.value[display.value.length - 1];

  const isEmpty = display.value === "0";
  const isDecimalLastOperand = lastNumber(display.value).includes(".");
  const isNumber =
    value === "0" ||
    value === "1" ||
    value === "2" ||
    value === "3" ||
    value === "4" ||
    value === "5" ||
    value === "6" ||
    value === "7" ||
    value === "8" ||
    value === "9" ||
    value === "10";

  if (isEmpty && isNumber) {
    return (display.value = value);
  }

  switch (value) {
    case "=":
      if (!isEmpty) display.value = eval(display.value);
      return;
    case ".":
      if (!isDecimalLastOperand) display.value += ".";
      return;
    case "C":
      return (display.value = "0");
    case "+/-":
      if (
        !operators.some((operator) =>
          display.value.replace(/^-/, "").includes(operator)
        )
      )
        display.value = -1 * parseFloat(display.value);
      return;
    case "*":
    case "/":
    case "-":
    case "+":
    case "%":
      if (
        latestChar === "/" ||
        latestChar === "*" ||
        latestChar === "-" ||
        latestChar === "+" ||
        latestChar === "%"
      )
        return (display.value = display.value.slice(0, -1) + value);
    default:
      display.value += value;
  }
}

//App dragable
$(function () {
  $(".terminal").draggable();
  $(".note").draggable();
  $(".calculator").draggable();
  $(".Vscode").draggable();
  $(".spotlight_serach").draggable();
  $(".maps").draggable();
});
//date and time
var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();

function digi() {
  var date = new Date(),
    hour = date.getHours(),
    minute = checkTime(date.getMinutes());

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  if (hour > 12) {
    hour = hour - 12;
    if (hour == 12) {
      hour = checkTime(hour);
      clockElement.innerHTML = hour + ":" + minute + " AM";
    } else {
      hour = checkTime(hour);
      clockElement.innerHTML = hour + ":" + minute + " PM";
    }
  } else {
    clockElement.innerHTML = hour + ":" + minute + " AM";
  }
}

let terminal_line_html = $(".terminal_line").html();
let path = "~";
let dirName;
let dirs = ["Desktop", "Downloads", "Music", "Documents"];
function init_terminal_line() {
  $(".cursor").keydown(function (e) {
    // trap the return key being pressed
    if (e.keyCode === 13) {
      e.preventDefault();
      let command = $(this).html();
      if (!command) return;
      let command_output = "zsh: command not found: " + command + "<br>";

      if (command.startsWith("cd ")) {
        path = command.substring(3);
        command_output = "";
      } else if (command === "ls") {
        command_output = dirs.join("\t");
      } else if (command === "pwd") {
        command_output = path + "/";
      } else if (command.startsWith("mkdir ")) {
        dirName = command.substring(6);
        dirs.push(dirName);
        command_output = "";
      } else if (command === "rmdir") {
        dirs.pop();
        command_output = "";
      } else if (command === "ps -aux") {
        command_output = "CPU = 56% <br> MEMORY = 25% <br> DISK = 34%";
      } else if (command.startsWith("cat ")) {
        command_output =
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.<br> Fugiat nihil totam expedita sint necessitatibus quos ducimus.";
      } else if (command.startsWith("du -hs ")) {
        command_output = Math.floor(Math.random() * 100) + "GB";
      }

      $(this).removeAttr("contenteditable");
      $(this).removeClass("cursor");
      $(".terminal_content")
        .append(command_output)
        .append(terminal_line_html.replace("~", path));
      placeCaretAtEnd(document.querySelector(".cursor"));
      init_terminal_line();
    }
  });
}

init_terminal_line();
$(".terminal_content").click(function () {
  placeCaretAtEnd(document.querySelector(".cursor"));
});

function placeCaretAtEnd(el) {
  el.focus();
  var range = document.createRange();
  range.selectNodeContents(el);
  range.collapse(false);
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

//Right click to desktop
document.onclick = hideMenu;
document.oncontextmenu = rightClick;

function hideMenu() {
  document.getElementById("contextMenu").style.opacity = "0";
}

function rightClick(e) {
  e.preventDefault();

  if (document.getElementById("contextMenu").style.opacity == "1") hideMenu();
  else {
    var menu = document.getElementById("contextMenu");

    menu.style.opacity = "1";
    menu.style.left = e.pageX + "px";
    menu.style.top = e.pageY + "px";
  }
}

// =========================================================
// OPENING CURTAIN EXPERIENCE
// =========================================================

var load = document.getElementById("loading");

/*
  =========================================================
  CUSTOM OPENING DATE
  =========================================================

  CHANGE ONLY THIS LINE.

  Format:

  new Date(YEAR, MONTH, DAY, HOUR, MINUTE, SECOND)

  IMPORTANT:
  JavaScript months start at 0.

  January  = 0
  February = 1
  March    = 2
  ...
  December = 11

  Example:
  25 December 2026 at 12:00 AM

  new Date(2026, 11, 25, 0, 0, 0)
*/

//xyz

const CURTAIN_OPEN_DATE = new Date(
  2026,
  7,
  11,
  16,
  42,
  0
);
const LOCK_SCREEN_PASSWORD = "6969";


/*
  Countdown elements
*/

const countdownDays = document.getElementById("countdown-days");
const countdownHours = document.getElementById("countdown-hours");
const countdownMinutes = document.getElementById("countdown-minutes");
const countdownSeconds = document.getElementById("countdown-seconds");


/*
  Add leading zero.

  7  -> 07
  12 -> 12
*/

function curtainPad(number) {
  return String(number).padStart(2, "0");
}


/*
  Update countdown.
*/

function updateCurtainCountdown() {
  const now = new Date();

  const remaining =
    CURTAIN_OPEN_DATE.getTime() - now.getTime();


  /*
    The date has arrived.
  */

  if (remaining <= 0) {
    countdownDays.textContent = "00";
    countdownHours.textContent = "00";
    countdownMinutes.textContent = "00";
    countdownSeconds.textContent = "00";

    /*
      Open the curtains FIRST.
      This guarantees the reveal is triggered
      even if the timer cleanup has an issue.
    */
    openCurtains();

    /*
      Stop the countdown after the opening
      sequence has been triggered.
    */
    clearInterval(window.curtainCountdownTimer);

    return;
  }

  /*
    Convert milliseconds into:

    DD : HH : MM : SS
  */

  const totalSeconds =
    Math.floor(remaining / 1000);

  const days =
    Math.floor(totalSeconds / 86400);

  const hours =
    Math.floor((totalSeconds % 86400) / 3600);

  const minutes =
    Math.floor((totalSeconds % 3600) / 60);

  const seconds =
    totalSeconds % 60;


  countdownDays.textContent =
    String(days).padStart(2, "0");

  countdownHours.textContent =
    curtainPad(hours);

  countdownMinutes.textContent =
    curtainPad(minutes);

  countdownSeconds.textContent =
    curtainPad(seconds);
}


/*
  Open the curtains and reveal the real desktop.
*/

function openCurtains() {
  /*
    Don't run the animation twice.
  */
  if (
    load.classList.contains("curtains-opening") ||
    load.classList.contains("curtains-finished")
  ) {
    return;
  }

  /*
    Start the curtain animation.
  */
  load.classList.add("curtains-opening");

  /*
    Start showing the lock screen BEFORE the
    curtains have completely left the screen.

    This prevents the desktop underneath from
    flashing between the curtains and lock screen.
  */
  setTimeout(() => {
    showMacLockScreen();
  }, 1050);

  /*
    The curtain animation itself takes 1700ms.
    Once it has completely finished moving,
    remove the curtain layer.
  */
  setTimeout(() => {
    load.classList.add("curtains-finished");
  }, 1700);
}

// =========================================================
// MAC LOCK SCREEN
// =========================================================

const macLockScreen =
  document.getElementById("mac-lock-screen");

const lockPasswordInput =
  document.getElementById("lock-password");

const lockLoginButton =
  document.getElementById("lock-login-button");

const lockError =
  document.getElementById("lock-error");


/*
  Show the lock screen.
*/

function showMacLockScreen() {
  macLockScreen.classList.add("visible");

  /*
    Give the animation a moment to appear,
    then focus the password field.
  */
  setTimeout(() => {
    lockPasswordInput.focus();
  }, 650);
}


/*
  Unlock the desktop.
*/

function unlockMac() {
  const enteredPassword =
    lockPasswordInput.value;

  /*
    Correct password.
  */

  if (enteredPassword === LOCK_SCREEN_PASSWORD) {

    lockError.classList.remove("show");

    /*
      Small fade before revealing the desktop.
    */
    macLockScreen.classList.remove("visible");

    /*
      After the fade completes, completely
      remove the lock screen from interaction.
    */
    setTimeout(() => {
      macLockScreen.style.display = "none";
    }, 600);

    return;
  }


  /*
    Wrong password.
  */

  lockError.classList.add("show");

  macLockScreen.classList.remove("password-wrong");

  /*
    Force the browser to restart the animation.
  */
  void macLockScreen.offsetWidth;

  macLockScreen.classList.add("password-wrong");

  lockPasswordInput.select();
}


/*
  Click the arrow to unlock.
*/

lockLoginButton.addEventListener(
  "click",
  unlockMac
);


/*
  Press Enter to unlock.
*/

lockPasswordInput.addEventListener(
  "keydown",
  (event) => {
    if (event.key === "Enter") {
      unlockMac();
    }
  }
);


/*
  Start the curtain system.
 
  Before the date:
      countdown continues.
 
  After the date:
      skip the countdown and open immediately.
*/

function lockload() {
  /*
    Make sure the curtain is visible.
  */

  load.classList.remove(
    "curtains-opening",
    "curtains-finished"
  );


  /*
    First update happens immediately.
    The user doesn't have to wait one second
    to see the correct countdown.
  */

  updateCurtainCountdown();


  /*
    Keep it continuously accurate.
  */

  window.curtainCountdownTimer = setInterval(
    updateCurtainCountdown,
    1000
  );
}

/********** Start Battery **********/
const calculateBattery = () => {
  let number = Math.floor(Math.random() * 100); // If there is any error, it will be the random default battery level

  let batteryIsCharging = false; // Charging status

  navigator
    .getBattery()
    .then(function (battery) {
      number = battery.level * 100;

      batteryIsCharging = battery.charging;
      battery.addEventListener("chargingchange", function () {
        batteryIsCharging = battery.charging;
      });
    })
    .finally(() => {
      batteryText.textContent = `${number}%`;
      batteryProgress.style.width = `${number}%`;
      batteryPopupText.textContent = `${number}%`;

      if (number <= 20) {
        batteryProgress.classList.add("battery__low");
      } else if ((number > 90 && batteryIsCharging) || batteryIsCharging) {
        batteryProgress.classList.add("battery__high");
        batteryIsChargingLogo.classList.add("is-charging-visibel");
        powerSource.textContent = "Power Adapter";
      }
    });
};

batteryButton.addEventListener("click", () => {
  batteryPopup.classList.toggle("opened");
  batteryButton.classList.toggle("selected");
});
/********** End Battery **********/

