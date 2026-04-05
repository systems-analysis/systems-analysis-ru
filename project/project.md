# Проект: миграция `operation_reserch` -> `operation_research`

## Роль тестировщика

Моя роль в этом проекте:

- фиксировать требования к миграции;
- давать рекомендации по безопасной реализации;
- проверять полноту выполнения;
- принимать результат только после проверки ссылочной и SEO-целостности проекта.

Исполнитель вносит изменения в проект и оставляет отчеты в папке `log`.

## Оценка масштаба

На текущий момент выявлено:

- 18 HTML-файлов с ошибочным slug `reserch`;
- 9 таких файлов в корне сайта;
- 9 зеркальных файлов в папке `en`;
- 23 внешние HTML-страницы, которые ссылаются на ошибочные URL;
- 41 HTML-файл в минимальном контуре миграции;
- 358 совпадений `reserch` по HTML-проекту;
- 295 совпадений внутри самих ошибочных страниц;
- 63 совпадения во внешних страницах;
- русскоязычные старые URL исторически проиндексированы, поэтому редирект обязателен.

## Ключевая проблема

Ошибка находится не только в именах файлов, но и в:

- внутренних ссылках;
- ссылках между русской и английской версиями;
- `canonical`;
- `hreflang`;
- `og:url`;
- JSON-LD полях `@id`, `url`, `mainEntityOfPage`;
- навигационных страницах `index`, `sections`, `map` и связанных разделах.

Нельзя делать слепую замену по слову `research` во всем репозитории, потому что в проекте уже есть корректные сущности, например:

- `systems_research.html`;
- PDF-файлы вида `operations_research`;
- текстовые и внешние ссылки, где `research` уже написано правильно.

Менять нужно только семейство URL и файлов `operation_reserch*`.

## Файлы, подлежащие миграции

### Русская версия

- `operation_reserch.html` -> `operation_research.html`
- `operation_reserch_as.html` -> `operation_research_as.html`
- `operation_reserch_book.html` -> `operation_research_book.html`
- `operation_reserch_caa.html` -> `operation_research_caa.html`
- `operation_reserch_gv.html` -> `operation_research_gv.html`
- `operation_reserch_me.html` -> `operation_research_me.html`
- `operation_reserch_model.html` -> `operation_research_model.html`
- `operation_reserch_ve.html` -> `operation_research_ve.html`
- `operation_reserch_vg.html` -> `operation_research_vg.html`

### Английская версия

- `en/operation_reserch.html` -> `en/operation_research.html`
- `en/operation_reserch_as.html` -> `en/operation_research_as.html`
- `en/operation_reserch_book.html` -> `en/operation_research_book.html`
- `en/operation_reserch_caa.html` -> `en/operation_research_caa.html`
- `en/operation_reserch_gv.html` -> `en/operation_research_gv.html`
- `en/operation_reserch_me.html` -> `en/operation_research_me.html`
- `en/operation_reserch_model.html` -> `en/operation_research_model.html`
- `en/operation_reserch_ve.html` -> `en/operation_research_ve.html`
- `en/operation_reserch_vg.html` -> `en/operation_research_vg.html`

## Рекомендации по реализации

### 1. Выполнять миграцию как управляемое переименование URL

- сначала подготовить таблицу соответствий `старый URL -> новый URL`;
- затем переименовать файлы;
- затем обновить все ссылки и метаданные;
- затем добавить редиректы;
- затем выполнить верификацию.

### 2. Обновить не только ссылки, но и SEO-метаданные

Для каждого переименованного файла обязательно проверить и при необходимости обновить:

- `canonical`;
- `link rel="alternate" hreflang="ru|en"`;
- `meta property="og:url"`;
- JSON-LD поле `@id`;
- JSON-LD поле `url`;
- JSON-LD поле `mainEntityOfPage`;
- ссылки на зеркальную языковую версию в навигации и футере;
- ссылки в блоках "Перейти к статье", "Статьи", "Скачать", "Карта сайта", "Разделы".

