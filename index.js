const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const db = require("./connection");
const { response, response2 } = require("./response");

app.use(bodyParser.json());

// Get
app.get("/", (req, res) => {
  const sql = "SELECT * FROM user";
  // db.query(sql, (error, result) => {
  //   console.log("result", result);
  //   if (error) throw error;
  //   response(200, result, "Berhasil mendapatkan list produk", res);
  // });
  res.send("TES");
});

// app.get("/produk/:id", (req, res) => {
//   const id = req.params.id;
//   const sql = `SELECT * FROM product WHERE id = ${id}`;
//   db.query(sql, (error, result) => {
//     console.log(result);
//     if (result.length != 0) {
//       response(200, result, `Berhasil ditemukan produk id ${id}`, res);
//     } else {
//       response(200, result, "Produk tidak ditemukan", res);
//     }
//   });
// });
// Post
// app.post("/tambahProduk", (req, res) => {
//   const { nama, harga, deskripsi, gambar } = req.body;
//   const sql = `INSERT INTO product VALUES(null, "${nama}", ${harga}, "${deskripsi}", null, "${gambar}")`;
//   db.query(sql, (error, result) => {
//     if (error) throw error;
//     if (result.affectedRows) {
//       console.log("Berhasil menambahkan");
//       response2(200, "Berhasil Menambahkan", res);
//     } else {
//       response2(500, "Gagal Menambahkan", res);
//     }
//     console.log(result);
//   });
// });

// Put
// app.put("/produk/put", (req, res) => {});
// Delete
// app.delete("/delete", (req, res) => {
//   const { id } = req.body;
//   const sql = `DELETE FROM product WHERE id = ${id}`;
//   console.log(id);
//   db.query(sql, (error, result) => {
//     if (result.affectedRows) {
//       response2(200, `Berhasil menghapus, id ${id}`, res);
//     } else {
//       response2(500, "Gagal menghapus, id tidak ditemukan", res);
//     }
//     console.log(result.affectedRows);
//     // if (error) response(500, "invalid", "error", res);
//     // if (result?.affectedRows) {
//     //   const data = {
//     //     isDeleted: result.affectedRows,
//     //   };
//     //   response(200, data, "Berhasil menghapus", res);
//     // } else {
//     //   response(404, data, "Gagal menghapus", res);
//     // }
//   });
// });

app.listen(process.env.PORT || 3000);
