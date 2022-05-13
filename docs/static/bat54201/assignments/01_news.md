## Assignment 1
**제출 기한: 2022. 5. 27. 23:59**

아래 문제를 해결하는 Python 코드를 작성해서 제출해주세요.

- 문서 가장 아래에 있는 **스켈레톤 코드** 를 다운로드 받아, 해당 코드 내용을 수정하는 방법으로 과제를 수행해주세요.
- 완성된 코드는 문서 가장 아래에 있는 **제출 링크** 를 이용해 제출해주세요.


### 주의사항

- **과제물 작성에는 지정된 외부 라이브러리만 사용할 수 있습니다.** 제출한 과제물의 채점은 Python 3.10 버전을 사용해 이루어지며, Python 설치 시 포함되는 내장 라이브러리 (The Python Standard Library) 이외에는 다음 라이브러리만 추가로 사용할 수 있습니다: **bs4 (Beautiful Soup 4.11)**, **nltk (NLTK 3.7)**.
- **과제물은 제출 기한 내에 제출해주세요.** 제출 기한을 넘겨 제출한 경우 점수의 50%를 패널티로 감점합니다. 2022년 6월 18일 이후 제출하는 경우에는 0점입니다.
- **과제물은 다른 사람의 도움 없이 혼자 작성해야 합니다.** 과제물 작성 시 인터넷에 공개된 소스 코드를 참조한 경우, 제출하는 코드에 주석으로 해당 사실을 명시하고 참조한 코드의 URL을 첨부해주세요. 다른 사람의 과제물을 참조해서는 안 됩니다.

---------------------------------------

### Task 1: News
(100 Points)

**The Guardian** 지의 기사 몇 편을 다음 [웹 페이지](/static/bat54201/assignments/pages/01_articles.html)에 모아두었습니다.

아래와 같이 몇 가지 함수를 작성해서 해당 웹 페이지에 링크된 뉴스 기사 페이지로부터 데이터를 수집하고, 수집된 데이터를 간단히 분석해보세요.

1. `download_html(url)`

파라미터로 웹 페이지의 URL을 받아서 해당 URL에 있는 웹 페이지 내용을 다운로드 받아 문자열 (string) 값으로 반환하는 (return) 함수를 (function) 작성해주세요.

예:

```
>>> html_code = download_html("https://unist.online/static/bat54201/assignments/pages/01_articles.html")
>>> print(html_code)
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>News Articles</title>
  </head>
  <body>
    <div class="main">
...(이하 생략)
```

2. `get_linked_urls(html_code)`

파라미터로 문자열 (string) 타입의 HTML 코드를 받아서 해당 HTML 문서 내에 있는 모든 `a` 태그를 찾아, 링크된 URL을 문자열의 리스트 값으로 (list of strings) 반환하는 함수를 작성해주세요.

예:

```
>>> urls = get_linked_urls(html_code)
>>> print(urls)
[
  "https://unist.online/static/bat54201/assignments/pages/01_tesla.html",
  "https://unist.online/static/bat54201/assignments/pages/01_iphone.html",
  "https://unist.online/static/bat54201/assignments/pages/01_terra.html"
]
```

3. `download_article_body(url)`

파라미터로 The Guardian 지의 뉴스 기사 URL을 받아서 해당 URL에 있는 뉴스 기사의 본문 내용을 문자열 값으로 반환하는 함수를 작성해주세요.

예:

```
>>> article = download_article_body("http://localhost:3000/static/bat54201/assignments/pages/01_terra.html")
>>> print(article)
Billions were wiped off the cryptocurrency market...
(중간 생략)
...The collapse of terra may not turn out to be a Lehman Brothers for the cryptocurrency world, but it shows what it could look like.
```

4. `get_nltk_text(raw_text)`

파라미터로 문자열 (string) 타입의 값을 받아서 해당 문자열을 NLTK 라이브러리의 `word_tokenize` 함수를 사용해 단어 단위 토큰으로 나눈 뒤, 이를 가지고 NLTK 의 `Text` 타입 오브젝트를 (`nltk.text.Text`) 생성해 반환하는 함수를 작성해주세요.

예:

```
>>> article = download_article_body("http://localhost:3000/static/bat54201/assignments/pages/01_terra.html")
>>> text = get_nltk_text(article)
>>> print(type(text))
<class 'nltk.text.Text'>
>>> print(text[:8])
['Billions', 'were', 'wiped', 'off', 'the', 'cryptocurrency', 'market']
```

5. `get_word_counts_dict(text)`

파라미터로 NLTK의 `Text` 타입 오브젝트 `text` 를 받아, 해당 데이터 내에 등장하는 모든 단어와 등장 횟수를 key-value로 하는 딕셔너리 (dictionary) 값을 반환하는 함수를 작성해주세요.

예:

```
>>> text = get_nltk_text("The collapse of terra may not turn out to be a Lehman Brothers for the cryptocurrency world, but it shows what it could look like.")
>>> word_counts_dict = get_word_counts_dict(text)
>>> print(type(word_counts_dict))
<class 'dict'>
>>> print(word_counts_dict)
{'The': 1, 'collapse': 1, 'of': 1, 'terra': 1, 'may': 1, 'not': 1, 'turn': 1, 'out': 1, 'to': 1, 'be': 1, 'a': 1, 'Lehman': 1, 'Brothers': 1, 'for': 1, 'the': 1, 'cryptocurrency': 1, 'world': 1, ',': 1, 'but': 1, 'it': 2, 'shows': 1, 'what': 1, 'could': 1, 'look': 1, 'like': 1, '.': 1}
```

---------------------------------------

### 과제 수행 방법

아래 링크에서 스켈레톤 코드를 다운로드 받아, 해당 코드를 수정해서 과제를 수행해주세요.

[스켈레톤 코드 링크](/static/bat54201/assignments/codes/news.py)

완성된 코드는 파일 이름을 `본인학번.py` 로 변경한 뒤 (예: `20221234.py`), 아래 링크에서 제출해주세요.

[제출 링크](https://www.dropbox.com/request/IqT7aTYaEEqW72gnz1V1)