### 3. Сохранять SEO-наследование через редирект

Так как старые русские URL индексировались много лет, необходимо:

- сохранить правило редиректа в `.htaccess`;
- использовать именно `301`, а не `302`;
- направлять каждый старый URL на свой новый URL один к одному;
- не делать редирект всех страниц раздела на одну общую страницу.

Рекомендация:

- минимально обязательны редиректы для русской версии;
- желательно также добавить зеркальные редиректы для `/en/`, чтобы проект был консистентным.

### 4. Не оставлять старые URL в канонических ссылках

- после миграции старые URL должны жить только в правилах редиректа;
- старые URL не должны оставаться в `canonical`, `hreflang`, `og:url`, JSON-LD и внутренних ссылках.

### 5. Избежать опасной массовой замены

- заменять только шаблон `operation_reserch`;
- не трогать `systems_research`;
- не трогать корректные asset-имена с `operations_research`;
- не трогать внешние ссылки, где `research` уже корректен;
- отдельно проверить [en/index.html](D:/Github/systems-analysis-ru/en/index.html), потому что там уже есть ссылка на `operation_research.html`.

### 6. Проверить страницы повышенного риска

В первую очередь проверить:

- [index.html](D:/Github/systems-analysis-ru/index.html)
- [sections.html](D:/Github/systems-analysis-ru/sections.html)
- [map.html](D:/Github/systems-analysis-ru/map.html)
- [methodology_or.html](D:/Github/systems-analysis-ru/methodology_or.html)
- [operation.html](D:/Github/systems-analysis-ru/operation.html)
- [books.html](D:/Github/systems-analysis-ru/books.html)
- [en/index.html](D:/Github/systems-analysis-ru/en/index.html)
- [en/sections.html](D:/Github/systems-analysis-ru/en/sections.html)
- [en/map.html](D:/Github/systems-analysis-ru/en/map.html)
- [en/methodology_or.html](D:/Github/systems-analysis-ru/en/methodology_or.html)
- [en/operation.html](D:/Github/systems-analysis-ru/en/operation.html)
- [en/books.html](D:/Github/systems-analysis-ru/en/books.html)

## Критерии приемки

Работа считается выполненной только если одновременно выполнены все условия:

- все 18 новых файлов существуют с корректными именами `operation_research*`;
- все старые русские URL имеют 301-редирект на новые;
- новые русские URL открываются без редирект-цепочек;
- английские URL приведены к единому стилю `operation_research*`;
- в HTML-файлах больше нет внутренних ссылок на `operation_reserch*`;
- в SEO-метаданных больше нет `operation_reserch*`;
- связи `ru <-> en` обновлены в обе стороны;
- навигация на главной, в разделах и в карте сайта не содержит старых URL;
- содержимое страниц не потеряно и не сокращено;
- структура страниц, заголовки, хлебные крошки и футер не сломаны.

## Рекомендуемая проверка после выполнения

Исполнитель должен приложить к отчету результаты проверок.

### Проверка остатков старого slug

Допустимые остатки `operation_reserch` после миграции:

- `.htaccess`;
- этот файл `project/project.md`;
- файлы отчетов в `log`, если в них описывается миграция.

Во всех остальных местах остатки считаются дефектом.

Рекомендуемые команды проверки:

```powershell
Get-ChildItem -Recurse -Include *.html,*.htaccess,*.md -File | Select-String -Pattern 'operation_reserch'
```

```powershell
Get-ChildItem -Recurse -Include *.html -File | Select-String -Pattern 'canonical|hreflang|og:url|@id|\"url\"'
```

### Проверка набора новых файлов

```powershell
Get-ChildItem operation_research*.html, en\operation_research*.html | Select-Object FullName
```

### Проверка отсутствия ошибочных HTML-файлов как рабочих страниц

Старые файлы не должны оставаться рабочими HTML-страницами с дублирующим контентом, если редирект реализуется через веб-сервер.

Рекомендация:

