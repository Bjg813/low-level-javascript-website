// Class
class ElementNode {
    constructor(params) {
        this.createElement = params.createElement;
        this.createTextNode = params.createTextNode;
        this.attributeType = params.attributeType;
        this.attributeName = params.attributeName;
    }

    createNode() {
        this.createElement.appendChild(this.createTextNode);
        document.body.appendChild(this.createElement);
    }

    createAttribute() {
        this.createElement.setAttribute(this.attributeType, this.attributeName);
    }
}

// object parameters
// Star Wars container
const playerContainerParams = {
    createElement: document.createElement('div'),
    createTextNode: document.createTextNode(''),
    attributeType: 'id',
    attributeName: 'playerContainer'
}

const playerParams = {
    createElement: document.createElement('div'),
    createTextNode: document.createTextNode(''),
    attributeType: 'class',
    attributeName: 'player'
}

const audioParams = {
    createElement: document.createElement('audio'),
    createTextNode: document.createTextNode(''),
    attributeType: 'class',
    attributeName: 'audio'
}

const logoSectionParams = {
    createElement: document.createElement('section'),
    createTextNode: document.createTextNode(''),
    attributeType: 'class',
    attributeName: 'logo'
}

const logoImageParams = {
    createElement: document.createElement('img'),
    createTextNode: document.createTextNode(''),
    attributeType: 'id',
    attributeName: 'logoImage'
}

const preludeParams = {
    createElement: document.createElement('div'),
    createTextNode: document.createTextNode('A long time ago in a open office not so far away...'),
    attributeType: 'id',
    attributeName: 'prelude'
}

const introParams = {
    createElement: document.createElement('div'),
    createTextNode: document.createTextNode(''),
    attributeType: 'id',
    attributeName: 'intro'
}

const canvasParams = {
    createElement: document.createElement('canvas'),
    createTextNode: document.createTextNode(''),
    attributeType: 'id',
    attributeName: 'canvas'
}

const introContentParams = {
    createElement: document.createElement('div'),
    createTextNode: document.createTextNode(''),
    attributeType: 'id',
    attributeName: 'introContent'
}

const episodeOneParams = {
    createElement: document.createElement('p'),
    createTextNode: document.createTextNode('Episode I'),
    attributeType: 'id',
    attributeName: 'episodeOne'
}

const workingFromHomeParams = {
    createElement: document.createElement('H2'),
    createTextNode: document.createTextNode('WORKING FROM HOME'),
    attributeType: 'id',
    attributeName: 'workingFromHome'
}

const paragraphOneParams = {
    createElement: document.createElement('p'),
    createTextNode: document.createTextNode('Turmoil! A pandemic has engulfed Uptown Studios and the city of Sacramento and nobody can find toilet paper. Darth COVID-19 has taken over the globe with its clone army, engulfing online searches and shutting down small busiensses. Leaving Uptown Studios no other choice but to create the resistance with a small group of rebels and Jedi marketers led by the #marketing4ever team.'),
    attributeType: 'id',
    attributeName: 'paragraphOne'
}

const paragraphTwoParams = {
    createElement: document.createElement('p'),
    createTextNode: document.createTextNode('Sensing a disturbance in the digital marketing force, Tina Reynolds declares all of her employees to work from home. Recession and doubts of to when normalcy may return, Jonathan the Wise applies for a small business loan. Allowing the marketing4ever team to keep working while having online zoom meetings in their home offices surrounded by their pets and families.'),
    attributeType: 'id',
    attributeName: 'paragraphTwo'
}

const paragraphThreeParams = {
    createElement: document.createElement('p'),
    createTextNode: document.createTextNode('With a mission, some coffee, and high speed internet, the #marketing4ever team will lead their scrappy group of rebels through the void and disrupt how marketing is done forever...'),
    attributeType: 'id',
    attributeName: 'paragraphThree'
}

// create new elements and add attributes with the createAttribute() prototype
const playerContainer = new ElementNode(playerContainerParams);
playerContainer.createAttribute();

const player = new ElementNode(playerParams);
player.createAttribute();

const audio = new ElementNode(audioParams);
audio.createAttribute();
audio.controls = audio.createElement.setAttribute('controls', 'controls');
audio.onloadedData = audio.createElement.setAttribute('onloadeddata', 'var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6600)');
audio.duration = audio.createElement.setAttribute('duration', '65s');
audio.type = audio.createElement.setAttribute('type', 'audio');
// audio.source = audio.createElement.setAttribute('src', 'https://ia801703.us.archive.org/15/items/StarWarsThemeSongByJohnWilliams/Star%20Wars%20Theme%20Song%20By%20John%20Williams.mp3');

const logoSection = new ElementNode(logoSectionParams);
logoSection.createAttribute();

const logoImage = new ElementNode(logoImageParams);
logoImage.createAttribute();
logoImage.source = logoImage.createElement.setAttribute('src', 'https://www.boostability.com/wp-content/uploads/2020/03/yellow-boostability-star-wars-logo@3x.png');

const prelude = new ElementNode(preludeParams);
prelude.createAttribute();

const intro = new ElementNode(introParams);
intro.createAttribute();

const canvas = new ElementNode(canvasParams);
canvas.createAttribute();

const introContent = new ElementNode(introContentParams);
introContent.createAttribute();

const episodeOne = new ElementNode(episodeOneParams);
episodeOne.createAttribute();

const workingFromHome = new ElementNode(workingFromHomeParams);
workingFromHome.createAttribute();

const paragraphOne = new ElementNode(paragraphOneParams);
paragraphOne.createAttribute();

const paragraphTwo = new ElementNode(paragraphTwoParams);
paragraphTwo.createAttribute();

const paragraphThree = new ElementNode(paragraphThreeParams);
paragraphThree.createAttribute();

const elements = [];

elements.unshift(playerContainer);
elements.push(player);
elements.push(audio);
elements.push(logoSection);
elements.push(logoImage);
elements.push(prelude);
elements.push(intro);
elements.push(canvas);
elements.push(introContent);
elements.push(episodeOne);
elements.push(workingFromHome);
elements.push(paragraphOne);
elements.push(paragraphTwo);
elements.push(paragraphThree);

const elementBuilder = () => {
    for (let i = 0; i < elements.length; i++) {
        elements[i].createNode();
    }
}

elementBuilder();
