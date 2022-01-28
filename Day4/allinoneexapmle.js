
//--------------------------All in one example

    let mp=new Map()
     
    
    mp.set("Himanshu", "Nodejs");
    mp.set("Sudha","Java");
    mp.set("Rahul", "Reactjs");
    mp.set("Prachi", "C++");
    mp.set("Rohit", "SQL");
    

    console.log(mp.delete("Rahul"));
    console.log(mp.size);
    console.log(mp.get('Prachi'));
    console.log(mp.has('Sudha'));
    console.log(mp.has('Dev'));