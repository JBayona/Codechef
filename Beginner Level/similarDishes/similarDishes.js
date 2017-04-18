/*
Chef has just found a recipe book, where every dish consists of exactly four ingredients. He is going to choose some two dishes and prepare them for dinner. Of course, he likes diversity and wants to know whether the two dishes are similar.

Two dishes are called similar if at least half of their ingredients are the same. In other words, at least two of four ingredients of the first dish should also be present in the second dish. The order of ingredients doesn't matter.

Your task is to examine T pairs of dishes. For each pair, check if the two dishes are similar and print "similar" or "dissimilar" accordingly.

Example
Input:
5
eggs sugar flour salt
sugar eggs milk flour
aa ab ac ad
ac ad ae af
cookies sugar grass lemon
lemon meat chili wood
one two three four
one two three four
gibberish jibberish lalalalala popopopopo
jibberisz gibberisz popopopopu lalalalalu

Output:
similar
similar
dissimilar
similar
dissimilar

https://www.codechef.com/problems/SIMDISH
*/

function similarDishes(a,b){
  a = a.split(" ");
  b= b.split(" ");
  union = a.concat(b);
  var set = new Set(union);
  return set.size <= 6;
}


a = "eggs sugar flour salt";
b = "sugar eggs milk flour";
console.log(similarDishes(a, b));