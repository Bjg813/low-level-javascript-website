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
const h1Params = {
    createElement: document.createElement('H1'),
    createTextNode: document.createTextNode('Hello World!'),
    attributeType: 'class',
    attributeName: 'flex'
}

const h2Params = {
    createElement: document.createElement('H2'),
    createTextNode: document.createTextNode('Hello Again!'),
    attributeType: 'id',
    attributeName: 'test'
}

const buttonParams = {
    createElement: document.createElement('button'),
    createTextNode: document.createTextNode('Submit')
}

// create new elements and add attributes with the createAttribute() prototype
const h1 = new ElementNode(h1Params);
h1.createAttribute();

const h2 = new ElementNode(h2Params);
h2.createAttribute();

const button = new ElementNode(buttonParams);

// put new nodes inside of array in order to iterate through each one of them
const elements = [h1, h2, button];

// iterate through elements array
function elementBuilder() {
    for (let i = 0; i < elements.length; i++) {
        elements[i].createNode();
    }
}

// automatically load website when page loads
elementBuilder();

