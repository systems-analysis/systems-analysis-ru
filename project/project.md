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

## Задача 3: локализация переключателя темы для `/en`

Изучена проблема с подписями переключателя темы на англоязычных страницах.

### Что именно сломано

- на английских страницах видимый текст кнопки темы в верхнем меню и в футере сейчас выводится на кириллице:
  - `Тёмная тема`
  - `Светлая тема`
- источник текста находится не в HTML и не в JavaScript, а в активном общем CSS-файле [css/styles.css](D:/Github/systems-analysis-ru/css/styles.css);
- проблемные строки находятся в блоке `.theme-toggle::after` и `:root.dark .theme-toggle::after`;
- в этом файле сейчас жёстко зашиты русские строки, поэтому они автоматически попадают и в `/en`.

### Что подтверждено проверкой

- активный файл стилей проекта: [css/styles.css](D:/Github/systems-analysis-ru/css/styles.css);
- неиспользуемый дубль [css/style.css](D:/Github/systems-analysis-ru/css/style.css) страницами не подключается и не должен быть основной точкой исправления;
- общий скрипт [js/main.js](D:/Github/systems-analysis-ru/js/main.js) только переключает класс `dark` и не задаёт видимый текст кнопки;
- все английские контентные страницы в [en](D:/Github/systems-analysis-ru/en) подключают [css/styles.css](D:/Github/systems-analysis-ru/css/styles.css) и [js/main.js](D:/Github/systems-analysis-ru/js/main.js);
- во всех затронутых английских страницах установлен `lang="en"`;
- во всех русских страницах с этим переключателем установлен `lang="ru"`;
- англоязычная главная [en/index.html](D:/Github/systems-analysis-ru/en/index.html) в этот дефект не входит, потому что использует отдельный layout и не содержит стандартного переключателя темы.

### Масштаб

- затронут английский раздел в [en](D:/Github/systems-analysis-ru/en);
- английских HTML-файлов в разделе: 63;
- файлов `/en` со стандартным переключателем темы: 62;
- русских HTML-файлов со стандартным переключателем темы: 63;
- фактически ошибка системная и устраняется одной общей правкой шаблонного слоя.

### Рекомендуемое решение

Наиболее безопасный вариант: локализовать подписи в [css/styles.css](D:/Github/systems-analysis-ru/css/styles.css) по атрибуту `lang` на корневом элементе, не меняя десятки HTML-файлов вручную.

Рекомендуемая логика:

- для `html[lang="ru"]` оставить:
  - `Тёмная тема`
  - `Светлая тема`
- для `html[lang="en"]` задать:
  - `Dark theme`
  - `Light theme`

Практически это означает замену текущих общих правил на языко-зависимые селекторы, например:

- `html[lang="ru"] .theme-toggle::after`
- `html[lang="ru"].dark .theme-toggle::after`
- `html[lang="en"] .theme-toggle::after`
- `html[lang="en"].dark .theme-toggle::after`

### Почему это решение предпочтительно

- исправление вносится в одно место, а не в 62 английских страницы;
- русская версия остаётся без изменений по поведению и тексту;
- английская версия автоматически получает правильные подписи и в хедере, и в футере;
- решение соответствует текущей архитектуре проекта, где видимый текст кнопки уже реализован через CSS `::after`;
- нет необходимости переписывать JavaScript, потому что он не отвечает за эти подписи.

### Рекомендации по реализации

- менять именно [css/styles.css](D:/Github/systems-analysis-ru/css/styles.css), а не [css/style.css](D:/Github/systems-analysis-ru/css/style.css);
- не делать массовую ручную замену HTML-кнопок;
- не менять `aria-label` без отдельной необходимости:
  - в английских страницах он уже задан как `Toggle theme`;
  - текущий дефект относится именно к видимому тексту кнопки;
- после исправления проверить обе темы:
  - светлая тема -> `Dark theme` в `/en`
  - тёмная тема -> `Light theme` в `/en`
  - светлая тема -> `Тёмная тема` в RU
  - тёмная тема -> `Светлая тема` в RU

### Критерии приемки

- на всех английских страницах со стандартным меню и футером переключатель темы показывает английский текст;
- на русских страницах тексты остаются русскими;
- подписи корректны и в верхнем меню, и в футере;
- переключение темы не ломает тексты после смены состояния `light/dark`;
- изменение ограничено активным общим CSS и не создаёт лишних расхождений между RU и EN.

## Приемочная проверка задачи 3

