// let btn = document.querySelector('.btn_click');

let form = document.querySelector("#form");


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let date = document.querySelector("#date").value;
    let ddd = new Date(date)

    let new_date = new Date()
    // let d = Date.now() - d.getTime();

    let inp = {
        d : ddd.getDate(),
        month : ddd.getMonth()+1,
        year : ddd.getFullYear()
    }


    let new_d = new_date.getDate();
    let new_month = new_date.getMonth()+1;
    let new_year = new_date.getFullYear();

    // let yy = new_year - inp.year


    if(inp.year > new_year || (inp.month > new_month && inp.year == new_year) || (inp.d > new_d && inp.month == new_month && inp.year == new_year)){
        // alert('Enter valid Detalis')
        let result = document.getElementsByClassName(
          "result"
        )[0].textContent = `Enter Valid date`

    }else{
         let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

         if(inp.d > new_d){
             new_d = new_d + months[new_month - 1]
             new_month = new_month - 1
         }

         if(inp.month > new_month){
             new_month = new_month +12;
             new_year = new_year - 1
             
         }
        let dddd = new_d - inp.d;
        let mmmm = new_month - inp.month;
        let yyyy = new_year - inp.year
      

        let result = document.getElementsByClassName('result')[0].textContent = `Your age is  ${dddd}   days  ${mmmm}  months  ${yyyy}  years`
   

        // console.log(`date : ${dddd} ${mmmm} ${yyyy}`)
    }
    
    
    
    // console.log(yy)


    

})

