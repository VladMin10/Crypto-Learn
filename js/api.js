const tbody = document.getElementById("table-body");

function updateTable() {
  const xmlhttp = new XMLHttpRequest();

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en";
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(this.responseText);
      let html = "";
      data.forEach((coin) => {
        const {
          name,
          symbol,
          image,
          current_price,
          price_change_percentage_24h,
        } = coin;
        html += `
                <tr>
                    <td>${name} (${symbol.toUpperCase()})</td>
                    <td><img src="${image}" alt="${symbol}"></td>
                    <td>${
                      current_price < 1
                        ? current_price.toFixed(7)
                        : current_price.toFixed(2)
                    }</td>
                    <td class="${
                      price_change_percentage_24h < 0 ? "red" : "green"
                    }">${
          price_change_percentage_24h.toFixed(2) > 0
            ? "+" + price_change_percentage_24h.toFixed(2) + "%"
            : price_change_percentage_24h.toFixed(2) + "%"
        }</td>
                </tr>
            `;
      });
      tbody.innerHTML = html;
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
updateTable();

