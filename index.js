const addbook=document.querySelector('#addbook');
const popform=document.querySelector("#form");
const submitbtn=document.querySelector('#submitbtn');
const bg=document.querySelector('.bg');
const bookgrid=document.querySelector('.bookgrid');
const card=document.querySelectorAll('.card');
const about=document.querySelectorAll('.about');
const title=document.querySelectorAll('.pname');
const author=document.querySelectorAll('.pauthor');
const pages=document.querySelectorAll('.ppages');
const status=document.querySelectorAll('.pstatus');
const bookname=document.querySelector('#bookname');
const bookauthor=document.querySelector('#bookauthor');
const bookpages=document.querySelector('#bookpages');
const bookstatus=document.querySelector('#bookstatus');
const form=document.querySelector('#form');

let library=[];
// const defaultobj1=new Book("The Lord of the rings","Tolkien",123,true);
// library.push(defaultobj1);
// const defaultobj2=new Book(`The song of ice and fire`, `George RR Martin`,321,false);
// library.push(defaultobj2);

class Book {

constructor(name,author,pages,status){
this.name=name;
this.author=author;
this.pages=pages;
this.status=status;
}



}



addbook.addEventListener('click',(e)=>{
    e.preventDefault();
console.log('add book clicked');
popform.classList.add('active');
bg.classList.add('blur');
addbook.disabled=true;

})
submitbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    bookgrid.textContent="";
    addBookToLibrary();
    console.log("submit btn clicked!");
    addbook.disabled=false;
    popform.classList.remove('active');
    bg.classList.remove('blur');
    clearInputs();


});


function addBookToLibrary(){

    let newbook=new Book(bookname.value,bookauthor.value,bookpages.value,bookstatus.checked);
    library.push(newbook);
    displayCard();
    library.forEach(book => {
        displayCard(book);
    });
}

function displayCard(){

    bookgrid.innerHTML="";
    library.forEach(item => {
   
    let cardDiv=document.createElement('div');
cardDiv.classList.add('card');
bookgrid.append(cardDiv);

    let titlediv=document.createElement('div');
    titlediv.classList.add('titlediv');
    titlediv.innerHTML=`<p style="font-weight:600;color:black">Title:</p>${item.name}`;
    cardDiv.append(titlediv);

    let authordiv=document.createElement('div');
    authordiv.classList.add('authordiv');
    authordiv.innerHTML=`<p style="font-weight:600;color:black">Author:</p>${item.author}`;
    cardDiv.append(authordiv);

    let pagesdiv=document.createElement('div');
    pagesdiv.classList.add('pagesdiv');
    pagesdiv.innerHTML=`<p style="font-weight:600;color:black">Pages:</p>${item.pages}`;
    cardDiv.append(pagesdiv);

    let btndiv=document.createElement('div');
    btndiv.classList.add('btndiv');
    let readbtn=document.createElement('button');
    readbtn.classList.add('readbtn');
    if(item.status)
    {
        readbtn.textContent="Read";
        readbtn.style.backgroundColor="#49be25";
    }
    else
    {
        readbtn.textContent="Not Read";
        readbtn.style.backgroundColor="#ff6818";
    }
    btndiv.append(readbtn);
    
    let deletebtn=document.createElement("button");
    deletebtn.classList.add('deletebtn');
    deletebtn.textContent="Delete";
    btndiv.append(deletebtn);
    cardDiv.append(btndiv);

    
});
    removeBook();
    statusChange();
}
displayCard();
function removeBook(){
    const removebtns=document.querySelectorAll('.deletebtn');
    let removebtnsarray=Array.from(removebtns);
    removebtnsarray.forEach((btn)=>{
        btn.addEventListener('click',()=>{
            library.splice(removebtnsarray.indexOf(btn),1);
            displayCard();
        });
    });
   
}
function statusChange(){
    const statusbtns=document.querySelectorAll('.readbtn');
    let statusbtnsarray=Array.from(statusbtns);
    statusbtnsarray.forEach(btn => {
        btn.addEventListener('click',()=>{
            library[statusbtnsarray.indexOf(btn)].status=!( library[statusbtnsarray.indexOf(btn)].status);
            displayCard();
        });
    });
}

function clearInputs(){
    bookname.value="";
    bookauthor.value="";
    bookpages.value="";
    bookstatus.checked=false;
}