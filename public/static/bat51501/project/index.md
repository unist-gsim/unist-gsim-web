## Final Project: Music Streaming
**제출 기한: 2021. 05. 07. 23:59**

많은 음악 스트리밍 웹사이트에서 실시간으로 인기있는 노래를 모아 Top 100 차트를 운영하고 있습니다. 본 프로젝트에서는, 여러 웹사이트에서 운영중인 차트를 수집, 가공해서 종합 순위 차트를 만들어내는 Python 프로그램을 작성해 봅니다.

실습 과제와 동일하게 Pythonpad 기반의 실습 페이지에서 아래 모든 문제를 (Task) 해결하는 Python 코드를 작성해서, 문서 가장 아래에 있는 제출 링크를 이용해 해당 코드의 공유 URL을 복사해서 제출해주세요. 


#### 공유 URL 복사하는 법

Pythonpad 실습 페이지에서 화면 아래의 **공유**(또는 **Share**) 버튼을 눌러 채점이 완료된 코드의 공유 URL을 복사해서 확보해주세요.\
![copy the share url](/static/bat51501/assignments/images/share_url.png)


#### 주의사항

기한 내에 프로젝트 결과물을 제출해주세요. 기한 내에 결과물을 제출하지 않는 경우 본 과목의 프로젝트 점수를 받을 수 없습니다.


### Task 1-1: 웹 스크랩핑 - 벅스
(15 Points)

