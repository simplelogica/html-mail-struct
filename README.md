html-mail-struct. HTML email / newsletter kit
=============================================

## Requisitos e instalación

- Ruby 2.3.0
- Middleman 4

La instalación es como cualquier otro proyecto de Ruby / Rails. Tener instalado el Ruby correspondiente y ejecutar `bundle install` en la carpeta de proyecto.

Para arrancar el server de Middleman:  
`middleman server`

## Descripcción

Este proyecto aspira a ser un **conjunto de bloques bien probados que permitan construir emails / newsletters en HTML que se vean lo mejor posible en el mayor número de lectores de correo.** Esta titánica tarea se llevó a cabo en 2016 durante una semana y este es el mejor resultado que pudimos conseguir.

Este proyecto te permite usar CSS normal con clases... etc y bloques. Funciona como un repo de `middleman` normal y corriente. Puedes crear vistas, y en ellas **importar los diferentes partials de cada tipo de bloque.** Los bloques puedes encontrarlos en la carpeta: `/Users/carloscabo/Dropbox/__git/html-mail-struct/source/email/blocks`

La magia que proporciona este proyecto es que cuando haces un `build` del email con `middleman build` una gema **se encarga de hacer el inline de todo en CSS en todos los sitios necesarios** y te permite hacer ajustes más sencillos.

## Disclaimers varios

- Los lectores de correo cambian constántemente muchas veces sin avisar ni explicar en ningún sitio que transformaciones aplican en los emails antes de mostrárselos a los usuario. Si, has leido bien, **algunos lectores de correo reemplazan el HTML de los emails por su cuenta y no dicen cómo o porqué**.
- Con algunos lectores fuimos incapaces de conseguir resultados decentes. El peor caso es el lector de correo de **Lotus Notes**. En estos momentos (2017) hay tres versiones en uso de **Lotus Notes** cada una de ellas **con su propio motor de HTML diferente** 😢.
- Si podemos darte un consejo: **Evita dar soporte a Lotus Notes en la medida de lo posible**. Es un pozo de tiempo, no hay ningún tipo de documentación y algunas features son incompatibles entre si. La única solución es poner un enlace para ver el email / newsletter en el navegador.

## Responsive

Inicialmente los lectores de correo soportaban _mediaqueries_ (que permitían hacer ajustes responsive), pero **progresivamente han ido dejando de dar soporte a esta caracterísica** ([¿qué clientes de correo dan soporte actalmente?](https://litmus.com/help/email-clients/media-query-support/)). Ahora los lectores _generan_ su propio _responsive_ en muchos casos sin que se pueda controlar completamente la visualización final, es decir, el letor de correo hace cambios en el HTML para que el correo sea responsive, pero _a su puta bola_.

Así que ya que el responsive es muy incontrolable **es importante hacer emails sencillos,** nuestra recomendación es que sean de **una sola columna**, con botones sencillos (formas cuadradas) o directamente que los botones sean tambien imágenes (¡si amigos, **vuelta a 1999!**)

## Enlaces e información de interés

- [Emailonacid](https://www.emailonacid.com/), para testear los correos en varios lectores
- [Propiedades de CSS soportadas por cada lector de correo](https://www.campaignmonitor.com/css/color-background/background-attachment/). No pierdas tiempo y consulta esto antes de usar cualquier propiedad.
- [Porcentaje de uso de cada lecto de correo](https://emailclientmarketshare.com/). Para justificar 
- [Clientes de correo que dan soporte a _mediaqueries_](https://litmus.com/help/email-clients/media-query-support/)

## Futuro

El que te escribe ([@carloscabo](https://github.com/carloscabo)) desea que:
- Los emails en HTML terminen **desapareciendo**
- En su defecto sean lo más sencillos posible (una columan y pocos elementos)
- O volver a una imagen metida en una tabla y a correr
- O que un meteorito del tamaño de Texas impacte contra la tierra y tras la extinción masiva la civilización que surja (probablemente de insectos) haga las cosas mejor y nunca lleguen a crear los emails en HTML.