<!DOCTYPE html>
<html>
<head>
    <title>Digital Watch</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(135deg, yellow, #004e92);
            font-family: Arial, sans-serif;
        }

        .clock {
            background: black;
            color: #00ffcc;
            padding: 30px 50px;
            font-size: 50px;
            border-radius: 15px;
            box-shadow: 0 0 20px green;
            letter-spacing: 3px;
        }
    </style>
</head>
<body>

<div class="clock" id="clock"></div>

<script>
    function updateClock() {
        const now = new Date();
        
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        // Add leading zero
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById("clock").innerText =
            hours + ":" + minutes + ":" + seconds;
    }

    setInterval(updateClock, 1000);
    updateClock(); // Run immediately
</script>

</body>
</html>