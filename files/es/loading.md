## Loading

Componente que ocupa la pantalla completa que representa que la página está cargando. Está compuesta por un [Container](https://).

### Propiedades

#### Normales

| Nombre        | Tipo                    | Valor por defecto | Descripción                             |
| ------------- | ----------------------- | ----------------- | --------------------------------------- |
| className     | string                  |                   | clase css                               |
| id            | string                  |                   | id css                                  |
| name          | string                  |                   | es solo un nombre                       |
| style         | Array<string \| number> |                   | estilo css                              |
| ignoreDefault | bool                    | false             | si debe ignorar los estilos por defecto |

#### Opciones para el estilo de CodeMeme2Share

_Nota: Si no quieres usar el estilo de CodeMeme2Share simplemente la propiedad `ignoreDefault` debe tener valor `true`, así adoptará tus estilos propios o tus clases css_

| Nombre         | Tipo             | Valor por defecto | Descripción                                                                                 |
| -------------- | ---------------- | ----------------- | ------------------------------------------------------------------------------------------- |
| width          | string \| number | "100%"            | ancho de la pantalla de carga                                                               |
| height         | string \| number | "100%"            | alto de la pantalla de carga                                                                |
| position       | string           | "fixed"           | posición de la pantalla de carga                                                            |
| justifyContent | string           | "center"          | justificación de los elementos de la pantalla de carga                                      |
| alignItems     | string           | "center"          | alineación de los elementos de la pantalla de carga                                         |
| zIndex         | number           | 99                | posición en el índice de la pantalla de carga                                               |
| transition     | string           | "200ms all ease"  | efectos de transición del contenedor de la pantalla de carga                                |
| display        | string           | "flex"            | forma del contenedor de la pantalla de carga                                                |
| flexDirection  | string           | "column"          | dirección del flexbox del contenedor de la pantalla de carga                                |
| background     | string           | "#2223338c"       | color de fondo del contenedor de la pantalla de carga                                       |
| padding        | string \| number | "1rem "           | espacio de separación entre los elementos y el borde del contenedor de la pantalla de carga |
| backdropFilter | string           | "blur(4px)"       | efecto para los elementos que estén detrás de la pantalla de carga                          |
| borderRadius   | string \| number | "1rem"            | radio de los bordes del contenedor de la pantalla de carga                                  |
| animation      | string           |                   | animación para el contenedor de la pantalla de carga                                        |
