// Программа запрашивает наименование продуктов в вашем холодильнике
// и их количество. После ввода всех продуктов, программа выводит список и
// продуктов с их количеством и сохраняет данные в видее JSON в
// файл в корне проекта.
// readline.createInterface() используется для создания интерфейса
// чтения данных из стандартного ввода (stdin) и записи данных в
// стандартный вывод (stdout).

// JSON.stringify(fridge, null, 2 ) используется для преобразования
// объекта JavaScript в строку JSON,
// где null означает, что не используется функция замены replacer,
// а 2 указывает на количество пробелов для отступа в формате JSON.

import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { writeFile, readFile } from "node:fs/promises";
import path from "node:path";

async function runFridgeApp() {
  const rl = readline.createInterface({ input, output });
  const fridge = [];

  console.log("Программа для учета продуктов в холодильнике.");
  console.log("Введите продукты в холодильнике.Для завершения введите 'exit'.");

  while (true) {
    const name = await rl.question("Введите наименование продукта: ");
    const trimmedName = name.trim();

    if (
      trimmedName.toLowerCase() === "exit" ||
      trimmedName.toLowerCase() === "stop" ||
      trimmedName.toLowerCase() === "выход" ||
      trimmedName.toLowerCase() === "стоп"
    ) {
      break;
    }

    if (trimmedName === "") {
      // Проверка на пустую строку
      // if (!trimmedName)
      console.log(
        "Наименование продукта не может быть пустым. Попробуйте снова.",
      );
      continue;
    }

    const countInput = await rl.question(
      `Введите количество продукта "${trimmedName}": `,
    );
    // const count = parseInt(countInput.trim(), 10);   12ю5 -->> 12
    const count = Number(countInput.trim()); //  12ю5 -->> NaN

    if (Number.isNaN(count)) {
         console.log("Количество должно быть числом. Попробуйте снова.");
         continue;
}

    if (count === 0) {
  const index = fridge.findIndex(
    (product) => product.name.toLowerCase() === trimmedName.toLowerCase()
  );

  if (index !== -1) {
    fridge.splice(index, 1);

    let csvData = "Наименование,Количество\n";

    fridge.forEach((product) => {
      csvData += `${product.name},${product.count}\n`;
    });

    const filePath = path.resolve("fridge.csv");

    await writeFile(filePath, csvData, "utf-8");

    console.log(`Продукт "${trimmedName}" удален.`);
    console.log("Обновленный список продуктов:");
    console.table(fridge);
  } else {
    console.log(`Продукт "${trimmedName}" не найден.`);
  }

  continue;
}

const index = fridge.findIndex(
  (product) =>
    product.name.toLowerCase() === trimmedName.toLowerCase()
);

if (index !== -1) {
  fridge[index].count = count;

  // Обновляем CSV
  let csvData = "Наименование,Количество\n";

  fridge.forEach((product) => {
    csvData += `${product.name},${product.count}\n`;
  });

  const filePath = path.resolve("fridge.csv");

  await writeFile(filePath, csvData, "utf-8");

  console.log(`Количество продукта "${trimmedName}" изменено на ${count}.`);
  console.log("Обновленный список продуктов:");
  console.table(fridge);

  continue;
}

    fridge.push({
      name: trimmedName,
      count: count,
     });

    console.log("Продукт добавлен:", {
      name: trimmedName,
      count: count,
});
}
  rl.close(); // Закрываем интерфейс readline после завершения ввода данных

  if (fridge.length > 0) {
    const filePath = path.resolve("fridge.csv");

    try {
      // 1. Создаем данные в формате CSV
      let csvData = "Наименование,Количество\n";

      fridge.forEach((product) => {
        csvData += `${product.name},${product.count}\n`;
      });

      // 2. Сохраняем CSV в файл
      await writeFile(filePath, csvData, "utf-8");

      console.log(`Данные о продуктах сохранены в файл: ${filePath}`);

      // 3. Читаем данные из файла
      console.log("Считываем данные из файла...");
      

      const fileData = await readFile(filePath, "utf-8");

      console.log("Данные из файла:");
      console.log(fileData);

      // 4. Преобразуем CSV в массив объектов
      const lines = fileData.trim().split("\n");

      const saveProducts = lines.slice(1).map((line) => {
        const [name, count] = line.split(",");

        return {
          name: name,
          count: Number(count),
        };
      });

      // 5. Выводим список продуктов
      console.log("1. Список продуктов в холодильнике:");

      saveProducts.forEach((product) => {
        console.log(`- ${product.name}: ${product.count}`);
      });

      console.log("2. Список продуктов в холодильнике:");
      console.table(saveProducts);

    } catch (error) {
      console.error("Ошибка при работе с файлом:", error.message);
    }

  } else {
    console.log("Список продуктов пуст. Данные не были сохранены.");
  }
}

runFridgeApp();


/*
1.ADV. САМОСТОЯТЕЛЬНО ИЗУЧИТЬ
Переделайте программу так, чтобы она сохраняла данные в CSV файл (такая возможность есть в Экселе)
 в корне проекта вместо JSON файла.

ПРИМЕР CSV ФАЙЛА:

Наименование,Количество
qqq,2
aaa,44.2
zzzz,55

2. Преработайте программу с урока или из п.1 так, чтобы ввод прекращался на слова "exit" или "выход" или "стоп" или 
"stop" (без учета регистра) и сохранялись данные в CSV  (JSON) файл в корне проекта. 

3. Доработайте программу с урока или из п.1 так, чтобы она позволяла пользователю удалять 
продукты из списка по наименованию если мы ввели 0 количество для данного наименования. 
После удаления продукта, программа должна обновлять CSV (JSON) файл 
и выводить обновленный список продуктов.

4. Доработайте программу с урока или из п.1 так, чтобы она позволяла пользователю изменять 
количество продукта в списке по наименованию если мы ввели другое количество для 
данного наименования но отличное от 0б. После изменения количества продукта, программа 
должна обновлять CSV  (JSON) файл и выводить обновленный список продуктов.
*/
