function Box(width = 100, height = 100, depth=100 , material='wood' , numOfBooks=0){
    this.width = width ;
    this.height = height;
    this.depth = depth;
    this.volume = function(){
        return this.width * this.height * this.depth;
    };
    this.material = material;
    this.numOfBooks = numOfBooks;
    this.contents = [];
    this.addBook = function(book){
        if(book instanceof Book){
            for(var i = 0 ; i < this.contents.length ; i++){
                if(this.contents[i].title == book.title){
                    this.contents[i].numOfCopies+= book.numOfCopies;
                    this.numOfBooks++;
                    return;
                }
            }
            this.contents.push(book);
            this.numOfBooks++;
        }else{
            throw new Error('Not a book');
        }
    };
    this.removeBook = function(book){
        for(var i = 0 ; i < this.contents.length ; i++){
            if(this.contents[i].title == book.title){
                if(this.contents[i].numOfCopies > 1){
                    this.contents[i].numOfCopies--;
                    this.numOfBooks--;
                }else{
                    this.contents.splice(i, 1);
                    this.numOfBooks--;
                }
                return;
            }else{
                throw new Error('Book not found');
            }
        }
    };
    this.display = function(){
        for(var i = 0 ; i < this.contents.length ; i++){
            console.log(this.contents[i].title + " number of copies : " + this.contents[i].numOfCopies);
        }
    }
    this.findBook = function(title){
        for(var i = 0 ; i < this.contents.length ; i++){
            if(this.contents[i].title == title){
                return this.contents[i];
            }
        }
        throw new Error('Book not found');
    }
}

function Book(title, author='unknown', pages=100 , numOfCopies=1 , numOfChapters=5){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.numOfCopies = numOfCopies;
    this.numOfChapters = numOfChapters;
}


var book1 = new Book('The Lord of the Rings');
var book2 = new Book('The Hobbit');
var book3 = new Book('The Silmarillion');
var book4 = new Book('The Lord of the Rings')
var box1 = new Box();

box1.addBook(book1);
box1.addBook(book2);
box1.addBook(book3);
box1.addBook(book4);

box1.display();
console.log(box1.findBook("The Hobbit"));

box1.removeBook(book1);
box1.removeBook(book1);
box1.display();

