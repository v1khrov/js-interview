console.log(`03-Scope`);

//Доступность переменных в функциях (Область видимости)
//  - Глобальный Scope - переменные объявлены вне функции, доступны внутри функций этого scope (document, window в браузере это глобальный скоуп)
//  - Локальный Scope - переменная доступна в рамках функции и её дочерних ф-ций

function funcA() {
  let a = 1;

  function funcB() {
    let b = 2;

    function funcC() {
      let c = 3;

      console.log(`funcC ${a} ${b} ${c}`);
    }

    funcC();
    console.log(`funcB ${a} ${b}`);
  }

  funcB();
  console.log(`funcA ${a}`);
}

funcA();