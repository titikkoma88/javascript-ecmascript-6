// ambil element
const skills_holder = document.getElementById('data');


// ES6
// modul untuk member kelas
class Siswa {
    constructor(username, password, nama_kelas) {
        this.username = username;
        this.password = password;
        this.nama_kelas = nama_kelas;
    }

    gabung() {
        console.log(this.username + ' telah bergabung pada kelas ' + this.nama_kelas);
    }
}

// let tambahSiswa = new Siswa('hadjarati', 'iampanji', 'Web Design');
// tambahSiswa.gabung();

class Langganan extends Siswa {
    constructor(username, paket) {
        super(username);
        this.paket = paket;
    }

    gabungPaket() {
        console.log('Hi ' + this.username + ' telah langganan paket ' + this.paket);
    }
}

let tambahLangganan = new Langganan('bwastudiox', 'premium');
tambahLangganan.gabung();