
 /*
HW_23_TEXT
1.Из полученного ответа извлеките 
и распечатайте данные про коды ответа и их расшифровку.
2*** Подсчитайте, сколько раз в ответе упоминаются методы REST (GET, POST и т.д.).
и распечатайте результат. Используйте методы строк и массивов.
*/

//#1

import { GoogleGenAI } from "@google/genai";
 
async function askAi(prompt) {
  const genAi = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
  });
 
  const response = await genAi.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });
 
  return response.text;
}
 
async function main() {
  const prompt =
    "Напиши что такое REST API и как его использовать в JavaScript. В конце напиши HTTP коды и их расшифровку. Каждый код пиши с новой строки в формате: 200 - OK" ;
 
  const aiResponse = await askAi(prompt);

  const lines = aiResponse.split("\n");

  for (let i = 0; i < lines.length; i++) {
    
    if (lines[i].includes("200") ||
        lines[i].includes("201") ||
        lines[i].includes("400") ||
        lines[i].includes("404") ||
        lines[i].includes("500")) {

        console.log(lines[i]);
    }
}
//#2

let methodCount = 0;
for (let i = 0; i < lines.length; i++) {

    methodCount += lines[i].split("GET").length - 1;
    methodCount += lines[i].split("POST").length - 1;
    methodCount += lines[i].split("PUT").length - 1;
    methodCount += lines[i].split("DELETE").length - 1;
    methodCount += lines[i].split("PATCH").length - 1;
}
console.log("Количество методов REST: ",methodCount);
}
  
 //console.log("AI Response:", aiResponse);

 
main();
 