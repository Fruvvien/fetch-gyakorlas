import "bootstrap/dist/css/bootstrap.min.css";
import { Item } from "./item.interface";
const url = "https://retoolapi.dev/xaKBGl/data";

let bool = true as boolean;
const array = [];
document.addEventListener("DOMContentLoaded", () =>{

  const forms = document.getElementById("forms") as HTMLFormElement
  async function getData(){
    try{
      const data = await fetch(url);
      const dataJson = await data.json() as Item[];
      
      dataJson.sort((a, b) => b.rating - a.rating );
      array.push(dataJson);

    }catch(e){
      console.log(e);
      
    } 

  } 

 
  getData();


  function generateTable(dataJson: Item[]){
  
    if(bool){
      const table = document.getElementById("table") as HTMLTableElement;
      const tableHead = document.createElement("thead") as HTMLTableSectionElement;

   
  

      const th1= document.createElement("th") as HTMLTableCellElement;
      const th2 = document.createElement("th") as HTMLTableCellElement;
      const th3 = document.createElement("th") as HTMLTableCellElement;
      const th4 = document.createElement("th") as HTMLTableCellElement;
  
   
  
      const tbody = document.createElement("tbody") as HTMLTableSectionElement;
  
    
  
  
      th1.textContent = "Rating" ;
      th1.classList.add("col")
  
      th2.textContent = "Product";
      th1.classList.add("col")
  
      th3.textContent = "Misc";
      th1.classList.add("col");
  
      tableHead.appendChild(th1);
      tableHead.appendChild(th2);
      tableHead.appendChild(th3);
      tableHead.appendChild(th4);
  
      table.appendChild(tableHead);
     
  
  
      dataJson.forEach(element => {
        const td1 = document.createElement("td") as HTMLTableCellElement;
        const td2 = document.createElement("td") as HTMLTableCellElement;
        const td3 = document.createElement("td") as HTMLTableCellElement;
        const td4 = document.createElement("td") as HTMLTableCellElement;
  
        const button = document.createElement("button") as HTMLButtonElement;
  
        const tr2 = document.createElement("tr") as HTMLTableRowElement;
        td1.textContent = `${element.rating}`;
        td1.classList.add("col");
        
        td2.textContent = `${element.productId}`;
        td2.classList.add("col");
  
        td3.textContent = `${element.status}`;
        td3.classList.add("col");
  
        button.textContent="Delete";
        button.classList.add("btn");
        button.classList.add("btn-primary");
        button.addEventListener("click",async ()=>{
        
        await  fetch(url+`/${element.id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataJson)
          })
          
          location.reload();
        })
  
        td4.appendChild(button);
  
        tr2.appendChild(td1);
        tr2.appendChild(td2);
        tr2.appendChild(td3);
        tr2.appendChild(td4);
  
        tbody.appendChild(tr2);
        table.appendChild(tbody);
      });
    }

    
  

  }
  /* function loadMainPage(){
    
    document.getElementById("mainPage")!.classList.add("d-block")
    document.getElementById("formsPage")!.classList.add("d-none")
  }
  function loadPostPage(){
    bool = false;
    document.getElementById("mainPage")!.classList.add("d-none");
    document.getElementById("formsPage")!.classList.add("d-block");
  } */


  
})