- либо удалить старые HTML-файлы после введения редиректа;
- либо оставить только если есть осознанная техническая причина, но не допустить дублей и двойной индексации.

## Формат отчета исполнителя

Исполнитель должен оставить отчет в папке `log`.

Рекомендуемый формат имени файла:

- `log/2026-04-06_operation-research-migration.md`

В отчете должны быть:

- список переименованных файлов;
- список файлов, где обновлены ссылки;
- список добавленных редиректов;
- результат поиска по `operation_reserch` после миграции;
- список ручных проверок;
- список оставшихся рисков или спорных мест.

## Анализ обратной связи разработчика

Проанализирован отчет [log/2026-04-06_plan.md](D:/Github/systems-analysis-ru/log/2026-04-06_plan.md).

### Итог оценки

- текущий отчет является планом работ, а не отчетом о выполнении;
- приемка проекта по нему невозможна, потому что изменения еще не внесены;
- сам план в целом корректный и может использоваться как основа для реализации;
- статус со стороны тестирования: условно одобрено к исполнению, но не принято.

### Что в плане хорошо

- правильно выделен контур миграции: 18 файлов;
- корректно отмечен частный случай [en/index.html](D:/Github/systems-analysis-ru/en/index.html), где ссылка уже написана правильно;
- предложено точечное переименование через `git mv`, а не хаотичная ручная замена;
- предложена замена только шаблона `operation_reserch`, а не глобальная замена `research`;
- предусмотрены 1:1 редиректы, а не перенаправление всех страниц раздела на одну страницу;
- предусмотрена финальная верификация и отдельный итоговый отчет.

### Что нужно скорректировать или учесть перед выполнением

- верификационные команды в плане указаны через `grep`, но рабочая среда проекта сейчас PowerShell;
- для финальной проверки нужно использовать PowerShell-команды, совместимые с текущей средой;
- после миграции необходимо проверять не только ссылки в HTML, но и остатки старого slug в SEO-метаданных;
- допустимые остатки `operation_reserch` после выполнения: только `.htaccess`, `project/project.md` и файлы отчетов в `log`;
- если редиректы проверяются только по файлу `.htaccess`, а не на живом Apache-окружении, это нужно явно отметить как ограничение проверки;
- в итоговом отчете исполнитель должен показать не только намерение, но и фактический результат поиска по проекту после изменений.

### Обязательные требования к финальному отчету после реализации

- перечислить все 18 переименованных файлов;
- показать итоговые правила редиректа;
- показать результат поиска `operation_reserch` после миграции;
- отдельно подтвердить, что в HTML больше не осталось старых slug;
- отдельно подтвердить, что `canonical`, `hreflang`, `og:url` и JSON-LD обновлены;
- указать, была ли фактически проверена работа `.htaccess` на сервере или только подготовлены правила.

### Рекомендованные команды проверки в текущей среде

```powershell
Get-ChildItem -Recurse -Include *.html -File | Select-String -Pattern 'operation_reserch'
```

```powershell
Get-ChildItem -Recurse -Include *.html,*.htaccess,*.md -File | Select-String -Pattern 'operation_reserch'
```

```powershell
Get-ChildItem operation_research*.html, en\operation_research*.html | Select-Object FullName
```

### Решение тестировщика

- план можно брать в работу;
- проект не считается выполненным до появления отдельного итогового отчета после реализации;
- итоговая приемка возможна только после фактической проверки файлов и редиректов.

## Приемочная проверка 2026-04-06

Проверен отчет [log/2026-04-06_operation-research-migration.md](D:/Github/systems-analysis-ru/log/2026-04-06_operation-research-migration.md) и фактическое состояние репозитория.

### Итог

- блокирующих дефектов по результату миграции не обнаружено;
- работа по репозиторию принята;
- есть одно ограничение проверки: правила `.htaccess` проверены по содержимому файла, но не исполнены на живом Apache-окружении в рамках этой локальной проверки.

### Что подтверждено фактически

