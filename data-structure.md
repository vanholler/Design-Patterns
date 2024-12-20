# Структуры данных в JavaScript 

`Структура данных` — это способ хранения данных в памяти и набор операций, которые она позволяет выполнять. Этот набор операций называется интерфейс. Различные структуры данных могут иметь одинаковые интерфейсы, но реализовывать их по-разному. Поэтому одинаковые операции для разных структур данных могут отличаться по вычислительной сложности.

Структура данных используются для решения различных задач, таких как поиск, сортировка, фильтрация и многое другое.

Представим, что у нас есть список из 1000 имён и нужно найти определённое имя в этом списке. Можно просматривать каждую строку списка по порядку. Это может занять много времени, особенно если список очень большой.
Однако если хранить имена в другой структуре данных, например, в хеш-таблице или дереве поиска, можно найти нужное имя гораздо быстрее.

## Массивы
`Массивы` — это одна из самых распространённых структур данных в программировании. Они используются для хранения коллекции элементов, таких как числа, строки или объекты.

## Стeк 
`Стек` — это структура данных, которая работает по принципу `LIFO (Last In, First Out)`, что означает «последним пришёл — первым вышел».
К примеру, вы моете посуду и ставите тарелки друг на друга. Если захотите вытереть их, то первой возьмёте последнюю помытую тарелку. Это и есть принцип работы стека.

Стеки используются для извлечения данных в обратном порядке. Например, хотим сохранить историю действий пользователя в приложении: когда пользователь выполняет новое действие, мы кладём элемент на стек. Когда пользователь хочет отменить действие, мы снимаем элемент со стека.

## Очереди
`Очередь` — это структура данных, которая работает по принципу `FIFO (First In, First Out)`, что означает «первым пришёл — первым обслужен». Её можно сравнить с очередью за вкусными пироженками: первый человек, который пришёл, будет первым, кто получит пирожное.

Очереди используются для хранения данных в порядке их добавления. Например, если хотим сохранить список задач на день, то будем использовать очередь для хранения этих задач.

## Связанные списки
`Связанный список` — это структура данных, которая состоит из узлов, каждый из которых содержит данные и ссылку на следующий узел в списке. Связанный список можно представить как поезд, где каждый вагон — это узел в списке. Каждый вагон содержит груз (данные) и соединение со следующим вагоном (ссылку). Первый вагон — это начало списка, а последний, который не имеет соединения с другим, — это конец списка. Таким образом, вы можете перемещаться по поезду (списку), переходя от одного вагона (узла) к другому.
Существуют два основных типа связанных списков — односвязные и двусвязные.

* `Односвязный список` — структура данных, состоящая из элементов одного типа, последовательно связанных между собой указателями. Каждый элемент списка имеет указатель на следующий элемент. Последний элемент ни на что не указывает. Элемент, на который нет указателя, является первым в списке.
* `Двусвязный список` — структура данных, в которой каждый элемент содержит указатель на следующий и предыдущий элементы. Это позволяет двигаться по списку в обоих направлениях.
Связанные списки используются для хранения данных в порядке их добавления. Одно из преимуществ связанных списков — они позволяют быстро добавлять и удалять элементы в любом месте. Например, если хотите сохранить список задач, которые нужно выполнить в приложении, можете использовать связанный список для хранения этих задач. Каждый узел списка будет содержать одну задачу и ссылку на следующую подзадачу

## Деревья
`Деревья` — это иерархическая структура, которая состоит из связанных узлов. Каждый узел дерева содержит данные и ссылки на его дочерние узлы. Вершина дерева называется корнем, узлы у которых нет потомков — листьями.

Ключевые термины, используемые при работе с деревьями:

* `Children (дети)` — узлы, у которых текущий является родителем;
* `Descendants (потомки)` — узлы, до которых можно добраться через родительские связи. Все ваши дети, внуки, правнуки и так далее будут вашими потомками;
* `Siblings (братья и сестры)` — узлы, имеющие одного и того же родителя. Ваши братья и сестры — это люди, у которых те же родители, что и у вас;
* `Leafs (листья)` — узлы без потомков. К примеру, ваши родственники, у которых нет своих детей.

Деревья помогают организовывать данные иерархически, обрабатывать информацию, искать пути и многое другое.

`Бинарное дерево` — это структура данных, в которой каждый узел имеет не более двух детей, обычно обозначаемых как «левый ребёнок» и «правый ребёнок». Особый вид бинарного дерева — это бинарное дерево поиска. В бинарном дереве поиска для каждого узла его значение больше или равно значению любого узла в его левом поддереве и меньше или равно значению любого узла в его правом поддереве. Это свойство делает бинарные деревья поиска эффективными для операций поиска и вставки.

## Графы
`Графы` — это структура данных, которая представляет собой узлы, связанные рёбрами. Графы бывают двух основных типов: направленные и ненаправленные.

`Направленные (directed)`. В направленном графе рёбра имеют направление. Значит, что, если есть ребро от узла `A` к узлу `B`, это не гарантирует наличие ребра от узла `B` к узлу `A`. То есть `A` к `B` и `B` к `A` — это не одно и то же.
`Ненаправленные (undirected)`. В ненаправленном графе рёбра не имеют направления. Это означает, что, если есть ребро между узлами `A` и `B`, то можно перемещаться в любом направлении.

Графы используются для моделирования отношений между объектами, поиска путей, оптимизации маршрутов и многого другого. Иерархия друзей в Facebook или дороги Google Maps — это графы.

Деревья и связанные списки это частные случаи графов.
