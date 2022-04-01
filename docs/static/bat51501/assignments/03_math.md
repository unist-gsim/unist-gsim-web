## Assignment 3
**제출 기한: 2021. 04. 02. 23:59**

아래 2개의 문제(Task)를 해결하는 Python 코드를 작성해서 문서 가장 아래에 있는 [제출 링크](https://docs.google.com/forms/d/e/1FAIpQLSdDyqNLvX3YW9owGy2blrFY9k9w1QG3CFIwm55FHrxUvmnhEQ/viewform?usp=sf_link)를 이용해 제출해주세요. 


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

### Task 3-1: Addition
(70 Points)

Robot이 두 수의 덧셈을 할 수 있도록 해주세요.

`add1.wld`, `add2.wld`, `add34.wld` 세 개의 world를 불러오면, world의 가장 아래쪽 두 줄에 각각 beeper로 수(number)가 표시되어 있습니다. Robot을 하나 만들어 beeper를 모두 주우며 두 수를 읽고, world의 맨 아랫줄에 동일한 방법으로 beeper를 사용해서 두 수를 더한 값을 표시해주는 프로그램을 작성해주세요.

프로그램 실행 중 오류가 발생하지 않아야 하며, 덧셈을 끝낸 뒤 정상적으로 종료되어야 합니다.

작성하신 프로그램은 코드의 `load_world(...)` 부분만 수정해서 각각 `add1.wld`, `add2.wld`, `add34.wld` 을 불러올 때 모두 정상적으로 덧셈을 수행할 수 있어야 합니다.

#### 예시

프로그램 실행 시작, 종료시 (add1.wld, 2 + 3 = 5)

![before](/static/bat51501/assignments/images/03_add1_before.png)

![after](/static/bat51501/assignments/images/03_add1_after.png)

프로그램 실행 시작, 종료시 (add34.wld, 987 + 1304 = 2291)

![before](/static/bat51501/assignments/images/03_add34_before.png)

![after](/static/bat51501/assignments/images/03_add34_after.png)

#### 실습

- [실습 링크](https://www.pythonpad.co/pads/d7ozcv2z45zfbv4e/exercise)

---------------------------------------

### Task 3-2: Being Euclid
(30 Points)

우선 다음 조건을 만족하는 `is_triangle` 함수(function)를 만들어주세요.

- 해당 함수는 세 개의 float 값을 파라미터(parameter)로 받습니다.
- 해당 함수는 **파라미터로 받은 세 개의 값을 각 세 변의 길이로 갖는 삼각형이 존재할 수 있는지의 여부**에 따라 `True` 또는 `False` 를 반환(return)합니다.

`input` 함수를 사용해서 사용자가 세 개의 float 값을 키보드로 입력할 수 있도록 하고, 해당 세 개의 float 값을 각 세 변의 길이로 갖는 삼각형이 존재할 수 있는지의 여부에 따라 **YES** 또는 **NO** 메시지를 `print` 함수로 출력해주세요. 

#### 예시

```
Side a: 2.3
Side b: 4.3
Side c: 5.6
YES
```

위 예시에서 `2.3`, `4.3`, `5.6` 은 프로그램 실행 후 사용자가 직접 입력한 값의 예시 입니다.

#### 실습 및 제출

- [실습 링크](https://www.pythonpad.co/pads/v85oc9g7i0l64s2h/exercise)

---------------------------------------

### 통합 제출 링크

- [제출 링크](https://docs.google.com/forms/d/e/1FAIpQLSdDyqNLvX3YW9owGy2blrFY9k9w1QG3CFIwm55FHrxUvmnhEQ/viewform?usp=sf_link)