Проверен результат исправления локализации переключателя темы для англоязычного раздела.

### Итог

- блокирующих дефектов не обнаружено;
- исправление выполнено системно и аккуратно;
- задача по репозиторию принята.

### Что подтверждено фактически

- исправление внесено в активный файл [css/styles.css](D:/Github/systems-analysis-ru/css/styles.css);
- базовые русские подписи сохранены:
  - `.theme-toggle::after` -> `Тёмная тема`
  - `:root.dark .theme-toggle::after` -> `Светлая тема`
- для английских страниц добавлены языковые переопределения:
  - `:root:lang(en) .theme-toggle::after` -> `Dark theme`
  - `:root:lang(en).dark .theme-toggle::after` -> `Light theme`
- файл [js/main.js](D:/Github/systems-analysis-ru/js/main.js) по-прежнему только переключает состояние темы и не вмешивается в текст подписи;
- неиспользуемый [css/style.css](D:/Github/systems-analysis-ru/css/style.css) не задействован в исправлении.

### Массовая проверка RU/EN

- английских HTML-файлов в [en](D:/Github/systems-analysis-ru/en): 63;
- английских страниц со стандартным переключателем темы: 62;
- русских HTML-файлов со стандартным переключателем темы: 63;
- у всех английских страниц со стандартным шаблоном подтвержден `lang="en"`;
- у всех русских страниц со стандартным шаблоном подтвержден `lang="ru"`;
- [en/index.html](D:/Github/systems-analysis-ru/en/index.html) в стандартный набор не входит и переключателя темы не содержит.

### Проверка кнопок и подписей

- на английских страницах найдено 186 кнопок темы с `aria-label="Toggle theme"` и 0 кнопок с кириллическим `aria-label`;
- на русских страницах найдено 189 кнопок темы с `aria-label="Переключить тему"` и 0 кнопок с английским `aria-label`;
- во всех английских страницах со стандартным переключателем используются кнопки с классом `.theme-toggle`, то есть на них распространяется общее CSS-исправление;
- в HTML-файлах папки [en](D:/Github/systems-analysis-ru/en) не найдено строк `Тёмная тема` и `Светлая тема`;
- в русских HTML-файлах корня не найдено строк `Dark theme` и `Light theme`.

### Тестовый вывод

- английский раздел больше не зависит от русских подписей кнопки темы;
- русская версия не пострадала;
- решение масштабируется сразу на верхнее меню, мобильный вариант и футер, потому что все три кнопки используют общий класс `.theme-toggle`.

### Ограничение проверки

- приёмка выполнена по фактическому содержимому репозитория и логике CSS-селекторов;
- отдельный визуальный smoke-test в реальном браузере после публикации всё ещё желателен, но блокирующих оснований для отклонения результата нет.

## Дополнительная проверка: вспышка при смене темы

Проверена текущая реализация переключения темы на предмет визуальной вспышки при смене светлой и тёмной темы.

### Что подтверждено

- в [js/main.js](D:/Github/systems-analysis-ru/js/main.js) перед переключением темы добавляется класс `no-transitions`, затем переключается `dark`, и только после двух `requestAnimationFrame` класс снимается;
- в [css/styles.css](D:/Github/systems-analysis-ru/css/styles.css) для `.no-transitions *`, `.no-transitions *::before` и `.no-transitions *::after` задано `transition: none !important;`;
- это означает, что при клике по переключателю все CSS-переходы у дочерних элементов временно отключаются на момент смены темы;
- в [js/theme-init.js](D:/Github/systems-analysis-ru/js/theme-init.js) класс `dark` применяется ещё до подключения основного файла стилей на типовых страницах;
- проверка по HTML показала, что на всех 125 страницах, где используется механизм темы, `theme-init.js` подключён раньше `css/styles.css`.

### Тестовый вывод

- по текущей реализации признаков вспышки при смене темы не обнаружено;
- отдельный риск вспышки при первичной загрузке также снижен, потому что сохранённая тема применяется до загрузки общих стилей;
- с точки зрения кода реализация выглядит корректной и устойчивой.

### Ограничение проверки

- вывод сделан по коду и порядку подключения ресурсов;
- отдельный визуальный тест в реальном браузере не выполнялся, поэтому это не pixel-perfect подтверждение, а инженерная оценка на основании фактической реализации.

## Рекомендации: безопасное внедрение Microsoft Clarity на все страницы

Проверен текущий охват счётчика Microsoft Clarity по опубликованным HTML-страницам проекта.

