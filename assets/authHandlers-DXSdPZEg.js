(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();function d(t){const e=localStorage.getItem(t);if(!e)return null;try{return JSON.parse(e)}catch(o){return console.error(o),e}}function a(t,e){return typeof e=="object"?localStorage.setItem(t,JSON.stringify(e)):localStorage.setItem(t,e)}function c(t){return localStorage.removeItem(t)}class u{constructor(){this.user=null,this.isLoggedIn=!1,this.listeners=[]}getUserInfo(){return this.user}getIsLoggedIn(){return this.isLoggedIn}setUserInfo(e){this.user=e,this.isLoggedIn=!0,this._notifyListeners()}clearUserInfo(){this.user=null,this.isLoggedIn=!1,this._notifyListeners()}subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(o=>o!==e)}}_notifyListeners(){const e={user:this.user,isLoggedIn:this.isLoggedIn};this.listeners.forEach(o=>o(e))}}const l=new u,b="user",f=()=>l.getIsLoggedIn(),v=()=>{const t=d(b);if(!t){l.clearUserInfo();return}return l.setUserInfo(t),t},y=t=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">${m()} ${t} ${g()}</div>
  </div>
`,m=()=>{const t=f(),e=o=>{if(window.location.href.includes("index.hash.html")){const s=window.location.hash;return(s?s.substring(1):"/")===o}return window.location.pathname===o};return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>

    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li><a href="/" class="${e("/")?"text-blue-600 font-bold":"text-gray-600"}">홈</a></li>
        ${t?`<li><a href="/profile" class="${e("/profile")?"text-blue-600 font-bold":"text-gray-600"}">프로필</a></li>`:""}
        ${t?'<li><a href="/" id="logout" class="text-gray-600">로그아웃</a></li>':`<li><a href="/login" id="login" class="${e("/login")?"text-blue-600":"text-gray-600"}">로그인</a></li>`}
      </ul>
    </nav>
  `},g=()=>`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,w=()=>`
  <main class="p-4">
    <div class="mb-4 bg-white rounded-lg shadow p-4">
      <textarea
        class="w-full p-2 border rounded"
        placeholder="무슨 생각을 하고 계신가요?"
      ></textarea>
      <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
        게시
      </button>
    </div>
    
    <div class="space-y-4">
      <div class="bg-white rounded-lg shadow p-4">
        <div class="flex items-center mb-2">
          <img
            src="https://placehold.co/40"
            alt="프로필"
            class="rounded-full mr-2"
          />
          <div>
            <p class="font-bold">홍길동</p>
            <p class="text-sm text-gray-500">5분 전</p>
          </div>
        </div>
        <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
        <div class="mt-2 flex justify-between text-gray-500">
          <button>좋아요</button>
          <button>댓글</button>
          <button>공유</button>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-4">
        <div class="flex items-center mb-2">
          <img
            src="https://placehold.co/40"
            alt="프로필"
            class="rounded-full mr-2"
          />
          <div>
            <p class="font-bold">김철수</p>
            <p class="text-sm text-gray-500">15분 전</p>
          </div>
        </div>
        <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
        <div class="mt-2 flex justify-between text-gray-500">
          <button>좋아요</button>
          <button>댓글</button>
          <button>공유</button>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-4">
        <div class="flex items-center mb-2">
          <img
            src="https://placehold.co/40"
            alt="프로필"
            class="rounded-full mr-2"
          />
          <div>
            <p class="font-bold">이영희</p>
            <p class="text-sm text-gray-500">30분 전</p>
          </div>
        </div>
        <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
        <div class="mt-2 flex justify-between text-gray-500">
          <button>좋아요</button>
          <button>댓글</button>
          <button>공유</button>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-4">
        <div class="flex items-center mb-2">
          <img
            src="https://placehold.co/40"
            alt="프로필"
            class="rounded-full mr-2"
          />
          <div>
            <p class="font-bold">박민수</p>
            <p class="text-sm text-gray-500">1시간 전</p>
          </div>
        </div>
        <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
        <div class="mt-2 flex justify-between text-gray-500">
          <button>좋아요</button>
          <button>댓글</button>
          <button>공유</button>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-4">
        <div class="flex items-center mb-2">
          <img
            src="https://placehold.co/40"
            alt="프로필"
            class="rounded-full mr-2"
          />
          <div>
            <p class="font-bold">정수연</p>
            <p class="text-sm text-gray-500">2시간 전</p>
          </div>
        </div>
        <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
        <div class="mt-2 flex justify-between text-gray-500">
          <button>좋아요</button>
          <button>댓글</button>
          <button>공유</button>
        </div>
      </div>
    </div>
  </main>
`,I=()=>{const t=l.getUserInfo();return`
    <main class="p-4">
      <div class="bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
          내 프로필
        </h2>
        <form id="profile-form">
          <div class="mb-4">
            <label
              for="username"
              class="block text-gray-700 text-sm font-bold mb-2"
              >사용자 이름</label
            >
            <input
              type="text"
              id="username"
              name="username"
              value="${t.username}"
              pattern="^[a-zA-Z가-힣]+$"
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="mb-4">
            <label
              for="email"
              class="block text-gray-700 text-sm font-bold mb-2"
              >이메일</label
            >
            <input
              type="email"
              id="email"
              name="email"
              value="${t.email}"
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="mb-6">
            <label for="bio" class="block text-gray-700 text-sm font-bold mb-2"
              >자기소개</label
            >
            <textarea
              id="bio"
              name="bio"
              rows="4"
              class="w-full p-2 border rounded"
            >${t.bio}</textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-blue-600 text-white p-2 rounded font-bold"
          >
            프로필 업데이트
          </button>
        </form>
      </div>
    </main>
  `},L=()=>`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">
          항해플러스
        </h1>
        <form id="login-form">
          <div class="mb-4">
            <input
              id="username"
              type="text"
              placeholder="사용자 이름"
              class="w-full p-2 border rounded"
              required
            />
          </div>
          <div class="mb-6">
            <input
              id="password"
              type="password"
              placeholder="비밀번호"
              class="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            class="w-full bg-blue-600 text-white p-2 rounded font-bold"
          >
            로그인
          </button>
        </form>
        <div class="mt-4 text-center">
          <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
        </div>
        <hr class="my-6" />
        <div class="text-center">
          <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">
            새 계정 만들기
          </button>
        </div>
      </div>
    </main>
  `,P=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div
      class="bg-white p-8 rounded-lg shadow-md w-full text-center"
      style="max-width: 480px"
    >
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`;function p(t){const o={username:document.getElementById("username").value,email:"",bio:""};a("user",o),l.setUserInfo(o),t.changeRoute("/")}function h(t){c("user"),l.clearUserInfo(),t.changeRoute("/profile")}function x(t){const e=document.getElementById("username").value,o=document.getElementById("email").value,n=document.getElementById("bio").value,s={username:e,email:o,bio:n};a("user",s),l.setUserInfo(s),t.changeRoute("/profile")}function E(t){window.addEventListener("submit",e=>{e.preventDefault(),e.target.id==="login-form"&&p(t),e.target.id==="profile-form"&&x(t)}),window.addEventListener("click",e=>{e.target.id==="logout"&&h(t)})}export{P as E,y as L,w as M,I as P,l as a,L as b,v as r,E as s};
