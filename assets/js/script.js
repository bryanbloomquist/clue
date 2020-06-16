const players = ["","","","","",""];
let playerOne = "";
let playerTwo = "";
let playerThree = "";
let playerFour = "";
let playerFive = "";
let playerSix = "";
let count = 0;
let q = 0;

const game = (x,y) => {
  const backward = `
    <div class="questionaire animate__animated animate__fadeIn${y}Big">
      <div class="row">
        <div class="col-1 center"><button onClick="goBack()"><i class="fas fa-backward"></i></button></div>
        <div class="col-10 center text-center">
  `;
  const colors = `
    <select id="userInput">
      <option value="mustard">Mustard</option>
      <option value="plum">Plum</option>
      <option value="green">Green</option>
      <option value="peacock">Peacock</option>
      <option value="scarlet">Scarlet</option>
      <option value="white">White</option>
    </select>
  `;
  const forward = `
        </div>
        <div class="col-1 center"><button id="qBtn" onClick="questions(${x}, 'userInput')"><i class="fas fa-forward"></i></button></div>
      </div>
    </div>
  `;
  $("#notepad").empty();
    if (x===0) {
    $("#notepad").addClass("center");
    $("#notepad").append(`
      ${backward}
        <label for="userInput">Which color are you?</label>
        ${colors}
      ${forward}
    `);
  } else if (x===1) {
    $("#notepad").append(`
      ${backward}
        <label for="userInput">How many people are playing?</label>
        <select id="userInput" >
          <option value="2">2</option>
          <option value="3" selected="selected">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      ${forward}
    `);  
  } else if (x >= 2 && x <= 6 ) {
    $("#notepad").append(`
      ${backward}
        <label for="userInput">Which color is player ${x}?</label>
        ${colors}
      ${forward}
    `);  
  }
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
  const valid = players.indexOf(data);
  console.log(valid);
  if (valid === -1) {
    switch (num) {
      case 0:
        players[0] = data;
        goForward();
        break;
      case 1:
        count = parseInt(data);
        goForward();
        break;
      case 2:
        players[1] = data;
        (q !== count) ? goForward() : loadNotepad();
        break;
      case 3:
        players[2] = data;
        (q !== count) ? goForward() : loadNotepad();
        break;
      case 4:
        players[3] = data;
        (q !== count) ? goForward() : loadNotepad();
        break;
      case 5:
        players[4] = data;
        (q !== count) ? goForward() : loadNotepad();
        break;
      case 6:
        players[5] = data;
        (q !== count) ? goForward() : loadNotepad();
        break;
      default:
        null;
    };
  } else null;
};