### Текущее состояние

- опубликованных HTML-страниц в проекте: 127;
- Yandex.Metrika присутствует на всех 127 страницах;
- Google Analytics `gtag.js` присутствует на всех 127 страницах;
- реальный скрипт Microsoft Clarity сейчас присутствует только на 2 страницах:
  - [index.html](D:/Github/systems-analysis-ru/index.html)
  - [en/index.html](D:/Github/systems-analysis-ru/en/index.html)
- на остальных 125 страницах Clarity отсутствует.

### Вывод по архитектуре

- проект остаётся статическим сайтом без сборки и без серверных include-механизмов в текущем репозитории;
- массовое покрытие всех страниц одним только изменением шаблона невозможно: существующие HTML уже лежат как готовые файлы;
- безопасное внедрение должно учитывать две цели:
  - не допустить двойной инициализации Clarity;
  - минимизировать дублирование и будущие расхождения между страницами.

### Основной рекомендуемый вариант

Наиболее безопасный и сопровождаемый путь:

- вынести загрузчик Clarity в отдельный общий файл, например [js/clarity-init.js](D:/Github/systems-analysis-ru/js/clarity-init.js);
- подключить этот файл на всех опубликованных страницах;
- на [index.html](D:/Github/systems-analysis-ru/index.html) и [en/index.html](D:/Github/systems-analysis-ru/en/index.html) удалить текущий inline-блок Clarity и заменить его на подключение того же общего файла;
- обновить [template/template_rus.html](D:/Github/systems-analysis-ru/template/template_rus.html), чтобы новые страницы не создавались без Clarity.

### Почему этот вариант лучший

- логика счётчика хранится в одном месте;
- если изменится `project id`, менять нужно будет один файл, а не 127 HTML-страниц;
- снижается риск, что на части страниц останется старый код счётчика;
- проще тестировать наличие подключения по `<script src>` вместо поиска длинного inline-блока;
- можно сразу встроить защиту от повторной инициализации.

### Рекомендуемая техническая реализация

В общем файле загрузчика рекомендуется:

- использовать текущий идентификатор Clarity `w6k4iidqav`;
- загружать внешний скрипт асинхронно;
- добавить защиту от повторной инициализации, например через проверку `window.clarity` или наличие уже вставленного скрипта;
- не завязывать код на DOM-элементы страницы, чтобы он был одинаково безопасен для всех макетов.

Практически структура должна быть такой:

- локальный файл `clarity-init.js` только создаёт загрузчик и вставляет `https://www.clarity.ms/tag/...`;
- HTML-страницы содержат только единообразное подключение локального файла;
- inline-вариант на двух главных страницах удаляется, чтобы не было двойного запуска.

### Где подключать

Для текущей архитектуры безопаснее всего подключать Clarity там же, где уже находятся остальные аналитики обычных страниц:

- на типовых страницах root и `/en`:
  - после [js/main.js](D:/Github/systems-analysis-ru/js/main.js);
  - рядом с блоками Yandex.Metrika и Google Analytics;
  - перед закрывающим `</body>`;
- на главных страницах:
  - сохранить единый подход и тоже перейти на общий файл, даже если сейчас Clarity стоит в `<head>`.

Причина:

- это минимизирует вмешательство в SEO-метаданные и head-структуру большинства страниц;
- аналитика остаётся в уже существующей зоне подключения клиентских счётчиков;
- уменьшается риск случайно задеть `canonical`, `hreflang`, JSON-LD и Open Graph.

### Чего делать не рекомендуется

- не копировать inline-блок Clarity вручную в 125 страниц без вынесения в общий файл;
- не оставлять одновременно inline-Clarity на главных страницах и новый общий подключаемый файл;
- не внедрять Clarity в [js/main.js](D:/Github/systems-analysis-ru/js/main.js) или [js/theme-init.js](D:/Github/systems-analysis-ru/js/theme-init.js):
  - это смешает аналитику с прикладной логикой интерфейса;
  - [index.html](D:/Github/systems-analysis-ru/index.html) и [en/index.html](D:/Github/systems-analysis-ru/en/index.html) используют отдельную структуру и не опираются на тот же JS-контур;
- не рассчитывать, что правка только [template/template_rus.html](D:/Github/systems-analysis-ru/template/template_rus.html) покроет уже существующие страницы.

### Альтернативный допустимый вариант

Если нужно сделать быстро и без создания нового JS-файла, допустим и второй вариант:

