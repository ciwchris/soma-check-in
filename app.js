if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/soma-check-in/sw.js', { scope: '/soma-check-in/' }).then(function(reg) {

    if(reg.installing) {
      console.log('Service worker installing');
    } else if(reg.waiting) {
      console.log('Service worker installed');
    } else if(reg.active) {
      console.log('Service worker active');
    }

  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}

function updateClassStatus(max, count, color) {
    var percentage = Math.floor(count / max * 100);
    if (percentage > 100) percentage = 100;
    document.getElementById(color + "-bar").style['grid-template-columns'] = `${percentage}% 1fr`

    var availability = max > count ? max - count : '';
    document.getElementById(color + "-count").textContent = availability;
}

function getCounts() {
    fetch('https://soma-check-in.azurewebsites.net/api/LocationCounts', {
        headers:
            { "Access-Control-Allow-Origin": "https://soma-check-in.azurewebsites.net" }
    })
        .then(function (response) {
            var contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                response.json().then(function (content) {
                    for (var i = 0; i < content.length; i++) {
                        if (/Red\W/.test(content[i].name)) {
                            updateClassStatus(content[i].limit, content[i].count, 'red');
                        }
                        if (/Orange\W/.test(content[i].name)) {
                            updateClassStatus(content[i].limit, content[i].count, 'orange');
                        }
                        if (/Yellow\W/.test(content[i].name)) {
                            updateClassStatus(content[i].limit, content[i].count, 'yellow');
                        }
                        if (/Green\W/.test(content[i].name)) {
                            updateClassStatus(content[i].limit, content[i].count, 'green');
                        }
                        if (/Blue\W/.test(content[i].name)) {
                            updateClassStatus(content[i].limit, content[i].count, 'blue');
                        }
                    }
                });
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

getCounts();
setTimeout(function () {
    setInterval(timer, 3000);
}, 1000)

var timerCount = 0;
var colorIndex = 0;
var colors = ['red', 'orange', '#ffe623', 'green', 'blue'];
function timer() {
    if (timerCount >= 10) {
        getCounts();
        timerCount--;
        for (timerCount; timerCount >= 0; timerCount--) {
            document.querySelector('#progress-grid').children[timerCount].style.backgroundColor = "inherit";
        }
        timerCount = 0;
    } else {
        document.querySelector('#progress-grid').children[timerCount].style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
        timerCount++;
    }
}
