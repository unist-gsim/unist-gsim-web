# How to set up Python programming environment on your computer

개인 컴퓨터에 Python 프로그래밍 환경을 구축하는 방법은 다음과 같습니다.

### 1. Python을 다운로드 및 설치합니다.

[Python 공식 홈페이지의 다운로드 페이지](https://www.python.org/downloads/) 에서, "Download the latest version for ..." 라고 써있는 큰 글씨 아래의 노란 버튼 (Download Python 3.x.x) 을 눌러 최신 버전의 Python을 다운로드 받습니다.

설치할 때 설정을 따로 건드리지 않고, 설치 폴더도 기본 설정 그대로 설치하기를 권장합니다.

설치 중간에 "Install launchers for all users (recommended)", "Add Python 3.x to PATH" 체크박스가 보이면 반드시 체크된 상태로 만들고 진행합니다.

### 2. PyCharm IDE를 다운로드 및 설치합니다.

PyCharm 이외에도 사용할 수 있는 다양한 코드 에디터가 있지만, 이 문서에서는 PyCharm을 사용하는 방법 만을 다룹니다. 

[PyCharm IDE 공식 홈페이지의 다운로드 페이지](https://www.jetbrains.com/pycharm/download/)에서, "Community" 버전을 다운로드 합니다 (Professional 버전은 유료입니다).

### 3. Pillow 라이브러리를 설치합니다.

[명령 프롬프트](https://ko.wikihow.com/%EC%9C%88%EB%8F%84%EC%9A%B0%EC%A6%88%EC%97%90%EC%84%9C-%EB%AA%85%EB%A0%B9-%ED%94%84%EB%A1%AC%ED%94%84%ED%8A%B8%EB%A5%BC-%EC%97%AC%EB%8A%94-%EB%B0%A9%EB%B2%95)를 실행하고 (Mac OS 사용자는 [터미널](https://support.apple.com/ko-kr/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac#:~:text=Mac%EC%97%90%EC%84%9C%20%EB%8B%A4%EC%9D%8C%20%EC%A4%91%20%ED%95%98%EB%82%98,%ED%84%B0%EB%AF%B8%EB%84%90%EC%9D%84%20%EC%9D%B4%EC%A4%91%20%ED%81%B4%EB%A6%AD%ED%95%98%EC%8B%AD%EC%8B%9C%EC%98%A4.)을 실행합니다), 나타난 화면에 "pip3 install pillow" 라고 (큰 따옴표는 제외하고) 입력한 뒤 엔터 키를 누릅니다.

### 4. 이제 PyCharm 을 사용해 Python 코드를 작성하고 실행할 수 있습니다.

PyCharm 을 실행하고, 새 Python 프로젝트를 만든 뒤 코드를 작성하고 실행해볼 수 있습니다. 자세한 방법은 [PyCharm 제작사인 Jetbrains 의 공식 문서](https://www.jetbrains.com/help/pycharm/creating-and-running-your-first-python-project.html)에 자세히 서술되어 있으니 참조해주세요.

### 5. CS1 라이브러리를 다운로드합니다.

`cs1robots`, `cs1media`, 또는 `cs1graphics` 라이브러리를 사용하려면 [링크](/bat51501/downloads/cs1_modules.zip)에서 해당 라이브러리들을 다운로드하고 압축을 풀어주세요. 

코드를 작성하고, 해당 코드와 같은 폴더에 압축을 풀어 나온 .py 파일들을 모두 넣어주면, `cs1robots`, `cs1media`, `cs1graphics` 라이브러리를 코드에서 사용할 수 있습니다.