var db = angular.module("dbApp", ["firebase"]);

db.controller("dbViewController", function($scope, $firebaseArray){

var JOB_URL = "https://jobcenter.firebaseio.com/labor/0001";
var ref = new Firebase(JOB_URL);
$scope.messages = $firebaseArray(ref);

//var query = ref.orderByChild();
ref.on("value", function(nameSnap){
  $scope.nameData = nameSnap.val().name;
});
ref.on("value", function(ageSnap){
  $scope.ageData = ageSnap.val().age;
});
ref.on("value", function(expSnap){
  $scope.expData = expSnap.val().exp;
});
ref.on("value", function(gajiSnap){
  $scope.gajiData = gajiSnap.val().gaji;
});
ref.on("value", function(genderSnap){
  $scope.genderData = genderSnap.val().gender;
});
ref.on("value", function(kategoriSnap){
  $scope.kategoriData = kategoriSnap.val().kategori;
});
ref.on("value", function(lokasiSnap){
  $scope.lokasiData = lokasiSnap.val().lokasi;
});
ref.on("value", function(maritalSnap){
  $scope.maritalData = maritalSnap.val().marital;
});
ref.on("value", function(typeSnap){
  $scope.typeData = typeSnap.val().type;
});
ref.on("value", function(statusSnap){
  $scope.statusData = statusSnap.val().status;
});

//download data into a local object
//var syncObject = $firebaseObject(ref);
//syncObject.$bindTo($scope, "admin");

}); //end of db view controller

db.controller("dbPushController", function($scope, $firebaseArray){

  var URL = "https://jobcenter.firebaseio.com";
  var pushRef = new Firebase(URL);
  var laborRef = pushRef.child("labor");
  //push data into database with unique id
  laborRef.push({
    "nama": "Tito Rosmini",
    "tanggallahir": "27-05-1988",
    "asal": "Probolinggo",
    "alamat": "pondok kopi",
    "lokasi": "Jakarta Timur",
    "kategori": "Rumah Tangga",
    "profesi": "Sopir",
    "tersedia": "ya",
    "gender": "Laki-laki",
    "waktu": "pulang-pergi",
    "pendidikan": "SMA",
    "status": "Menikah",
    "anak": "1",
    "agama": "Islam",
    "suku": "Jawa",
    "gaji": "2.000.000",
    "ketrampilan": "mengendarai truk",
    "anjing": "tidak",
    "pengalaman": "5",
    "luarnegri": "tidak",
    "inggris": "tidak",
    "tinggi": "165",
    "berat": "65"
  });

}); //end of db push controller

/* push() function

var postsRef = ref.child("posts");
  var newPostRef = postsRef.push();
  newPostRef.set({
    author: "gracehop",
    title: "Announcing COBOL, a New Programming Language"
  });
  // we can also chain the two calls together
  postsRef.push().set({
    author: "alanisawesome",
    title: "The Turing Machine"
  });

  // This is equivalent to the calls to push().set(...) above
  postsRef.push({
    author: "gracehop",
    title: "Announcing COBOL, a New Programming Language"
  });
*/
