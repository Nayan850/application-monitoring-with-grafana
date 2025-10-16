document.getElementById('load').addEventListener('click', async ()=>{
  const res = await fetch('/api/items');
  const data = await res.json();
  document.getElementById('out').textContent = JSON.stringify(data, null, 2);
});