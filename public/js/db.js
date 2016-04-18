var db = angular.module("dbApp", ["firebase"]);

db.controller("dbViewController", function ($scope, $firebaseArray) {

  var JOB_URL = "https://jobcenter.firebaseio.com/labor/0001";
  var ref = new Firebase(JOB_URL);
  $scope.messages = $firebaseArray(ref);

  //var child = ref.child('0001');

  ref.on("value", function (snap) {
    if (snap.val().kategori === "Rumah Tangga") {
      $scope.katData = snap.val().kategori;
      $scope.nameData = snap.val().name;
      $scope.ageData = snap.val().age;
      $scope.expData = snap.val().exp;
      $scope.gajiData = snap.val().gaji;
      $scope.genderData = snap.val().gender;
      $scope.lokasiData = snap.val().lokasi;
      $scope.maritalData = snap.val().marital;
      $scope.typeData = snap.val().type;
      $scope.statusData = snap.val().status;
    }
    else {
      alert("ALERT!");
    }
  });

  /*var query = ref.orderByChild();
  ref.on("value", function(snap){
    $scope.nameData = snap.val().name;
    $scope.kategoriData = snap.val().kategori;
    $scope.ageData = snap.val().age;
    $scope.expData = snap.val().exp;
    $scope.gajiData = snap.val().gaji;
    $scope.genderData = snap.val().gender;
    $scope.lokasiData = snap.val().lokasi;
    $scope.maritalData = snap.val().marital;
    $scope.typeData = snap.val().type;
    $scope.statusData = snap.val().status;
  });
  */

  //download data into a local object
  //var syncObject = $firebaseObject(ref);
  //syncObject.$bindTo($scope, "admin");

}); //end of db view controller

db.controller("dbPushController", function ($scope, $firebaseArray) {

  var URL = "https://jobcenter.firebaseio.com";
  var pushRef = new Firebase(URL);
  var laborRef = pushRef.child("labor");
  //push data into database with unique id
  laborRef.push({
    "nama": "Maryati",
    "tanggallahir": "27/04/1985",
    "asal": "Padang Panjang",
    "alamat": "Depok 2",
    "lokasi": "Depok",
    "kategori": "Rumah Tangga",
    "profesi": "Nanny",
    "tersedia": "ya",
    "gender": "Perempuan",
    "waktu": "Menginap",
    "pendidikan": "SD",
    "status": "Lajang",
    "anak": "0",
    "agama": "Islam",
    "suku": "Padang",
    "gaji": "2.700.000",
    "ketrampilan": "memasak, mencuci",
    "anjing": "ya",
    "pengalaman": "7",
    "luarnegri": "tidak",
    "inggris": "tidak",
    "tinggi": "162",
    "berat": "50"
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
