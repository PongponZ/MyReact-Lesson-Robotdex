React 
    เป็นตัวช่วยในการจัดการตัว UI ให้อยู่ในรูปแบบของ Component 
    คือเป็นส่วนของหน้าบ้านอย่างเดียวและต้องหาส่วนอื่นๆมาเติมให้กับมัน 

Node.js 
    เอาไว้ช่วยเรื่องฝั่ง Back-end

CSS Framework
    react-bootstrap **น่าสนใจ**

Arrow Function, =>
    คือการเขียนรูป Function แบบย่อเช่น
    Normal
        function add(a,b){
            return a+b;
        }

    Arrow
        const add = (a,b) => a+b

props 
    การส่งค่าจาก Component A(Paren) ไปที่ Component B(cliden)

    let {CurrentUser} = this.props 
        หมายความว่าให้ตัวแปล CurrentUser มีค่าเท่ากับ this.props.CurrentUser

    {isLogin && CurrentUser}
        หมายความถ้าซ้าย(isLogin) เป็นจริงให้มีค่าเท่ากับฝั่งขวา(CurrentUser)

state
    สิ่งที่ Component เก็บข้อมูลไว้เอง
    การเปลี่ยนค่าใน State ต้องใช้ setSate({..})