window.addEventListener('load', function() {
  gen();
  
  document.getElementById('generateButton').addEventListener('click', function() {
    gen();
  });
});

function gen() {
  let str = document.getElementById('content').value;
  let count = Math.floor(countWidth(str) / 2);
  let plus = 0;
  if(count > 15){
    plus = 1;
  };
  count = count + 2;
  const up = '人';
  const under = '^Y';
  const content = `＿${up.repeat(count + plus)}＿\n＞　 ${str} 　＜\n￣${under.repeat(count)}￣`;
  document.getElementById('output').value = content;

  const tempInput = document.createElement('input');
  tempInput.value = content;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  alert('クリップボードにコピーしました！');
}

function countWidth(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode >= 0x00 && charCode <= 0xff) {
      count += 1;
    } else {
      count += 2;
    }
  }
  return count;
}
