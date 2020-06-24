let mysql = require("mysql");

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "bank",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

function addUser() {
  console.log("POPULATING USERS...");

  let name = [
    "Silva",
    "Richard",
    "Ruy",
    "Susan",
    "Paiva",
    "Vicky",
    "Pereira",
    "Ben",
    "Fernandes",
    "William",
  ];

  let last_name = [
    "Ambrosio",
    "Amy",
    "Benfica",
    "Hannah",
    "Garcia",
    "Michael",
    "Guilherme",
    "Sandy",
    "Mariano",
    "Betty",
  ];

  let SQL = "INSERT INTO users (name, last_name) VALUES (?, ?)";

  for (let i = 0; i < 10; i++) {
    con.query(SQL, [name[i], last_name[i]], function (err, result) {
      if (err) throw err;
    });
  }
}

function addBankInformation() {
  console.log("POPULATING BANK INFORMATIONS...");

  let name = [
    "Banco do Brasil",
    "Caixa Econômica Federal",
    "Itaú Unibanco",
    "Bradesco",
    "BNDES",
    "Santander",
    "BTG Pactual",
    "HSBC",
    "Safra",
    "Banco Votorantim",
    "Citi",
    "Banrisul",
    "BNP Paribas",
  ];

  let agency = [
    1539,
    5876,
    8452,
    1054,
    1054,
    7815,
    5687,
    1452,
    6587,
    6248,
    4528,
    9574,
    5592,
  ];

  let SQL =
    "INSERT INTO bank_informations (name, agency, users_ID_users) VALUES (?, ?, ?)";

  for (let i = 1, j = 0; i < 11; i++, j++) {
    con.query(SQL, [name[j], agency[j], i], function (err, result) {
      if (err) throw err;
    });
  }
}

function addAddresses() {
  console.log("POPULATING ADDRESSES...");

  let SQL =
    "INSERT INTO addresses (street, state, city, users_ID_users) VALUES (?, ?, ?, ?)";

  let street = [
    "Rua Rui Barbosa ",
    "Rua Goias ",
    "Rua Boa Vista",
    "Rua O",
    "Rua 11",
    "Rua Santos Dumont",
    "Rua Parana",
    "Rua Vinte",
    "Rua Sete de Setem",
    "Rua São José",
    "Rua Seis",
    "Rua Principal",
  ];

  let state = ["ES", "RJ", "MG", "SC", "PR", "BA", "ES", "SC", "RJ", "RJ"];

  let city = [
    "Vila Velha",
    "Muniz Freire",
    "Nova Venécia",
    "Colatina",
    "Baixo Guandeu",
    "Muniz Freire",
    "Colatina",
    "Nova Venécia",
    "Vila Velha",
    "Baixo Guandeu",
  ];

  for (let i = 1, j = 0; i < 11; i++, j++) {
    con.query(SQL, [street[j], state[j], city[j], i], function (err, result) {
      if (err) throw err;
    });
  }
}

function addProduct() {
  console.log("POPULATING PRODUCTS...");

  let SQL = "INSERT INTO products (name, price, amount) VALUES (?, ?, ?)";

  let name = [
    "Coca Cola",
    "Biscoito",
    "Pizza",
    "Picanha",
    "Arroz",
    "Feijão",
    "Farinha",
    "Pasta de dente",
    "Maça",
    "Banana",
    "Chuchu",
    "Requeijão",
    "Cacau",
  ];

  let price = [20.55, 30.75, 40.8, 60.9, 12.2, 25.5, 98.9, 55.9, 40.8, 60.9];

  let amount = [50, 33, 90, 88, 100, 500, 98, 33, 90, 88];

  for (let i = 0; i < 10; i++) {
    con.query(SQL, [name[i], price[i], amount[i]], function (err, result) {
      if (err) throw err;
    });
  }
}

function addRequest() {
  console.log("POPULATING REQUESTS...");

  let SQL =
    "INSERT INTO request (status,users_ID_users, product_ID_product) VALUES (?, ?, ?)";

  let status = ["PENDING", "DENIED", "APPROVED"];

  for (let i = 1; i < 11; i++) {
    let bonjour = Math.floor(Math.random() * 2);

    con.query(SQL, [status[bonjour], i, i], function (err, result) {
      if (err) throw err;
    });
  }
}

addUser();
addBankInformation();
addAddresses();
addProduct();
addRequest();
