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
var opencalculator_lunchpad =
  document.querySelector(".open-cal-lunching");
var opening = document.querySelector(".opening");

var point_launchpad =
  document.querySelector("#point-launchpad");

var point_terminal =
  document.querySelector("#point-terminal");

var point_note =
  document.querySelector("#point-note");

var terminal =
  document.querySelector(".terminal");

var content__typing =
  document.querySelector(".content__typing");

var app_name_terminal =
  document.querySelector("#Terminal");

var terminal_content =
  document.querySelector(".terminal .terminal_content");

var terminal_taskbar =
  document.querySelector(".terminal .window__taskbar");


/********** CLOCK / WIDGETS **********/

var clockElement =
  document.getElementById("clock");

var clockWrapper =
  document.querySelector(".clock");

var widgetsPanel =
  document.querySelector(".widgets-panel");


/********** BATTERY **********/

const batteryButton =
  document.querySelector(".battery");

const batteryText =
  document.querySelector(".battery__text");

const batteryPopup =
  document.querySelector(".battery__popup");

const batteryPopupText =
  document.querySelector(".battery__popup header span");

const batteryProgress =
  document.querySelector(".battery__progress");

const batteryIsChargingLogo =
  document.querySelector(".is-charging");

const powerSource =
  document.querySelector(".power-source");


/********** VSCODE **********/

var open_vscode =
  document.querySelector(".open_vscode");

var Vscode_window =
  document.querySelector(".Vscode");

var app_name_VScode =
  document.querySelector("#VScode");

var close_Vscode =
  document.querySelector(".close-VScode");

var notes =
  document.querySelector(".content__sidebar--notes");

var backfull_VScode =
  document.querySelector(".backfull-VScode");

var full_VScode =
  document.querySelector(".full-VScode");

var point_vscode =
  document.querySelector("#point-vscode");

var create_input =
  document.createElement("input");


/********** MAPS **********/

var open_map =
  document.querySelector(".open_map");

var maps_window =
  document.querySelector(".maps");

var point_map =
  document.querySelector("#point-maps");

var app_name_maps =
  document.querySelector("#map");

var close_map =
  document.querySelector(".close-map");

var backfull_map =
  document.querySelector(".backfull-map");

var full_map =
  document.querySelector(".full-map");


/********** SPOTLIGHT **********/

var open_spotlight =
  document.querySelector(".open_Search");

var spotlight_serach =
  document.querySelector(".spotlight_serach");


/********** BRIGHTNESS / SOUND **********/

var brightness_range =
  document.getElementById("brightness");

var sound_range =
  document.getElementById("sound");


function change_brightness() {
  if (!brightness_range || !body) return;

  var brightnessVal =
    brightness_range.value;

  body.style.filter =
    `brightness(${brightnessVal}%)`;

  body.style.backdropFilter =
    `brightness(${brightnessVal}%)`;
}


/********** SPOTLIGHT **********/

function handleopen_spotlight() {
  if (!spotlight_serach) return;

  if (
    spotlight_serach.style.display === "none"
  ) {
    spotlight_serach.style.display = "flex";
  } else {
    spotlight_serach.style.display = "none";
  }
}


/********** NOTES **********/

function handleAdding() {
  if (!notes) return;

  var create_input =
    document.createElement("input");

  create_input.placeholder =
    "writing name";

  notes.append(create_input);
}


function handleDeleting() {
  if (!notes || !content__typing) return;

  var inputChild =
    document.querySelector(
      ".content__sidebar--notes input"
    );

  if (inputChild) {
    inputChild.remove();
  }

  content__typing.style.display =
    "none";
}


function handleNotes() {
  if (!content__typing) return;

  content__typing.style.display =
    "block";
}


/********** WINDOW HELPERS **********/

function handleMinimize(Minimize) {
  if (!Minimize) return;

  Minimize.style.maxWidth =
    "80%";

  Minimize.style.minWidth =
    "70%";

  Minimize.style.height =
    "430px";
}


