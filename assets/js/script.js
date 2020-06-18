const players = ["","","","","",""];
const check = '<i class="fas fa-check"></i>';
const questionmark = '<i class="fas fa-question"></i>';
const look = '<i class="fas fa-eye"></i>';
let question = "";
let count = 0;
let q = 0;

const game = (x,y) => {
  switch (x) {
    case 0: 
      question = "Which color are you?"; 
      break;
    case 1: 
      question = "How many players?"; 
      break;
    default: 
      question = `Which color is player ${x}`; 
      break;
  }
  const backward = ` 
    <div class="questionaire animate__animated animate__fadeIn${y}Big">
      <div class="row">
        <div class="text-center w-100"><label for="userInput">${question}</label></div>
        <div class="col-1 center"><button onClick="goBack()" id="backBtn"><i class="fas fa-backward"></i></button></div>
        <div class="col-10 center text-center">
  `;
  const colors = `
    <div class="radio"><input type="radio" id="mustard" name="userInput" value="mustard"><label for="mustard">Mustard</label></div>
    <div class="radio"><input type="radio" id="plum" name="userInput" value="plum"><label for="plum">Plum</label></div>
    <div class="radio"><input type="radio" id="green" name="userInput" value="green"><label for="green">Green</label></div>
    <div class="radio"><input type="radio" id="peacock" name="userInput" value="peacock"><label for="peacock">Peacock</label></div>
    <div class="radio"><input type="radio" id="scarlet" name="userInput" value="scarlet"><label for="scarlet">Scarlet</label></div>
    <div class="radio"><input type="radio" id="white" name="userInput" value="white"><label for="white">White</label></div>
  `;
  const playerCount = `
    <div class="radio"><input type="radio" id="two" name="userInput" value=2><label for="two">2</label></div>
    <div class="radio"><input type="radio" id="three" name="userInput" value=3><label for="three">3</label></div>
    <div class="radio"><input type="radio" id="four" name="userInput" value=4><label for="four">4</label></div>
    <div class="radio"><input type="radio" id="five" name="userInput" value=5><label for="five">5</label></div>
    <div class="radio"><input type="radio" id="six" name="userInput" value=6><label for="six">6</label></div>
  `;
  const forward = `
        </div>
        <div class="col-1 center"><button id="qBtn" onClick="questions(${x}, 'userInput')"><i class="fas fa-forward"></i></button></div>
        <div class="col-12"><p id="alert"></p></div>
      </div>
    </div>
  `;
  $("#notepad").empty();
  if (x===0) {
    question = "Which color are you?"
    $("#notepad").append(`${backward}${colors}${forward}`);
    $("#backBtn").addClass("hidden");
  } else if (x===1) {
    $("#notepad").append(`${backward}${playerCount}${forward}`);  
  } else if (x >= 2 && x <= 6 ) {
    $("#notepad").append(`${backward}${colors}${forward}`);  
  }
}

const goBack = x => {
  q -= 1;
  $(".questionaire").addClass("animate__fadeOutRightBig");
  setTimeout(() => game(q,"Left"), 500);
}

const goForward = () => {
  q += 1;
  $(".questionaire").addClass("animate__fadeOutLeftBig");
  setTimeout(() => {
    game(q, "Right");
  }, 500);
}

const questions = (num, input) => {
  const data = $("input[name='userInput']:checked").val();
  const valid = players.indexOf(data);
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
  } else {
    $("#alert").html(`<hr>Sorry, you assigned ${data} to player ${valid+1}`)
  };
};

