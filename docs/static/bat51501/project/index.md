## Final Project: Music Streaming
**제출 기한: 2021. 05. 07. 23:59**

많은 음악 스트리밍 웹사이트에서 실시간으로 인기있는 노래를 모아 Top 100 차트를 운영하고 있습니다. 본 프로젝트에서는, 여러 웹사이트에서 운영중인 차트를 수집, 가공해서 종합 순위 차트를 만들어내는 Python 프로그램을 작성해 봅니다.

실습 과제와 동일하게 Pythonpad 기반의 실습 페이지에서 아래 모든 문제를 (Task) 해결하는 Python 코드를 작성해서, 문서 가장 아래에 있는 제출 링크를 이용해 해당 코드의 공유 URL을 복사해서 제출해주세요. 추가로 본 프로젝트 과제에는 `main.py` 의 파일 내용도 복사해서 제출 링크에 함께 제출해주세요.


#### 공유 URL 복사하는 법

Pythonpad 실습 페이지에서 화면 아래의 **공유**(또는 **Share**) 버튼을 눌러 코드의 공유 URL을 복사해서 확보해주세요.\
![copy the share url](/static/bat51501/assignments/images/share_url.png)


#### 주의사항

- 기한 내에 프로젝트 결과물을 제출해주세요. 기한 내에 결과물을 제출하지 않는 경우 본 과목의 프로젝트 점수를 받을 수 없습니다.
- **웹 스크랩핑에 사용되는 소스 코드 원본 내용 전체를 Pythonpad에 직접 붙여넣지 마세요,** Pythonpad 기능 문제로 저장 후 다시 프로젝트를 불러와서 정상적으로 수정할 수 없게 될 수 있습니다. 문제 내용에 안내된 대로, `from dataset import bugs, melon` 을 사용해서 소스 코드 내용을 import 해주세요.

---------------------------------------

### Task 1-1: 웹 스크랩핑 1
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

### Task 1-2: 웹 스크랩핑 2
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

### Task 1-3: CSV 데이터 분석
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

---------------------------------------

### Task 2-1: 종합 순위 관리를 위한 클래스 구현
(15 Points)

여러 웹사이트에서 운영중인 차트를 수집, 가공해서 종합 순위 차트를 만들고 관리하기 위한 `Ranker` 클래스를 (class) `main.py` 파일에 만들고, (순위, 제목, 아티스트) 정보를 파라미터로 받아 클래스 어트리뷰트 (attribute) `rank_dict` 에 저장하는 클래스 메소드 (method) `add(rank, title, artist)` 를 작성해주세요.

`rank_dict` 는 `(제목, 아티스트)` tuple이 key, 해당 곡의 차트 상 순위를 정수의 리스트 (list of integers) 형태로 value로 갖는 딕셔너리로 만들어주세요.

예:

```python
>>> ranker = Ranker()
>>> ranker.rank_dict
{}
>>> ranker.add(1, '봄여름가을겨울 (Still Life)', 'BIGBANG (빅뱅)')
>>> ranker.rank_dict
{
  ('봄여름가을겨울 (Still Life)', 'BIGBANG (빅뱅)'): [1]
}
>>> ranker.add(1, 'LOVE DIVE', 'IVE (아이브)')
>>> ranker.rank_dict
{
  ('봄여름가을겨울 (Still Life)', 'BIGBANG (빅뱅)'): [1],
  ('LOVE DIVE', 'IVE (아이브)'): [1]
}
>>> ranker.add(2, '봄여름가을겨울 (Still Life)', 'BIGBANG (빅뱅)')
>>> ranker.rank_dict
{
  ('봄여름가을겨울 (Still Life)', 'BIGBANG (빅뱅)'): [1, 2],
  ('LOVE DIVE', 'IVE (아이브)'): [1]
}
>>> ranker.add(1, '봄여름가을겨울 (Still Life)', 'BIGBANG (빅뱅)')
>>> ranker.rank_dict
{
  ('봄여름가을겨울 (Still Life)', 'BIGBANG (빅뱅)'): [1, 2, 1],
  ('LOVE DIVE', 'IVE (아이브)'): [1]
}
>>> ranker.add(100, '오래된 노래', 'Standing Egg (스탠딩 에그)')
>>> ranker.rank_dict
{
  ('봄여름가을겨울 (Still Life)', 'BIGBANG (빅뱅)'): [1, 2, 1],
  ('LOVE DIVE', 'IVE (아이브)'): [1],
  ('오래된 노래', 'Standing Egg (스탠딩 에그)'): [100]
}

```

