// constructor function
function ElementNode(params) {
    this.createElement = params.createElement;
    this.createTextNode = params.createTextNode;
    this.attributeType = params.attributeType;
    this.attributeName = params.attributeName;
}

// prototype method constructor function that creates a node element and appends it to the text
ElementNode.prototype.createNode = function() {
    this.createElement.appendChild(this.createTextNode);
    document.body.appendChild(this.createElement);
};

// use this prototype to add an attribute to your elements
ElementNode.prototype.createAttribute = function() {
    this.createElement.setAttribute(this.attributeType, this.attributeName);
};

// object parameters
// Nav Menu
const navParams = {
    createElement: document.createElement('nav'),
    createTextNode: document.createTextNode(''),
    attributeType: 'class',
    attributeName: 'masthead'
}

const h1Params = {
    createElement: document.createElement('H1'),
    createTextNode: document.createTextNode('Hello World!'),
    attributeType: 'class',
    attributeName: 'flex'
}

// create new elements and add attributes with the createAttribute() prototype
const nav = new ElementNode(navParams);
nav.createAttribute();

const h1 = new ElementNode(h1Params);
h1.createAttribute();

// put new nodes inside of array in order to iterate through each one of them
const elements = [];

elements.unshift(nav);
elements.push(h1);

// iterate through elements array
function elementBuilder() {
    for (let i = 0; i < elements.length; i++) {
        elements[i].createNode();
    }
}

// display elements to browser
elementBuilder();