function handleFullScreen(maximize) {
  if (!maximize) return;

  maximize.style.maxWidth =
    "95%";

  maximize.style.minWidth =
    "95%";

  maximize.style.height =
    "90%";
}


function close_window(
  closeElement,
  point,
  appName
) {
  if (closeElement) {
    closeElement.style.display =
      "none";
  }

  if (point) {
    point.style.display =
      "none";
  }

  if (appName) {
    appName.style.display =
      "none";
  }
}


function open_window(
  open,
  point,
  appName
) {
  if (navbar) {
    navbar.style.display =
      "flex";
  }

  if (open) {
    open.style.display =
      "block";
  }

  if (container) {
    container.style.display =
      "flex";
  }

  if (launchpad) {
    launchpad.style.display =
      "none";
  }

  if (point_launchpad) {
    point_launchpad.style.display =
      "none";
  }

  if (appName) {
    appName.style.display =
      "block";
  }

  if (point) {
    point.style.display =
      "block";
  }
}


/********** LAUNCHPAD **********/

function handleOpenLaunching() {

  /*
    Launchpad was removed from the desktop.

    IMPORTANT:
    Never allow a missing Launchpad element
    to crash the entire script.

    This was the reason the curtain sequence
    could stop before reaching openCurtains().
  */

  if (!launchpad) {
    return;
  }

  if (
    launchpad.style.display === "none"
  ) {

    launchpad.style.display =
      "block";

    if (navbar) {
      navbar.style.display =
        "none";
    }

    if (point_launchpad) {
      point_launchpad.style.display =
        "block";
    }

  } else {

    launchpad.style.display =
      "none";

    if (navbar) {
      navbar.style.display =
        "flex";
    }

    if (point_launchpad) {
      point_launchpad.style.display =
        "none";
    }
  }

  if (container) {
    container.style.display =
      "none";
  }
}


function handleLaunchpadSearch(e) {

  if (
    !launchpad_app_container ||
    !e ||
    !e.target
  ) {
    return;
  }

  for (
    let app of launchpad_app_container.children
  ) {

    if (e.target.value) {

      app.style.display =
        "none";

      if (
        app.dataset.keywords &&
        app.dataset.keywords
          .toLowerCase()
          .includes(
            e.target.value.toLowerCase()
          )
      ) {
        app.style.display =
          "flex";
      }

    } else {

      app.style.display =
        "flex";
    }
  }
}


/********** CALCULATOR FROM LAUNCHPAD **********/

function handleOpenCal_lunchpad() {

  if (calculator) {
    calculator.style.display =
      "block";
  }

  if (container) {
    container.style.display =
      "flex";
  }

  if (navbar) {
    navbar.style.display =
      "flex";
  }

  if (launchpad) {
    launchpad.style.display =
      "none";
  }

  if (point_cal) {
    point_cal.style.display =
      "block";
  }

  if (point_launchpad) {
    point_launchpad.style.display =
      "none";
  }
}


/********** LISTENERS **********/

handleopen_spotlight();

/*
  IMPORTANT FIX:
  Do NOT call Launchpad initialization when
  Launchpad has been removed from the HTML.
*/
if (launchpad) {
  handleOpenLaunching();
}


if (adding) {
  adding.addEventListener(
    "click",
    handleAdding
  );
}


if (backfull) {
  backfull.addEventListener(
    "click",
    () => handleMinimize(terminal)
  );
}


if (backfullnote) {
  backfullnote.addEventListener(
    "click",
    () => handleMinimize(note)
  );
}


if (close) {
  close.addEventListener(
    "click",
    () =>
      close_window(
        terminal,
        point_terminal,
        app_name_terminal
      )
  );
}


if (closenote) {
  closenote.addEventListener(
    "click",
    () =>
      close_window(
        note,
        point_note,
        app_name_notes
      )
  );
}


if (close_map) {
  close_map.addEventListener(
    "click",
    () =>
      close_window(
        maps_window,
        point_map,
        app_name_maps
      )
  );
}


if (deleting) {
  deleting.addEventListener(
    "click",
    handleDeleting
  );
}


