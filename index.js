let choice ; 
do { 
    console.log("=".repeat(54));
    console.log("\n Hệ thống thu ngân phòng khám Medlatec Clinic");
    console.log("=".repeat(54));
    console.log("\n1.Nhập và kiểm chuẩn mã phiếu khám bệnh");
    console.log("\n2.Tính viện phí xét nghiệm");
    console.log("\n3.Thẩm định mã hồ sơ may mắn");
    console.log("0.Thoát chương trình");
    console.log("=".repeat(54));
    console.log("\n Vui lòng nhập lựa chọn của bạn (0-3):");
    switch(choice){
        case "1":{
            break;
        }
        case "2":{
            break;
        }
        case "3":{
            break;
        }
        case "0":{
            console.log("Cảm ơn đã sử dụng hệ thống . Hẹn gặp lại nhé !");
            break;
        }
        default:
            console.log("\n[Lỗi]:Lựa chọn không hợp lệ . Vui lòng thực hiện lại cho đúng với thao tác nhé !");
            break;
    }


}while(choice!==0);
