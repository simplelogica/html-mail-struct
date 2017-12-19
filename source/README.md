html-mail-struct. HTML email / newsletter kit
=============================================

## Requisitos

- Ruby 2.3.0
- Middleman 4

## Descripcción

Este proyecto aspira a ser un conjunto de bloques bien probados que permitan construir emails / newsletters en HTML que se vean lo mejor posible en el mayor número de lectores de correo. Esta titánica tarea se llevó a cabo en 2016 durante una semana y este es el mejor resultado que pudimos conseguir.

Este proyecto te permite usar CSS normal con clases... etc y bloques. Funciona como un repo de `middleman` normal y corriente. Puedes crear vistas, y en ellas importar los diferentes partials de cada tipo de bloque.

Para arrancar el server de Middleman:  
`middleman server`

La magia que proporciona este proyecto es que cuando haces un build del email con `middleman build` una gema se encaraga de hacer el inline de todo en CSS en todos los sitios necesarios y te permite hacer ajustes más sencillos.

## Disclaimers varios

- Los lectores de correo cambian constántemente muchas veces sin avisar ni explicar en ningún sitio que transformaciones aplican en los emails antes de mostrárselos a los usuario. Si, has leido bien, **algunos lectores de correo reemplazan el HTML de los emails por su cuenta y no dicen cómo o porqué**.
- Con algunos lectores fuimos especialmente incapaces de conseguir resultados decentes. El peor caso es el lector de correo de **Lotus Notes**. En estos momentos (2017) hay tres versiones en uso de **Lotus Notes** cada una de ellas **con su propio motor de HTML diferente**.
- Si podemos darte un consejo: **Evita dar soporte a Lotus Notes en la medida de lo posible**. Es un pozo de tiempo, no hay ningún tipo de documentación y algunas features son incompatibles entre si. Propón poner el enlace de __ver este correo en el navegador__.

## Responsive

Inicialmente los lectores de correo soportaban _mediaqueries_ para hacer los correos responsive, pero progresivamente han ido dejando de dar soporte a esta caracterísica ( [¿qué clientes de correo dan soporte acutalmente?](https://litmus.com/help/email-clients/media-query-support/) ) ahora los lectores su propio _responsive_ en muchos casos sin que se pueda controlar completamente la visualización final.

Así que ya que el responsive es muy incontrolable es importante hacer emails sencillos, nuestra recomendación es que sean de una sola columna, con botones sencillos ( formas cuadradas ) o directamente que los botones sean tambien imágenes (¡si amigos, vuelta a 1999!)

## Enlaces e información de interés

- [Emailonacid](https://www.emailonacid.com/), para testear los correos en varios lectores
- [Propiedades de CSS soportadas por cada lector de correo](https://www.campaignmonitor.com/css/color-background/background-attachment/)
- [Porcentaje de uso de cada lecto de correo](https://emailclientmarketshare.com/)
- [Clientes de correo que dan soporte a _mediaqueries_](https://litmus.com/help/email-clients/media-query-support/)

## Futuro

El que te escribe ( [@carloscabo](https://github.com/carloscabo) ) desea que los emails en HTML terminen desapareciendo algún día, o en su defecto que sean lo más sencillos posibles, o que sean una imagen metida en una tabla y a correr.