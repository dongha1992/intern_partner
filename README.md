# 프로젝트 영상

[프로젝트 전체 영상](https://www.youtube.com/watch?v=cXahjdDukDs&t=310s)

# 프로젝트 요약

#### 1) 소개

- 렌카는 렌터카 중개 O2O 서비스 플랫폼 개발 및 공급사업을 하는 기업입니다. 렌터카를 요청하는 렌카 앱웹과 렌터카를 제공하는 IMS 앱웹을 개발하는 프로젝트를 진행하였습니다.

- 주로 보험사 직원이 사용하는 요청자 웹앱(동영상 오른쪽)에서 요청을 하면 주로 렌터카 업체에서 사용하는 제안 웹앱(동영상 왼쪽) 목록에 요청이 뜨고 제안을 하면 요청자가 선택하여 1:1 매칭해주는 플랫폼입니다. 요청부터 반납까지 비즈니스 로직에 따라 서버와 통신하며 프로젝트를 진행하였습니다.
 

#### 2) 기간

- 20.12.14 ~ 20.01.15 (5주)


#### 3) 인원

- 프론트엔드 3명, 백엔드 2명

 

#### 4) 역할

- 프론트엔드


# 사용 스택


### 프론트 엔드

1) Next.js(함수형, 클래스형)
2) Mobx
3) Sass
4) Socket.io


### 백엔드

1) Flask
2) Database Modeling (AQueryTool)
3) AWS


### 공통

1) Git / Github / Git-flow
3) Slack
4) Notion

# 프로젝트에서 수행한 역할

_팀원들과 회의 후 회원가입/로그인 페이지는 클래스형 컴포넌트를 사용하기로 했습니다._

## 👍 파트너 앱

### 0) 회원가입 페이지

#### 아이디 중복검사

