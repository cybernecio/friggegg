// Datos de ejemplo (reemplazar con datos reales)
const dataURL = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json';

// Tamaño del mapa de calor
const width = 1200;
const height = 600;
const padding = 60;

// Crear el elemento SVG
const svg = d3.select("#chart")
  .attr("width", width)
  .attr("height", height);

// Obtener los datos
d3.json(dataURL).then(data => {
  // Aquí se procesan y se utilizan los datos

  // Ejemplo de manipulación de datos
  const temps = data.monthlyVariance.map(d => d.variance);
  const minTemp = d3.min(temps);
  const maxTemp = d3.max(temps);

  // Resto del código para visualizar el mapa de calor...
});
