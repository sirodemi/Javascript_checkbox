
/*
var element = document.getElementById('section2');
element.innerHTML = 'テキスト追加<br>';


let addedElem;
addedElem = $('<label><input type = "checkbox" name = 1 checked>チェック</label>');
$('#section2').append(addedElem);



/*
function submitBtnHTML(){
    return '<button id="my_submit_btn">送信</button>';
  }
  
  let html = `
  <form>
  名前 : 
  <input type="text" id="your_name">
  年齢 : 
  <inout type="text" id="your_age">
  ${submitBtnHTML()}
  }
  </form>
  `;
*/



let nameID1 = 'id1';
let nameID2 = 'id2';
let water = '冷却水';
let oil = '潤滑油';
let condition1 = '漏れあり';
let condition2 = '汚れあり';
var element = document.getElementById('section2');

let html = `
<table border="1" width="90%">
<tr>
  <th width=20px ></th>
  <th>場所</th>
  <th>内容</th>
</tr>
<tr>
  <td><input type="checkbox" id="${nameID1}" name=1></td>
  <td>${water}</td>
  <td>${condition1}</td>
</tr>
<tr>
  <td><input type="checkbox" id="${nameID2}" name=2></td>
  <td>${oil}</td>
  <td>${condition2}</td>
</tr>
</table>
`;

element.innerHTML = html;