- вставить inline-блок Clarity по аналогии с текущими главными страницами во все 127 HTML-файлов;
- затем обновить шаблон.

Но этот вариант хуже, потому что:

- код будет дублироваться во многих файлах;
- при смене Clarity ID потребуется ещё одна массовая правка;
- повышается риск расхождений между root и `/en`.

### Приемочные критерии для реализации

- Clarity подключён на всех 127 опубликованных HTML-страницах;
- нет страниц с двойной инициализацией Clarity;
- используется один и тот же Clarity ID `w6k4iidqav`;
- существующие блоки Yandex.Metrika и Google Analytics не повреждены;
- `canonical`, `hreflang`, JSON-LD и Open Graph не изменились побочно;
- [template/template_rus.html](D:/Github/systems-analysis-ru/template/template_rus.html) обновлён для будущих страниц.

### Проверка после внедрения

После выполнения желательно проверить отдельно:

- наличие подключения Clarity на всех опубликованных страницах;
- отсутствие дублей на [index.html](D:/Github/systems-analysis-ru/index.html) и [en/index.html](D:/Github/systems-analysis-ru/en/index.html);
- сохранность существующих аналитик Yandex и Google;
- отсутствие ошибок в консоли браузера на типовой русской и английской странице;
- отсутствие визуальных побочных эффектов и замедления первой отрисовки.

## Приемочная проверка: Microsoft Clarity на всех страницах

Проверен отчет разработчика [log/2026-04-06_clarity-deployment.md](D:/Github/systems-analysis-ru/log/2026-04-06_clarity-deployment.md) и фактическое состояние репозитория после внедрения Clarity на все страницы.

### Итог

- блокирующих дефектов не обнаружено;
- задача по репозиторию принята;
- внедрение выполнено аккуратно и соответствует рекомендованной безопасной схеме с общим loader-файлом.

### Что подтверждено фактически

- создан общий файл [js/clarity-init.js](D:/Github/systems-analysis-ru/js/clarity-init.js);
- в loader-файле используется текущий Clarity ID `w6k4iidqav`;
- в loader-файле есть защита от повторной инициализации:
  - `if (c[a]) return;`
- общий loader подключён на всех 127 опубликованных HTML-страницах;
- на опубликованных страницах не осталось inline-блоков Clarity;
- не найдено страниц с двойным подключением Clarity;
- шаблон [template/template_rus.html](D:/Github/systems-analysis-ru/template/template_rus.html) обновлён для будущих страниц.

### Подтвержденный охват

- опубликованных HTML-страниц проверено: 127;
- страниц с любым признаком Clarity: 127;
- страниц без Clarity: 0;
- страниц с ровно одним `<script ... clarity-init.js>`: 127;
- страниц с более чем одним подключением Clarity: 0;
- страниц с одновременным inline-Clarity и `clarity-init.js`: 0.

### Как реализовано

- на типовых русских страницах используется относительный путь:
  - `js/clarity-init.js`
- на типовых английских страницах используется относительный путь:
  - `../js/clarity-init.js`
- на англоязычной главной используется абсолютный путь:
  - `/js/clarity-init.js`

Распределение путей по опубликованным страницам:

- `js/clarity-init.js` -> 64 страницы;
- `../js/clarity-init.js` -> 62 страницы;
- `/js/clarity-init.js` -> 1 страница.

Это не выглядит дефектом:

- пути корректны для своей глубины;
- общий файл остаётся единым;
- нестандартный абсолютный путь используется только на [en/index.html](D:/Github/systems-analysis-ru/en/index.html), где layout изначально отличается от типового.

### Контрольные точки

