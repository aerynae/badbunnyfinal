$(document).ready(function() {
	 // Using translate.js <https://github.com/tinoni/translate.js>

  // Part 1 of 2 of translate.js: Constructing the dictionary
  var dict = {
   
    "Proximos Eventos": { // Translations for "Tour"
      es: "Proximos Eventos",
      en: "Upcoming Events"
    },
    "Próximamente": { // Translations for "Coming Soon"
      es: "Próximamente",
      en: "Coming Soon"
    },
    "Discografía": { // Translations for "Discography"
      es: "Discografía",
      en: "Discography"
    },

     "VER MAS": { // Translations for "Read More"
      es: "VER MAS",
      en: "READ MORE"
    },

    "Biografía": { // Translations for "Biography"
      es: "Biografía",
      en: "Biography"
    },


    "Benito Antonio Martínez Ocasio, conocido en el mundo de la música como Bad Bunny, es un cantante y compositor puertorriqueño de hip-hop en español, rap, trap y otros ritmos urbanos. Nació en San Juan, Puerto Rico el 10 de marzo de 1994 y es reconocido por ser un artista creativo y versátil": {
      es: "Benito Antonio Martínez Ocasio, conocido en el mundo de la música como Bad Bunny, es un cantante y compositor puertorriqueño de hip-hop en español, rap, trap y otros ritmos urbanos. Nació en San Juan, Puerto Rico el 10 de marzo de 1994 y es reconocido por ser un artista creativo y versátil",
      en: "Benito Antonio Martínez Ocasio, known in the world of music as Bad Bunny, is a Puerto Rican singer and songwriter (He also has American nationality) of hip-hop in Spanish, rap, trap and other urban rhythms. He was born in San Juan, Puerto Rico on March 10, 1994, and is recognized as a creative and versatile artist"
    }


  };

   // Part 2 of 2 of translate.js: Enabling buttons to start translation
  $("#esp").click(function() {
    var translator = $("body").translate({lang: "es", t: dict}); // translating to Spanish
  });

  $("#eng").click(function() {
    var translator = $("body").translate({lang: "en", t: dict}); // translating to English
  });

$(".tile").mouseenter(function() {
    $(this).removeClass("unselected");
    $(this).addClass("selected");
  });

  $(".tile").mouseleave(function() {
    $(this).removeClass("selected");
    $(this).addClass("unselected");
  });



}); // end of JavaScript code




	
	