- все 18 новых файлов `operation_research*.html` существуют;
- старые HTML-файлы `operation_reserch*.html` отсутствуют;
- в HTML-файлах больше нет вхождений `operation_reserch`;
- в `.htaccess` присутствуют 18 правил `RewriteRule`;
- ключевые страницы навигации обновлены на `operation_research`;
- для всех 18 переименованных страниц подтверждены корректные:
  - `canonical`;
  - `hreflang`;
  - `og:url`;
  - JSON-LD поля `@id` и `url`;
- ссылки на `operation_research*.html` в HTML разрешаются в существующие файлы;
- [systems_research.html](D:/Github/systems-analysis-ru/systems_research.html) не затронут.

### Подтвержденные проверки

- поиск `operation_reserch` по `*.html` вернул 0 результатов;
- поиск `operation_reserch` по проекту показывает остатки только в:
  - `.htaccess`;
  - `project/project.md`;
  - файлах в `log`;
- выборочная проверка страниц высокого риска пройдена:
  - [index.html](D:/Github/systems-analysis-ru/index.html)
  - [sections.html](D:/Github/systems-analysis-ru/sections.html)
  - [map.html](D:/Github/systems-analysis-ru/map.html)
  - [methodology_or.html](D:/Github/systems-analysis-ru/methodology_or.html)
  - [operation.html](D:/Github/systems-analysis-ru/operation.html)
  - [books.html](D:/Github/systems-analysis-ru/books.html)
  - [en/index.html](D:/Github/systems-analysis-ru/en/index.html)
  - [en/sections.html](D:/Github/systems-analysis-ru/en/sections.html)
  - [en/map.html](D:/Github/systems-analysis-ru/en/map.html)
  - [en/methodology_or.html](D:/Github/systems-analysis-ru/en/methodology_or.html)
  - [en/operation.html](D:/Github/systems-analysis-ru/en/operation.html)
  - [en/books.html](D:/Github/systems-analysis-ru/en/books.html)

### Остаточный риск

- серверное поведение 301-редиректов не было проверено HTTP-запросом в Apache-среде;
- перед публикацией желательно отдельно проверить реальные ответы сервера для старых URL.

## Полный аудит папки /en

Проведена дополнительная полная проверка всех английских HTML-файлов в [en](D:/Github/systems-analysis-ru/en).

### Что проверено

- полный набор файлов в `en`;
- соответствие русскому набору страниц;
- `lang="en"` во всех английских страницах;
- отсутствие старого slug `operation_reserch` во всех HTML-файлах `en`;
- корректность ссылок и URL в `head`;
- корректность ссылок в `body`;
- разрешение локальных ссылок на HTML-страницы `operation_research*`;
- разрешение локальных file-like ссылок (`html`, `css`, `js`, `png`, `svg`, `ico`, `webmanifest`, `jpg`, `pdf`, `djvu`).

### Подтверждено

- в папке `en` находится 63 HTML-файла;
- набор `en` симметричен корню, кроме отсутствующей [languages.html](D:/Github/systems-analysis-ru/languages.html);
- структурных и head-ошибок по английским файлам не обнаружено;
- старый slug `operation_reserch` в английских HTML-файлах отсутствует;
- все ссылки на `operation_research*.html` в английских файлах корректны и указывают на существующие страницы;
- все 63 английских HTML-файла содержат HTML-ссылки и были проверены на согласованность.

### Найденный дефект

