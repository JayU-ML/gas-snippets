function doGet(e) {
    let p = e.parameter;
    let translatedText = LanguageApp.translate(p.text, p.source, p.target);
    let body;
    if (translatedText) {
        body = {
          code: 200,
          text: translatedText
        };
    } else {
        body = {
          code: 400,
          text: "Bad Request"
        };
    }
    let response = ContentService.createTextOutput();
    response.setMimeType(ContentService.MimeType.JSON);
    response.setContent(JSON.stringify(body));
    return response;
}