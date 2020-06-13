let p0 = "";
let p1 = "";
let p2 = "";
let p3 = "";
let p4 = "";
let p5 = "";
let num = 0;
let q = 0;

const game = (x,y) => {
  $("#notepad").empty();
  // const questionaire = `<div class="questionaire animate__animated animate__fadeIn${y}Big"></div>`;
  // const row = `<div class="row"></div>`;
  // const col = `<div class="col-10 center text-center"></div>`;
  const backward = `<div class="col-1 center"><button onClick="goBack()"><i class="fas fa-backward"></i></button></div>`;
  const forward = `<div class="col-1 center"><button id="qBtn" onClick="q${x+1}('userInput')"><i class="fas fa-forward"></i></button></div>`;
  if (x===0){
    $("#notepad").addClass("center");
    $("#notepad").append(`
      <div class="questionaire animate__animated animate__fadeIn${y}Big">
        <div class="row">
          <div class="col-1 center"></div>
          <div class="col-10 center text-center">
            <label for="userInput">What is your name?</label>
            <input type="text" id="userInput" />
          </div>
          ${forward}
        </div>
      </div>
    `);
  } 
  else if (x===1) {
    $("#notepad").append(`
      <div class="questionaire animate__animated animate__fadeIn${y}Big">
        <div class="row">
          ${backward}
          <div class="col-10 center text-center">
            <label for="userInput">${p0}, how many people are playing?</label>
            <select id="userInput" >
              <option value="2">2</option>
              <option value="3" selected="selected">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          ${forward}
        </div>
      </div>
    `);  
  }
  else if (x >= 2 && x <= 6 ) {
    $("#notepad").append(`
      <div class="questionaire animate__animated animate__fadeIn${y}Big">
        <div class="row">
          ${backward}
          <div class="col-10 center text-center">
            <label for="userInput">What is player ${x}'s name?</label>
            <input type="text" id="userInput" />
          </div>
          ${forward}
        </div>
      </div>
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

const q1 = x => {
  p0 = $("#"+x).val();
  p0 ? goForward() : null;
}

const q2 = x => {
  num = parseInt($("#"+x).val());
  num ? goForward() : null;
}

const q3 = x => {
  p1 = $("#"+x).val();
  (q !== num) ? goForward() : loadNotepad();
}

const q4 = x => {
  p1 = $("#"+x).val();
  (q !== num) ? goForward() : loadNotepad();
}

const q5 = x => {
  p1 = $("#"+x).val();
  (q !== num) ? goForward() : loadNotepad();
}

const q6 = x => {
  p1 = $("#"+x).val();
  (q !== num) ? goForward() : loadNotepad();
}

const q7 = x => {
  p1 = $("#"+x).val();
  (q !== num) ? goForward() : loadNotepad();
}

const loadNotepad = () => {
  console.log("hi")
}

game(0,"Right");