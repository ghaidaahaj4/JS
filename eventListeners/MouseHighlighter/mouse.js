const paragraphs = document.querySelectorAll('.highlightable');

    // Step 2: Iterate through each paragraph and add event listeners
    paragraphs.forEach((paragraph) => {
      // Mouseover Event - Adds the "highlighted" class
      paragraph.addEventListener('mouseover', () => {
        paragraph.classList.add('highlighted');
      });

      // Mouseout Event - Removes the "highlighted" class
      paragraph.addEventListener('mouseout', () => {
        paragraph.classList.remove('highlighted');
      });
    });