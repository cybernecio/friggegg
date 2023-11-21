// Datos de ejemplo (reemplazar con datos reales)
// Tamaño del gráfico de calor
const width = 1200;
const height = 600;

// Crear el elemento SVG
const svg = d3.select("#heatmap")
  .attr("width", width)
  .attr("height", height);

// URL del conjunto de datos
const dataURL = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json';

// Obtener los datos
d3.json(dataURL).then(data => {
  // Manipulación y visualización de los datos
});
