<?php
    //tworzenie któtkich nazw zmiennych:
    $iloscopon = $_POST['iloscopon'];
    $iloscoleju = $_POST['iloscoleju'];
    $iloscswiec = $_POST['iloscswiec'];
    $jak = $_POST['jak'];
?>

<!doctype html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Części samochodowe Janka - wyniki zamówienia</title>
</head>
<body>
<h1>Części samochodowe Janka</h1>
<h2>Wyniki zamówienia</h2>
<?php
echo '<p>Zamówienie przyjęte.</p>';

$ilosc = 0;
$ilosc = $iloscopon + $iloscoleju + $iloscswiec;
echo "<p>Zamówionych części:      ".$ilosc."<br/>";

$wartosc = 0.00;

define('CENAOPON', 100);
define('CENAOLEJU', 10);
define('CENASWIEC', 4);

$wartosc = $iloscopon * CENAOPON
            + $iloscoleju * CENAOLEJU
            + $iloscswiec * CENASWIEC;

echo "Cena netto: ".number_format($wartosc,2)." PLN<br/>";
switch($jak) {
    case "a":
        echo "Stały klient";
        break;
    case "b":
        echo "Reklama telewizyjna";
        break;
    case "c":
        echo "Książka telefoniczna";
        break;
    case "d":
        echo "Znajomy";
        break;
    default:
        echo "Źródło nieznane";
        break;
}
?>
</body>
</html>