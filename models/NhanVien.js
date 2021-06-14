class NhanVien {
    maNhanVien='';
    tenNhanVien='';
    soDienThoai='';
    email='';

    constructor (name){
        this.tenNhanVien = name;
    }

    tinhLuong() {
        return 1000;
    }
}

class LaoCong extends NhanVien {

    constructor (name) {
        super (name)
    }

    congViec() {
        console.log('cong viec')
    }

    tinhLuong() {
        return super.tinhLuong() + 2000;
    }
}

let laoCong = new LaoCong ('Khải');
console.log(laoCong.tinhLuong());
