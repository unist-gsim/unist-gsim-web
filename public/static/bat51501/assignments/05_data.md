## Assignment 5
**제출 기한: 2021. 04. 16. 23:59**

아래 1개의 문제(Task)를 해결하는 Python 코드를 작성해서 문서 가장 아래에 있는 [제출 링크](https://docs.google.com/forms/d/e/1FAIpQLSc1yLbfvn2A0IQFMXdgAnc2oHTdw-DcNiY8jJ5GYiO4qhXc8g/viewform?usp=sf_link)를 이용해 제출해주세요. 


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

### Task 5: Global Analytics
(100 Points)

전 세계에 있는 국가에 대한 국명, 수도명, 위도, 경도 데이터가 `dataset.py` 파일에 주어져 있습니다. 

`from dataset import countries` 로 가져올 수 있는 `countries` 변수에는 해당 데이터가 리스트의 리스트 (list of lists) 형태로 담겨 있으며, `countries` 리스트의 각 원소 (element) 는 길이 4의 리스트로, 담겨있는 값은 순서대로 국명, 수도명, 위도, 경도입니다. 

```python
countries = [
  ["Afghanistan", "Kabul", 34.98300013, 63.13329964],
  ["Albania", "Tirana", 41.51899817, 19.79700359],
  ["Algeria", "Algiers", 36.82199703, 5.76600356],
  # ...
  ["Zimbabwe", "Harare", -17.51961668, 30.97003699],
]
```

해당 데이터를 기반으로, 아래와 같이 3개의 함수를 `main.py` 파일에 작성해주세요.

1. `get_southern_countries()`

주어진 데이터에서 남반구에 있는 국가를 모두 찾아, 해당되는 국가명을 모두 리스트 (list) 형태로 반환하는 (return) 함수를 작성해주세요. 

예: 남반구에 있는 국가를 모두 찾은 결과가 Angola, Argentina, Australia, Bolivia 인 경우, 국가 순서에 관계없이 `['Angola', 'Argentina', 'Australia', 'Bolivia']` 와 같이 리스트를 반환합니다.

2. `get_capital_of_country(country_name)`

파라미터로 (parameter) 국가 이름을 받아, 주어진 데이터에서 이름이 일치하는 국가를 찾아 수도명을 문자열 (string) 값으로 반환하는 함수를 작성해주세요. 해당하는 국명을 가진 국가를 찾지 못했거나, 데이터에 해당 국가의 수도명이 빈 문자열일 경우 (`""`), `"No Data"` 를 반환해주세요. 

예: `get_capital_of_country("Afghanistan")` 을 실행하면 `"Kabul"`, `get_capital_of_country("Zimbabwe")` 를 실행하면 `"Harare"`, 그리고 수도 데이터가 없는 `get_capital_of_country("Palau")` 또는 실제로 없는 국가명을 가지고 `get_capital_of_country("Imaginary")` 등을 실행하면 `"No Data"` 가 반환되어야 합니다. 

3. `get_hottest_countries(count)`

파라미터로 1 이상의 정수 값 `count` 를 받아, 주어진 데이터에서 적도에 가장 가까운 순서대로 (위도가 0에 가까운 순서대로) `count` 개의 국가명을 리스트 형태로 반환하는 함수를 작성해주세요. `count` 의 값으로 데이터에 있는 국가의 갯수보다 큰 수가 주어지지는 않는다고 가정합니다.

예: `get_hottest_countries(3)` 을 실행하면 `['Uganda', 'Kenya', 'Congo [drc]']` 가 반환되어야 합니다.


#### 실습

- [실습 링크](https://www.pythonpad.co/pads/948c6tbokbk125dg/exercise)

---------------------------------------

### 통합 제출 링크

- [제출 링크](https://docs.google.com/forms/d/e/1FAIpQLSc1yLbfvn2A0IQFMXdgAnc2oHTdw-DcNiY8jJ5GYiO4qhXc8g/viewform?usp=sf_link)