const loadNotepad = () => {
  $("#notepad").empty();
  $("#notepad").append(`
    <div class="notepad-container  animate__animated animate__fadeInUpBig">
      <table>
        <tr><td colspan="100%" class="heading"><div class="circle center">SUSPECTS</div></td></tr>
        <tr id="mustard"><td>Col. Mustard</td></tr>
        <tr id="plum"><td>Prof. Plum</td></tr>
        <tr id="green"><td>Mr. Green</td></tr>
        <tr id="peacock"><td>Mrs. Peacock</td></tr>
        <tr id="scarlet"><td>Miss Scarlet</td></tr>
        <tr id="white"><td>Mrs. White</td></tr>
        <tr><td colspan="100%" class="heading"><div class="circle center">WEAPONS</div></td></tr>
        <tr id="knife"><td>Knife</td></tr>
        <tr id="candlestick"><td>Candlestick</td></tr>
        <tr id="revolver"><td>Revolver</td></tr>
        <tr id="rope"><td>Rope</td></tr>
        <tr id="leadpipe"><td>Lead Pipe</td></tr>
        <tr id="wrench"><td>Wrench</td></tr>
        <tr><td colspan=100%" class="binding p-0"></td></tr>
        <tr><td colspan="100%" class="heading"><div class="circle center">ROOMS</div></td></tr>
        <tr id="hall"><td>Hall</td></tr>
        <tr id="lounge"><td>Lounge</td></tr>
        <tr id="diningroom"><td>Dining Room</td></tr>
        <tr id="kitchen"><td>Kitchen</td></tr>
        <tr id="ballroom"><td>Ball Room</td></tr>
        <tr id="conservatory"><td>Conservatory</td></tr>
        <tr id="billiardroom"><td>Billiard Room</td></tr>
        <tr id="library"><td>Library</td></tr>
        <tr id="study"><td>Study</td></tr>
        <tr><td colspan="100%" class="notepad-foot p-0"></td></tr>
      </table>
    </div>
  `);
  for (let i=0; i<count; i++) {
    const color = players[i]
    $("#mustard").append(`<td><button class="${color}" value=0></button></td>`);
    $("#plum").append(`<td><button class="${color}" value=0></button></td>`);
    $("#green").append(`<td><button class="${color}" value=0></button></td>`);
    $("#peacock").append(`<td><button class="${color}" value=0></button></td>`);
    $("#scarlet").append(`<td><button class="${color}" value=0></button></td>`);
    $("#white").append(`<td><button class="${color}" value=0></button></td>`);
    $("#knife").append(`<td><button class="${color}" value=0></button></td>`);
    $("#candlestick").append(`<td><button class="${color}" value=0></button></td>`);
    $("#revolver").append(`<td><button class="${color}" value=0></button></td>`);
    $("#rope").append(`<td><button class="${color}" value=0></button></td>`);
    $("#leadpipe").append(`<td><button class="${color}" value=0></button></td>`);
    $("#wrench").append(`<td><button class="${color}" value=0></button></td>`);
    $("#hall").append(`<td><button class="${color}" value=0></button></td>`);
    $("#lounge").append(`<td><button class="${color}" value=0></button></td>`);
    $("#diningroom").append(`<td><button class="${color}" value=0></button></td>`);
    $("#kitchen").append(`<td><button class="${color}" value=0></button></td>`);
    $("#ballroom").append(`<td><button class="${color}" value=0></button></td>`);
    $("#conservatory").append(`<td><button class="${color}" value=0></button></td>`);
    $("#billiardroom").append(`<td><button class="${color}" value=0></button></td>`);
    $("#library").append(`<td><button class="${color}" value=0></button></td>`);
    $("#study").append(`<td><button class="${color}" value=0></button></td>`);
  };
  $("td button").bind("click", function() {
    let x = parseInt($(this).val());
    x === 3 ? x = 0 : x+=1;
    $(this).val(x);
    switch (x) {
      case 0:
        $(this).html("");
        break;
      case 1:
        $(this).html(check);
        break;
      case 2:
        $(this).html(look);
        break;
      case 3:
        $(this).html(questionmark);
        break;
    }
  });
  $("td:first-child:not('.heading'):not('.binding'):not('.notepad-foot')").bind("click", function() {
    const parent = $(this).parent();
    const name = parent[0].id;
    let image = ""
    console.log(name);
    for (let i=0; i<cards.length; i++) {
      (name === cards[i].name) ? image = cards[i].image : null;
    }
    $("#cardDisplay").removeClass("upTop").addClass("downLow").html(`<img src="${image}" alt=${name} id="bigCard"/>`);
    $(".notepad-container").css("filter", "blur(4px)");
    $("#bigCard").on("click", () => {
      $("#cardDisplay").removeClass("downLow").addClass("upTop");
      $(".notepad-container").css("filter", "blur(0)");
    });
  });
}

game(0,"Right"); 