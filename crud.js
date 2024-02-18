let arr = [];
function render(){
const ulEle = document.querySelector("#list")
ulEle.innerHTML = "";
arr.forEach((element,index)=>{
  const liEle =document.createElement("li")
  liEle.classList.add("li-List")
  liEle.style.padding = "20px"
  liEle.textContent = element
  // delete button add
  const deletebtn = document.createElement("button")
  deletebtn.textContent = "delete"
  deletebtn.onclick=()=>deletItem(index)
  liEle.appendChild(deletebtn)
  // update button add
  const updateBtn = document.createElement("button");
  updateBtn.textContent = "update"
  updateBtn.onclick=()=>updateItem(index)
  liEle.appendChild(updateBtn)
  ulEle.appendChild(liEle)

})

}

function datacalled(){
  const inputELe = document.querySelector("#input")
  const inputText = inputELe.value.trim()
    if(inputText !==""){
      arr.push(inputText)
      inputELe.value = ""
      render()
    }
}
function deletItem(index){
  arr.splice(index,1)
  render()
}
function updateItem(index){
  let updated = prompt("please inter your updated info!");
  if(updated!==null){
    arr[index]=updated.trim()
    render()
  }
}


