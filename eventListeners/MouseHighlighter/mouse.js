const paragraphs = document.querySelectorAll('.highlightable');
    paragraphs.forEach((paragraph) => {
      paragraph.addEventListener('mouseover', () => {
        paragraph.classList.add('highlighted');
      });

      paragraph.addEventListener('mouseout', () => {
        paragraph.classList.remove('highlighted');
      });
    });