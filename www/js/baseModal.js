const region='Kitchener-Waterloo',
        category=0,name=1,href=2,
        aClass=' class="ui-link ui-btn ui-btn-c pdf media" ';
var xml,array=[];
var lastOpenedModal;

var xhr = new XMLHttpRequest();

var xmlProperties,url;
function setHeaderForAll(){
    openXhr(xmlProperties);
    setXhrSetHeaders();
    setXhrWithCredentials()
}

function openXhr(xmlProperties){
    xhr.open(xmlProperties.type, xmlProperties.url);
}
function setXhrSetHeaders(){
    // xhr.setRequestHeader("Access-Control-Allow-Origin", "files/xml/types.xml");
    xhr.setRequestHeader("Content-Type", "xml");
    xhr.setRequestHeader("X-Content-Type-Options", "nosniff");
    xhr.setRequestHeader("Access-Control-Allow-Headers", "X-Requested-With");
}
function setXhrWithCredentials(){
    xhr.withCredentials=true;
}

function convertIntoSortedArray(){
    array=[];
    convertDataIntoArray();
    sortArray();

    return array;
}

function convertDataIntoArray(){
    parseXml();

    $(xml).find("type").each(function(i,tag){
        var idValue = getTypeId(tag);
        var nameValue = getTypeName(tag);
        var hrefValue = getTypeHref(tag);
        addArrayObject(idValue,nameValue,hrefValue);
    });
}

function parseXml(){
    xml = $.parseXML(xml);
}

function getTypeId(node){
    return getNodeId(node);
}
function getTypeName(node){
    return getNodeValue(node,'name');
}
function getTypeHref(node){
    return getNodeValue(node,'href');
}
function getNodeId(node){
    return $(node).attr('id');
}
function getNodeValue(node,property){
    return $(node).find(property).text();
}

function addArrayObject(idValue,nameValue,hrefValue){
    array.push([idValue,nameValue,hrefValue])
}

function sortArray(){
    array.sort();
}

function setArrayDirectoryOfResources(){
    arrayDirectoryOfResources=array;
}

function setArrayTipsToRemember(){
    arrayTipsToRemember=array;
}

const effect="slide",
    duration=500;
var dialogOptions = {
    autoOpen: false,
    modal: true,
    width: '100%',
    height: 1000,
    position:{
        my: "top"
    },
    show: {
        effect: effect,
        direction: "right",
        duration: duration
    },
    hide: {
        effect: effect,
        direction: "left",
        duration: duration
    }
};
function openModal(dialogId){
    lastOpenedModal=dialogId;
    $(dialogId).dialog(dialogOptions).dialog('open');

    applyModalContentStyleToDialog();
}

function applyModalContentStyleToDialog(){
    var classes = getModalContentClasses();
    $('.ui-dialog').addClass(classes);

    removeEffects();
}
function getModalContentClasses(){
    const modalClass = 'modalContent ',
        uiPageClasses = 'ui-page ui-page-theme-b ui-page-active ui-overlay-shadow ui-corner-all',
        dialogClass = 'ui-dialog ',
        fullscreenClass = 'fullscreen ';

    return modalClass + uiPageClasses + dialogClass + fullscreenClass;
}

function removeEffects(){
    if (uiEffectsExists())
        $('.ui-effects-placeholder').remove();
}
function uiEffectsExists(){
    return $('.ui-effects-placeholder').length;
}