if (full) {
  full.addEventListener(
    "click",
    () => handleFullScreen(terminal)
  );
}


if (fullnote) {
  fullnote.addEventListener(
    "click",
    () => handleFullScreen(note)
  );
}


if (full_VScode) {
  full_VScode.addEventListener(
    "click",
    () => handleFullScreen(Vscode_window)
  );
}


if (full_map) {
  full_map.addEventListener(
    "click",
    () => handleFullScreen(maps_window)
  );
}


if (notes) {
  notes.addEventListener(
    "click",
    handleNotes
  );
}


if (opening) {
  opening.addEventListener(
    "click",
    () =>
      open_window(
        terminal,
        point_terminal,
        app_name_terminal
      )
  );
}


if (openNote) {
  openNote.addEventListener(
    "click",
    () =>
      open_window(
        note,
        point_note,
        app_name_notes
      )
  );
}


if (opencalculator) {
  opencalculator.addEventListener(
    "click",
    () =>
      open_window(
        calculator,
        point_cal,
        app_name_calculator
      )
  );
}


if (open_vscode) {
  open_vscode.addEventListener(
    "click",
    () =>
      open_window(
        Vscode_window,
        point_vscode,
        app_name_VScode
      )
  );
}


if (open_map) {
  open_map.addEventListener(
    "click",
    () =>
      open_window(
        maps_window,
        point_map,
        app_name_maps
      )
  );
}


if (close_Vscode) {
  close_Vscode.addEventListener(
    "click",
    () =>
      close_window(
        Vscode_window,
        point_vscode,
        app_name_VScode
      )
  );
}


if (backfull_VScode) {
  backfull_VScode.addEventListener(
    "click",
    () =>
      handleMinimize(Vscode_window)
  );
}


if (backfull_map) {
  backfull_map.addEventListener(
    "click",
    () =>
      handleMinimize(maps_window)
  );
}


if (closecal) {
  closecal.addEventListener(
    "click",
    () =>
      close_window(
        calculator,
        point_cal,
        app_name_calculator
      )
  );
}


if (opencalculator_lunchpad) {
  opencalculator_lunchpad.addEventListener(
    "click",
    handleOpenCal_lunchpad
  );
}


if (open_spotlight) {
  open_spotlight.addEventListener(
    "click",
    handleopen_spotlight
  );
}


if (launchpad_searchbox) {
  launchpad_searchbox.addEventListener(
    "input",
    handleLaunchpadSearch
  );
}


if (clockWrapper && widgetsPanel) {
  clockWrapper.addEventListener(
    "click",
    () => {
      widgetsPanel.classList.toggle(
        "open"
      );
    }
  );
}


/********** CALCULATOR **********/

const buttons =
  document.querySelectorAll(
    ".input button"
  );

const display =
  document.querySelector(
    ".display"
  );


buttons.forEach((button) => {

  button.addEventListener(
    "click",
    (event) => {

      if (display) {
        calculate(
          event.target.value
        );
      }

    }
  );

});


var operators =
  ["+", "-", "*", "/"];


function lastNumber(value) {

  var tempChar =
    operators[0];

  for (
    var i = 1;
    i < operators.length;
    i++
  ) {

    value =
      value
        .split(operators[i])
        .join(tempChar);
  }

  value =
    value.split(tempChar);

  return value[
    value.length - 1
  ];
}


function calculate(value) {

  if (!display) return;

  const latestChar =
    display.value[
    display.value.length - 1
    ];

  const isEmpty =
    display.value === "0";

  const isDecimalLastOperand =
    lastNumber(
      display.value
    ).includes(".");


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


  if (
    isEmpty &&
    isNumber
  ) {
    display.value =
      value;

    return;
  }


  switch (value) {

    case "=":

      if (!isEmpty) {
        display.value =
          eval(display.value);
      }

      return;


    case ".":

      if (!isDecimalLastOperand) {
        display.value += ".";
      }

      return;


    case "C":

      display.value =
        "0";

      return;


    case "+/-":

      if (
        !operators.some(
          (operator) =>
            display.value
              .replace(/^-/, "")
              .includes(operator)
        )
      ) {

        display.value =
          -1 *
          parseFloat(
            display.value
          );
      }

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
      ) {

        display.value =
          display.value.slice(
            0,
            -1
          ) + value;

        return;
      }

      break;


    default:
      display.value +=
        value;
  }
}


