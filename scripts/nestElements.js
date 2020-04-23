class NestElements {
    constructor(params) {
        this.parentNode = params.parentNode;
        this.childNode = params.childNode;
    }

    nestElement() {
        this.parentNode.append(this.childNode);
    }
}

// Nest parent and child parameters
const nestPlayerParams = {
    parentNode: document.getElementById('playerContainer'),
    childNode: document.getElementsByClassName('player')[0]
}

const nestAudioInsidePlayerParams = {
    parentNode: document.getElementsByClassName('player')[0],
    childNode: document.getElementsByClassName('audio')[0]
}

const nestLogoImageParams = {
    parentNode: document.getElementsByClassName('logo')[0],
    childNode: document.getElementById('logoImage')
}

const nestCanvasIntroParams = {
    parentNode: document.getElementById('intro'),
    childNode: document.getElementById('canvas')
}

const nestIntroContentParams = {
    parentNode: document.getElementById('intro'),
    childNode: document.getElementById('introContent')
}

const nestEpisodeOneIntroParams = {
    parentNode: document.getElementById('introContent'),
    childNode: document.getElementById('episodeOne')
}

const nestWorkingFromHomeParams = {
    parentNode: document.getElementById('introContent'),
    childNode: document.getElementById('workingFromHome')
}

const nestParagraphOneParams = {
    parentNode: document.getElementById('introContent'),
    childNode: document.getElementById('paragraphOne')
}

const nestParagraphTwoParams = {
    parentNode: document.getElementById('introContent'),
    childNode: document.getElementById('paragraphTwo')
}

const nestParagraphThreeParams = {
    parentNode: document.getElementById('introContent'),
    childNode: document.getElementById('paragraphThree')
}

// Create new NestElements object
const nestPlayer = new NestElements(nestPlayerParams);

const nestAudioInsidePlayer = new NestElements(nestAudioInsidePlayerParams);

const nestLogoImage = new NestElements(nestLogoImageParams);

const nestCanvasIntro = new NestElements(nestCanvasIntroParams);

const nestIntroContent = new NestElements(nestIntroContentParams);

const nestEpisodeOneIntro = new NestElements(nestEpisodeOneIntroParams);

const nestWorkingFromHome = new NestElements(nestWorkingFromHomeParams);

const nestParagraphOne = new NestElements(nestParagraphOneParams);

const nestParagraphTwo = new NestElements(nestParagraphTwoParams);

const nestParagraphThree = new NestElements(nestParagraphThreeParams);

// Create array to put nested elements in a container
const nestElementsArray = [];

// Push the nested element into the array container
nestElementsArray.unshift(nestPlayer);
nestElementsArray.push(nestAudioInsidePlayer);
nestElementsArray.push(nestLogoImage);
nestElementsArray.push(nestCanvasIntro);
nestElementsArray.push(nestIntroContent);
nestElementsArray.push(nestEpisodeOneIntro);
nestElementsArray.push(nestWorkingFromHome);
nestElementsArray.push(nestParagraphOne);
nestElementsArray.push(nestParagraphTwo);
nestElementsArray.push(nestParagraphThree);

// Iterate through the nested array container
function nestElementBuilder() {
    for (let i = 0; i < nestElementsArray.length; i++) {
        nestElementsArray[i].nestElement();
    }
}

// Instantiate the helper function to nest the elements
nestElementBuilder();