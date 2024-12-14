const CryptoJS = require('crypto-js');

const data = {
    "21k5+=*11u1"  : "A",
    "22k5+=*52o1"  : "E",
    "23k5+=*93i1"  : "I",
    "24k5+=*154e1" : "O",
    "25k5+=*21a1"  : "U",
    "26k5!*121b0" : "B",
    "27t5!!132b0" : "C",
    "28t5!!143b0" : "D",
    "29k5!*261f0" : "F",
    "20t5!!272f0" : "G",
    "21t5!_283f0" : "H",
    "22k5!*3101j0" : "J",
    "23t5!!3112j0" : "K",
    "24t5!_3123j0" : "L",
    "25k5==*4131m0" : "M",
    "26t5=/=4142m0" : "N",
    "27t5=_4153m0" : "P",
    "28k5!*5171q0" : "Q",
    "29t5!!5182q0" : "R",
    "20t5!_5193q0" : "S",
    "21k5!*6201t0" : "T",
    "22t5!!6202t0" : "V",
    "23t5!_6203t0" : "W",
    "24k5!*7241x0" : "X",
    "25t5!!7242x0" : "Y",
    "26t5!_7243x0" : "Z",

    "3301_122":"1",
    "3301_126":"2",
    "3301_144":"3",
    "3301_132":"4",
    "3301_192":"5",
    "3301_113":"6",
    "3301_342":"7",
    "3301_147":"8",
    "3301_179":"9",
    "3301_102":"0"
}

const secretKey = "hello"; // Kunci rahasia untuk enkripsi
const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();

console.log(encryptedData); // Salin hasil ini ke dalam file JavaScript Anda


