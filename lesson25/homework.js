import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { writeFile, readFile } from "node:fs/promises";
import path from "node:path";

async function writeToJsonFile(filePath, data) {
  await writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}

async function appendToJsonFile(filePath, data) {
  const fileData = await readFile(filePath, "utf-8");
  const existingData = JSON.parse(fileData);
  const updatedData = [...existingData, ...data];
  await writeToJsonFile(filePath, updatedData);
}

async function readFromJsonFile(filePath) {
  const fileData = await readFile(filePath, "utf-8");
  return JSON.parse(fileData);
}

function addOrUpdateProduct(fridge, name, count, price, expDate) {
  const idx = fridge.findIndex((product) => product.name === name);

  if (idx !== -1) {
    fridge[idx].count += count;
    fridge[idx].price = price;
    fridge[idx].expDate = expDate;
  } else {
    fridge.push({ name, count, price, expDate });
  }
}

function removeProduct(fridge, name) {
  const idx = fridge.findIndex((product) => product.name === name);

  if (idx !== -1) {
    fridge.splice(idx, 1);
  }
}

function displayFridgeContents(fridge) {
  console.log("=== Содержимое холодильника ===");

  let count = 1;

  if (fridge.length === 0) {
    console.log("Холодильник пуст.");
  } else {
    fridge.forEach((product) => {
      console.log(
        `${count++}. ${product.name}: ${product.count}, ${product.price} $, expDate: ${product.expDate}`
      );
    });
  }
}

async function displayFileJsonContents(filePath) {
  const fileData = await readFile(filePath, "utf-8");
  console.log("Данные из файла:", fileData);
}

async function runFridgeApp(fileName, stopWords) {
  const rl = readline.createInterface({ input, output });
  const fridge = [];

  console.log("Программа для учета продуктов в холодильнике.");
  console.log(
    "Введите продукты в холодильнике. Для завершения введите ",
    stopWords.join(", "),
    "(без учёта регистра)."
  );

  while (true) {
    const name = await rl.question("Введите наименование продукта: ");
    const trimmedName = name.trim();

    if (stopWords.includes(trimmedName.toLowerCase())) {
      break;
    }

    if (trimmedName === "") {
      console.log(
        "Наименование продукта не может быть пустым. Попробуйте снова."
      );
      continue;
    }

    const countInput = await rl.question(
      `Введите количество продукта "${trimmedName}": `
    );

    const count = +countInput.trim();

    if (Number.isNaN(count)) {
      console.log("Количество введено некорректно. Попробуйте снова.");
      continue;
    }

    const priceInput = await rl.question(
      `Введите цену продукта "${trimmedName}": `
    );

    const price = +priceInput.trim();

    if (Number.isNaN(price)) {
      console.log("Цена введена некорректно. Попробуйте снова.");
      continue;
    }

    const expDateInput = await rl.question(
      `Введите срок годности продукта "${trimmedName}" (YYYY-MM-DD): `
    );

    const expDate = expDateInput.trim();

    // Если количество 0 — удаляем продукт
    if (count === 0) {
      removeProduct(fridge, trimmedName);
      console.log(`Продукт "${trimmedName}" удалён из списка.`);
    } else {
      // Добавляем новый продукт или обновляем существующий
      addOrUpdateProduct(
        fridge,
        trimmedName,
        count,
        price,
        expDate
      );

      console.log(`Продукт "${trimmedName}" добавлен/обновлён.`);
    }

    console.log("Текущий список продуктов:");
    console.table(fridge);
  }

  rl.close();

  if (fridge.length > 0) {
    const filePath = path.resolve(fileName);

    try {
      // 1. Сохраняем данные
      await writeToJsonFile(filePath, fridge);
      console.log(`Данные о продуктах сохранены в файл: ${filePath}`);

      // 2. Показываем содержимое JSON-файла
      console.log("Считываем данные из файла...");
      await displayFileJsonContents(filePath);

      // 3. Читаем JSON как JavaScript-объект
      const savedProducts = await readFromJsonFile(filePath);

      // 4. Красиво выводим продукты
      displayFridgeContents(savedProducts);

    } catch (error) {
      console.error("Ошибка при работе с файлом:", error.message);
    }
  } else {
    console.log("Список продуктов пуст. Данные не были сохранены.");
  }
}

const fileName = "fridge.json";
const stopWords = ["exit", "выход", "стоп", "stop"];

runFridgeApp(fileName, stopWords);


/*
## HW-25-TEXT
Главная цель этого задания — сделать код программы понятнее и аккуратнее. 
Сейчас функция `runFridgeApp` перегружена: она сама ищет элементы в массиве, 
вручную перезаписывает данные, сама читает и сохраняет файлы. При этом в 
самом начале файла у вас уже написаны отличные функции-помощники, которые 
пока почти не используются.

Ваша задача — провести рефакторинг и переписать основную функцию так, 
чтобы она поручала всю черновую работу этим готовым вспомогательным 
инструментам.

**Что именно нужно сделать:**

* **Передать работу с массивом помощникам.** Внутри цикла `while` вы сейчас 
вручную ищете индекс продукта и меняете массив. Замените эту логику на 
вызовы функций `removeProduct` и `addOrUpdateProduct`. При необходимости 
немного доработайте `addOrUpdateProduct`, чтобы она умела обновлять не 
только количество, но также цену и срок годности.
* **Использовать готовые функции для файлов.** В конце программы замените 
прямые вызовы `writeFile` на готовую утилиту `writeToJsonFile`. А вместо 
цепочки из `readFile` и `JSON.parse` задействуйте функции `readFromJsonFile` 
и `displayFileJsonContents`.
* **Убрать дублирование вывода.** В самом конце кода вы снова перебираете 
массив через `forEach`, чтобы напечатать список. Удалите этот дублирующий 
цикл и вместо него просто вызовите `displayFridgeContents`.

В результате функция `runFridgeApp` должна стать простой и понятной: она 
будет отвечать только за общение с пользователем (задавать вопросы и 
получать ответы), а все операции с файлами и структурой данных уполномочены 
делать соответствующие вспомогательные функции.

*/