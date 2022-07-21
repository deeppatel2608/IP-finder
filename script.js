function findip() {
    var ip = "";
    var mask = "";
    var network = "";
    var class_name = document.getElementById("class").value;
    if (class_name == "A") {
        min = Math.ceil(0);
        max = Math.floor(127);
        for (i = 0; i < 4; i++) {
            if (i == 0)
                ip += parseInt(Math.floor(Math.random() * (max - min + 1) + min)) + ".";
            else if (i == 3)
                ip += parseInt(Math.floor(Math.random() * 256));
            else
                ip += parseInt(Math.floor(Math.random() * 256)) + ".";
        }
        mask = "255.0.0.0";
        i = 0;
        count = 0;
        while (count < 1) {
            network += ip[i];
            if (ip[i] == '.')
                count++;
            i++;
        }
        network += "0.0.0"
    }
    if (class_name == "B") {
        min = Math.ceil(128);
        max = Math.floor(191);
        for (i = 0; i < 4; i++) {
            if (i == 0)
                ip += parseInt(Math.floor(Math.random() * (max - min + 1) + min)) + ".";
            else if (i == 3)
                ip += parseInt(Math.floor(Math.random() * 256));
            else
                ip += parseInt(Math.floor(Math.random() * 256)) + ".";
        }
        mask = "255.255.0.0";
        i = 0;
        count = 0;
        while (count < 2) {
            network += ip[i];
            if (ip[i] == '.')
                count++;
            i++;
        }
        network += "0.0";
    }
    if (class_name == "C") {
        min = Math.ceil(192);
        max = Math.floor(223);
        for (i = 0; i < 4; i++) {
            if (i == 0)
                ip += parseInt(Math.floor(Math.random() * (max - min + 1) + min)) + ".";
            else if (i == 3)
                ip += parseInt(Math.floor(Math.random() * 256));
            else
                ip += parseInt(Math.floor(Math.random() * 256)) + ".";
        }
        mask = "255.255.255.0";
        i = 0;
        count = 0;
        while (count < 3) {
            network += ip[i];
            if (ip[i] == '.')
                count++;
            i++;
        }
        network += "0";
    }
    if (class_name == "D") {
        min = Math.ceil(224);
        max = Math.floor(239);
        for (i = 0; i < 4; i++) {
            if (i == 0)
                ip += parseInt(Math.floor(Math.random() * (max - min + 1) + min)) + ".";
            else if (i == 3)
                ip += parseInt(Math.floor(Math.random() * 256));
            else
                ip += parseInt(Math.floor(Math.random() * 256)) + ".";
        }
        mask = "Not defined";
        network = "Not defined";
    }
    if (class_name == "E") {
        min = Math.ceil(240);
        max = Math.floor(255);
        for (i = 0; i < 4; i++) {
            if (i == 0)
                ip += parseInt(Math.floor(Math.random() * (max - min + 1) + min)) + ".";
            else if (i == 3)
                ip += parseInt(Math.floor(Math.random() * 256));
            else
                ip += parseInt(Math.floor(Math.random() * 256)) + ".";
        }
        mask = "Not Defined";
        network = "Not Defined";
    }

    document.getElementById("ip").value = ip;
    document.getElementById("mask").value = mask;
    document.getElementById("network_add").value = network;
}
function reset() {
    document.getElementById("ip").value = "";
    document.getElementById("mask").value = "";
    document.getElementById("network_add").value = "";
    document.getElementById("class").value = "A";
}