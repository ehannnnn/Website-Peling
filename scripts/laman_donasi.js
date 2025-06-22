const metodeSelect = document.getElementById("metodePembayaran");
const bankField = document.getElementById("bankField");
const ewalletField = document.getElementById("ewalletField");
const qrisField = document.getElementById("qrisField");

metodeSelect.addEventListener("change", function () {
  const selected = this.value;

  // Sembunyikan semua dulu
  bankField.style.display = "none";
  ewalletField.style.display = "none";
  qrisField.style.display = "none";

  // Tampilkan sesuai pilihan
  if (selected === "bank") {
    bankField.style.display = "block";
  } else if (selected === "ewallet") {
    ewalletField.style.display = "block";
  } else if (selected === "qris") {
    qrisField.style.display = "block";
  }
});
// Untuk jenis e-wallet
const jenisEwallet = document.getElementById("jenisEwallet");
const nomorEwallet = document.getElementById("nomorEwallet");
const nomorEwalletInput = document.getElementById("nomorEwalletInput");

jenisEwallet.addEventListener("change", function () {
  const selected = this.value;

  if (selected === "Dana") {
    nomorEwallet.style.display = "block";
    nomorEwalletInput.value = "0899-9472-218(Dana)";
  } else if (selected === "OVO") {
    nomorEwallet.style.display = "block";
    nomorEwalletInput.value = "0899-9472-218 (OVO)";
  } else if (selected === "Gopay") {
    nomorEwallet.style.display = "block";
    nomorEwalletInput.value = "0898-7096-566 (Gopay)";
  } else {
    nomorEwallet.style.display = "none";
    nomorEwalletInput.value = "";
  }
});
