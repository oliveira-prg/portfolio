<script>
    const tabs = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const target = e.target.id.replace('tab', '').toLowerCase();

        sections.forEach(section => section.classList.remove('active'));
        document.getElementById(target).classList.add('active');

        tabs.forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
      });
    });
  </script>
