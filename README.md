
#    제로은행

###  개발 기간 : 2023 01 27 ~ 2월 內

## 개요

🏧 손쉽게 휴대폰으로 제로은행이 제공하는 서비스를 이용할 수 있습니다.  

 ✅ 직접 은행에 방문하여 담당자와 상담 과정을 통해 처리하던 금융 업무를 전자기기를 통해 
     처리하기 위한 플랫폼입니다.  

 🖌️ 개발 기능 <br>
    1. 회원가입 기능 구현 <br>
    2. 회원가입 후 로그인  기능구현 (소셜 로그인: 구글) <br>
    3. 제로은행 계좌 불러오기 기능 구현 <br>
    4. 계좌 잔액 조회 기능 구현 <br>
    5. 계좌 이체 기능 구현 <br>
    6. 지출 차트 기능 구현 (연도별 또는 월별) <br>

## 진행상황 세부내용


### 2주차 2023.01.31

- 페이지 로딩화면 구현

### 로그인

- 로그인 페이지 구현
- 소셜 로그인 기능 구현 (파이어베이스 구글인증)

### 회원가입

- 회원가입 페이지 구현
- 이메일 중복 여부 기능 구현

### 2주차 2023.02.02

### 마이페이지

- 마이 페이지 구현
- 계좌 등록하기 버튼

        -  계좌등록 버튼 기능 구현 (클릭시 계좌 정보 불러오기)

            1. 계좌등록 버튼 클릭시 modal 창 띄우기 

                1. 계좌 정보는 더미데이터 활용 (더미 데이터 개발 중)

                2. ‘확인’, ‘취소’ 버튼 필요

           2. 계좌 불러오는 roading 화면 구현

- 홈 메뉴 버튼

       - 계좌 잔액 조회 버튼 

            1. 클릭 시 현재 계좌 잔액을 불러오는 페이지로 이동 구현 필요

       -  계좌 이체 버튼

             1. 클릭 시 이체 페이지로 이동

- 차트 메뉴 버튼

       - 연도 별 계좌 사용내역 불러오기 기능 필요
       
### 2주차 2023.02.05

- 마이 페이지 구현

        -  계좌연동 버튼 기능 구현 (클릭시 계좌 정보 불러오기)

- 계좌 연동하기 버튼

            1. 계좌연동 버튼 클릭시 modal 창 띄우기 

                1. 계좌 정보는 회원가입 시 작성한 계좌번호 이용

                2. ‘확인’, ‘취소’ 버튼

           2. 계좌 불러오는 roading 화면 구현

     3. 연동 후 계좌 정보 localstorage 활용하여 데이터 유지

          1. 로그아웃 시 localstorage key, value 삭제

- 홈 메뉴 버튼

       - 계좌 잔액 조회 버튼 

            1. 클릭 시 2차 비밀번호 (button 활용한 6자리 UI)

                - 2차 비밀번호 123456 고정

      2. 잔액 조회 modal 페이지 이동

       -  계좌 이체 버튼

             1. 클릭 시 2차 비밀번호 (button 활용한 6자리 UI)
             
             
### 3주차 2023.02.08


- 홈 메뉴 버튼

       - 계좌 잔액 조회 버튼 

             1. 잔액 조회 페이지 이동

             2. 조회 데이터 페이지네이션 구현

             3. 목록별 입금, 출금 내역 조회

       -  계좌 이체 버튼

            1. 가상의 계좌로부터 충전, 송금 중 계좌 잔액 부족시 에러 표시 구현필요

            2. 송금 완료 후 송금 완료 표시 구현필요

- 차트 메뉴 버튼

       - 연도 별 계좌 사용내역 불러오기 구현필요
       

### 파이어베이스 호스팅 주소 : https://zerobase-bank.web.app
