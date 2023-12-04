(async function () {let response = await fetch("/getstatmens", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
    body: JSON.stringify(authificationData)
});

let result = await response.json();

let form = document.getElementById("statmens");

for (let i = 0; i<length(result); i++)
    {
        form.add
    }
})()