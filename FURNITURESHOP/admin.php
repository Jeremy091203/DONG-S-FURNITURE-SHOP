<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Management</title>
    <link rel="stylesheet" href="admin.css">
</head>
<body>
    <h2>Payment Management</h2>
    <a href="index.html">Back</a>
    <table>
        <tr>
            <th>name</th>
            <th>phone_number</th>
            <th>address</th>
            <th>card_number</th>
            <th>expiry_month</th>
            <th>expiry_year</th>
            <th>cvv</th>
        </tr>
        <?php
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "SNEAKERSTORE";

        $conn = new mysqli($servername, $username, $password, $dbname);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "SELECT name, phone_number, address, card_number, expiry_month, expiry_year, cvv FROM payment";
        $result = $conn->query($sql);

        if (!$result) {
            die("Query failed: " . $conn->error);
        }
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                echo "<tr>";
                echo "<td>".$row["name"]."</td>";
                echo "<td>".$row["phone_number"]."</td>";
                echo "<td>".$row["address"]."</td>";
                echo "<td>".$row["card_number"]."</td>";
                echo "<td>".$row["expiry_month"]."</td>";
                echo "<td>".$row["expiry_year"]."</td>";
                echo "<td>".$row["cvv"]."</td>";
                echo "</tr>";
            }
        } else {
            echo "<tr><td colspan='8'>No payments found</td></tr>";
        }
        $conn->close();
    ?>
    </table>
</body>
</html>