/********** APP DRAGGABLE **********/

$(function () {

  $(".terminal").draggable();

  $(".note").draggable();

  $(".calculator").draggable();

  $(".Vscode").draggable();

  $(".spotlight_serach").draggable();

  $(".maps").draggable();

});


/********** DATE / TIME **********/

var d =
  new Date();

var dateElement =
  document.getElementById(
    "date"
  );

if (dateElement) {
  dateElement.innerHTML =
    d.toDateString();
}


function digi() {

  if (!clockElement) return;

  var date =
    new Date();

  var hour =
    date.getHours();

  var minute =
    checkTime(
      date.getMinutes()
    );


  function checkTime(i) {

    if (i < 10) {
      i = "0" + i;
    }

    return i;
  }


  if (hour > 12) {

    hour =
      hour - 12;

    if (hour == 12) {

      hour =
        checkTime(hour);

      clockElement.innerHTML =
        hour +
        ":" +
        minute +
        " AM";

    } else {

      hour =
        checkTime(hour);

      clockElement.innerHTML =
        hour +
        ":" +
        minute +
        " PM";
    }

  } else {

    clockElement.innerHTML =
      hour +
      ":" +
      minute +
      " AM";
  }
}


/********** TERMINAL **********/

let terminal_line_html =
  $(".terminal_line").html();

let path = "~";

let dirName;

let dirs = [
  "Desktop",
  "Downloads",
  "Music",
  "Documents"
];


function init_terminal_line() {

  $(".cursor").keydown(
    function (e) {

      if (e.keyCode === 13) {

        e.preventDefault();

        let command =
          $(this).html();

        if (!command) return;

        let command_output =
          "zsh: command not found: " +
          command +
          "<br>";


        if (
          command.startsWith("cd ")
        ) {

          path =
            command.substring(3);

          command_output =
            "";

        } else if (
          command === "ls"
        ) {

          command_output =
            dirs.join("\t");

        } else if (
          command === "pwd"
        ) {

          command_output =
            path + "/";

        } else if (
          command.startsWith("mkdir ")
        ) {

          dirName =
            command.substring(6);

          dirs.push(dirName);

          command_output =
            "";

        } else if (
          command === "rmdir"
        ) {

          dirs.pop();

          command_output =
            "";

        } else if (
          command === "ps -aux"
        ) {

          command_output =
            "CPU = 56% <br> MEMORY = 25% <br> DISK = 34%";

        } else if (
          command.startsWith("cat ")
        ) {

          command_output =
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.<br> Fugiat nihil totam expedita sint necessitatibus quos ducimus.";

        } else if (
          command.startsWith("du -hs ")
        ) {

          command_output =
            Math.floor(
              Math.random() * 100
            ) + "GB";
        }


        $(this)
          .removeAttr(
            "contenteditable"
          );

        $(this)
          .removeClass(
            "cursor"
          );


        $(".terminal_content")
          .append(command_output)
          .append(
            terminal_line_html
              .replace(
                "~",
                path
              )
          );


        var cursor =
          document.querySelector(
            ".cursor"
          );

        if (cursor) {
          placeCaretAtEnd(
            cursor
          );
        }

        init_terminal_line();
      }
    }
  );
}


init_terminal_line();


$(".terminal_content").click(
  function () {

    var cursor =
      document.querySelector(
        ".cursor"
      );

    if (cursor) {
      placeCaretAtEnd(cursor);
    }

  }
);


function placeCaretAtEnd(el) {

  if (!el) return;

  el.focus();

  var range =
    document.createRange();

  range.selectNodeContents(
    el
  );

  range.collapse(false);

  var sel =
    window.getSelection();

  sel.removeAllRanges();

  sel.addRange(range);
}


/********** RIGHT CLICK DESKTOP **********/

