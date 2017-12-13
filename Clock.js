function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

//lets display the current time, ok?
var d, h, m, s, color, color2, colorTime;
var r,g,b,r2,g2,b2;

function displayTime() {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    //magic is here
    r = Math.round((h * 255)/24);
    g = Math.round((m * 255)/60);
    b = Math.round((s * 255)/60);
    color = rgbToHex(r,g,b);

    r2 = Math.round((Math.abs(h-15) * 255)/24);
    g2 = Math.round((Math.abs(m-15) * 255)/60);
    b2 = Math.round((Math.abs(s-15) * 255)/60);
    color2 = rgbToHex(r2,g2,b2);

    if(h <= 9) h = '0'+h;
    if(m <= 9) m = '0'+m;
    if(s <= 9) s = '0'+s;
    colorTime = h+":"+m+":"+s;

    //set background color, yes.
    document.body.style.background = '-webkit-linear-gradient(left top,' + color2 + ',' + color + ' 70%)';
    //set time, yes.
    document.getElementById("hex").innerHTML = colorTime + "<br/>"+ color;
    //retrigger the function every second, of course.
    setTimeout(displayTime, 1000);
}

//call the function
displayTime();