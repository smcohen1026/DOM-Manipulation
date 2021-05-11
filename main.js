//get elements by id and classlist///
var headerTitle = document.getElementById('main-heading');
headerTitle.textContent = 'New DOM Layout';
headerTitle.classList.add('bg-success');

//access each paragraph tag//
var para1 = document.getElementById('para1');
para1.textContent = 'The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.';

var para2 = document.getElementById('para2');
para2.textContent = 'The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.';

//add click event function to the button//
var ClickMe = document.getElementById('btn');
var para4 = document.getElementById('para4');
ClickMe.addEventListener('click', () => {
    var newP =document.createElement('p');
    var node = document.createTextNode('The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.');
    newP.appendChild(node);
    para4.appendChild(newP);
})

//change each boxes to the proper colors mentioned//
var red = document.getElementById('red');
red.classList.remove('bg-white');
red.classList.add('bg-danger');

var blue = document.getElementById('blue');
blue.classList.remove('bg-white');
blue.classList.add('bg-primary');

var yellow = document.getElementById('yellow');
yellow.classList.remove('bg-white');
yellow.classList.add('bg-warning');

var green = document.getElementById('green');
green.classList.remove('bg-white');
green.classList.add('bg-success');

var black = document.getElementById('black');
black.classList.remove('bg-white');
black.classList.add('bg-dark');