document.onclick =
  hideMenu;

document.oncontextmenu =
  rightClick;


function hideMenu() {

  var contextMenu =
    document.getElementById(
      "contextMenu"
    );

  if (!contextMenu) return;

  contextMenu.style.opacity =
    "0";
}


function rightClick(e) {

  e.preventDefault();

  var menu =
    document.getElementById(
      "contextMenu"
    );

  if (!menu) return;

  if (
    menu.style.opacity ==
    "1"
  ) {

    hideMenu();

  } else {

    menu.style.opacity =
      "1";

    menu.style.left =
      e.pageX + "px";

    menu.style.top =
      e.pageY + "px";
  }
}


/********************************************************
 * OPENING CURTAIN + MAC LOCK SCREEN
 ********************************************************/

var load =
  document.getElementById(
    "loading"
  );


/*
  CHANGE ONLY THIS DATE/TIME.

  JavaScript months are 0-based:
  January = 0
  August = 7
*/

const CURTAIN_OPEN_DATE =
  new Date(
    2026,
    7,
    11,
    16,
    42,
    0
  );


/*
  CHANGE THE PASSWORD HERE.
*/

const LOCK_SCREEN_PASSWORD =
  "6969";


const countdownDays =
  document.getElementById(
    "countdown-days"
  );

const countdownHours =
  document.getElementById(
    "countdown-hours"
  );

const countdownMinutes =
  document.getElementById(
    "countdown-minutes"
  );

const countdownSeconds =
  document.getElementById(
    "countdown-seconds"
  );


const macLockScreen =
  document.getElementById(
    "mac-lock-screen"
  );

const lockPasswordInput =
  document.getElementById(
    "lock-password"
  );

const lockLoginButton =
  document.getElementById(
    "lock-login-button"
  );

const lockError =
  document.getElementById(
    "lock-error"
  );


function curtainPad(number) {

  return String(number)
    .padStart(2, "0");
}


function updateCurtainCountdown() {

  if (!load) return;

  const remaining =
    CURTAIN_OPEN_DATE.getTime() -
    Date.now();


  /*
    TIME HAS ARRIVED
  */

  if (remaining <= 0) {

    if (countdownDays) {
      countdownDays.textContent =
        "00";
    }

    if (countdownHours) {
      countdownHours.textContent =
        "00";
    }

    if (countdownMinutes) {
      countdownMinutes.textContent =
        "00";
    }

    if (countdownSeconds) {
      countdownSeconds.textContent =
        "00";
    }


    /*
      IMPORTANT:
      Always call openCurtains().
    */

    openCurtains();


    clearInterval(
      window.curtainCountdownTimer
    );

    return;
  }


  const totalSeconds =
    Math.floor(
      remaining / 1000
    );


  const days =
    Math.floor(
      totalSeconds / 86400
    );


  const hours =
    Math.floor(
      (totalSeconds % 86400) /
      3600
    );


  const minutes =
    Math.floor(
      (totalSeconds % 3600) /
      60
    );


  const seconds =
    totalSeconds % 60;


  if (countdownDays) {

    countdownDays.textContent =
      String(days)
        .padStart(2, "0");
  }


  if (countdownHours) {

    countdownHours.textContent =
      curtainPad(hours);
  }


  if (countdownMinutes) {

    countdownMinutes.textContent =
      curtainPad(minutes);
  }


  if (countdownSeconds) {

    countdownSeconds.textContent =
      curtainPad(seconds);
  }
}


/*
  CURTAIN OPENING
*/

function openCurtains() {

  if (!load) return;


  /*
    Prevent duplicate animation.
  */

  if (
    load.classList.contains(
      "curtains-opening"
    ) ||
    load.classList.contains(
      "curtains-finished"
    )
  ) {
    return;
  }


  load.classList.add(
    "curtains-opening"
  );


  /*
    Show the Mac lock screen
    while curtains are moving.
  */

  setTimeout(
    () => {

      showMacLockScreen();

    },
    1050
  );


  /*
    Remove the curtain layer
    after animation finishes.
  */

  setTimeout(
    () => {

      load.classList.add(
        "curtains-finished"
      );

    },
    1700
  );
}


