$(function () { // menjalankan JS saat file sudah siap
    $('.tombolTambahData').on('click', function () {
        console.log('Tambah');
        $('#formModalLabel').html('Tambah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Tambah Data');
    })

    $('.tampilModalUbah').on('click', function () {
        console.log('Ubah');
        $('#formModalLabel').html('Ubah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Ubah Data');

        const id = $(this).data('id');
        console.log(id);

        $.ajax({
            url: 'http://localhost/MVC/public/mahasiswa/getubah',
            data: {
                id: id
            },
            method: 'post',
            // dataType: 'json',
            success: function (data) {
                console.log(data);
            }
        });
    })
});