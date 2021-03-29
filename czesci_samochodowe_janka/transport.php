<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Części samochodowe Janka - zestawienie kosztu przesyłek</title>
</head>
<body>
<table style="border: 0; padding: 3px;">
    <tr>
        <td style="text-align: center; background: #cccccc;">Odległość</td>
        <td style="text-align: center; background: #cccccc;">Koszt</td>
    </tr>
    <?php
    $odleglosc = 50;
    while($odleglosc<=300){
        echo '<tr><td style="text-align: right">'.$odleglosc.'</td>
                    <td style="text-align: right">'.($odleglosc/10).'</td></tr>';
        $odleglosc+=50;
    }
    ?>

</table>
</body>
</html>