function showMacLockScreen() {

  if (!macLockScreen) return;


  macLockScreen.classList.add(
    "visible"
  );


  setTimeout(
    () => {

      if (lockPasswordInput) {

        lockPasswordInput.focus();

      }

    },
    650
  );
}


/*
  MAC LOCK SCREEN
*/

function unlockMac() {

  if (
    !macLockScreen ||
    !lockPasswordInput
  ) {
    return;
  }


  const enteredPassword =
    lockPasswordInput.value;


  if (
    enteredPassword ===
    LOCK_SCREEN_PASSWORD
  ) {

    if (lockError) {

      lockError.classList.remove(
        "show"
      );
    }


    macLockScreen.classList.remove(
      "visible"
    );


    setTimeout(
      () => {

        macLockScreen.style.display =
          "none";

      },
      600
    );


    return;
  }


  /*
    Wrong password
  */

  if (lockError) {

    lockError.classList.add(
      "show"
    );
  }


  macLockScreen.classList.remove(
    "password-wrong"
  );


  void macLockScreen.offsetWidth;


  macLockScreen.classList.add(
    "password-wrong"
  );


  lockPasswordInput.select();
}


if (lockLoginButton) {

  lockLoginButton.addEventListener(
    "click",
    unlockMac
  );
}


if (lockPasswordInput) {

  lockPasswordInput.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Enter"
      ) {

        unlockMac();

      }

    }
  );
}


/*
  THIS IS CALLED BY:
  <body onload="digi(), lockload(), calculateBattery()">
*/

function lockload() {

  if (!load) return;


  /*
    Reset curtain state.
  */

  load.classList.remove(
    "curtains-opening",
    "curtains-finished"
  );


  /*
    Immediately calculate current
    countdown state.
  */

  updateCurtainCountdown();


  /*
    Keep countdown running.
  */

  clearInterval(
    window.curtainCountdownTimer
  );


  window.curtainCountdownTimer =
    setInterval(
      updateCurtainCountdown,
      1000
    );
}


/********************************************************
 * NETFLIX APP
 ********************************************************/

const openNetflixButton =
  document.querySelector(
    ".open_netflix"
  );


const netflixApp =
  document.getElementById(
    "netflix-app"
  );


const netflixIntro =
  document.getElementById(
    "netflix-intro"
  );


const netflixProfiles =
  document.getElementById(
    "netflix-profiles"
  );


const netflixHome =
  document.getElementById(
    "netflix-home"
  );


const netflixPlayer =
  document.getElementById(
    "netflix-player"
  );


const netflixProfile =
  document.getElementById(
    "netflix-her-profile"
  );


const netflixVideoPlayer =
  document.getElementById(
    "netflix-video-player"
  );


const netflixSlideshow =
  document.getElementById(
    "netflix-slideshow"
  );


const netflixDescription =
  document.getElementById(
    "netflix-featured-description"
  );


/*
  Netflix slideshow.

  For now these are examples.
  Replace/add the files later.

  IMPORTANT:
  Keep the names sequential.
*/

const netflixSlides = [
  {
    image:
      "netflix/slide1.jpg",

    description:
      "A little collection of our favorite moments."
  },

  {
    image:
      "netflix/slide2.jpg",

    description:
      "Two happy lil kids, one beautiful story."
  },

  {
    image:
      "netflix/slide3.jpg",

    description:
      "Some memories deserve their own screen."
  }
];


const netflixVideos = {

  "1":
    "netflix/video1.mp4",

  "2":
    "netflix/video2.mp4"
};


let netflixSlideIndex =
  0;

let netflixSlideTimer =
  null;


/*
  Netflix page navigation
*/

function netflixShowPage(page) {

  [
    netflixIntro,
    netflixProfiles,
    netflixHome,
    netflixPlayer
  ].forEach(
    (element) => {

      if (element) {

        element.classList.remove(
          "active"
        );

      }

    }
  );


  if (page) {

    page.classList.add(
      "active"
    );

  }
}


