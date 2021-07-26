export const Header = () => {
  const view = `
        <nav class="header-main">
            <ul>
                <li class="header-item">
                    <a class="text-upper" href="#">Single Page App</a>
                </li>
                <li class="switch-toggle">
                    <span class="switch-toggle-text" id="switch-toggle-text">Light Mode</span>
                    <label class="theme-switch-toggle" id="theme-switch-toggle" for="switch-toggle">
                        <input type="checkbox" id="switch-toggle" />
                        <span class="slider round"></span>
                    </label>
                </li>
                <li class="header-item">
                    <a class="" href="#/about/" >About</a>
                </li>
            </ul>
        </nav>
    `;

  return view;
};
