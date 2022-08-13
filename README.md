# FactoryUI

## 설명

전체적으로 애니메이션 요소를 많이 넣었습니다. User가 웹페이지에 들어갔을 때, 이러한 애니메이션 요소는 색다른 경험을 줄 수 있습니다.  
개인적으로 제가 생각하기에 정적인 요소들만 배치해서는 웹페이지가 맛이 없어지는 것이 당연하다고 생각하였고.
따라서, 랜딩 페이지들을 찾아 보거나, 때로는 동적인 애니메이션이 들어간 영상을 보며 아이디어를 얻고자 하였습니다.

## 구현하고자 한 것

 * 애니메이션 요소를 많이 넣어 웹페이지를 좀더 생동감 있게 만들고자 함.
    * KeyFrame을 사용하는 엘리먼트들을 여럿 배치하였습니다
  
 * 스크롤 이벤트에 대한 이해를 높이고자 함.
    * 특정 위치까지 스크롤 하였을 때, 애니메이션이 나오는 기능을 구현하였습니다.
    * behavior="smooth" 가 작동 안할 때, 대체 가능한 방법을 고안하였습니다.
 * 모바일 환경에서 메뉴 아이콘을 클릭했을 때 SideBar가 나오게 함.
    * PC와는 다르게 모바일 화면에서는 NavBar를 클릭하여 Submenu를 사용하는 것이 어렵습니다. 따라서, 메뉴 아이콘을 클릭헀을 때, 오버레이 창과 함께 Sidebar가 나오게 만들었습니다.

## 기능

### Fixed 된 톱니바퀴 애니메이션
![bandicam_2022-08-12_14-09-50-162_AdobeExpress](https://user-images.githubusercontent.com/31788366/184289756-eed6b88a-2c4e-4159-9a62-9b22a4f519b8.gif)

### Navbar
![bandicam_2022-08-12_14-10-35-136_AdobeExpress](https://user-images.githubusercontent.com/31788366/184289755-5fd2e5de-6b5d-4cfc-bfb0-bde799842bf3.gif)

### Overlay Sidebar
![bandicam_2022-08-12_14-11-16-112_AdobeExpress](https://user-images.githubusercontent.com/31788366/184289750-6e463abe-9f69-42f5-bbd2-8f455a8daf67.gif)

### 유튜브 동영상 재생
![bandicam_2022-08-12_14-11-44-486_AdobeExpress](https://user-images.githubusercontent.com/31788366/184289747-98a49bbb-deb5-4566-a4e7-6424abfe8412.gif)

### 특정 위치까지 스크롤 하였을 때, 애니메이션이 나오는 기능
![bandicam_2022-08-12_14-12-16-326_AdobeExpress](https://user-images.githubusercontent.com/31788366/184289742-b710199a-c703-4678-a894-9997954a64cf.gif)

### Scroll Top 기능, 그러나 이제 NPM을 곁들인..
![bandicam_2022-08-12_14-12-37-992_AdobeExpress](https://user-images.githubusercontent.com/31788366/184289735-a11dc908-986e-440c-a1c4-b03dea394cde.gif)


## 문제점

 * 코드 재사용성이 낮음
    * 전체적으로 다른 프로젝트에 적용할 만한 기능이 많지 않습니다.
       * Navbar를 만들때, 하드코딩을 하였다는 점이 이러한 코드는 나중에 컨텐츠를 추가할 때, 가독성이 떨어지며, 비용도 높아집니다.
 * vw, vh 요소를 웹페이지에 너무 많이 넣었습니다.
    * 반응형 웹페이지를 제작할 때, 많이 쓰이는 요소라고 하지만, 넣으면 안되는 엘리먼트도 있습니다 (ex: 글자의 크기같은 경우 화면의 크기가 작아져도 px로 유지시키는 것이 더 좋은 경우, height를 px로 유지해야 더 나은 경우)
    
## 예정

  * Navbar에 대한 리팩토링
  * Position Sticky를 이용한 디자인 고안
  * behavior="smooth" 기능 구현 (NPM 사용 없이)
 


