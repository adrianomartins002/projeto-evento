const express = require('express');
const app = express();

app.get('/evento', (req, res) => {
  const data = {
    name: "Evento anime friends",
    description: "Evento criado para 20 anos de anime friends, serão feitos diversas competições, venha participar",
    date: getRandomDate(),
    lat: "-2.5266509928493726",
    long: "-44.25398201034273"
  };
  res.json(data);
});

// function getRandomName() {
// //   const names = ['Alice', 'Bob', 'Charlie', 'David', 'Emily'];
// //   return names[Math.floor(Math.random() * names.length)];
// cons
// }

function getRandomDate() {
  const startDate = new Date(2000, 0, 1);
  const endDate = new Date(2023, 4, 6);
  const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
  return randomDate.toISOString().split('T')[0];
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
