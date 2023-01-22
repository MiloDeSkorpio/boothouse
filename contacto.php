<?php include('includes/templates/header.php') ?>
<main>
<div class="hero-contacto">
        <div class="color">
            <div class="textos">
                <h1>Contacto</h1>
            </div><!-- .textos -->
        </div><!-- .color-->
    </div>
    <div class="contenedor">
        <div class="info">
            <h2>Horarios y Citas</h2>
            <p>Lunes a viernes: 9:00-18:00</p>
            <p>Sábado: 9:00-16:00</p>
            <p>Domingo: cerrado</p>
        </div>
        <div class="info">
            <h2>Visitanos</h2>
            <p>Estamos en la calle Mariano Zuñiga #113 Col. Hipico, Metepec, Estado de México.<br> ¡Esperamos verte pronto!</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d7532.753174681352!2d-99.6310684!3d19.2659828!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x85cd8bd4d6a1d819%3A0xfe339beaf5528b08!2sC.%20Mariano%20Z%C3%BA%C3%B1iga%20113%20El%20Hipico%2052156%20Metepec%2C%20M%C3%A9x.!3m2!1d19.2659828!2d-99.63106839999999!5e0!3m2!1ses!2smx!4v1674352357396!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="info">
            <h2>Contactanos</h2>
            <div class="form-cont">
            <form  action="correos.php" method="post" class="formulario" id="form">
                <div class="campo">
                    <label class="campo_label label-b"  for="nombre">Nombre</label>
                    <input class="campo_field" type="text" placeholder="Tu Nombre" name="nombre" required>
                </div>
                <div class="campo">
                    <label class="campo_label label-b " for="telefono">Teléfono</label>
                    <input class="campo_field" type="tel" placeholder="Tu Telefono" name="telefono" required>
                </div>
                <div class="campo">
                    <label class="campo_label label-b"  for="email">E-mail</label>
                    <input class="campo_field" type="email" placeholder="Tu E-mail" name="email" required>
                </div>
                <div class="campo">
                    <label class="campo_label label-b"  for="asunto">Asunto</label>
                    <input class="campo_field" type="text" placeholder="Tu Asunto" name="asunto" required>
                </div>
                <div class="campo">
                    <label class="campo_label label-b"  for="mensaje">Mensaje</label>
                    <textarea class="campo_field campo_field-textarea" name="mensaje" placeholder="Dudas o Cotizaciones" required></textarea>
                </div>
                <div class="btn">
                    <input type="submit" value="Enviar" class="boton boton-con" name="enviar">
                </div>
            </form>
        </div>
        </div>
    </div>
</main>	

<?php include('includes/templates/footer.php') ?>