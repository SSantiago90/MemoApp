function generateIdFor(array){
  let sorted = array.sort( (a, b) => a.id>b.id);
  let newId = sorted.find( (item, index) => item.id !== index+1 ); 
  if (newId) 
    return newId.id-1
  else 
    return sorted.length+1;
}

export default generateIdFor