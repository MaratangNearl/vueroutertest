export default {
    enableDarkMode() {
      // 다크모드를 활성화하는 함수입니다.
      
      // 1. body 태그에 dark-mode 클래스를 추가하여 다크 모드 스타일을 적용합니다.
      document.body.classList.add('dark-mode');
  
      // 2. 배경색을 검은색으로 변경합니다.
      document.body.style.backgroundColor = '#000';
  
      // 3. 본문을 흰색으로 변경합니다.
      document.body.style.color = '#fff';
  
      // 4. 사용자의 환경에 다크모드 설정을 저장할 수 있도록 로컬 스토리지에 값을 저장합니다.
      localStorage.setItem('darkMode', 'enabled');
  
      // 5. 기타 필요한 다크모드 관련 로직을 추가할 수 있습니다.
    },
    disableDarkMode() {
      // 다크모드를 비활성화하는 함수입니다.
      
      // 1. body 태그에서 dark-mode 클래스를 제거하여 다크 모드 스타일을 제거합니다.
      document.body.classList.remove('dark-mode');
  
      // 2. 배경색을 기본값으로 변경합니다.
      document.body.style.backgroundColor = '';
  
      // 3. 본문의 텍스트 색상을 기본값으로 변경합니다.
      document.body.style.color = '';
  
      // 4. 사용자의 환경에 다크모드 설정을 저장할 수 있도록 로컬 스토리지에 값을 저장합니다.
      localStorage.setItem('darkMode', 'disabled');
  
      // 5. 기타 필요한 다크모드 관련 로직을 추가할 수 있습니다.
    }
  }
  