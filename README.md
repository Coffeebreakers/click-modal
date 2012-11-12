Click Modal for jQuery
======================

The Click Modal is a jQuery Plugin to provides a simple em usefull modal web browser.

It is very simple, complete and crossbrowser (of course), was developed by Danilo Augusto (@maktuiu), André Machado (@andremachado), that also proposed the idea and Fabio Vieira (DJ Marquee), both Web Interface Developers at AgênciaClick, based on a modal function by Rodrigo Castilho (@rodcast).

Works as a plugin for jQuery, has only 2 KB and a number of options.

Usage
-----

Just download the last version of the jQuery Click Modal Javascript and the jQuery Click Modal Stylesheet.

    <html>
      <head>
        ...
        <link rel="stylesheet" href="jquery.clickmodal.css" type="text/css" media="screen" charset="utf-8"/>
      </head>
      <body>

        <script src="jquery-x.x.js" type="text/javascript" charset="utf-8"></script>
        <script src="jquery.clickmodal-x.x.js" type="text/javascript" charset="utf-8"></script>
      </body>
    </html>

Modal Options
-------------

<table>
    <thead>
        <th>
            <td>Option</td>
            <td>What is this?</td>
            <td>Default</td>
        </th>
    </thead>
    <tbody>
        <tr>
            <td>url</td>
            <td>o link da página que será carregada</td>
            <td># ou o href do link</td>
        </tr>

        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

<!-- backgroundColor     a cor de fundo do modal     #000 (preto)
backgroundOpacity   nível de opacidade  0.5 (50%)
referencePosition   Objeto de referência para posicionamento    this
top     Nos modais com posicao relativa / absoluta pode ser ajustado o top (em pixels)  0
left    Nos modais com posicao relativa / absoluta pode ser ajustado o left (em pixels)     0
closeEsc    O modal é fechado quando pressionada a tecla esc.   true
closeClickOut   O modal é fechado quando clicado fora da área da janela do modal    false
autoOpen    O modal é aberto automaticante quando a página é carregada ( onload lightbox ), não precisa de click.   false

O André Machado está trabalhando para oferecer mais opções como “confirm” e galeria de imagens nas próximas versões. -->