### Task 2-2: 클래스 내 데이터 저장/불러오기 구현
(10 Points)

`Ranker` 클래스의 `rank_dict` 에 저장되어 있는 차트 정보를 파일로 저장하고, 다시 그 파일을 불러와서 `rank_dict` 의 값을 복구할 수 있는 메소드 `save_data(filename)` 와 `load_data(filename)` 을 작성해주세요.

#### 저장

`save_data(filename)` 메소드는 파라미터로 저장할 파일의 이름을 문자열로 받아, `rank_dict` 의 내용물을 JSON 포맷으로 변환해 파일로 저장합니다. 이때, JSON 포맷으로 변환 시 딕셔너리의 key는 문자열 타입이어야 하므로 (제목, 아티스트) 투플 타입인 `rank_dict` 의 key를 `"제목__아티스트"` 형태의 문자열로 바꾼 뒤 JSON 포맷으로 변환합니다.

예를 들어, 아래와 같은 상태의 `Ranker` 오브젝트를 저장하면:

```python
>>> ranker.rank_dict
{
  ('봄여름가을겨울 (Still Life)', 'BIGBANG (빅뱅)'): [1, 2, 1],
  ('LOVE DIVE', 'IVE (아이브)'): [1],
  ('오래된 노래', 'Standing Egg (스탠딩 에그)'): [100]
}
>>> ranker.save_data("ranks.json")
```

**ranks.json** 파일은 다음과 같은 내용으로 저장되어야 합니다.

```json
{
  "봄여름가을겨울 (Still Life)__BIGBANG (빅뱅)": [1, 2, 1],
  "LOVE DIVE__IVE (아이브)": [1],
  "오래된 노래__Standing Egg (스탠딩 에그)": [100]
}
```

#### 불러오기

`load_data(filename)` 메소드를 실행하면, 파라미터로 받은 파일 이름을 가지고 이전에 저장했던 파일을 열어, 해당 내용을 기반으로 `rank_dict` 의 값을 복원합니다. 이때, 혹시 기존에 있던 `rank_dict` 에 데이터가 이미 저장되어 있더라도 해당 내용은 남기지 않고, 순수하게 JSON 파일에 있는 내용만 사용해서 `rank_dict` 의 값을 재구성하도록 합니다. 

```python
>>> ranker.rank_dict
{
  ('나는 트로트가 싫어요', '임창정'): [100]
}
>>> ranker.load_data("ranks.json")
>>> ranker.rank_dict
{
  ('봄여름가을겨울 (Still Life)', 'BIGBANG (빅뱅)'): [1, 2, 1],
  ('LOVE DIVE', 'IVE (아이브)'): [1],
  ('오래된 노래', 'Standing Egg (스탠딩 에그)'): [100]
}
```

---------------------------------------

### Task 3-1: 종합 순위 계산
(15 Points)

종합 차트 점수로 전체 노래 목록을 정렬, 각 노래 정보를 담은 문자열의 리스트를 (list of strings) 종합 차트 점수의 오름차순으로 반환하는 메소드 `get_sorted_titles()` 를 `Ranker` 클래스에 작성해주세요.

#### 종합 차트 점수

종합 차트 점수를 구할 때는, 모든 차트 순위의 평균값을 구하되, 모든 차트에서 100위 안에 들지 못한 노래들의 순위를 근사하기 위해 다음과 같은 방법을 사용합니다:

1. `rank_dict` 에서 가장 많은 순위 정보가 등록된 노래의 순위 등록 횟수를 `N` 이라 할 때, 
2. `N` 개의 순위 정보를 가진 노래는 등록된 모든 순위의 산술 평균을 사용하고
3. `N` 보다 작은 `n` 개의 순위 정보를 가진 노래는 `({등록된 모든 순위} + 101 x (N - n)) / N` 을 종합 차트 순위로 사용합니다.

예를 들어, `rank_dict` 의 값이 아래와 같을 때:

```python
>>> ranker.rank_dict
{
  ('봄여름가을겨울 (Still Life)', 'BIGBANG (빅뱅)'): [1, 2, 1],
  ('LOVE DIVE', 'IVE (아이브)'): [1],
  ('오래된 노래', 'Standing Egg (스탠딩 에그)'): [100]
}
```