[벅스뮤직의 벅스차트 웹 페이지](https://music.bugs.co.kr/chart) 에서 1위부터 100위까지의 곡 정보가 표시된 표 (table) 부분만 소스 코드를 추출한 데이터가 `dataset.py` 파일에 주어져 있습니다. (해당 소스 코드를 읽어보려면 다음 [링크](/static/bat51501/project/bugs.txt) 를 클릭하세요. 추출된 시점의 웹 페이지 내용은 [링크](/static/bat51501/project/bugs.pdf) 에서 보실 수 있습니다.)

`from dataset import bugs` 로 가져올 수 있는 `bugs` 변수에는 해당 소스 코드가 문자열 (string) 값으로 담겨 있습니다. `main.py` 파일에 `build_bugs_dataset(code)` 함수를 만들어주시고, 파라미터로 해당 소스 코드를 받아서 데이터를 분석해, 1위부터 100위까지의 곡에 대한 정보를 순서대로 딕셔너리의 리스트로 (list of dictionaries) 만들어서 반환해주는 (return) 코드를 작성해 주세요.

각 곡에 대한 정보 중 **순위**, **곡 제목**, **아티스트** 정보를 추출, 각각 `"rank"`, `"title"`, `"artist"` key에 대응하는 value로 해당 정보를 저장해주시면 됩니다. 이때, 순위 정보는 정수 (integer) 값으로 저장해주세요.

예:

```python
>>> from dataset import bugs
>>> bugs_dataset = build_bugs_dataset(bugs)
>>> print(bugs_dataset)
[
  {'rank': 1, 'title': 'LOVE DIVE', 'artist': 'IVE (아이브)'},
  {'rank': 2, 'title': '봄여름가을겨울 (Still Life)', 'artist': 'BIGBANG (빅뱅)'},
  ...
  {'rank': 100, 'title': '장미꽃의 전설', 'artist': '송가인'}
]
```

### Task 1-2: 웹 스크랩핑 - 멜론
(20 Points)

[멜론의 TOP100 차트 웹 페이지](https://www.melon.com/chart/index.htm) 의 소스 코드가 `dataset.py` 파일에 주어져 있습니다. (해당 소스 코드를 읽어보려면 다음 [링크](/static/bat51501/project/melon.txt) 를 클릭하세요. 추출된 시점의 웹 페이지 내용은 [링크](/static/bat51501/project/melon.pdf) 에서 보실 수 있습니다.)

`from dataset import melon` 으로 가져올 수 있는 `melon` 변수에는 해당 소스 코드가 문자열 (string) 값으로 담겨 있습니다. Task 1-1에서와 동일하게, `main.py` 파일에 `build_melon_dataset(code)` 함수를 만들어주시고, 파라미터로 해당 소스 코드를 받아서 데이터를 분석해, 1위부터 100위까지의 곡에 대한 정보를 순서대로 딕셔너리의 리스트로 (list of dictionaries) 만들어서 반환해주는 (return) 코드를 작성해 주세요.

각 곡에 대한 정보 중 **순위**, **곡 제목**, **아티스트** 정보를 추출, 각각 `"rank"`, `"title"`, `"artist"` key에 대응하는 value로 해당 정보를 저장해주시면 됩니다. 이때, 순위 정보는 정수 (integer) 값으로 저장해주세요.

예:

```python
>>> from dataset import melon
>>> melon_dataset = build_melon_dataset(melon)
>>> print(melon_dataset)
[
  {'rank': 1, 'title': '봄여름가을겨울 (Still Life)', 'artist': 'BIGBANG (빅뱅)'},
  {'rank': 2, 'title': 'LOVE DIVE', 'artist': 'IVE (아이브)'},
  ...
  {'rank': 100, 'title': '나는 트로트가 싫어요', 'artist': '임창정'}
]
```

### Task 1-3: CSV 데이터 분석 - 지니뮤직
(10 Points)

[지니뮤직의 지니차트 웹 페이지](https://www.genie.co.kr/chart/top200) 에서 1위부터 100위까지의 곡 정보를 추출, 가공해 CSV 포맷으로 만들어 둔 정보가 `genie.csv` 파일에 아래와 같이 주어져 있습니다.

파일 내용:

```
"rank", "title", "artist"
"1", "봄여름가을겨울 (Still Life)", "BIGBANG (빅뱅)"
"2", "LOVE DIVE", "IVE (아이브)"
...
```

`main.py` 파일에 `load_genie_dataset(filename)` 함수를 만들어주시고, 파리미터로 해당 파일의 경로를 받아서 파일 내용을 읽은 뒤, 1위부터 100위까지의 곡에 대한 정보를 순서대로 딕셔너리의 리스트로 (list of dictionaries) 만들어서 반환해주는 (return) 코드를 작성해 주세요.

Task 1-1, 1-2와 동일하게 각 곡에 대한 정보 중 **순위**, **곡 제목**, **아티스트** 정보를 추출, 각각 `"rank"`, `"title"`, `"artist"` key에 대응하는 value로 해당 정보를 저장해주시면 됩니다. 이때, 순위 정보는 정수 (integer) 값으로 저장해주세요.

예: 

```python
>>> genie_dataset = load_genie_dataset("genie.csv")
>>> print(genie_dataset)
[
  {'rank': 1, 'title': '봄여름가을겨울 (Still Life)', 'artist': 'BIGBANG (빅뱅)'},
  {'rank': 2, 'title': 'LOVE DIVE', 'artist': 'IVE (아이브)'},
  ...
  {'rank': 100, 'title': '오래된 노래', 'artist': 'Standing Egg (스탠딩 에그)'}
]
```

### Task 2-1: 종합 순위 관리를 위한 클래스 구현
(15 Points)

여러 웹사이트에서 운영중인 차트를 수집, 가공해서 종합 순위 차트를 만들고 관리하기 위한 `Ranker` 클래스를 (class) 만들고, (순위, 제목, 아티스트) 정보를 파라미터로 받아 클래스 어트리뷰트 (attribute) `rank_dict` 에 저장하는 클래스 메소드 (method) `add(rank, title, artist)` 를 작성해 주세요.



### Task 2-2: 클래스 내 데이터 저장/불러오기 구현
(10 Points)


### Task 3-1: 종합 순위 계산
(10 Points)

### Task 3-2: 가수별 순위 계산
(10 Points)

### Task 3-3: 검색 기능 구현
(10 Points)