/*
**  Author:         Karm Binning
**  Create Date:    September 24th, 2018
**  Modify Date:    November 16th, 2018
**  Description:    JS file found and used on all pages.
*/

//GLOBAL VARIABLES
const startedYear = 2018;

function createFooter(){
    var footer = getFooter();

    var html = '<div data-role="footer" data-position="fixed">'+
    '  <div data-role="navbar">'+
    '    <ul>'+
    '      <li><a href="#pageHome" data-icon="home" data-theme="c">HOME</a></li>'+
    '      <li><a href="#pageDirectoryOfResources" data-icon="phone" data-theme="c">DIRECTORY OF RESOURCES</a></li>'+
    '      <li><a href="#pageVolunteerHandbook" data-icon="user" data-theme="c">VOLUNTEER HANDBOOK</a></li>'+
    '      <li><a href="#pageTipsToRemember" data-icon="alert" data-theme="c">TIPS TO REMEMBER</a></li>'+
    '    </ul>'+
    '  </div>'+
    '  <h4 class="copyright"></h4>'
    '</div>';

    $(footer).html(html);

    addCopyright();
}

function createCopyright(){
    var footer = getFooter();
    var copyrightText = getCopyrightText();

    footer.text(copyrightText);
}

function getFooter(){
    return $('.footer');
}

function addCopyright(){
    var copyrightPlaceholder = getCopyrightSelector();
    var copyrightText = getCopyrightText();

    copyrightPlaceholder.text(copyrightText);
}

function getCopyrightSelector(){
    return $('.copyright');
}

function getCopyrightText(){
    var yearText = getYearText();

    return 'Copyright © ' + yearText + '. All rights reserved.';
}

function getYearText(){
    var currentYear = new Date().getFullYear();
    var currentYearText = (currentYear == startedYear) ? startedYear.toString() : startedYear.toString() + '-' + currentYear.toString();

    return currentYearText;
}

function log(text){
    console.log(text);
}