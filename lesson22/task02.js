async function printWeather() {
    const response = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=44.49&longitude=20.27&current_weather=true');
        console.log('--------результат работы метода fetch() CAM response-------------');
        const json=await response.json();
        console.log('--------результат работы метода json-------------');
        console.log(json);
        console.log('=================');
        
        console.log("Cкорость ветра" +json.current_weather.windspeed);
        console.log("Temp"+ json.current_weather.temperature);

        console.log("===========получаем JSON из объекта response===============");
        const res=JSON.stringify(json);
        console.log(res);

        const obj=JSON.parse(res);
        console.log("===========получаем объект из JSON===============");
        console.log(obj);
        
        
        

        
    }

console.log("--------fetch with await-------------");
printWeather();