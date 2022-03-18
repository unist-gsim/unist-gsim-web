## Assignment 2
**제출 기한: 2021. 03. 26. 23:59**

아래 3개의 문제(Task)를 해결하는 Python 코드를 작성해서 문서 가장 아래에 있는 [제출 링크](https://docs.google.com/forms/d/e/1FAIpQLSfEplxOLx4NRXb5AhHJ56njbk9FvUujpPa-jm5LlAisGZvPRg/viewform?usp=sf_link)를 이용해 제출해주세요. 


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

### Task 2-1: Return
(30 Points)

Robot을 만들 때, 아래와 같이 처음 생성될 때의 가로, 세로 위치와 바라보는 방향을 지정할 수 있습니다.

```python
bot = Robot(orientation='W', avenue=7, street=5)
```

- `orientation` 값은 바라보는 방향을 지정하는 것으로, `'W'`는 서쪽 (West), `'E'`는 동쪽 (East), `'N'`은 북쪽 (North), 그리고 `'S'`는 남쪽 (South) 을 가리킵니다. 
- `avenue` 값은 왼쪽 끝에서 몇 번째 위치에 생성될 지를 지정하고, 
- `street` 값은 아래쪽 끝에서 몇 번째 위치에 생성될 지를 지정합니다.

`create_world()` 를 사용해 world를 생성한 뒤 **임의의 위치에서 임의의 방향을 바라보도록 Robot 을 생성하고**, 해당 로봇이 world 의 가장 왼쪽 아래 위치로 이동하도록 하는 프로그램을 작성하세요. 프로그램 실행 중 오류가 발생하지 않아야 하며, 로봇이 해당 위치로 이동한 뒤에는 정상적으로 프로그램이 종료되어야 합니다.

작성하신 프로그램은 코드의 `Robot(...)` 부분만 수정해서 `orientation`, `avenue`, `street` 값을 임의로 변경하더라도 문제없이 로봇이 world 의 가장 왼쪽 아래 위치로 이동할 수 있어야 합니다.

#### 예시

프로그램 실행 종료시

![after](/static/bat51501/assignments/images/02_return_after.png)

#### 실습 및 제출

- [실습 링크](https://www.pythonpad.co/pads/6740oz9m2bmr0zzm/exercise)

---------------------------------------

### Task 2-2: Rain
(40 Points)

아래와 같이 `rain1.wld` world를 불러온 뒤, world에 있는 **집** 입구에 Robot을 하나 만들어주세요.

```python
load_world('worlds/rain1.wld')
bot = Robot(beepers=100, avenue=2, street=6, orientation='E')
```

해당 로봇을 움직여, 아래 예시와 같이 **집** 안을 돌며 벽 중간에 열린 부분마다 (창문) beeper를 내려놓는 프로그램을 작성하세요. 처음 로봇이 생성된 곳은 **집의 입구** 이므로 프로그램 종료시 beeper가 없어야 한다는 점에 유의해주세요.

프로그램 실행 중 오류가 발생하지 않아야 하며, beeper를 모두 주운 뒤 정상적으로 종료되어야 합니다.

또한, 작성하신 프로그램은 코드의 `load_world(...)` 부분만 수정해서 `rain1.wld` 대신 `rain2.wld` 을 불러와도 문제없이 아래 예시와 같이 beeper를 창문마다 내려놓을 수 있어야 합니다.

#### 예시

프로그램 실행 종료시 (rain1.wld)

![after](/static/bat51501/assignments/images/02_rain1_after.png)

프로그램 실행 종료시 (rain2.wld)

![after](/static/bat51501/assignments/images/02_rain2_after.png)

#### 실습 및 제출

- [실습 링크](https://www.pythonpad.co/pads/3bumkuctct9sr1x8/exercise)

---------------------------------------

### Task 2-3: Color Poster
(30 Points)

실습 문제에 주어진 코드는 `cs1media` 라이브러리를 사용해서 이미지 파일을 읽고 이를 흑백 포스터로 변환하는 프로그램입니다.

이 프로그램을 수정해서 이미지 파일을 읽고 이를 3색 포스터로 변환하는 프로그램을 작성해주세요.

- **밝은 픽셀**들은 노란색으로 바꾸세요.
- **어두운 픽셀**들은 파란색으로 바꾸세요.
- 나머지 픽셀은 녹색으로 바꾸세요.

여기서 **밝은 픽셀** 이란 픽셀을 이루는 빨간색, 녹색, 파란색 (RGB) 의 평균값이 **200 이상** 인 픽셀을 말하고, **어두운 픽셀** 이란 픽셀을 이루는 빨간색, 녹색, 파란색 (RGB) 의 평균값이 **100 미만** 인 픽셀을 말합니다.

3색 포스터의 노란색은 빨간색, 녹색, 파란색 (RGB) 이 각각 **(255, 255, 0)** 의 값을 갖도록, 파란색은 각각 **(0, 0, 255)** 의 값을 갖도록, 녹색은 각각 **(0, 255, 0)** 의 값을 갖도록 해주세요. 

`images/ducks.jpg` 파일을 읽고 이 이미지 파일을 3색 포스터로 변환하면 됩니다. 
프로그램 실행 중 오류가 발생하지 않도록 해주세요.

#### 예시

프로그램 실행 전

![before](/static/bat51501/assignments/images/02_ducks.jpeg)

프로그램 실행 후

![after](/static/bat51501/assignments/images/02_ducks_after.png)

#### 실습 및 제출

- [실습 링크](https://www.pythonpad.co/pads/rdl0ydk5qt9t4bvf/exercise)

---------------------------------------

### 통합 제출 링크

- [제출 링크](https://docs.google.com/forms/d/e/1FAIpQLSfEplxOLx4NRXb5AhHJ56njbk9FvUujpPa-jm5LlAisGZvPRg/viewform?usp=sf_link)