// export function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }



  export function getRandomColor() {
    const letters = '0123456789ABCDEF';
    const color = Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]).reduce(
      (acc, char) => acc + char,
      '#'
    );
    return color;
  }
  