/*
  OPEN NETFLIX
*/

function netflixOpen() {

  if (!netflixApp) return;


  /*
    Make Netflix full screen.
  */

  netflixApp.classList.add(
    "open"
  );


  /*
    Hide the normal desktop window
    behind Netflix.
  */

  if (navbar) {

    navbar.style.display =
      "none";
  }


  if (container) {

    container.style.display =
      "none";
  }


  if (launchpad) {

    launchpad.style.display =
      "none";
  }


  if (point_launchpad) {

    point_launchpad.style.display =
      "none";
  }


  /*
    Start at Netflix intro.
  */

  netflixShowPage(
    netflixIntro
  );


  /*
    Netflix intro → Who's watching?
  */

  clearTimeout(
    window.netflixIntroTimer
  );


  window.netflixIntroTimer =
    setTimeout(
      () => {

        netflixShowPage(
          netflixProfiles
        );

      },
      1800
    );
}


/*
  CLOSE NETFLIX
*/

function netflixClose() {

  if (!netflixApp) return;


  /*
    Stop any playing video.
  */

  if (netflixVideoPlayer) {

    netflixVideoPlayer.pause();

    netflixVideoPlayer.removeAttribute(
      "src"
    );

    netflixVideoPlayer.load();
  }


  /*
    Stop slideshow.
  */

  clearInterval(
    netflixSlideTimer
  );


  /*
    Hide Netflix.
  */

  netflixApp.classList.remove(
    "open"
  );


  netflixShowPage(
    netflixIntro
  );


  /*
    Restore desktop.
  */

  if (navbar) {

    navbar.style.display =
      "flex";
  }


  if (container) {

    container.style.display =
      "flex";
  }
}


/*
  START SLIDESHOW
*/

function netflixStartSlideshow() {

  if (!netflixSlideshow) {
    return;
  }


  /*
    Clear any previous slideshow.
  */

  netflixSlideshow.innerHTML =
    "";


  netflixSlides.forEach(
    (slide, index) => {

      const image =
        document.createElement(
          "img"
        );


      image.src =
        slide.image;


      image.alt =
        "Netflix featured memory " +
        (index + 1);


      image.className =
        "netflix-slide" +
        (
          index === 0
            ? " active"
            : ""
        );


      image.addEventListener(
        "error",
        () => {

          image.classList.add(
            "asset-missing"
          );

        }
      );


      netflixSlideshow.appendChild(
        image
      );
    }
  );


  netflixSlideIndex =
    0;


  clearInterval(
    netflixSlideTimer
  );


  /*
    Slow, subtle slideshow.
  */

  if (
    netflixSlides.length > 1
  ) {

    netflixSlideTimer =
      setInterval(
        () => {

          const slides =
            netflixSlideshow.querySelectorAll(
              ".netflix-slide"
            );


          if (!slides.length) {
            return;
          }


          slides[
            netflixSlideIndex
          ].classList.remove(
            "active"
          );


          netflixSlideIndex =
            (
              netflixSlideIndex + 1
            ) %
            slides.length;


          slides[
            netflixSlideIndex
          ].classList.add(
            "active"
          );


          if (
            netflixDescription
          ) {

            netflixDescription.textContent =
              netflixSlides[
                netflixSlideIndex
              ].description;
          }

        },
        7000
      );
  }
}


/*
  OPEN VIDEO
*/

function netflixOpenVideo(
  videoNumber
) {

  if (
    !netflixVideoPlayer ||
    !netflixPlayer
  ) {
    return;
  }


  const source =
    netflixVideos[
    String(videoNumber)
    ];


  if (!source) return;


  /*
    Set video source.
  */

  netflixVideoPlayer.src =
    source;


  /*
    Show fullscreen player.
  */

  netflixShowPage(
    netflixPlayer
  );


  /*
    Play after user interaction.
  */

  netflixVideoPlayer
    .play()
    .catch(
      () => { }
    );
}


/*
  Netflix Dock button
*/

