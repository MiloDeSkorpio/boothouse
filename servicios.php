<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<script src="https://kit.fontawesome.com/4443851d27.js" crossorigin="anonymous"></script>
	<link rel="shortcut icon" href="/build/img/log.png" type="image/x-icon">
	<link rel="stylesheet" href="/build/css/app.css" />
	<title>Boot House</title>
</head>
<body>
	<header>
		<div class="logo">
			<a href="index.php"><img src="/build/img/logo.png" alt="logo"></a>
		</div>
		<div class="menu">
			<div class="options">
				<a href="index.php">
					<div class="option">
						<p>Inicio</p>
					</div>
				</a>
				<a href="servicios.php">
					<div class="option">
						<p>Servicios</p>
					</div>
				</a>
				<a href="somos.php">
					<div class="option">
						<p>Nosotros</p>
					</div>
				</a>
				<a href="referencias.php">
					<div class="option">
						<p>Referencias</p>
					</div>
				</a>
				<a href="contacto.php">
					<div class="option">
						<p>Contacto</p>
					</div>
				</a>
			</div>
		</div> <!-- .menu -->
		<div class="icon_carrito">
			<span class="ver-carrito" id="verCarrito">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-cart">
					<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
				</svg>
				<span id="cantidadCarrito" class="cantidad-carrito"></span>
			</span>
		</div>
		<div class="icon_menu">
			<i class="fa-solid fa-bars"></i>
		</div>
	</header>
	<main>
		<div class="hero-serv">
			<div class="color">
				<div class="textos">
					<h1>Servicios</h1>
				</div><!-- .textos -->
			</div><!-- .color-->
		</div>
		<div class="contenedor">
			<h2>Valúa tu casa de acuerdo al status económico</h2>
			<p>Tu necesidad es nuestra mejor arma: deja que nosotros nos encarguemos de sacar la estética interior en tu hogar. Creamos diseños exclusivos inspirados en tu estilo personal, necesidades para decoración y gustos. Nuestro equipo emplea su atención al detalle y productos de la mejor calidad para ofrecer una amplia gama de servicios.</p>
			<h2>Casa de Interes Social</h2>
			<div class="container-items" id="lista-productos">
			</div>
			<h2>Casa medio residencial/semilujo/media</h2>
			<div class="container-items" id="lista-productos-mr">
			</div>
			<h2>Casa Residencial</h2>
			<div class="container-items" id="lista-productos-r">
			</div>
		</div><!--.contenedor -->
		
			<div id="modal-container" class="modal-container sombra"></div>

	</main>
	<script src="/build/js/products.js"></script>
	<script src="/build/js/carrito.js"></script>
	<script src="/build/js/pedido.js"></script>

	<?php include('includes/templates/footer.php') ?>