*봄여름가을겨울 (Still Life)* 이 가장 많은 순위 정보 3개를 가지고 있으므로 `N = 3` 이고, 따라서 *봄여름가을겨울 (Still Life)* 의 점수는 `(1 + 2 + 1) / 3 = 1.33`, *LOVE DIVE* 의 점수는 `(1 + 101 + 101) / 3 = 67.67`, *오래된 노래* 의 점수는 `(100 + 101 + 101) / 3 = 100.67` 입니다.

#### 노래 정보를 담은 문자열

각 노래 정보를 담은 문자열의 리스트는, `[종합 차트 점수] 아티스트 - 제목` 형태로 만든 문자열을 사용하되, 종합 차트 점수는 소수점 세번째에서 반올림해주세요. 이때 종합 차트 점수를 감싼 대괄호 안에는 최소 6개의 문자가 들어갈 공간이 있어야 하고, 점수는 오른쪽 정렬 되어야 합니다.

예를 들면, 위와 동일한 `rank_dict` 값을 가질 때, `get_sorted_titles()` 의 반환값은 다음과 같습니다.

```python
>>> ranker.get_sorted_titles()
[
  '[  1.33] 봄여름가을겨울 (Still Life) - BIGBANG (빅뱅)',
  '[ 67.67] LOVE DIVE - IVE (아이브)',
  '[100.67] 오래된 노래 - Standing Egg (스탠딩 에그)',
]
```

### Task 3-2: 가수별 순위 계산
(15 Points)

종합 차트 가수 점수로 전체 가수 목록을 정렬, 각 가수 정보를 담은 문자열의 리스트를 (list of strings) 종합 차트 가수 점수의 내림차순으로 반환하는 메소드 `get_sorted_artists()` 를 `Ranker` 클래스에 작성해주세요.

#### 종합 차트 아티스트 점수

종합 차트 아티스트 점수를 구할 때는, 아티스트의 모든 노래에 대해 받은 모든 차트 순위를 모아, 해당 순위 값들의 역수를 모두 더하는 방법을 사용합니다.

예를 들어, `rank_dict` 에 아래와 같을 때, 

```python
>>> ranker.rank_dict
{
  ('봄여름가을겨울 (Still Life)', 'BIGBANG (빅뱅)'): [1, 2, 1],
  ('사랑은 늘 도망가', '임영웅'): [4, 6, 13],
  ('우리들의 블루스', '임영웅'): [11, 14, 7],
}
```

*BIGBANG (빅뱅)* 의 종합 차트 아티스트 점수는 `(1/1 + 1/2 + 1/1) = 2.5` 이고, *임영웅* 의 종합 차트 아티스트 점수는 `(1/4 + 1/6 + 1/13 + 1/11 + 1/14 + 1/7) = `0.799` 입니다.

#### 아티스트 정보를 담은 문자열

각 아티스트 정보를 담은 문자열의 리스트는, `[종합 차트 아티스트 점수] 아티스트 - 제목1, 제목2, 제목3, ...` 형태로 만든 문자열을 사용하되, 종합 차트 점수는 소수점 네번째에서 반올림해주세요. 이때 노래 제목의 순서는 사전 순서로 정렬합니다. 또한, 종합 차트 점수를 감싼 대괄호 안에는 최소 5개의 문자가 들어갈 공간이 있어야 하고, 점수는 오른쪽 정렬 되어야 합니다.

예를 들면, 위와 동일한 `rank_dict` 값을 가질 때, `get_sorted_artists()` 의 반환값은 다음과 같습니다.

```python
>>> ranker.get_sorted_artists()
[
  '[2.500] BIGBANG (빅뱅) - 봄여름가을겨울 (Still Life)',
  '[0.799] 임영웅 - 사랑은 늘 도망가, 우리들의 블루스',
]
```

---------------------------------------

### 실습 페이지

- [실습 링크](https://www.pythonpad.co/pads/46zcu4v0buydzbc0/exercise)

### 제출 링크

- [제출 링크](https://docs.google.com/forms/d/e/1FAIpQLScvNV26Zh-9TQZhO7i9CUiZsnG5PImajCs6MWBILx2OGY1laQ/viewform?usp=sf_link)
