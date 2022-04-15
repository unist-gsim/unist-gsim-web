## Assignment 6
**제출 기한: 2021. 04. 23. 23:59**

아래 1개의 문제(Task)를 해결하는 Python 코드를 작성해서 문서 가장 아래에 있는 [제출 링크](https://docs.google.com/forms/d/e/1FAIpQLSfLWw9vE9Ehqj0cBhF9vVsprTQuckBvpppQKfIqPGlN3V5W5g/viewform?usp=sf_link)를 이용해 제출해주세요. 


### 실습 및 제출 방법

1. 각 문제의 **실습 링크** 를 눌러 실습 페이지로 이동한 뒤, Pythonpad 계정이 없으면 가입해서 계정을 생성하고 로그인해주세요. 
2. **[실습 페이지에서]** 코드를 작성해주세요 (또는 다른 곳에서 작업한 코드를 붙여넣어주세요).
3. **[실습 페이지에서]** 화면 아래의 **채점**(또는 **Grade**) 버튼을 눌러서 코드를 채점해주세요. 모든 테스트에 통과하고 화면 아래 **통과함**(또는 **Passed**) 표시가 나타나야 해당 문제 해결 완료입니다.\
  ![how to grade the exercise](/static/bat51501/assignments/images/grade_pass.png)

4. **[실습 페이지에서]** 채점이 완료된 뒤, 화면 아래의 **공유**(또는 **Share**) 버튼을 눌러 채점이 완료된 코드의 공유 URL을 복사해서 확보해주세요.\
  ![copy the share url](/static/bat51501/assignments/images/share_url.png)

5. 모든 문제를 해결한 뒤, 통합 제출 링크에서 각 문제별 공유 URL을 붙여넣어 제출해주세요.


### 주의사항

- 과제물은 제출 기한 내에 제출해주세요.

---------------------------------------

### Task 6: Movies
(100 Points)

**네이버 영화** 서비스의 [현재 상영중인 영화 평점순 영화 랭킹 웹 페이지](https://movie.naver.com/movie/sdb/rank/rmovie.naver?sel=cur&date=20220414) 의 소스 코드가 `dataset.py` 파일에 주어져 있습니다. (소스 코드를 읽어보려면 다음 [링크](/static/bat51501/downloads/movies.txt)를 클릭하세요.)

`from dataset import code` 로 가져올 수 있는 `code` 변수에는 해당 소스 코드가 문자열 (string) 값으로 담겨 있습니다. 이를 기반으로, 아래와 같이 3개의 함수를 `main.py` 파일에 작성해주세요.

1. `build_movies_dataset(code)`

파라미터로 웹 페이지의 소스 코드를 받아서 데이터를 분석해, 1위부터 49위까지의 영화 제목, 평점, 순위 정보를 추출해 dictionary 형태의 데이터셋으로 정리해서 반환하는 (return) 함수를 작성해주세요.

데이터셋의 key는 해당 영화의 제목 (제목 문자열의 맨 앞 또는 맨 뒤에 공백 문자열이 오지 않도록 주의), value는 각각 평점과 순위 정보를 담은 또다른 dictionary로, value dictionary에 각각 평점을 `"score"` key 와 짝이 되는 (pair) 실수 (float) 값으로, 순위를 `"rank"` key 와 짝이 되는 정수 (integer) 값으로 저장합니다. 

예:

```python
dataset = {
  "패왕별희 디 오리지널": {
    "score": 9.31,
    "rank": 1
  },
  "극장판 주술회전 0": {
    "score": 9.26,
    "rank": 2
  },
  ...
}
```

2. `recommend_movies(score, dataset)`

파라미터로 (parameter) 기준 점수와 (`score`) 데이터셋을 (`dataset`) 받아, 데이터셋에 있는 영화 중 기준 점수보다 높은 점수를 갖는 영화를 모두 찾아 해당 영화들의 제목들을 문자열들의 set으로 (set of strings) 반환하는 함수를 작성해주세요.

예: 
```python
>>> recommend_movies(9.2, dataset)
set(['패왕별희 디 오리지널', '극장판 주술회전 0', '기적'])
```


3. `search_movies(query, dataset)`

파라미터로 (parameter) 검색어 문자열과 (`query`) 데이터셋을 (`dataset`) 받아, 데이터셋에 있는 영화 중 검색어로 받은 문자열을 포함하는 제목을 갖는 영화를 모두 찾아 제목, 순위, 평점을 **순위의 오름차순으로** 정리한 문자열의 리스트를 (list of strings) 반환하는 함수를 작성해주세요.

반환하는 리스트의 각 문자열은, 대괄호 안에 순위를 적고, 한칸 띄고, 영화 제목을 적고, 한칸 띄고, 괄호 안에 평점을 소수점 아래 두 자리까지 적는 형태로 만들어주세요. 예를 들어, 1위인 패왕별희 디 오리지널은 `"[1] 패왕별희 디 오리지널 (9.31)"` 과 같은 문자열로 나타낼 수 있습니다.

예:
```python
>>> search_movies("여름", dataset)
['[9] 남매의 여름밤 (8.95)', '[38] 한여름의 판타지아 (7.80)']
```


#### 실습

- [실습 링크](https://www.pythonpad.co/pads/2auos8tvvui55hcw/exercise)

---------------------------------------

### 통합 제출 링크

- [제출 링크](https://docs.google.com/forms/d/e/1FAIpQLSfLWw9vE9Ehqj0cBhF9vVsprTQuckBvpppQKfIqPGlN3V5W5g/viewform?usp=sf_link)