let a=[];
let smallest=9999;
let smallstring='';
a=['Rubini','Vijay','Shravigna'];
for (i=0;i<a.length;i++){
    if(a[i].length < smallest) {
        smallest=a[i].length;
        smallstring=a[i];

    }
}
console.log(smallstring);