![](https://images.velog.io/images/dongha1992/post/50361566-a1ba-479e-8c5a-5dec53f4bedf/%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8_%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%87%E1%85%A9%E1%86%A8%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1.gif)

 - 유효성 검사 및 애니메이션을 통해 회원 가입 페이지 구현
 
 - 사용자의 input을 Mobx에서 관리하고 Query String을 이용해 서버로 전송 후 중복검사 및 에러핸들링
 
![](https://images.velog.io/images/dongha1992/post/1aa2b2ca-7b5a-42e0-b942-e17f5a2f4e86/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.51.21.png)

#### 회사 찾기

![](https://images.velog.io/images/dongha1992/post/3518a6ba-f5cb-41da-86f8-c6471c891566/%E1%84%92%E1%85%AC%E1%84%89%E1%85%A1%E1%84%8E%E1%85%A1%E1%86%BD%E1%84%80%E1%85%B5.gif)

 - 서버에서 받은 회사 리스트를 검색 로직 구현

 - 생산성을 높이기 위해 Input 컴포넌트 재활용

 - Mobx를 활용해 state 관리
 

```search.js```
![](https://images.velog.io/images/dongha1992/post/a9f0fcac-d929-4c4e-9adc-9c1863a03cdc/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.10.05.png)

삼항으로 조건을 주고 공통 Input 컴포넌트에서 props를 수정 가능한 state로 만들었다. 
 
```input component```

![](https://images.velog.io/images/dongha1992/post/64d5d163-d199-4fb8-aeea-eb4e4400fbb4/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.11.04.png)

공통 콤포넌트의 input은 onChange에 삼항을 주어서 선택된 카드가 수정 가능한 상태로 만들었다.

![](https://images.velog.io/images/dongha1992/post/3fc494fe-3f2a-403f-8650-f08341a3302a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.12.13.png)

### 1) 채팅 페이지

![](https://images.velog.io/images/dongha1992/post/fe60e8a3-e8ad-4ec3-aec8-e20d35836b23/%E1%84%8E%E1%85%A2%E1%84%90%E1%85%B5%E1%86%BC.gif)
  
- Socket.io를 활용해 TCP통신 구현 **(직접 기획)**

예약이 확정되면 고객과 업체가 채팅이 가능하다. 원래는 댓글로 되어있던 부분을 팀 회의를 통해 채팅 기능으로 수정하기로 결정했고 Socket.io를 통해  TCP 통신을 했다. 

#### 🚨🚨🚨 Technical Debt 🚨🚨🚨

서버와 채팅 페이지를 진행하면서 몇 가지 문제가 생겼다. 먼저 Socket.io의 이해도 부족으로 인해 메시지가 쌓이면 느림 현상이 발생한 것. 메시지 10-15회 이상 주고 받으면 서버로 부터 엄청나게 많은 요청이 들어오게 된다. 

```chat.js```
![](https://images.velog.io/images/dongha1992/post/31229205-800c-418c-b6d8-2884eb29225f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%208.42.11.png)

connect 이후 join으로 id와 name을 서버로 전송하는데 connect와 join은 최초 렌더만 발생하고

![](https://images.velog.io/images/dongha1992/post/ebf6da0f-5e18-459b-b4f5-ea2ff91d0f81/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.21.23.png)

messages를 on으로 받을 때마다 ```useEffect```를 실행하는데 

![](https://images.velog.io/images/dongha1992/post/ec45d181-8da8-47db-a6f1-3861a4c454bc/error.gif)

메시지를 보낸 수만큼 서버에서 response가 들어온다. 백엔드 팀원과 room id, socket.id, 등 문제를 해결하려고 했지만 결국 해결하지 못한 채 부채로 남았다. 


### 2) 제안 목록 페이지

![](https://images.velog.io/images/dongha1992/post/f12fefb2-383b-4ff8-8932-38c137f1c09b/%E1%84%8C%E1%85%A6%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%8C%E1%85%AE%E1%86%BC-%3E%E1%84%8B%E1%85%A8%E1%84%8B%E1%85%A3%E1%86%A8%E1%84%92%E1%85%AA%E1%86%A8%E1%84%8C%E1%85%A5%E1%86%BC.gif)

_요청자(왼쪽)에서 제안을 선택하면 제안자(오른쪽)쪽에서 제안중 탭에 있던 카드가 예약확정으로 넘어간다. _

 - SSR(Server Side Rendering)으로 초기 View 로딩 속도 향상
 - Axios Custom Instance를 활용해 에러 선처리
 - Next.js의 동적 라우팅을 이용해 효과적인 routing
 
 #### 🦾🦾🦾 Issue & Solve 🦾🦾🦾

Next.js의 경우 디렉토리 구조로 곧 route가 되기 때문에 index.js파일에 ```[id].js```로 잡고 

![](https://images.velog.io/images/dongha1992/post/c9918b3b-0553-427b-913b-5cb6a3880a09/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.38.38.png)

```카드 클릭시 상세 페이지로 넘어가는 함수```
 
 ![](https://images.velog.io/images/dongha1992/post/2c02ad6f-97b1-40d5-89e2-81e4e08874c0/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.36.26.png)
 
```router.push```를 해주면 해당 페이지로 넘어갈 수 있다. 여기서 문제가 생겼는데 제안이 확정된 이후부터는 id값이 달라진다. 무슨 말이냐면  요청자에 의해 제안이 확정 되기 전에는 ```request_id```를 기준으로 end point를 잡았기 때문에 상세 페이지로 이동하기 위해서 해당 카드의 ```request_id```를 endpoint로 API를 요청했다. 

하지만 예약이 확정된 후 백엔드의 모델링 때문에 예약확정 상세페이지에 가기 위해서는 ```suggestion_id```를 end point로 써야 했다. ```
request_id```를 가지고 있던 상황에서 ```suggestion_id```도 가져와야 했기 때문에 ```suggestion_id```를 매번 Mobx에 state로 관리하는 불편한 상황이 발생했다. 

**하지만** ```router.push```를 하게 되면 ```getServerSideProps```의 ```context.query```로 id값을 가져올 수 있음을 알게 되었고 ```suggetion_id```를 넣어 문제를 해결했다.  

![](https://images.velog.io/images/dongha1992/post/87a82651-2811-4c7b-a63c-3e494af3cf17/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.46.19.png)


### 3) 제안 상세 페이지

![](https://images.velog.io/images/dongha1992/post/553c3e0a-0bfe-4b15-a76b-3eb634b82e3f/%E1%84%8B%E1%85%A8%E1%84%8B%E1%85%A3%E1%86%A8%E1%84%92%E1%85%AA%E1%86%A8%E1%84%8C%E1%85%A5%E1%86%BC.gif)

   - Query String을 이용해 서버로 통신
   - Next.js의 getServerSideProps를 적절하게 활용하여 서버로 데이터를 효과적으로 수신
   - 배차완료/반납완료 Request를 서버로 송신
   - 제안취소/배차취소시 DELTE 메서드를 POST하여 상태값을 받고 상태값에 맞게 UI 렌더
   
   
#### 🦾🦾🦾 Issue & Solve 🦾🦾🦾


예약 확정 상세 페이지 부터```request```와```suggestion```  두 개의 데이터가 들어오는데 여기서 문제가 발생했다. 

모델링에 따라 requst 데이터 안에 suggestion의 키값으로 데이터가 들어왔는데  **Proposal 컴포넌트도 공통으로 사용하다 보니** suggestion을 키값으로 잡고 데이터를 받아오면 삼항 연산자가 두 번 연달아 쓰여야 할 불편함이 생겼다. 

삼항 연사자를 두 번 쓰면 에러 확률이 높을 수 있다고 판단하여 백엔드 팀원과 상의 후 request, suggestion 키값으로 병렬 구조로 데이터를 받기로 하고 해결되었다. 


### 4) 회원 정보 페이지

![](https://images.velog.io/images/dongha1992/post/98797d73-93b2-4fbf-8321-7fe90fb14375/%E1%84%82%E1%85%A2%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%87%E1%85%A9.gif)

 - Cookie에 저장된 Token을 활용해 유저 데이터 수신

### 5) 직원 리스트 페이지

![](https://images.velog.io/images/dongha1992/post/1376d7f2-8bce-476f-a089-1acdddd20ebb/%E1%84%8C%E1%85%B5%E1%86%A8%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%85%E1%85%B5%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3.gif)

 - Css를 활용해 Toggle on/off Switch 구현 및 중첩 객체를 활용해 원하는 데이터만 수정
 - 직원 리스트에서 데이터 삭제 구현
 

![](https://images.velog.io/images/dongha1992/post/5506b759-94d5-4be5-a774-ee75e6199d42/%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%BA.gif)

- router를 이용하여 로그아웃 구현
