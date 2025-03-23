const Layout = (content) => `
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">${Header()} ${content} ${Footer()}</div>
  </div>
`;

const Header = () => {
  const currentRoute = window.location.pathname;

  return `
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>

    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li><a href="/" class="${currentRoute === "/" ? "text-blue-600" : "text-gray-600"}">홈</a></li>
        <li><a href="/profile" class="${currentRoute === "/profile" ? "text-blue-600" : "text-gray-600"}">프로필</a></li>
        <li><a href="#" class="text-gray-600">로그아웃</a></li>
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
