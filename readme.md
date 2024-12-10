# Шаблоны проектирования: Основные группы

Этот документ содержит список основных шаблонов проектирования, сгруппированных по назначению.  Ссылки на файлы с примерами реализации предполагают наличие репозитория с кодом.

## 1. Порождающие шаблоны (Creational)

Порождающие шаблоны занимаются созданием объектов. Они предоставляют способы создания объектов, которые упрощают процесс и делают его более гибким.

* **Singleton (Одиночка):** [./creational/singleton.js](./creational/singleton.js)  Гарантирует существование только одного экземпляра класса.
* **Factory Method (Абстрактный фабричный метод):** [./creational/factory_method.js](./creational/factory_method.js)  Определяет интерфейс для создания объекта, позволяя подклассам выбирать конкретный класс.
* **Abstract Factory (Абстрактная фабрика):** [./creational/abstract_factory.js](./creational/abstract_factory.js)  Создаёт семейства связанных объектов без указания их конкретных классов.
* **Builder (Строитель):** [./creational/builder.js](./creational/builder.js)  Позволяет построить сложный объект пошагово.
* **Prototype (Прототип):** [./creational/prototype.js](./creational/prototype.js)  Создаёт новые объекты, копируя существующий прототип.

`более развернуто` в [./generatingPatterns.md](./generatingPatterns.md)

## 2. Структурные шаблоны (Structural)

Структурные шаблоны определяют способы объединения классов и объектов для построения больших структур.

* **Adapter (Приспособленец):** [./structural/adapter.js](./structural/adapter.js)  Преобразует интерфейс одного класса в другой, совместимый с клиентом.
* **Bridge (Мост):** [./structural/bridge.js](./structural/bridge.js)  Разъединяет абстракцию и её реализацию, позволяя изменять их независимо.
* **Composite (Компоновщик):** [./structural/composite.js](./structural/composite.js)  Представляет иерархию объектов как древовидную структуру.
* **Decorator (Декоратор):** [./structural/decorator.js](./structural/decorator.js)  Добавляет объектам ответственность динамически.
* **Facade (Фасад):** [./structural/facade.js](./structural/facade.js)  Предоставляет упрощённый интерфейс к сложной подсистеме.
* **Flyweight (Легковес):** [./structural/flyweight.js](./structural/flyweight.js)  Эффективно использует память за счёт общих объектов.
* **Proxy (Заместитель):** [./structural/proxy.js](./structural/proxy.js)  Контролирует доступ к объекту.


## 3. Поведенческие шаблоны (Behavioral)

Поведенческие шаблоны описывают алгоритмы и распределения ответственности между объектами.

* **Chain of Responsibility (Цепочка обязанностей):** [./behavioral/chain_of_responsibility.js](./behavioral/chain_of_responsibility.js)  Обрабатывает запрос несколькими объектами.
* **Command (Команда):** [./behavioral/command.js](./behavioral/command.js)  Инкапсулирует запрос в виде объекта.
* **Interpreter (Интерпретатор):** [./behavioral/interpreter.js](./behavioral/interpreter.js)  Предоставляет способ интерпретации языка.
* **Iterator (Итератор):** [./behavioral/iterator.js](./behavioral/iterator.js)  Обеспечивает последовательный доступ к элементам объекта.
* **Mediator (Посредник):** [./behavioral/mediator.js](./behavioral/mediator.js)  Определяет объект, который управляет взаимодействием набора объектов.
* **Memento (Хранитель):** [./behavioral/memento.js](./behavioral/memento.js)  Сохраняет и восстанавливает состояние объекта.
* **Observer (Наблюдатель):** [./behavioral/observer.js](./behavioral/observer.js)  Определяет зависимость "один-ко-многим" между объектами.
* **State (Состояние):** [./behavioral/state.js](./behavioral/state.js)  Позволяет объекту изменять поведение в зависимости от состояния.
* **Strategy (Стратегия):** [./behavioral/strategy.js](./behavioral/strategy.js)  Определяет семейство алгоритмов, инкапсулируя каждый из них.
* **Template Method (Шаблонный метод):** [./behavioral/template_method.js](./behavioral/template_method.js)  Определяет скелет алгоритма в операции, откладывая некоторые шаги на подклассы.
* **Visitor (Посетитель):** [./behavioral/visitor.js](./behavioral/visitor.js)  Добавляет новые операции к объектам без изменения их классов.
