// 1
// function reverseStr(str1,n1){
//     let str2="";
//     for(let i=n1-1 ; i>=0 ; i--){
//         str2+=str1[i];
//     }
//     return str2;
// }
// let str1 = prompt("Nhập str1");
// let n1=str1.length;
// str1 = reverseStr(str1,n1);
// console.log(str1);

// 2

//let str2 = prompt("Nhập str2");
// let n2=str2.length;
// let result =[];
// for(let i=0  ;i<n2 ; i++){
//     check=-1;
//     for( let key in result){
//         if(result[key].letter===str2[i]){
//             check=key;
//         }
//     }
//     if( check<0 ){
//         result.push( {letter :`${str2[i]}`, value : 1 })
//     }
//     else{
//         result[check].value++;
//     }
// }
// console.log(result);

// 3
// function inHoaChuDau(str3, n3) {
//   let result = "";
//   for (let i = 0; i < n3; i++) {
//     if (i === 0 || str3[i - 1] == " ") result += str3[i].toLocaleUpperCase();
//     else result += str3[i].toLocaleLowerCase();
//   }
//   return result;
// }
// let str3 = prompt("Nhập chuỗi ");
// str3.toLocaleLowerCase();
// let n3 = str3.length;
// console.log(inHoaChuDau(str3, n3));

// 4
// function xoaLap(arr,n4){
//     let newArr = [];
//     let check;
//     for( let i=0 ; i<n4 ; i++){
//         check=false;
//         for( let key in newArr){
//             if(newArr[key]===arr[i]){
//                 check=true;
//             }
//         }
//         if( check==false ){
//             newArr.push(`${arr[i]}`)
//         }
//     }
//     return newArr;
// }
// let arr = ["one", "two", "three", "four", "six", "one" ,"five", "three"];
// let n4=arr.length;
// arr=xoaLap(arr,n4);
// console.log(arr);

// 5
// function sapXep(arr5,n5){
//     for(let i=0 ; i<n5-1 ; i++){
//         for(let j=i+1 ; j<n5 ; j++){
//             if(arr5[i]>arr5[j]){
//                 let temp=arr5[i];
//                 arr5[i]=arr5[j];
//                 arr5[j]=temp;
//             }
//         }
//     }
//     return arr5;
// }
// let str5 = prompt("Enter numbers");
// let arr5 = str5.split(',');
// let n5=arr5.length;
// arr5 = sapXep(arr5, n5);
// console.log(arr5);

// 6
// let nhanVien = [
//     {
//         name :"A",
//         salary :"5000",
//         job :"TP",

//     },
//     {
//         name :"B",
//         salary :"1000",
//         job : "NV",
//     },
//     {
//         name :"C",
//         salary :"1000",
//         job : "NV",
//     },
// ]

// function readAllEmployee(){
//     for(let key in nhanVien){
//         console.log(nhanVien[key])
//     }
// }
// function ifExist(name){
// let find = nhanVien.findIndex(function(e){
//     return e["name"]===name;
// });
// return find;
// }
// while(true){
//     let userInput = prompt("Nhập hành động").toUpperCase();
//     if(userInput!="C"&&userInput!="R"&&userInput!="U"&&userInput!="D") break;
//     if(userInput=="C"){
//         let newName = prompt("Nhập tên nhân viên mới");
//         let find = ifExist(newName);
//         if(find<0){
//             console.log("Đã là nhân viên");
//             newName = prompt("Nhập tên mới");
//             find = ifExist(newName);
//         }
//         else{
//             let luong = prompt("Nhập lương nhân viên mới");
//             let viTri = prompt("Nhập chức vụ nhân viên mới");
//             nhanVien.push({name : `${newName}`, salary : `${luong}` , job : `${viTri}`});
//         }
//         readAllEmployee();
//     }
//     else if(userInput=="R"){
//         readAllEmployee();
//     }
//     else if(userInput=="U"){
//         let updateName = prompt("Nhập tên nhân viên cần update thông tin");
//         let find = ifExist(updateName);
//         if(find<0){
//             console.log("Nhân viên không tồn tại");
//         }
//         else{
//             let luong = prompt("Nhập lương nhân viên");
//             let viTri = prompt("Nhập chức vụ nhân viên");
//             nhanVien[find].salary=luong;
//             nhanVien[find].job=viTri;
//         }
//         readAllEmployee();
//     }
//     else if(userInput=="D"){
//         let deleteName = prompt("Nhập tên nhân viên cần xóa");
//         let find = ifExist(deleteName);
//         if(find<0){
//             console.log("Nhân viên không tồn tại");
//         }
//         else{
//             nhanVien.splice(find, 1);
//         }
//         readAllEmployee();
//     }
// }

// 7
// function kiemTra(arr7){
//     if((Number)(arr7[0])<=0 ||(Number)(arr7[0])>31) return false;
//     if((Number)(arr7[1])<=0 ||(Number)(arr7[1])>12) return false;
//     if((Number)(arr7[1])==2){
//         if(((Number)(arr7[2])%4==0)){
//             if( (Number)(arr7[0] )>= 1 && (Number)(arr7[0] )<=29)    return true;
//         }
//         else if( (Number)(arr7[0] )>= 1 && (Number)(arr7[0] )<=29) return true;
//     }
//     else if((Number)(arr7[1])==4||(Number)(arr7[1])==6||(Number)(arr7[1])==9||(Number)(arr7[1])==11){
//         if((Number)(arr7[0])>= 1 && (Number)(arr7[0])<=30) return true;
//     }
//     else{
//         if((Number)(arr7[0])>= 1 && (Number)(arr7[0])<=31) return true;
//     }
//     return false;
// }
// function ngayTiepTheo(arr7){
//     if((Number)(arr7[1])==2){
//         if(((Number)(arr7[2])%4==0)){
//             if( (Number)(arr7[0])<29) arr7[0]++;
//             else{
//                 arr7[0]="01";
//                 arr7[1]++;
//             }
//         }
//         else{
//             if( (Number)(arr7[0])<28) arr7[0]++;
//             else{
//                 arr7[0]="01";
//                 arr7[1]++;
//             }
//         }
//     }
//     else if((Number)(arr7[1])==4||(Number)(arr7[1])==6||(Number)(arr7[1])==9||(Number)(arr7[1])==11){
//         if( (Number)(arr7[0])<30) arr7[0]++;
//             else{
//                 arr7[0]="01";
//                 arr7[1]++;
//             }
//     }
//     else{
//         if((Number)(arr7[1])==12 && (Number)(arr7[0])==31){
//             arr7[0]="01";
//             arr7[1]="1";
//             arr7[2]++;
//         }else if( (Number)(arr7[0])<31) arr7[0]++;
//             else{
//                 arr7[0]="01";
//                 arr7[1]++;
//             }
//     }
//     if((Number)(arr7[1])<10 && (Number)(arr7[0])==1) arr7[1] = "0"+arr7[1];
//     if((Number)(arr7[0]) <10 && (Number)(arr7[0])!=1) arr7[0] = "0"+arr7[0];
//     return arr7;
// }
// let date = prompt("Nhập ngày tháng năm");
// var arr7=date.split("/");
// if(kiemTra(arr7)==true){
//     console.log( "Ngày " + `${date}` + " là ngày hợp lệ");
//     arr7=ngayTiepTheo(arr7);
//     console.log("Ngày tiêp theo là " + `${arr7[0]}/` + `${arr7[1]}/`+`${arr7[2]}`);
// }else console.log( "Ngày " + `${date}`+ " không phải là ngày hợp lệ");
