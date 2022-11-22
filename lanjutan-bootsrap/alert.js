$(document).ready(function () {
    $("#btnAlert").click(function () {
        event.preventDefault();
        window.scrollTo(0, 0);
        $("#divAlert").removeClass("d-none");
        const nama = $("#inputNama").val();
        $("#alertText").html("Test " + nama);
    });

    $("#btnClose").click(function () {
        $("#divAlert").addClass("d-none");
    });
    $("#a").click(function (e) {
        e.preventDefault();
        $("#gambar").attr("src", "assets/img/chair-1.png");
        $("#harga").html("Cangkir Mauttie");
        $("#nama").html("IDR 89.300.000");
    });

    $("#b").click(function (e) {
        e.preventDefault();
        $("#gambar").attr("src", "assets/img/chair-2.png");
        $("#harga").html("Samman Kakka");
        $("#nama").html("IDR 14.5000.000");
    });

    $("#c").click(function (e) {
        e.preventDefault();
        $("#gambar").attr("src", "assets/img/chair-3.png");
        $("#harga").html("Lino Dino");
        $("#nama").html("IDR 22.000.000");
    });

    $("#d").click(function (e) {
        e.preventDefault();
        $("#gambar").attr("src", "assets/img/chair-4.png");
        $("#harga").html("Syail Ammenoi");
        $("#nama").html("IDR 12.000.000");
    });

    $("#form-shipping").submit(function (e) {
        e.preventDefault();

        const firstname = $("#firstName", this).val();
        const lastname = $("#lastName", this).val();
        const fullname = firstname + " " + lastname;
        const address = $("#address", this).val();

        $("#form-main").addClass("d-none");
        $("#tytyd").removeClass("d-none");

        $("h4", "#tytyd").text("terima kasih " + fullname);
        $("p", "#tytyd").text("paket akan dikirim ke " + address + " secepatnya");

    });

    $("#tytyd").click(function (e) {
        e.preventDefault();
        window.location.href = "index.html";

    });

})  