// 移动菜单切换
      const mobileMenuBtn = document.getElementById("mobileMenuBtn");
      const navMenu = document.getElementById("navMenu");

      mobileMenuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
      });
