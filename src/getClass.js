export default function getClass(i) {
  if (i % 5 === 0) {
      return 'big';
  }
  else if (i % 6 === 0) {
      return 'wide'
  }
  else if(i ===21 || i === 23 || i === 3  || i === 19){
      return 'tall'
  }
  
  
}