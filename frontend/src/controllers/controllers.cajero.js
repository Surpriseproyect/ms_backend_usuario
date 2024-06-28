export const cajero = (req, res) => {
    let datos = {}
    fetch("http://localhost:3000/cajero")
    .then(res => res.json())
    .then(data => {
        datos = data
        res.render("views.cajero.ejs", {
            usuarios: datos.usuarios,
            producto: datos.producto,
            fiado: datos.fiado,
            factura: datos.factura,
            pedido: datos.pedido,
            metopago: datos.metopago,
            proveedor: datos.proveedor })
    })
}