/* 
    AUTHOR:         Karm Binning
    DATE CREATED:   January 22nd, 2019
    DATE MODIFIED:  February 09th, 2019
*/

const volunteerHandbook='volunteerHandbook'
    , tipsToRemember='tipsToRemember'
    , directoryOfResources='directoryOfResources';

function loadModalList(){
    setupXmlHttpRequest();
    xhr.onreadystatechange =  function() {
        if (xhr.readyState == 4) {
            xml = xhr.responseText;
            array = convertIntoSortedArray();
            for (var i=0;i<array.length;i++){
                var type=array[i];
                var id=type[category];
                $('#'+id).append
                (
                    '<a ' + aClass + ' href="' + type[href]+ '">'
                        + type[name]
                    + '</a>');
            }
        }
    }
    xhr.send();
};

function embedPdf(pdf){
    $('#embedPdf').attr('src',pdf).show();

    $(lastOpenedModal).dialog('close');

    const inlineFlex='inline-flex',static='static';
    $('#dialogPdf').css('display',inlineFlex).css('position', static);

    openModal('#dialogPdf');
}

function setHeader(){
    setHeaderForAll();
}

function setupXmlHttpRequest(){
    xmlProperties = getModalListTypesXmlProperties();
    url=xmlProperties.url;
    $.ajax({
        dataType: xmlProperties.dataType,
        beforeSend: setHeader,
        type: xmlProperties.type,
        async: xmlProperties.async,
        url:url,
        success: function(data){log('success')},
        error: function(xhrs, status, err) {log('error')},
        complete: function(data){log('complete')},
        done: function(data){log('done ')}
    });

    return xhr;
}