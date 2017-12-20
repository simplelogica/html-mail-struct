html-mail-struct. HTML email / newsletter kit
=============================================

## Requisitos e instalación

- Ruby 2.3.0
- [Middleman 4](https://middlemanapp.com/)

La instalación es como cualquier otro proyecto de Ruby / Rails. Tener instalado el Ruby correspondiente y ejecutar 💻 `bundle install` en la carpeta de proyecto.

Para arrancar el server de Middleman:  
💻 `middleman server`

Normalmente podrás ver la app en:  
`http://127.0.0.1:4567`

Si lo has hecho todo correctamente deberías ver una página con el listado de los bloques:
![Página de bloqes](https://raw.githubusercontent.com/simplelogica/html-mail-struct/master/source/assets/images/snapshot.png)

## Descripcción

Este proyecto aspira a ser un **conjunto de bloques bien probados que permitan construir emails / newsletters en HTML que se vean lo mejor posible en el mayor número de lectores de correo.** Esta titánica tarea se llevó a cabo en 2016 durante una semana y este es el mejor resultado que pudimos conseguir.

Este proyecto te permite usar CSS normal con clases... etc y bloques. Funciona como un repo de `middleman` normal y corriente. Puedes crear vistas y en ellas **importar los diferentes partials de cada tipo de bloque.** Los bloques puedes encontrarlos en la carpeta: `source/email/blocks`

La magia que proporciona este proyecto es que cuando haces un `build` del email **la gema [middleman-roadie](https://github.com/vortizhe/middleman-roadie) se encarga de hacer el inline de todo en CSS en todos los sitios necesarios** y te permite hacer ajustes más sencillos (esta gema es un _wrapper_ para [roadie](https://github.com/Mange/roadie)).

**Para hacer el `build` del email**  
En la carpeta raiz ejecuta em la terminal: 💻 `middleman build`  
El email HTML resultante se generará en la carpeta `/build`.

## Disclaimers varios

- Los lectores de correo cambian constántemente muchas veces sin avisar ni explicar en ningún sitio que transformaciones aplican en los emails antes de mostrárselos a los usuario. Si, has leido bien, **algunos lectores de correo reemplazan el HTML de los emails por su cuenta y no dicen cómo o porqué**.
- Con algunos lectores fuimos incapaces de conseguir resultados decentes. El peor caso es el lector de correo de **Lotus Notes**. En estos momentos (2017) hay tres versiones en uso de **Lotus Notes** cada una de ellas **con su propio motor de HTML diferente** 😢
- Si podemos darte un consejo: **Evita dar soporte a Lotus Notes en la medida de lo posible**. Es un pozo de tiempo, no hay ningún tipo de documentación y algunas features son incompatibles entre si. La única solución es **poner un enlace para ver el email / newsletter en el navegador.**

## Responsive

Inicialmente los lectores de correo soportaban _mediaqueries_ (que permitían hacer ajustes responsive), pero **progresivamente han ido dejando de dar soporte a esta caracterísica** ([¿qué clientes de correo dan soporte actalmente?](https://litmus.com/help/email-clients/media-query-support/)). Ahora los lectores _generan_ su propio _responsive_ en muchos casos sin que se pueda controlar completamente la visualización final, es decir, el letor de correo hace cambios en el HTML para que el correo sea responsive, pero _a su puta bola_.

Así que ya que el responsive es muy incontrolable **es importante hacer emails sencillos,** nuestra recomendación es que sean de **una sola columna**, con botones sencillos (formas cuadradas) o directamente que los botones sean tambien imágenes (¡si amigos, **vuelta a 1999!**)

## Herramientas e información de interés

Por favor, si conoces más herramientas útiles que puedan simplificar este tema, por favor añádelas en esta sección.

- [Emailonacid](https://www.emailonacid.com/), para testear los correos en varios lectores
- [Litmus.com](https://litmus.com/) Otra herramienta para testear correos. Tienen una [sección de documentación muy completa](https://litmus.com/resources).
- [Propiedades de CSS soportadas por cada lector de correo](https://www.campaignmonitor.com/css/color-background/background-attachment/). No pierdas tiempo y **consulta esto antes de usar cualquier propiedad.**
- [Porcentaje de uso de cada lecto de correo](https://emailclientmarketshare.com/). Para justificar 
- [Clientes de correo que dan soporte a _mediaqueries_](https://litmus.com/help/email-clients/media-query-support/). Es decir los que soportan un _responsive_ real que se puede controlar. El resto son hacks, por lo tanto incontrolables.
- [Midddleman-roadie](https://github.com/vortizhe/middleman-roadie) la gema que hace la magia del _inline_de_los estilos.
- [Roadie](https://github.com/Mange/roadie) la gema original de _roadie_.

## Futuro

El que te escribe ([@carloscabo](https://github.com/carloscabo)) desea que:
- Los emails en HTML terminen **desapareciendo**
- En su defecto sean lo más sencillos posible (una columna y pocos elementos)
- O volver a una imagen metida en el correo y dejar de complicarnos
- O que un meteorito del tamaño de Texas impacte contra la tierra y tras la extinción masiva ([ELE](https://es.wikipedia.org/wiki/Evento_ligado_a_la_extinci%C3%B3n)) la civilización que surja (probablemente de insectos) haga las cosas mejor y nunca lleguen a crear los emails en HTML.