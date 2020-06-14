const players = [];
let playerOne = "";
let playerTwo = "";
let playerThree = "";
let playerFour = "";
let playerFive = "";
let playerSix = "";
let count = 0;
let q = 0;

const game = (x,y) => {
  $("#notepad").empty();
  $("#notepad").append(`
    <div class="questionaire animate__animated animate__fadeIn${y}Big">
      <div class="row">
        <div class="col-1 center"><button onClick="goBack()"><i class="fas fa-backward"></i></button></div>
        <div class="col-10 center text-center">
  `);
  if (x===0){
    $("#notepad").addClass("center");
    $("#notepad").append(`
      <label for="userInput">What is your name?</label>
      <input type="text" id="userInput" />
    `);
    $(".questionaire > .row > div").first().empty();
  } else if (x===1) {
    $("#notepad").append(`
      <label for="userInput">${playerOne}, how many people are playing?</label>
      <select id="userInput" >
        <option value="2">2</option>
        <option value="3" selected="selected">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
    `);  
  } else if (x >= 2 && x <= 6 ) {
    $("#notepad").append(`
      <label for="userInput">What is player ${x}'s name?</label>
      <input type="text" id="userInput" />
    `);  
  }
  $("#notepad").append(`
        </div>
        <div class="col-1 center"><button id="qBtn" onClick="questions(${x}, 'userInput')"><i class="fas fa-forward"></i></button></div>
      </div>
    </div>
  `)
  $("#userInput").keyup(e => {
    if (e.keyCode===13) {
      e.preventDefault();
      $("#qBtn").click();
    }
  });
  setTimeout(() => $("#userInput").focus(), 1000);
}

const goBack = x => {
  q -= 1;
  $(".questionaire").addClass("animate__fadeOutRightBig");
  setTimeout(() => game(q,"Left"), 500);
}

const goForward = () => {
  q += 1;
  console.log(q);
  $(".questionaire").addClass("animate__fadeOutLeftBig");
  setTimeout(() => {
    game(q, "Right");
  }, 500);
}

const questions = (num, input) => {
  const data = $("#"+input).val();
  switch (num) {
    case 0:
      playerOne = data;
      playerOne ? goForward() : null;
      break;
    case 1:
      count = parseInt(data);
      count ? goForward() : null;
      break;
    case 2:
      playerTwo = data;
      playerTwo ? ((q !== count) ? goForward() : loadNotepad()) : null;
      break;
    case 3:
      playerThree = data;
      playerThree ? ((q !== count) ? goForward() : loadNotepad()) : null;
      break;
    case 4:
      playerFour = data;
      playerFour ? ((q !== count) ? goForward() : loadNotepad()) : null;
      break;
    case 5:
      playerFive = data;
      playerFive ? ((q !== count) ? goForward() : loadNotepad()) : null;
      break;
    case 6:
      playerSix = data;
      playerSix ? ((q !== count) ? goForward() : loadNotepad()) : null;
      break;
    default:
      null;
  }
};

const loadNotepad = () => {
  console.log("hi")
}

game(0,"Right");