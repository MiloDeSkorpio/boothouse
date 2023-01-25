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
						<p>Quienes Somos</p>
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
		<div class="container-icon">
			<div class="container-cart-icon">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-cart">
					<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
				</svg>
				<div class="count-products">
					<span id="contador-productos">0</span>
				</div>
			</div>
			<div class="container-cart-products hidden-cart">
				<div class="row-product">
					<div class="cart-product">
						<p>Carrito Vacio</p>
					</div>
				</div>
				<div class="cart-total">
					<h3>Total:</h3>
					<span class="total-pagar">$0</span>
				</div>
			</div>
		</div> <!-- .container-icon -->
		<div class="icon_menu">
			<i class="fa-solid fa-bars"></i>
		</div>
	</header>