import { auth } from "../utils/auth.js";
import { getCurrentPath } from "../utils/route.js";

const Layout = (content) => `
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">${Header()} ${content} ${Footer()}</div>
  </div>
`;

const Header = () => {
  const isLoggedIn = auth.isLoggedIn;
  const currentPath = getCurrentPath();

  return `
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>

    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li><a href="/" class="${currentPath === "/" ? "text-blue-600" : "text-gray-600"}">홈</a></li>
        ${isLoggedIn ? `<li><a href="/profile" class="${currentPath === "/profile" ? "text-blue-600" : "text-gray-600"}">프로필</a></li>` : ""}
        ${isLoggedIn ? `<li><a href="/" id="logout" class="text-gray-600">로그아웃</a></li>` : `<li><a href="/login" id="login" class="text-gray-600">로그인</a></li>`}
      </ul>
    </nav>
  `;
};

const Footer = () => `
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`;

export default Layout;
