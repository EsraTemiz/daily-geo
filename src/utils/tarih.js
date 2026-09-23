
const bugun = new Date();
const yil = bugun.getFullYear();
const ay = String(bugun.getMonth() + 1).padStart(2, "0");
const gun = String(bugun.getDate()).padStart(2, "0");

const bugununTarihi = `${yil}-${ay}-${gun}`;

export default bugununTarihi;