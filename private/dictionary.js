const CryptoJS = require('crypto-js');

const encryptedData = "U2FsdGVkX18B/ehq+GG7LDiArh9EKmvt6jzNSbhfP+HIZrzwtDaO3VzZ6Qzko35Vv5mFqxUo12OgD5tjMvTVUGqVC/Y6KMdU6H1akspnUq7iQwfV5iBMrWvoPelw4GqmKprb0+c7AUFNKz3wfFuPVi71HoOFeV0IkHeLQzk2WaPv94nN8yjbxXHzFbqHSHiCDG+0EuO9IsqI8QpMXRC6xEOtLwhvEqlTlyk/qVNYj3EvOcW2TkE6A9krw3hzY+B29na23p+goKPoQa0l5wM572XHL9ZiTHQwI1JESZkHZgr9tJp6pjHOFnXbbq3Cq/JbTuKT6XyngSkFyNDM5je3W55QVQZrSfE3fvWoIzR+6sEmbI7WEzEciC4rDy8Y5Jad2ycQBqwgtMHwiOC7KlcZxzpCkG78nkfW/DLyyELDiUJqyIiSXmim2PVAQ4kEciE/MauskIMdi2z4cL0XYzb/50PHPWMePLJl2IWce0flWZCkao+OLkekrqrBNn8VBgTN0OaQ1xhwrHn/R7SemkwkcLb6VcPZ9/aO79pW53gT4PeOM7+5El2byHxT148gaWctrvF+M8QRDEzzwxjFZiqSz3wK5UNItRzzrp8341enQ9us1WHMAAM6mfMwwbqoGepdNaK/i6NmDF3A2eSINKz3qLO7aifeiTxdmuRAFSnq+8Ba/59im/OYUCdAumfovzZZaktSD13duwCvQGaiGOdo1U+gx4HJHO9OU8pKqI4U7TSHpOCCQ27jNh7J71EBQFRD9wojTjB6wFgkr0Q68+vrauK7jG2GVsi+uxJD3MWPXFdm3zOTjE5TbKUBDrWGjjfoBkqMP/OJn27LHRQAnL9TV8oJJR2gQqNAm5e3TZfIynM="; 
        const secretKey = "hello"; 

        function decryptData(encrypted, key) {
            const bytes = CryptoJS.AES.decrypt(encrypted, key);
            return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        }

        const data = decryptData(encryptedData, secretKey);
        console.log("Data setelah dekripsi:", data);

        const process = document.getElementById('save');
        const result = document.getElementById('result');

        process.addEventListener('click', () => {
            const inputValue = document.getElementById('input').value;
            if (data[inputValue]) {
                result.textContent = data[inputValue];
            } else {
                result.textContent = "Kode tidak ditemukan.";
            }
        });