let library = [];
let booksDisplay=document.querySelector('div');
const addButton=document.querySelector('#addButton');
const newBookButton=document.querySelector('#newBookButton');
addButton.addEventListener('click',addBook,false);
newBookButton.addEventListener('click',newBook,false);
class book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        library.push(this);
    }
    
}



asd1 = new book('asd2','asd3','asd4','asd5');
asd2 = new book('asd2','asd3','asd4','asd5');
function display(){
    while(booksDisplay.firstChild){
        booksDisplay.removeChild(booksDisplay.lastChild)
    }
    for(elem in library){
        bookInLibrary=library[elem]
        const bookToAppend=document.createElement("div");
        bookToAppend.classList.add("bookcard");
        const title=document.createElement("div");
        const author=document.createElement("div");
        const pages=document.createElement("div");
        const read=document.createElement("div");
        const buttons=document.createElement("div");
        const remove=document.createElement("button");
        const readstatus=document.createElement("button");
        remove.textContent='Remove';
        remove.addEventListener('click',(event)=>{
            index=library.indexOf(bookToAppend);
            library.splice(index,1);
            display()
        });
        readstatus.textContent='Change Status';
        readstatus.addEventListener('click',(event)=>{
        console.log(bookToAppend.childNodes[3].textContent);
            if(bookToAppend.childNodes[3].textContent=='unread'){
                bookToAppend.childNodes[3].textContent='read';
            }
            else{
                bookToAppend.childNodes[3].textContent='unread';
            }
        });
        title.textContent=bookInLibrary.title;
        author.textContent=bookInLibrary.author;
        pages.textContent=bookInLibrary.pages;
        read.textContent=bookInLibrary.read; 
        buttons.appendChild(readstatus);
        buttons.appendChild(remove);   
        buttons.classList.add('buttonsContainer');
        bookToAppend.appendChild(title);
        bookToAppend.appendChild(author);
        bookToAppend.appendChild(pages);
        bookToAppend.appendChild(read); 
        bookToAppend.appendChild(buttons);
        booksDisplay.appendChild(bookToAppend);

    }
}

function addBook(){
    bookAppendForm=document.querySelector('.appendForm');
    bookAppendForm.classList.toggle('appendFormVisible');
}
function newBook(){
    const title=document.querySelector('#newTitle');
    const author=document.querySelector('#newAuthor');
    const pages=document.querySelector('#newPages');
    console.log(title.textContent);
    if(title.value&&author.value&&pages.value){
    addBook();
    const addedBook = new book(title.value,author.value,pages.value,'unread');
    display();
    }
    else{
        window.confirm('Add necessary info!')
    }
    
}


display();