const loadNotepad = () => {
  console.log(players);
  $("#notepad").empty();
  $("#notepad").append(`
    <div class="notepad-container">
      <table>
        <tr>
          <td colspan="100%" class="heading">SUSPECTS</td>
        </tr>
        <tr id="mustard">
          <td>Col. Mustard</td>
          <td><button id="mustard0" class="notepadBtn ${players[0]}" value=0></button></td>
        </tr>
        <tr id="plum">
          <td>Prof. Plum</td>
          <td><button id="plum0" class="notepadBtn ${players[0]}" value=0></button></td>
        </tr>
        <tr id="green">
          <td>Mr. Green</td>
          <td><button id="green0" class="notepadBtn ${players[0]}" value=0></button></td>
        </tr>
        <tr id="peacock">
          <td>Mrs. Peacock</td>
          <td><button id="peacock0" class="notepadBtn ${players[0]}" value=0></button></td>
        </tr>
        <tr id="scarlet">
          <td>Miss Scarlet</td>
          <td><button id="scarlet0" class="notepadBtn ${players[0]}" value=0></button></td>
        </tr>
        <tr id="white">
          <td>Mrs. White</td>
          <td><button id="white0" class="notepadBtn ${players[0]}" value=0></button></td>
        </tr>
        <tr>
          <td colspan="100%" class="heading">WEAPONS</td>
        </tr>
        <tr id="knife">
          <td>Knife</td>
          <td><button id="knife0" class="notepadBtn ${players[0]}" value=0></button></td>
        </tr>
        <tr id="candlestick">
          <td>Candlestick</td>
          <td><button id="candlestick0" class="notepadBtn ${players[0]}" value=0></button></td>
        </tr>
        <tr id="revolver">
          <td>Revolver</td>
          <td><button id="revolver0" class="notepadBtn ${players[0]}" value=0></button></td>
        </tr>
        <tr id="rope">
          <td>Rope</td>
          <td><button id="rope0" class="notepadBtn ${players[0]}" value=0></button></td>
        </tr>
        <tr id="leadpipe">
          <td>Lead Pipe</td>
          <td><button id="leadpipe0" class="notepadBtn ${players[0]}" value=0></button></td>
        </tr>
        <tr id="wrench">
          <td>Wrench</td>
          <td><button id="wrench0" class="notepadBtn ${players[0]}" value=0></button></td>
        </tr>
        <tr>
          <td colspan=100%" class="binding p-0"></td>
        </tr>
        <tr>
          <td colspan="100%" class="heading">ROOMS</td>
        </tr>
        <tr id="hall">
          <td>Hall</td>
          <td><button id="hall0" class="notepadBtn ${players[0]}" value=0></button></td>
        </tr>
        <tr id="lounge">
          <td>Lounge</td>
          <td><button id="lounge0" class="notepadBtn ${players[0]}" value=0></button></td>
        </tr>
        <tr id="diningroom">
          <td>Dining Room</td>
          <td><button id="diningroom0" class="notepadBtn ${players[0]}" value=0></button></td>
        </tr>
        <tr id="kitchen">
          <td>Kitchen</td>
          <td><button id="kitchen0" class="notepadBtn ${players[0]}" value=0></button></td>
        </tr>
        <tr id="ballroom">
          <td>Ball Room</td>
          <td><button id="ballroom0" class="notepadBtn ${players[0]}" value=0></button></td>
        </tr>
        <tr id="conservatory">
          <td>Conservatory</td>
          <td><button id="conservatory0" class="notepadBtn ${players[0]}" value=0></button></td>
        </tr>
        <tr id="billiardroom">
          <td>Billiard Room</td>
          <td><button id="billiardroom0" class="notepadBtn ${players[0]}" value=0></button></td>
        </tr>
        <tr id="library">
          <td>Library</td>
          <td><button id="library0" class="notepadBtn ${players[0]}" value=0></button></td>
        </tr>
        <tr id="study">
          <td>Study</td>
          <td><button id="study0" class="notepadBtn ${players[0]}" value=0></button></td>
        </tr>
        <tr>
          <td colspan="100%" class="notepad-foot p-0"></td>
        </tr>
      </table>
    </div>
  `);
  for (let i=1; i<count; i++) {
    $("#mustard").append(`<td><button id="mustard${i}" class="notepadBtn ${players[i]}" value=0></button></td>`)
    $("#plum").append(`<td><button id="plum${i}" class="notepadBtn ${players[i]}" value=0></button></td>`)
    $("#green").append(`<td><button id="green${i}" class="notepadBtn ${players[i]}" value=0></button></td>`)
    $("#peacock").append(`<td><button id="peacock${i}" class="notepadBtn ${players[i]}" value=0></button></td>`)
    $("#scarlet").append(`<td><button id="scarlet${i}" class="notepadBtn ${players[i]}" value=0></button></td>`)
    $("#white").append(`<td><button id="white${i}" class="notepadBtn ${players[i]}" value=0></button></td>`)
    $("#knife").append(`<td><button id="knife${i}" class="notepadBtn ${players[i]}" value=0></button></td>`)
    $("#candlestick").append(`<td><button id="candlestick${i}" class="notepadBtn ${players[i]}" value=0></button></td>`)
    $("#revolver").append(`<td><button id="revolver${i}" class="notepadBtn ${players[i]}" value=0></button></td>`)
    $("#rope").append(`<td><button id="rope${i}" class="notepadBtn ${players[i]}" value=0></button></td>`)
    $("#leadpipe").append(`<td><button id="leadpipe${i}" class="notepadBtn ${players[i]}" value=0></button></td>`)
    $("#wrench").append(`<td><button id="wrench${i}" class="notepadBtn ${players[i]}" value=0></button></td>`)
    $("#hall").append(`<td><button id="hall${i}" class="notepadBtn ${players[i]}" value=0></button></td>`)
    $("#lounge").append(`<td><button id="lounge${i}" class="notepadBtn ${players[i]}" value=0></button></td>`)
    $("#diningroom").append(`<td><button id="diningroom${i}" class="notepadBtn ${players[i]}" value=0></button></td>`)
    $("#kitchen").append(`<td><button id="kitchen${i}" class="notepadBtn ${players[i]}" value=0></button></td>`)
    $("#ballroom").append(`<td><button id="ballroom${i}" class="notepadBtn ${players[i]}" value=0></button></td>`)
    $("#conservatory").append(`<td><button id="conservatory${i}" class="notepadBtn ${players[i]}" value=0></button></td>`)
    $("#billiardroom").append(`<td><button id="billiardroom${i}" class="notepadBtn ${players[i]}" value=0></button></td>`)
    $("#library").append(`<td><button id="library${i}" class="notepadBtn ${players[i]}" value=0></button></td>`)
    $("#study").append(`<td><button id="study${i}" class="notepadBtn ${players[i]}" value=0></button></td>`)
  };
  
}

game(0,"Right"); 