- [index.html:490](D:/Github/systems-analysis-ru/index.html#L490) подключает общий Clarity loader вместо inline-блока;
- [en/index.html:124](D:/Github/systems-analysis-ru/en/index.html#L124) подключает общий Clarity loader вместо inline-блока;
- [action.html:208](D:/Github/systems-analysis-ru/action.html#L208) показывает типовую вставку на русской странице;
- [en/action.html:208](D:/Github/systems-analysis-ru/en/action.html#L208) показывает типовую вставку на английской странице;
- [template/template_rus.html:749](D:/Github/systems-analysis-ru/template/template_rus.html#L749) обновлён для будущих страниц.

### Сохранность других аналитик

- Yandex.Metrika по-прежнему присутствует на всех 127 опубликованных страницах;
- Google Analytics `gtag.js` по-прежнему присутствует на всех 127 опубликованных страницах;
- на типовых страницах Clarity добавлен после существующего блока Google Analytics, что минимизирует риск побочных эффектов.

### Остаточное ограничение проверки

- приёмка выполнена по репозиторию и по фактическому содержимому HTML/JS;
- live-проверка в браузере и по реальным HTTP-ответам не выполнялась;
- перед публикацией всё ещё желателен короткий smoke-test:
  - открыть русскую типовую страницу;
  - открыть английскую типовую страницу;
  - открыть [index.html](D:/Github/systems-analysis-ru/index.html);
  - открыть [en/index.html](D:/Github/systems-analysis-ru/en/index.html);
  - убедиться, что в сети/консоли нет ошибок и Clarity загружается один раз.

## Комплексная проверка: меню, ссылки и переключение пар `ru/en`

Выполнена комплексная проверка меню и языковых переключателей по всем опубликованным страницам проекта.

### Итог

- блокирующая логическая проблема найдена;
- верхнее меню в целом работает корректно;
- `hreflang` и парность файлов по репозиторию согласованы;
- но полное переключение `ru/en` для всех страниц нельзя считать корректным из-за футера русских страниц.

### Что проверено

- все опубликованные HTML-страницы root и [en](D:/Github/systems-analysis-ru/en);
- наличие парных файлов `ru/en`;
- переключение языка в верхнем меню;
- переключение языка в футере;
- наличие и корректность локальных ссылок меню;
- согласованность `hreflang` со структурой файлов.

### Подтверждено

- опубликованных HTML-страниц проверено: 127;
- `hreflang ru/en` корректен на всех 127 страницах;
- главные страницы переключаются корректно:
  - [index.html](D:/Github/systems-analysis-ru/index.html) -> `/en/`
  - [en/index.html](D:/Github/systems-analysis-ru/en/index.html) -> `/`
- стандартных русских страниц с меню: 63;
- стандартных английских страниц с меню: 62;
- в верхнем меню:
  - английские страницы переключаются в корректную русскую пару на всех 62 из 62;
  - русские страницы переключаются в корректную английскую пару на 62 из 63;
- единственное исключение в верхнем меню: [languages.html:82](D:/Github/systems-analysis-ru/languages.html#L82), где нет английской парной страницы, а ссылка `English` ведёт на [en/sections.html](D:/Github/systems-analysis-ru/en/sections.html) как на общий вход в английский раздел;
- битых локальных ссылок меню на существующие страницы проекта не найдено.

### Найденный дефект

- на всех 63 стандартных русских страницах ссылка `English` в футере ведёт не в парную английскую страницу, а на общий раздел `/en/`;
- это не 404-ошибка, но это некорректное переключение языковой пары страницы;
- пример:
  - [action.html:180](D:/Github/systems-analysis-ru/action.html#L180) ведёт на `/en/` вместо ожидаемого `/en/action.html`
- при этом английские страницы в футере реализованы правильно:
  - [en/action.html:180](D:/Github/systems-analysis-ru/en/action.html#L180) ведёт на `/action.html`

### Массовый результат

- корректный языковой переключатель в верхнем меню:
  - RU: 62 из 63
  - EN: 62 из 62
- корректный языковой переключатель в футере:
  - RU: 0 из 63
  - EN: 62 из 62
- русских футеров с общим `/en/` вместо парной страницы: 63.

### Что это означает

- если проверять именно меню, ситуация в целом хорошая;
- если проверять полное переключение `ru/en` по страницам, задача не принята, потому что футер русских страниц системно ломает переход в парную английскую версию;
- структура файлов и `hreflang` уже готовы для правильного решения, поэтому проблема локализована только в HTML-ссылках футера русских страниц.

### Рекомендация по исправлению

- на каждой русской странице заменить футерную ссылку `English`:
  - с `/en/`
  - на парный адрес `/en/<same-file>.html`
- для главной [index.html](D:/Github/systems-analysis-ru/index.html) оставить `/en/`;
- для [languages.html](D:/Github/systems-analysis-ru/languages.html) отдельно принять решение:
  - либо оставить переход в общий английский раздел;
  - либо создать полноценную английскую парную страницу и переключать уже на неё.

### Ограничение проверки

- ссылки `/wiki/` и `/eng/` не подтверждены по содержимому текущего репозитория, потому что соответствующие разделы отсутствуют в рабочем дереве;
- это не было засчитано как дефект меню проекта, но требует отдельной проверки в целевой публикации, если эти маршруты должны обслуживаться тем же сайтом.
