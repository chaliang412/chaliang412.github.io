/ 夜间模式切换
      const darkModeToggle = document.getElementById("darkModeToggle");
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      const currentTheme = localStorage.getItem("theme");

      if (
        currentTheme === "dark" ||
        (!currentTheme && prefersDarkScheme.matches)
      ) {
        document.body.classList.add("dark-mode");
        updateButtonText(true);
      }

      darkModeToggle.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        updateButtonText(isDark);
      });

      function updateButtonText(isDark) {
        darkModeToggle.innerHTML = isDark
          ? `<svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>
                   日间模式`
          : `<svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M12 2V4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M12 20V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M4.92993 4.92993L6.33999 6.33999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M17.6599 17.6599L19.0699 19.0699" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M2 12H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M20 12H22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M6.33999 17.6599L4.92993 19.0699" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M19.0699 4.92993L17.6599 6.33999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>
                   夜间模式`;
      }
