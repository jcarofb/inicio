   function calcularTotal() {
            const precioUnitario = 1500000; // Precio de un iPhone X
            const cantidad = parseInt(document.getElementById('cantidad').value);

            let total = precioUnitario * cantidad;
       //si es menor a 0 sale que el valor ingresado no es correcto
       
            
            // Aplicar descuento si es más de 2 productos
            if (cantidad > 2) {
                const descuento = total * 0.05;
                total -= descuento; // Total con descuento
                document.getElementById('resultado').innerHTML = 
                    `Has comprado ${cantidad} iPhone X. El total con el 5% de descuento es: $${total.toLocaleString('es-CO')}`;
            } else if (cantidad < 0) {
                const descuento = 0
                document.getElementById('resultado').innerHTML = "el valor ingresado no es correcto";
            }else {
                document.getElementById('resultado').innerHTML = 
                    `Has comprado ${cantidad} iPhone X. El total es: $${total.toLocaleString('es-CO')}`;
            }
        }
  