
function addNewWEField(){
  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('wefield');
  newNode.classList.add('mt-2');
  newNode.setAttribute("rows" , 3);
  newNode.setAttribute('placeholder' , 'Enter here')
  let weob = document.getElementById("we");
  let weaddbuttonOb = document.getElementById('weAddButton');

  weob.insertBefore(newNode,weaddbuttonOb);
}

function  addNeACEField(){
  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('eqField');
  newNode.classList.add('mt-2');
  newNode.setAttribute("rows" , 3);
  newNode.setAttribute('placeholder' , 'Enter Your 10th 12th Graduation Marks, (Persentage or Cgpa) and year')
  let weob = document.getElementById("aq");
  let weaddbuttonOb = document.getElementById('weAQButton');

  weob.insertBefore(newNode,weAQButton);

}

function addNewpField(){
  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('pfield');
  newNode.classList.add('mt-2');
  newNode.setAttribute("rows" , 3);
  newNode.setAttribute('placeholder' , 'Enter Your Project Title And project summry')
  let weob = document.getElementById("pq");
  let weaddbuttonOb = document.getElementById('wepqButton');

  weob.insertBefore(newNode,wepqButton);
}

function addNewIField(){
  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('IField');
  newNode.classList.add('mt-2');
  newNode.setAttribute("rows" , 3);
  newNode.setAttribute('placeholder' , 'Enter Your Internship Field and Work')
  let weob = document.getElementById("IQ");
  let weaddbuttonOb = document.getElementById('weIButton');

  weob.insertBefore(newNode,weIButton);
}

function genrateCV(){
   let namefield = document.getElementById('nameField').value;
   let nameT1 = document.getElementById('nameT1');
   nameT1.innerHTML = namefield;

   document.getElementById('namet2').innerHTML = namefield;

   
   document.getElementById('contactT').innerHTML = document.getElementById('contactField').value;

   document.getElementById('emailT').innerHTML = document.getElementById('emailField').value;

   document.getElementById('AddressT').innerHTML = document.getElementById('addressField').value;

   document.getElementById('fbt').innerHTML = document.getElementById('fbField').value;

   document.getElementById('linkT').innerHTML = document.getElementById('LinkdenField').value;

   document.getElementById('gitT').innerHTML = document.getElementById('gitField').value;

   document.getElementById('instraT').innerHTML = document.getElementById('instraFild').value;

   document.getElementById('otherT').innerHTML = document.getElementById('otherFild').value;

   document.getElementById('objectiveT').innerHTML = document.getElementById('objectivefild').value;

   
  let wes = document.getElementsByClassName('wefield');
  let str = '';
  for(let e of wes){
    str = str + `<li> ${e.value} </li>`;
  }
  document.getElementById('weT').innerHTML = str;


let was = document.getElementsByClassName('eqField');
let sar = '';
  for(let e of was){
    sar = sar + `<li> ${e.value} </li>`;
  }
  document.getElementById('AdT').innerHTML = sar;


  let ws = document.getElementsByClassName('pfield');
let sr = '';
  for(let e of ws){
    sr = sr + `<li> ${e.value} </li>`;
  }
  document.getElementById('pT').innerHTML = sr;


  let a = document.getElementsByClassName('IField');
  let s = '';
  for(let e of a){
    s = s + `<li> ${e.value} </li>`;
  }
  document.getElementById('iT').innerHTML = s;

 document.getElementById('cv-form').style.display='none';
 document.getElementById('cv-templete').style.display='block';

}

function printCV(){
  window.print();
}