- [en/operation_research_book.html](D:/Github/systems-analysis-ru/en/operation_research_book.html#L123) содержит ссылку на `/assets/operation-research_gvishiani.pdf`;
- такого файла в папке `assets` нет;
- ссылка является битой.

### Дополнительное замечание

- тот же дефект присутствует и в русской версии: [operation_research_book.html](D:/Github/systems-analysis-ru/operation_research_book.html#L123);
- это не ошибка миграции `reserch -> research`, а отдельная проблема контентного ассета.

### Рекомендация

- либо добавить отсутствующий файл `operation-research_gvishiani.pdf` в `assets`;
- либо исправить ссылку на фактически существующий файл, если имя ассета другое;
- после исправления повторно проверить обе страницы с литературой: русскую и английскую.

## Задача 2. Анализ масштаба миграции `specification.html` -> `requirements.html`

Проведен предварительный анализ без выполнения переименования.

### Базовый вывод

Миграция заметно меньше по объему, чем предыдущая задача с `operation_reserch`, но всё равно требует аккуратного URL-переименования с обновлением внутренних ссылок и SEO-метаданных.

### Что уже подтверждено

- в проекте существуют только два целевых файла:
  - [specification.html](D:/Github/systems-analysis-ru/specification.html)
  - [en/specification.html](D:/Github/systems-analysis-ru/en/specification.html)
- файлов `requirements.html` пока нет ни в корне, ни в `en`;
- точных вхождений `specification.html` в HTML-файлах: 31;
- затронутых HTML-файлов: 14;
- в не-HTML технических файлах (`css`, `js`, `json`) зависимостей по `specification.html` не найдено.

### Предполагаемые переименования файлов

- [specification.html](D:/Github/systems-analysis-ru/specification.html) -> `requirements.html`
- [en/specification.html](D:/Github/systems-analysis-ru/en/specification.html) -> `en/requirements.html`

### Расклад по масштабу

Всего найдено 31 точное вхождение `specification.html` в HTML:

- 17 вхождений внутри самих целевых страниц;
- 14 вхождений во внешних страницах.

Расклад по файлам:

- [specification.html](D:/Github/systems-analysis-ru/specification.html): 8 вхождений
- [en/specification.html](D:/Github/systems-analysis-ru/en/specification.html): 9 вхождений
- [management_se.html](D:/Github/systems-analysis-ru/management_se.html): 2
- [en/management_se.html](D:/Github/systems-analysis-ru/en/management_se.html): 2
- [conception.html](D:/Github/systems-analysis-ru/conception.html): 1
- [en/conception.html](D:/Github/systems-analysis-ru/en/conception.html): 1
- [life_cycle.html](D:/Github/systems-analysis-ru/life_cycle.html): 1
- [en/life_cycle.html](D:/Github/systems-analysis-ru/en/life_cycle.html): 1
- [map.html](D:/Github/systems-analysis-ru/map.html): 1
- [en/map.html](D:/Github/systems-analysis-ru/en/map.html): 1
- [sections.html](D:/Github/systems-analysis-ru/sections.html): 1
- [en/sections.html](D:/Github/systems-analysis-ru/en/sections.html): 1
- [systems_engineering.html](D:/Github/systems-analysis-ru/systems_engineering.html): 1
- [en/systems_engineering.html](D:/Github/systems-analysis-ru/en/systems_engineering.html): 1

### Расклад по head/body

- [specification.html](D:/Github/systems-analysis-ru/specification.html): `head=7`, `body=1`
- [en/specification.html](D:/Github/systems-analysis-ru/en/specification.html): `head=7`, `body=2`
- все остальные затронутые файлы содержат только body-ссылки

Это означает, что основная сложность здесь сосредоточена в двух переименовываемых страницах, а внешняя перелинковка сравнительно компактна.

### Что именно придется менять

Внутри самих двух страниц потребуется обновить:

- `canonical`;
- `hreflang ru/en`;
- `og:url`;
- JSON-LD поля `@id`;
- JSON-LD поля `url`;
- JSON-LD поля `mainEntityOfPage`;
- языковые переключатели RU/EN;
- внутренние body-ссылки на зеркальную страницу.

Во внешних страницах потребуется обновить body-ссылки в:

- [conception.html](D:/Github/systems-analysis-ru/conception.html)
- [life_cycle.html](D:/Github/systems-analysis-ru/life_cycle.html)
- [management_se.html](D:/Github/systems-analysis-ru/management_se.html)
- [map.html](D:/Github/systems-analysis-ru/map.html)
- [sections.html](D:/Github/systems-analysis-ru/sections.html)
- [systems_engineering.html](D:/Github/systems-analysis-ru/systems_engineering.html)
- [en/conception.html](D:/Github/systems-analysis-ru/en/conception.html)
- [en/life_cycle.html](D:/Github/systems-analysis-ru/en/life_cycle.html)
- [en/management_se.html](D:/Github/systems-analysis-ru/en/management_se.html)
- [en/map.html](D:/Github/systems-analysis-ru/en/map.html)
- [en/sections.html](D:/Github/systems-analysis-ru/en/sections.html)
- [en/systems_engineering.html](D:/Github/systems-analysis-ru/en/systems_engineering.html)

Особенность:

- в [management_se.html](D:/Github/systems-analysis-ru/management_se.html) и [en/management_se.html](D:/Github/systems-analysis-ru/en/management_se.html) ссылка встречается дважды: внутри текста статьи и в блоке связанных материалов.

### Рекомендации по реализации

- выполнять переименование сразу для RU и EN;
- менять только точный slug `specification.html`, не затрагивая слово `specification` в обычном тексте;
- после переименования добавить 301-редиректы:
  - `/specification.html` -> `/requirements.html`
  - `/en/specification.html` -> `/en/requirements.html`
- после выполнения отдельно проверить:
  - отсутствие `specification.html` в HTML;
  - корректность `requirements.html` в `head` и `body`;
  - разрешение всех новых ссылок на существующие файлы.

### Предварительная оценка

- переименовываемых файлов: 2
- затронутых HTML-файлов минимум: 14
- точных замен slug в HTML: 31
- риск: низкий/средний

Риск не высокий, потому что:

- нет конфликта с уже существующим `requirements.html`;
- область затрагивания локальна;
- нет зависимостей в CSS/JS;
- структура раздела системной инженерии компактна.

## Приемочная проверка задачи 2

Проверен отчет [log/2026-04-06_specification-to-requirements.md](D:/Github/systems-analysis-ru/log/2026-04-06_specification-to-requirements.md) и фактическое состояние репозитория после миграции `specification.html -> requirements.html`.

### Итог

- блокирующих дефектов по результату миграции не обнаружено;
- задача по репозиторию принята;
- ограничение проверки прежнее: правила `.htaccess` проверены по содержимому файла, но не исполнены на живом Apache-окружении в рамках локальной проверки.

### Что подтверждено фактически

- существуют оба новых файла:
  - [requirements.html](D:/Github/systems-analysis-ru/requirements.html)
  - [en/requirements.html](D:/Github/systems-analysis-ru/en/requirements.html)
- старые HTML-файлы `specification.html` и `en/specification.html` отсутствуют;
- в HTML-файлах больше нет вхождений `specification.html`;
- в `.htaccess` присутствуют 2 правила редиректа:
  - `/specification.html` -> `/requirements.html`
  - `/en/specification.html` -> `/en/requirements.html`
- для обеих новых страниц подтверждены корректные:
  - `canonical`;
  - `hreflang`;
  - `og:url`;
  - JSON-LD поля `@id` и `url`;
- все ссылки на `requirements.html` и `en/requirements.html` в HTML разрешаются в существующие файлы;
- замена затронула именно имя файла `specification.html`, а не обычное слово `specification` в англоязычном контенте.

### Подтвержденные проверки

- поиск `specification.html` по `*.html` вернул 0 результатов;
- поиск `specification.html` по проекту показывает остатки только в:
  - `.htaccess`;
  - `project/project.md`;
  - файлах в `log`;
- отчет разработчика о сохранении обычного английского слова `specification` подтвержден выборочной проверкой по английским файлам.

### Остаточный риск

- серверное поведение 301-редиректов не было проверено HTTP-запросом в Apache-среде;
- перед публикацией желательно отдельно проверить реальные ответы сервера для:
  - `/specification.html`
  - `/en/specification.html`

## Статус

Статус на текущий момент: обе миграции URL по репозиторию проверены и приняты; остается желательной серверная проверка 301-редиректов в целевой среде и исправление одной ранее найденной битой ссылки на PDF-ассет.
