const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var todoList = [];

function mainMenu(){
  console.log('\033[2J'); 
  console.log('===== Todo List Main Menu =====\n');
  console.log('1 View your list');
  console.log('2 Add task to your list');
  console.log('3 Remove done task from your list');
  console.log('4 Exit\n');

  rl.question('Enter your mode: ', (answer) => {

    var mode = `${answer}`;

    if(mode == 4){
      rl.close();
      process.exit();
    }
    else if(mode != 1 && mode != 2 && mode != 3){
      mainMenu();
    }

    todoActivitise(mode);
  });

}

function viewTask(){
  console.log('\033[2J');
  console.log('===== Your Todo List =====\n');
  for(var i in todoList) {
    console.log((i*1+1) + ": " + todoList[i]);
  } 
  rl.question('\nPress Enter to continue...', (input) => {
    if(`${input}` == ''){
      mainMenu();
    }
    else{
      viewTask();
    }
          
  });
}

function addTask(){
  var task;
  rl.question('Enter your task: ', (task) => {
    task = `${task}`;    
    if(task != ''){
      todoList.push(task);
      addTask();
    }
    else{
      mainMenu();
    }          
  });
}

function todoActivitise(mode){
  if(mode == 1){
    viewTask();    
  }
  else if(mode == 2){  
    addTask();
    
  }
  else if(mode == 3){
    mainMenu();
  }
}

//start main menu
mainMenu();




