// Constructor function to nest elements
function NestElements(params) {
    this.parentNode = params.parentNode;
    this.childNode = params.childNode;
}

// NestElements prototype of nestElement
NestElements.prototype.nestElement = function() {
    this.parentNode.append(this.childNode);
};

// Nest parent and child parameters
const nestUlNavParams = {
    parentNode: document.getElementsByTagName('nav')[0],
    childNode: document.getElementsByTagName('ul')[0]
}

// Create new NestElements object
const nestUlNav = new NestElements(nestUlNavParams);

// Create array to put nested elements in a container
const nestElementsArray = [];

// Push the nested element into the array container
nestElementsArray.push(nestUlNav);

// Iterate through the nested array container
function nestElementBuilder() {
    for (let i = 0; i < nestElementsArray.length; i++) {
        nestElementsArray[i].nestElement();
    }
}

// Instantiate the helper function to nest the elements
nestElementBuilder();