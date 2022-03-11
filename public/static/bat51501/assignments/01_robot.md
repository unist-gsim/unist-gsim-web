## Assignment 1 
**제출 기한: 2021. 03. 19. 23:59**

아래 3개의 문제(Task)를 해결하는 Python 코드를 작성해서 각 문제별 제출 링크를 이용해 제출해주세요. 

### 실습 및 제출 방법

1. 각 문제의 **실습 링크** 를 눌러 실습 페이지로 이동한 뒤 코드를 작성해주세요 (또는 다른 곳에서 작업한 코드를 붙여넣어주세요).
2. **[실습 페이지에서]** 화면 아래의 **채점**(또는 **Grade**) 버튼을 눌러서 코드를 채점해주세요. 모든 테스트에 통과하고 화면 아래 **통과함**(또는 **Passed**) 표시가 나타나야 해당 문제 해결 완료입니다.
3. **[실습 페이지에서]** 채점이 완료된 뒤, 화면 아래의 **다운로드**(또는 **Download**) 버튼을 눌러 채점이 완료된 코드를 다운로드해주세요.
4. 다운로드 된 파일의 이름을 **{Task 번호}-{학번}.pypad.json** 으로 변경해주세요. (예: Task 1-1이고, 학번이 20221234인 경우, **1-1-20221234.pypad.json**)
5. 해당 문제의 **제출 링크** 를 누르고, 앞서 이름을 변경한 .pypad.json 파일을 업로드 해주세요.

### 주의사항

- 과제물은 제출 기한 내에 제출해주세요.
- 실습 페이지의 **저장** 기능은, 웹 브라우저 임시 저장소를 이용하기 때문에 안정성이 보장되지 않습니다. \
작업중인 코드를 안전하게 저장하고 싶으시면, 코드를 복사해서 다른 곳에 붙여넣어 보관해 주세요.

---------------------------------------

### Task 1-1: Harvest
(30 Points)

Robot을 하나 만들고, 해당 로봇이 `harvest1.wld` world에 있는 모든 beeper를 줍는 프로그램을 작성하세요. 프로그램 실행 중 오류가 발생하지 않아야 하며, beeper를 모두 주운 뒤 정상적으로 종료되어야 합니다.

#### 예시

프로그램 실행시

![before](/static/bat51501/assignments/images/01_harvest1_before.png)

프로그램 실행 종료시

![before](/static/bat51501/assignments/images/01_harvest_after.png)

#### 실습 및 제출

- [실습 링크](/pads/harvest)
- [제출 링크](https://www.dropbox.com/request/9Hgygg3UXP9ekToixNmx)

---------------------------------------

### Task 1-2: Plant
(30 Points)

Robot을 하나 만들고, 해당 로봇이 `harvest3.wld` world를 돌아다니면서 beeper들 사이사이에 있는 빈 틈을 메워, 마치 `harvest1.wld` 처럼 보이게 만들어주는 프로그램을 작성하세요. 프로그램 실행 중 오류가 발생하지 않아야 하며, beeper를 모두 주운 뒤 정상적으로 종료되어야 합니다.

#### 예시

프로그램 실행시

![before](/static/bat51501/assignments/images/01_plant_before.png)

프로그램 실행 종료시

![before](/static/bat51501/assignments/images/01_plant_after.png)

#### 실습 및 제출

- [실습 링크](/pads/plant)
- [제출 링크](https://www.dropbox.com/request/9Hgygg3UXP9ekToixNmx)

---------------------------------------

### Task 1-3: Harvest +
(40 Points)

Robot을 하나 만들고, 해당 로봇이 `harvest4.wld` world에 있는 모든 beeper를 줍는 프로그램을 작성하세요.

해당 world에는 두 개 이상의 beeper가 놓여있는 칸들이 있음에 유의해주세요.

프로그램 실행 중 오류가 발생하지 않아야 하며, beeper를 모두 주운 뒤 정상적으로 종료되어야 합니다.

또한, 작성하신 프로그램은 코드의 `load_world(...)` 부분만 수정해서 `harvest4.wld` 대신 `harvest1.wld` 을 불러와도, `harvest3.wld` 를 불러와도 문제없이 world에 있는 모든 beeper를 주울 수 있어야 합니다. 

#### 예시

프로그램 실행시

![before](/static/bat51501/assignments/images/01_harvest4_before.png)

프로그램 실행 종료시

![before](/static/bat51501/assignments/images/01_harvest_after.png)

#### 실습 및 제출

- [실습 링크](/pads/harvest_plus)
- [제출 링크](https://www.dropbox.com/request/9Hgygg3UXP9ekToixNmx)
