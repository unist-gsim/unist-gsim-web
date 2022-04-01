## Assignment 4
**제출 기한: 2021. 04. 09. 23:59**

아래 2개의 문제(Task)를 해결하는 Python 코드를 작성해서 문서 가장 아래에 있는 [제출 링크](https://docs.google.com/forms/d/e/1FAIpQLSfEkXQoArnBJPpUhgTc2CievmOLw-2kob8EUTRIqDqdtZAZlg/viewform?usp=sf_link)를 이용해 제출해주세요. 


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

### Task 4-1: Calculator
(50 Points)

덧셈, 뺄셈이 가능한 계산기를 만들어주세요.

우선, 코드에 전역 변수 (global variable) `answer` 를 만들어주시고, 다음 조건을 만족하는 `calc` 함수(function)를 만들어주세요.

- 해당 함수는 한 개의 string 값 `operator` 와 한 개의 integer 값 `value` 를 파라미터(parameter)로 받습니다.
- 해당 함수는 `operator` 가 `"+"` 인 경우, 전역 변수 `answer` 의 값에 파라미터 `value` 를 더해줍니다. (`answer = answer + value`)
- 해당 함수는 `operator` 가 `"-"` 인 경우, 전역 변수 `answer` 의 값에서 파라미터 `value` 를 빼 줍니다. (`answer = answer - value`)

1. `input` 함수를 사용해서 사용자에게 첫 `answer` 값을 입력받고,
2. `input` 함수를 두 번 사용해서 사용자에게 차례로 `operator` 값과 `value` 값을 입력받은 뒤,
3. 입력받은 내용에 따라 계산을 수행한 결과로 변화된 전역변수 `answer` 의 값을 보여주고,
4. 사용자에게 `"y"` 또는 `"n"` 을 입력받아 `"y"` 로 답한 경우 2번부터 다시 계산을 수행하는 계산기 프로그램을 작성해주세요. "n" 을 입력하면 프로그램이 종료됩니다.

#### 예시

```
Start with? 2
Operator (+/-)? +
Value? 1
Answer is 3
Continue (y/n)? y
Operator (+/-)? +
Value? 4
Answer is 7
Continue (y/n)? y
Operator (+/-)? -
Value? 8
Answer is -1
Continue (y/n)? n
```

위 예시에서 각 줄의 `?` 이후에 입력된 `2.3`, `+`, `1.5` 등은 프로그램 실행 후 사용자가 직접 입력한 값의 예시 입니다.

#### 실습 및 제출

- [실습 링크](https://www.pythonpad.co/pads/i1kgx2nbjw70c78f/exercise)

---------------------------------------

### Task 4-2: Object-oriented Calculator
(50 Points)

위의 Task 4-1 과 같은 기능을 하는 계산기를 `Calculator` 클래스를 사용해서 만들어주세요.

다음 조건을 만족하는 클래스 `Calculator` 를 만들어주세요.

- 해당 클래스는 생성자 (constructor) 에서 한 개의 integer 값을 받아, 오브젝트에 `answer` 속성 (attribute) 으로 저장합니다. 
- 해당 클래스는 메소드 `operate` 를 가지며, 이 메소드는 한 개의 string 값 `operator` 와 한 개의 integer 값 `value` 를 파라미터(parameter)로 받습니다.
- `operate` 메소드는 `operator` 가 `"+"` 인 경우, 속성 (attribute) `answer` 의 값에 파라미터 `value` 를 더해줍니다.
- `operate` 메소드는 `operator` 가 `"-"` 인 경우, 속성 (attribute) `answer` 의 값에서 파라미터 `value` 를 빼 줍니다.

1. `input` 함수를 사용해서 사용자에게 첫 `answer` 값을 입력받아 `Calculator` 클래스의 오브젝트를 만들어 전역 변수 `calc` 에 저장하고, (`calc = Calculator(first_value)`)
2. `input` 함수를 두 번 사용해서 사용자에게 차례로 `operator` 값과 `value` 값을 입력받은 뒤,
3. 입력받은 내용에 따라 계산을 수행한 결과로 변화된 `calc.answer` 의 값을 보여주고,
4. 사용자에게 `"y"` 또는 `"n"` 을 입력받아 `"y"` 로 답한 경우 2번부터 다시 계산을 수행하는 계산기 프로그램을 작성해주세요. "n" 을 입력하면 프로그램이 종료됩니다.

#### 예시

```
Start with? 2
Operator (+/-)? +
Value? 1
Answer is 3
Continue (y/n)? y
Operator (+/-)? +
Value? 4
Answer is 7
Continue (y/n)? y
Operator (+/-)? -
Value? 8
Answer is -1
Continue (y/n)? n
```

위 예시에서 각 줄의 `?` 이후에 입력된 `2.3`, `+`, `1.5` 등은 프로그램 실행 후 사용자가 직접 입력한 값의 예시 입니다.

#### 실습 및 제출

- [실습 링크](https://www.pythonpad.co/pads/pdpuxyf1blbgt5fv/exercise)

---------------------------------------

### 통합 제출 링크

- [제출 링크](https://docs.google.com/forms/d/e/1FAIpQLSfEkXQoArnBJPpUhgTc2CievmOLw-2kob8EUTRIqDqdtZAZlg/viewform?usp=sf_link)