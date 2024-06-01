let svar = prompt ("Innehållet på denna sidan är åldersbergänsad. Är du över 7 år? ")
if (svar == "ja"){
    alert("Välkommen!")
}
if (svar == "nej") {
    alert("Denna hemsida är inte för dig.")
}


document.getElementById('information').addEventListener('click', function() {
    alert('Denna hemsida har ingen juridisk anknytning till Cartoon Network eller Gumballs fantastiska värld. Alla varumärken, logotyper och bilder som visas på denna webbplats tillhör deras respektive ägare och används här endast för informations- och underhållningsändamål. Ingen kränkning av upphovsrätten är avsedd. Denna webbplats är inte en officiell hemsida för Cartoon Network eller någon av dess tillhörande franchiser. Om du är ägare till något innehåll och anser att det har använts på ett sätt som utgör upphovsrättsintrång, vänligen kontakta oss så kommer vi att vidta nödvändiga åtgärder.')
})



