# **About team Seoulminer - mining codes**

- FrontEnd: [양회진](https://github.com/hjyang369), [이지원](https://github.com/jiwon614118)
- BackEnd: [신동현](https://github.com/donghyeun02), [최리나](https://github.com/lchoe24), [하준수](https://github.com/joonsooha123)
- 개발기간: 2023.06.23 ~ 2023.07.07
- 깃헙 링크
    - [FrontEnd](https://github.com/wecode-bootcamp-korea/47-1st-seoulminer-frontend)
    - [BackEnd](https://github.com/wecode-bootcamp-korea/47-1st-seoulminer-backend)
    

---

## Clone Coding project - 배민문방구

- 웹 개발의 첫 걸음을 뗀 seoulminers는 사람들이 가장 일상적으로 영위하는 행동 중 하나인 상거래를 웹페이지로 구현해 보기로 했다.
- 그러던 중 우리의 눈에 발견된 우아한형제들의 우아한 브랜드, [배민문방구](https://brandstore.baemin.com/)
- 우리에게 주어진 시간은 단 2주. 2번만의 스프린트 안에 최대한 클론 할 수 있는 범위 내에서 우당탕탕 이나마 굴러가는 프로덕트를 만들어 내야 한다.

---

## 우리가 구현해야 할 행위 - 전자상거래

인터넷이 우리 생활에 보급된 이래, 사람들이 현실세계에서 영위하는 행동들 중 많은 수가 온라인의 세계로 이식되었다. 특히 상거래는 단언컨대 유사 이래 가장 많이 수행된 사람과 사람 사이의 상호작용일 것이다. 인류의 근간을 이루는 상거래 행위부터 차근차근 구현해 보기로 했다.

구현에 앞서, PEFT 분석을 통해 개발 청사진을 그리고 방향성을 잡고자 한다.

---

## PEFT 분석

### Product: 우리의 프로덕트가 커버하는 제품과 서비스는 어떤 종류의 것일까?

1. eCommerce를 영위: 네트워크 상에서 이루어지는 제품의 거래
    1. 실제로 제품을 보고 구매의사결정을 내리는 것이 아닌, 웹페이지에 게시된 정보를 바탕으로 구매의사결정을 내리게 됨. 따라서 제공 가능한 선에서 상품에 대한 상세 정보를 제공할 수 있어야 함.
    2. 구매의사 결정 및 지불이 끝났다고 해서 바로 상품을 수령할 수 있지 않으므로, 상품의 인도에 있어 필요한 정보가 잘 관리되어야 함.
2. 취급품목: 재미있는 소품
    1. 특이하고 기성품이 아닌 이벤트성 상품을 판매함.
    2. 가격대도 높은 편이 아님. 부담없이 구매할 수 있는 수준.
    3. 예컨대, 친구에게 장난으로 선물하면 좋을 물건.

### End-user: 우리의 프로덕트는 어떤 사람이 사용하게 될까?

1. 재미있는 소품을 사용할 만한 사람들
    1. 이 사람들은 특이한 물건을 사용하는 것을 / 특이한 선물을 하는 것을 좋아한다. 
    2. 따라서 주 이용 연령층은 max 30대 정도로 추정된다.
    3. 또한 일상적인 구매(식자재 구매와 같은)가 이뤄지는 것은 아니다.
    
    → 그렇기 때문에, 프로덕트의 접근성은 약간의 희생이 있어도 괜찮다.
    

### Feature: 우리의 프로덕트는 어떤 기능을 가지고 있어야할까?

eCommerce를 운영하기 위해서는, 최소한 아래의 기능을 가지고 있어야 한다고 판단된다.

1. SignUp: 엔드유저를 인지하는 회원가입 기능.
    1. 어떤 사람이 어떤 품목을 얼마만큼 구매했는지를 알 수 있어야 한다. 이를 위해서는 해당하는 엔드유저를 특정할 수 있어야 하며, 회원가입을 통해 웹페이지 내의 활동에 대해 엔드유저를 특정할 수 있다.
    2. 아울러 특정 엔드유저의 주소지 등에 대한 정보도 관리해야 구매건에 대해 배송등의 사후처리도 수행할 수 있다.
    3. 따라서 회원가입 기능 및 엔드유저 정보 관리 기능은 이커머스에 있어 근간이 되는 기능이다.
2. SignIn: 엔드유저의 구매행위를 지원하고 분석하는 로그인 기능.
    1. 로그인 기능을 통해, 어떤 엔드유저가 웹페이지 상에서 어떤 행동을 취했는지 파악할 수 있다.
    2. 특히 eCommerce는 거래가 메인이 되는 만큼, 거래의 주체를 정확히 특정하고 파악할 수 있어야 한다. 이를 위해서는 로그인 기능은 필수다.
3. ProductView: 엔드유저에게 상품의 정보를 제공하는 상품조회 기능.
    1. 상품을 팔기 위해서는, 구매자가 해당 상품에 대한 정보를 제공받을 수 있어야 한다.
    2. 상품의 물리적 실체를 관찰하고 구매의사를 내릴 수 있는 것이 아니다 보니, 매체 안에서 제공할 수 있는 한도 안에서 최대한 상세한 정보를 전달해야 한다. 
    3. 상품의 리스트도 볼 수 있어야 하고, 개별상품에 대한 접근도 가능해야 한다.
4. Cart: 엔드유저가 구매의사가 있는 상품의 데이터를 저장하는 장바구니 기능.
    1. 엔드유저의 구매 편의성을 위해, 장바구니 기능을 제공해야 한다.
    2. 엔드유저는 로그인한 상태에서 본인이 구매하고자 하는 상품들을 담아두었다가 한번에 구매를 할 수 있어야 한다.
5. Order: 엔드유저의 구매이력을 확인, 확정하는 주문서 기능.
    1. 엔드유저가 구매한 상품에 대해, 판매자도 그 내역을 확인해야 상품의 배송 등의 사후절차를 진행할 수 있다.
    2. 아울러 관계법령 상 거래에 대한 정보는 일정 기간 보관되어야 한다.

### Tech: 우리가 사용할 기술스택

- 기술스택
    - fe : 자바스크립트, 리액트, SCSS
        - <div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /><img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="65" height="65" /><img src="https://techstack-generator.vercel.app/sass-icon.svg" alt="icon" width="65" height="65" /></div>
    - be : javascript, node.js, express, mysql
        - <div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /><img src="https://techstack-generator.vercel.app/nginx-icon.svg" alt="icon" width="65" height="65" /><img src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="icon" width="65" height="65" /></div>
        - express
- 협업툴
<div>
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/Slack-4A154B?style=flat&logo=Slack&logoColor=white"/>
<img src="https://img.shields.io/badge/Trello-0052CC?style=flat&logo=Trello&logoColor=white"/>
<img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white"/>
<img src="https://img.shields.io/badge/VSCode-007ACC?style=flat&logo=Visual Studio Code&logoColor=white"/>
</div>

---

## 내가 이번 프로젝트에 기여한 내용

1. Product manager, Project manager 활동
    1. Product manager
        1. 팀이 개발해야 할 내용이 무엇인지에 대해 분석 및 방향성 제시
        2. 수립한 방향성에 맞게 개발할 기능에 대해 정의
        3. 개발 과정 중간 중간 개발 상황 체크 및 피드백 제시
        4. 개발 결과물 취합하여 데모데이 시 결과물 발표 수행
    2. Project manager 
        1. 팀원이 언제든 참조할 수 있고 의견을 개진할 수 있는 스페이스 세팅 및 제공(Notion)
        2. 각종 회의체 구성 및 진행(standup, retrospective, planning)
        3. 개발 진행 일정 체크
2. ERD 설계 및 업데이트
    1. 초기 설정된 개발방향성에 맞는 ERD 설계 및 작성
    2. 개발 진행에 따라 ERD 수정이 필요한 경우, 상황에 맞게 수정작업 진행
3. dummydataset 제작 및 배포
    1. 클론코딩 프로젝트의 결과물을 확인할 수 있는 더미데이터셋 제작 및 공유
    2. 해당 더미데이터셋을 다른 팀원들이 손쉽게 활용할 수 있도록 사용방법 기술 및 제공
4. ProductView - as a backend developer
    1. 구현 시 고려사항
        1. 상품 목록 출력: 단순히 전체 상품 목록을 출력하는 것이 아닌, 필터링, 소팅, 페이지네이션을 고려하여 다양한 곳에 활용할 수 있도록 구현해야 했음.
        2. 상품 상세내역 출력: DB 구조상 products 테이블이 product_options 테이블과 함께 엮여 있음을 고려하여, 상품 상세내역을 출력할 때 상품의 옵션 정보도 함께 조회할 수 있도록 구현해야 했음.
    2. 작동기전
        1. 상품 목록 출력
            1. Router 레벨: 엔드포인트 뒤의 쿼리스트링을 필터링, 소팅, 페이지네이션의 변수 인자로 받아 전달함.
            2. Controller 레벨: request로 전달받은 쿼리스트링을 정제하여 서비스 레벨로 전달함. 만약 전달받은 쿼리스트링이 없으면 디폴트값으로 설정하여 전달함.
            3. Service 레벨: 상품검색 기능 수행. 만약 미리 설정되지 않은 쿼리스트링 인자라면 에러메세지 토출하게 설정.
            4. Dao 레벨: 인자로 전달받은 쿼리스트링을 쿼리빌더를 통해 쿼리문으로 변환하고, 변환된 쿼리문을 적용한 상품목록 검색을 수행하여 반환함.
        2. 상품 상세내역 출력
            1. Router 레벨: 엔드포인트의 패스파라미터로서 product_id를 인식하여 전달.
            2. Controller 레벨: 전달받은 product_id를 정제하여 서비스 레벨에 전달.
            3. Service 레벨: 전달받은 product_id를 검색하는 로직 실행. 만약 존재하지 않는 product_id일 경우 에러메세지 토출하게 설정.
            4. Dao 레벨: 전달받은 product_id를 사용하여 상품상세내역 조회 쿼리문 실행. INNER JOIN문을 통해 products 테이블과 products_options 테이블을 엮어 조회하며, 중복되는 정보는 JSON_ARRAYAGG와 JSON_OBJECT를 사용하여 가독성 높임.
    3. 특기할만한 기술 / 코드 / 방법
        1. queryBuilder 모듈: Dao 레벨에서 사용하는 모듈. 쿼리스트링으로 전달되는 다양한 변수들을 Dao레벨에 적용하여 사용할수 있는 쿼리문으로 변환시켜줌.

---

## 데모영상

[Team SeoulMiners DEMO](https://youtu.be/t2XcuRR5fUA)

---

## 참고자료

- Notion Teamspace - Seoulminer
    
    [https://www.notion.so/Home-Seoulminer-6ec547cfd20d4b64949230fa66d3a34d?pvs=4](https://www.notion.so/Home-Seoulminer-6ec547cfd20d4b64949230fa66d3a34d?pvs=21)
    
- Trello - Ticket management
    
    [Trello](https://trello.com/b/UuPuThmi/teamseoulminer)
    
- dbdiagram - ERD
    
    [A Free Database Designer for Developers and Analysts](https://dbdiagram.io/d/6498e51a02bd1c4a5e0b0349)
    
- Postman - Seoulminer API
    
    [Seoulminer](https://documenter.getpostman.com/view/27927438/2s93zFXeiA)
    
- REACT
    
    [React – 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리](https://ko.legacy.reactjs.org/)
    

---

## 추가적으로 구현해보고 싶었던 것들

- 장바구니, 주문결제 기능 개선: 현재는 장바구니를 통해 주문결제된 상품에 대해 데이터를 DB에서 hard delete 하는 방식으로 관리중인데, 이럴 경우 엔드유저가 장바구니에 담았던 상품에 대해 과거 이력을 조회할 수 없다. soft delete 하는 형식으로 바꿔서 데이터 이력을 남기는 방식으로 수정해 보고 싶다. 이럴 경우 엔드유저가 장바구니에 담았던 상품에 대한 데이터를 쌓을 수 있어 비즈니스 의사결정에 도움을 줄 수 있을 것이다.
- 상품검색 기능: 검색기능의 경우, 근본적으로 필터링의 일종이라고 한다. 이번 프로젝트 스코프에서는 검색기능이 포함되지 않았는데, 다음 번 프로젝트를 진행할 때는 검색기능도 스코프 안에 포함시켜 구현해보고 싶다.
- 상품리뷰 작성 / 게재 / 조회 기능: 상품 관련 정보 제공에 있어, 실제 사용해 본 사람의 언급만큼 귀중한 정보가 없을 것이다.
- 어드민 기능: 엔드유저에는 고객도 있지만, 어드민도 있다. 서비스의 관리 측면에서 필요한 기능을 고민해 보고 싶다.
- 아이디저장: 세션 활용하여 프론트에서 저장 할 수 있는 기능. 다음 프로젝트때는 구현하고 싶음.
- 상품목록 정렬 (최신순, 가격순) : 벡엔드 서버와 통신하여 서버에서 정해놓은 상품 정렬 목록을 불러와 UI 로 그려주는 작업.
- 소셜로그인: 엔드유저 입장에서 간편한 회원가입, 로그인 절차를 경험하게 할 수 있음.
- 제대로 된 PG 이식: 실제 현업에서 사용하는 PG기능도 도전해 보고 싶다.

---

## Reference

- 이 프로젝트는 [배민문방구](https://brandstore.baemin.com/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트 이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제가 될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것으로, 해당 프로젝트 외부인이 사용할 수 없습니다.
