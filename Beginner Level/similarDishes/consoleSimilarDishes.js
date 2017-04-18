process.stdin.resume();
process.stdin.setEncoding('utf8');


process.stdin.on('data', function (chunk) {
  var lines = chunk.toString().split('\n'); 
  var tests = parseInt(lines[0]);
  //console.log(tests);
  try {
    for(var tc = 0, id=1; tc < tests; tc++, id += 2) {
      var a = lines[id].trim().split(' ');
	  //console.log(id + "." + a)
      var b = lines[id+1].trim().split(' ');
	  //console.log(id+1 + "." + b)
      var set = new Set(a.concat(b));
	  //console.log(set);
      var ans = (set.size <= 6) ? 'similar' : 'dissimilar';
      process.stdout.write(ans+'\n');
    }
  } catch (err) { 
    console.log(err);
	process.exit(0); 
  }
  process.exit(0);
});