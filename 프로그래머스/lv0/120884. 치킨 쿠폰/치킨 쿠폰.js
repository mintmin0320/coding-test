function solution(chicken) {
  let result = 0;
  let remain = chicken % 10; 
  let service = Math.floor(chicken / 10); 
  result += service;
  service += remain;

  while(1) {
    remain = service % 10;
    service = Math.floor(service / 10); 
      result += service;
      
      if (service === 0) {
          break;
      }
      service += remain;
  }
    return result;
}