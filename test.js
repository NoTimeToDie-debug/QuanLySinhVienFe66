document.querySelector('form').onsubmit = function (e) {
    e.preventDefault();
    //DOM đến tất cả thẻ input trong thẻ form
    let arrInput = document.querySelectorAll('form input');
    let hocVien = {};
    //Duyệt các thẻ input
    for (let input of arrInput) {
        let {name,value} = input;
        hocVien = {...hocVien,[name]:value}
    }

    // Tạo table từ object học viên
    var content = '';
    var trHocVien = `<tr>`
    for (let tenThuocTinh in hocVien) {
        trHocVien += `
                <td>${hocVien[tenThuocTinh]}</td>
        `
    }
    trHocVien +=`</tr>`;
    console.log(typeof trHocVien);
    document.querySelector('#tableHocVien').innerHTML = content;
}

let mangSanPham  = [
    {maSP:1,tenSP:'Google pixel xl', gia: 1000, hangSX: 'Google'},
    {maSP:2,tenSP:'Google pixel xl 2', gia: 2000, hangSX: 'Google'},
    {maSP:3,tenSP:'Sony xperia xz', gia: 3000, hangSX: 'Sony'},
    {maSP:4,tenSP:'Sony xperia xzs', gia: 3000, hangSX: 'Sony'},
    {maSP:5,tenSP:'Iphone X', gia: 2500, hangSX: 'Apple'},
    {maSP:6,tenSP:'Iphone XS', gia: 1500, hangSX: 'Apple'},
    {maSP:7,tenSP:'Samsung galaxy s9', gia: 1500, hangSX: 'Samsung'},
    {maSP:8,tenSP:'Samsung galaxy note 10', gia: 1500, hangSX: 'Samsung'},
    {maSP:9,tenSP:'Xiaomi 1',gia: 2000, hangSX:'China'},
    {maSP:10,tenSP:'Xiaomi 2',gia: 2500, hangSX:'China'}
]

let arrSony = mangSanPham.filter(sanPham => sanPham.hangSX === 'Sony');

console.log('arrSony', arrSony);

let sp10 = mangSanPham.find(sp => sp.maSP === 10);
if (sp10) {
    sp10.tenSP = 'xiaomi mi mix 3'
}
console.log(mangSanPham);

let index = mangSanPham.findIndex(sp => sp.maSP === 9);
if (index != -1 ) {
    mangSanPham[index].tenSP = 'Điện thoại trung quốc';
    console.log('mangSP',mangSanPham)
    mangSanPham.splice(index,1);
} else {
    console.log('Không tìm thấy sản phẩm', index);
}

mangSanPham.forEach((sanPham,index) => {
    sanPham.gia += 1000;
    console.log('samPham',sanPham)
})

let htmlCard = mangSanPham.map((sanPham, index) => {
    return `
        <div class="col-4 mt-2">
            <div class="card text-left">
                <img class="card-img-top" src="https://picsum.photos/id/${sanPham.maSP}/300/300" alt="...">
                <div class="card-body">
                <h4 class="card-title">${sanPham.tenSP}<h4>
                <p class="card-text">${sanPham.gia}</p>
                </div>
            </div>
        </div>        
    `
});

htmlCard.forEach((htmlSP, index) => {
    document.querySelector('#danhSachSanPham').innerHTML += htmlSP;
})

let tongTienSanPham = mangSanPham.reduce((tongTien,sanPham,index) => {
    return tongTien += sanPham.gia;
},0)
console.log('Tổng tiền',tongTienSanPham);

let stringHTML = mangSanPham.reduce((content,sanPham, index) => {
    return content += `<tr>
                    <td>${sanPham.maSP}</td>
                    <td>${sanPham.tenSP}</td>
                    <td><img width="50" height="50" src="https://picsum.photos/id/${sanPham.maSP}/300/300"></td>
                    <td>${sanPham.gia}</td>
                    <td>${sanPham.hangSX}</td>
    </tr>`
},'');

document.querySelector('#tblSanPham').innerHTML = stringHTML;

let arrTen = mangSanPham.sort((sp, spTruocDo) => {
    let tenSanPham = sp.tenSP.toLowerCase().trim();
    let tenSPTruoc = spTruocDo.tenSP.toLowerCase().trim();

    if (tenSanPham > tenSPTruoc) {
        return 1;
    }
    return -1;
});
console.log('arrTen',arrTen);

// let arrGia = mangSanPham.sort((sp,spTruocDo) => {
//     return sp.gia -spTruocDo.gia;
// });

// console.log('arrGia',arrGia);

const store =() =>{
    return localStorage.getItem('arrSinhVien');
}