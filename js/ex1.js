fetch(
    "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json"
  )
    .then(response => response.json())
    .then(paintings => {
      const element = document.getElementById("paintings");
      paintings.forEach(painting => {
        const paintingPrint = document.createElement("tr");
        paintingPrint.innerHTML = `<td>
          ${painting.name}
          </td>
          <td>
          ${painting.year}
          </td>
          <td>
          ${painting.artist}
          </td>`;
        element.appendChild(paintingPrint);
      });
    })
    .catch(err => {
      console.error(err.message);
    });