if (
  openNetflixButton
) {

  openNetflixButton.addEventListener(
    "click",
    netflixOpen
  );

}


/*
  Netflix profile
*/

if (
  netflixProfile
) {

  netflixProfile.addEventListener(
    "click",
    () => {

      netflixShowPage(
        netflixHome
      );


      /*
        Start slideshow only after
        entering the home screen.
      */

      netflixStartSlideshow();

    }
  );

}


/*
  Netflix video cards
*/

document
  .querySelectorAll(
    ".netflix-video-card"
  )
  .forEach(
    (card) => {

      card.addEventListener(
        "click",
        () => {

          netflixOpenVideo(
            card.dataset.video
          );

        }
      );

    }
  );


/*
  Back to desktop
*/

document
  .querySelectorAll(
    ".netflix-back-to-desktop"
  )
  .forEach(
    (button) => {

      button.addEventListener(
        "click",
        netflixClose
      );

    }
  );


/*
  Back to profiles
*/

document
  .querySelectorAll(
    ".netflix-back-to-profiles"
  )
  .forEach(
    (button) => {

      button.addEventListener(
        "click",
        () => {

          /*
            Stop slideshow when leaving home.
          */

          clearInterval(
            netflixSlideTimer
          );


          netflixShowPage(
            netflixProfiles
          );

        }
      );

    }
  );


/*
  Video player back button
*/

const netflixPlayerBack =
  document.getElementById(
    "netflix-player-back"
  );


if (netflixPlayerBack) {

  netflixPlayerBack.addEventListener(
    "click",
    () => {

      /*
        IMPORTANT:
        Stop video completely.
      */

      if (
        netflixVideoPlayer
      ) {

        netflixVideoPlayer.pause();

        netflixVideoPlayer.removeAttribute(
          "src"
        );

        netflixVideoPlayer.load();

      }


      netflixShowPage(
        netflixHome
      );


      /*
        Resume slideshow.
      */

      netflixStartSlideshow();

    }
  );
}


/********************************************************
 * BATTERY
 ********************************************************/

const calculateBattery =
  () => {

    let number =
      Math.floor(
        Math.random() * 100
      );


    let batteryIsCharging =
      false;


    /*
      Browser doesn't support
      Battery API.
    */

    if (
      !navigator.getBattery
    ) {

      if (batteryText) {

        batteryText.textContent =
          `${number}%`;
      }


      if (batteryProgress) {

        batteryProgress.style.width =
          `${number}%`;
      }


      if (batteryPopupText) {

        batteryPopupText.textContent =
          `${number}%`;
      }


      return;
    }


    navigator
      .getBattery()
      .then(
        function (battery) {

          number =
            battery.level * 100;


          batteryIsCharging =
            battery.charging;


          battery.addEventListener(
            "chargingchange",
            function () {

              batteryIsCharging =
                battery.charging;

            }
          );

        }
      )
      .finally(
        () => {

          if (batteryText) {

            batteryText.textContent =
              `${number}%`;
          }


          if (batteryProgress) {

            batteryProgress.style.width =
              `${number}%`;
          }


          if (batteryPopupText) {

            batteryPopupText.textContent =
              `${number}%`;
          }


          if (
            number <= 20 &&
            batteryProgress
          ) {

            batteryProgress.classList.add(
              "battery__low"
            );

          } else if (
            (
              number > 90 &&
              batteryIsCharging
            ) ||
            batteryIsCharging
          ) {

            if (batteryProgress) {

              batteryProgress.classList.add(
                "battery__high"
              );

            }


            if (
              batteryIsChargingLogo
            ) {

              batteryIsChargingLogo.classList.add(
                "is-charging-visibel"
              );

            }


            if (powerSource) {

              powerSource.textContent =
                "Power Adapter";

            }

          }

        }
      );
  };


if (batteryButton) {

  batteryButton.addEventListener(
    "click",
    () => {

      if (batteryPopup) {

        batteryPopup.classList.toggle(
          "opened"
        );

      }


      batteryButton.classList.toggle(
        "selected"
      );

    }
  );

}


/********** END BATTERY **********/