var temporary : any[] = [0]
var message : string ="Two One Nine Two"
var initial_key : string ="Thats my Kung Fu"
var rcon : any[4][1] =[[0],[0],[0],[0]]
var round_number : number = 1
var always_temp : any[4][4] = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]] 
var always_temp1 : any[4][4] = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]] 

var temporary_key : any [4][4] = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]  
temporary_key = convert_to_matrix(initial_key)


function convert_to_hexa(word : string)
{
    var i : number = 0
    var t : any [] =[0]; 
    for(i=0;i<word.length;i++)
    {
    
    t[i]=word.charCodeAt(i)
    t[i]=t[i].toString(16).substr(-2)
    
    }
return t
}

/////var one : any [] = convert_to_hexa(message)


/////var two : any [] = convert_to_hexa(initial_key)


function substitution_byte(ip : any )
{
var sb3 : any 

sb3 = parseInt(ip, 16);
var sb1 : any =sb3.toString(16)
var p : any=0
var q : any=0
if(sb1.length==1)                       // zero padding instead of this implementation 
{                                                      // - we can use "0" + value   (which is used in forth comming functions)
    p=0                                 // since i dont want to mess up i leave this as such
    if(sb1[0]<=9)   
    {
        q=sb1[0]
    }
    switch(sb1[0])
    {
        case 'a':{
            q=10
            break
        }
        case 'b':{
            q=11
            break
        }
        case 'c':{
            q=12
            break
        }
        case 'd':{
            q=13
            break
        }
        case 'e':{
            q=14
            break
        }
        case 'f':{
            q=15
            break
        }

}
}
else{
if(sb1[0]<=9)
{
    p=sb1[0]
}else{

    switch(sb1[0])
    {
        case 'a':{
            p=10
            break
        }
        case 'b':{
            p=11
            break
        }
        case 'c':{
            p=12
            break
        }
        case 'd':{
            p=13
            break
        }
        case 'e':{
            p=14
            break
        }
        case 'f':{
            p=15
            break
        }


    }
}

if(sb1[1]<=9)
{
    q=sb1[1]
}else{

    switch(sb1[1])
    {
        case 'a':{
            q=10
            break
        }
        case 'b':{
            q=11
            break
        }
        case 'c':{
            q=12
            break
        }
        case 'd':{
            q=13
            break
        }
        case 'e':{
            q=14
            break
        }
        case 'f':{
            q=15
            break
        }


    }
}
}

//console.log(sb1)

var sbox : any [][] = [['63','7c','77','7b','f2','6b','6f','c5','30','01','67','2b','fe','d7','ab','76'],
['ca','82','c9','7d','fa','59','47','f0','ad','d4','a2','af','9c','a4','72','c0'],
['b7','fd','93','26','36','3f','f7','cc','34','a5','e5','f1','71','d8','31','15'],
['04','c7','23','c3','18','96','05','9a','07','12','80','e2','eb','27','b2','75'],
['09','83','2c','1a','1b','6e','5a','a0','52','3b','d6','b3','29','e3','2f','84'],
['53','d1','00','ed','20','fc','b1','5b','6a','cb','be','39','4a','4c','58','cf'],
['d0','ef','aa','fb','43','4d','33','85','45','f9','02','7f','50','3c','9f','a8'],
['51','a3','40','8f','92','9d','38','f5','bc','b6','da','21','10','ff','f3','d2'],
['cd','0c','13','ec','5f','97','44','17','c4','a7','7e','3d','64','5d','19','73'],
['60','81','4f','dc','22','2a','90','88','46','ee','b8','14','de','5e','0b','db'],
['e0','32','3a','0a','49','06','24','5c','c2','d3','ac','62','91','95','e4','79'],
['e7','c8','37','6d','8d','d5','4e','a9','6c','56','f4','ea','65','7a','ae','08'],
['ba','78','25','2e','1c','a6','b4','c6','e8','dd','74','1f','4b','bd','8b','8a'],
['70','3e','b5','66','48','03','f6','0e','61','35','57','b9','86','c1','1d','9e'],
['e1','f8','98','11','69','d9','8e','94','9b','1e','87','e9','ce','55','28','df'],
['8c','a1','89','0d','bf','e6','42','68','41','99','2d','0f','b0','54','bb','16']]

//console.log(sbox[2][3])

ip=sbox[p][q];
//console.log(ip)
return ip

}
//substitution_byte("0d")

 



//Round1(one,two)

function convert_to_matrix(input : any)     // converts input to hexa decimal and stores it in  matrix format
{
var i : number = 0
var j : number = 0
var c_temp : any [4][4] = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]  
input=convert_to_hexa(input)
var k : number = 0
for ( j=0 ; j<4 ; j++)
{
    for (i=0;i<4 ; i++)
    {
        c_temp [i][j] = input[k]
        k++  
    }

}
return c_temp
//console.log(c_temp)
}

//convert_to_matrix(message)


function convert_to_binary_and_xor(k_b : any,k_t : any) // problem
{
////console.log("calling convert to binary")

    //k_b=k_b.toString(16)
    //k_t=k_t.toString(16)
    ////console.log(k_t + "^" + k_b)
    //k_b=(parseInt(k_b,16)).toString(2).substr(-8)
    //k_t=(parseInt(k_t,16)).toString(2).substr(-8) 
    //k_b=k_b.toString(2)
    k_b=(parseInt(k_b,16))         // correct
    k_t=(parseInt(k_t,16))
    //k_t=k_t.toString(2)   //a = (parseInt(a,16)).toString(2).substr(-8)
   // console.log(k_b)     

  // if(k_t.length<8)
     // if(k_r.length<8)
   
   // console.log(k_t + "^" + k_b)
    var  k_r : any = k_b ^ k_t
    //k_r = parseInt(k_r,2)

   /// console.log(k_r)
    k_r=k_r.toString(16).substr(-2)
    ////console.log(k_r)
    if(k_r.length<2)
    {
        
       // var kr_t1 : any = k_r
        
     k_r = "0"+k_r

         //var kr_t2 : string = kr_t
        
        
      
     // console.log(kr_t[0] + kr_t[1])
        return k_r
    }
    return k_r

}



function Round1( plain_t : any , key_t : any  )    //function for round 0 ( plain text xor key meaasge )
{
    
    
    var r_t_p : any [4][4]=convert_to_matrix(plain_t)
    var r_t_k : any [4][4]=convert_to_matrix(key_t)
    console.log("the plain text is ")
    console.log(r_t_p)
    console.log("the key is ")
    console.log(r_t_k)
    
    var i : number = 0
    var j : number = 0
    var state1 : any [4][4] = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]  
    //input=convert_to_hexa(input)
    var k : number = 0
    for ( j=0 ; j<4 ; j++)
    {
        for (i=0;i<4 ; i++)
        {
            state1 [i][j] =convert_to_binary_and_xor(r_t_p[i][j] , r_t_k[i][j]) 
            k++  
        }
    
    }
    console.log("after round 0 the state matrix is ")
    console.log(state1)
    return state1
}




function Result_matrix_for_key_expansion(prev_key : any[][])

{

var w3 : any [4][1]=[[0],[0],[0],[0]]
var r_con_temp : any [4][1]=[[0],[0],[0],[0]]
var i : number = 0
var j : number = 0

for(i=0;i<4;i++)
{
w3[i][0]=prev_key[i][3]

}
w3=cyclic_permutation(w3)
//console.log(w3)
r_con_temp = find_rcon(round_number)
console.log(r_con_temp)
var  result :  any[4][1]=[[0],[0],[0],[0]]
result[0][0]=convert_to_binary_and_xor(r_con_temp[0][0],w3[0][0])
for(j=1;j<4;j++)
{
    result[j][0]=w3[j][0]
}
console.log("result matrix")
console.log(result)
return result
}

function cyclic_permutation(word3 : any[4][1])
{
    var i : number = 0
    var j : number = 0
    
    var word_3 : any [4][1] = word3
    var n : any = word3[0][0]
for(j=0;j<3;j++)
{
word_3[j][0]=word3[j+1][0]

}

word_3[3][0]=n
console.log(" after cyclic permutation")
console.log(word_3)
console.log("aaplying sbox")
for(i=0;i<4;i++)
{
    word_3[i][0]=substitution_byte(word_3[i][0])
}
console.log(word_3)
return word_3



}

function find_rcon(round_num : number)
{
    //var a:any = 11b

    var ri : any = ['01','02','04','08','10','20','40','80','1b','36']
//rcon[0][0]=(Math.pow(2,round_number-1)).toString(16)    mod 11b
rcon[0][0]=ri[round_number-1]
round_number++
//console.log(rcon[0][0])
return rcon

}


function Key_Expansion(m1 : any[][])                 //function for finding the key value
{
 console.log("received key")
 console.log(m1)   
var R : any [4][1] = [[0],[0],[0],[0]]
R = Result_matrix_for_key_expansion(m1)
var i: number = 0
var j: number = 0
var m : any [4][4] = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]  

var m2 : any [4][4] = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]  

//for(i=0;i<4;i++)
//{
  //  R[i][0]=substitution_byte(R[i][0])
//}
//console.log("after sbox for rot word")
//console.log(R)
console.log(m1)
console.log(R)
console.log("xor ing values")
//for(i=0;i<4;i++)
//{
    for(j=0;j<4;j++)
    {
        m[j][0]=convert_to_binary_and_xor(m1[j][0],R[j][0])
    }
//}

for(j=1;j<4;j++)
{
    for(i=0;i<4;i++)
    {
        m[i][j]=convert_to_binary_and_xor(m[i][j-1],m1[i][j])
    }


}


console.log("new key")
console.log(m)
return m
}





/*var temp_key : any [4][4] = convert_to_matrix(initial_key)
console.log("temp key is")
console.log(temp_key)
var newkey : any [4][4] = temp_key
var num : number = 0
for(num=0;num<10;num++)
{
   
  newkey =  Key_Expansion(newkey)
}

*//////

function shift_rows(state_matrix_1 : any [4][4])   // function for shift rows
{
var j : number =0
var i : number = 0  
var offset : number = 1
var t_m : any [4][4]=state_matrix_1
var b : any [16] = [0]
var temp_row : any [1][4] = [[0,0,0,0]]
var q1 : number = 0
var q2 : number = 0
var next_state_matrix : any [4][4] = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]  

console.log("state input matrix")
console.log(state_matrix_1)
for(i=0;i<4;i++)
{
for(j=0;j<4;j++)
{
    temp_row[0][j] = t_m[i][j]
//console.log("assigned"+t_m[i][j])   
}
//console.log(temp_row)

temp_row=left_shift(temp_row,offset)
for(q2=0;q2<4;q2++)
{
    b[q1+q2]=temp_row[0][q2]
 
}   
q1=q1+4 
offset++    

}
console.log("the shifted values are "+b)
//console.log(copy_matrix)
//next_state_matrix=convert_to_matrix(b)
var k : number =0
for ( j=0 ; j<4 ; j++)
{
    for (i=0;i<4 ; i++)
    {
        next_state_matrix [j][i] = b[k]
        k++  
    }

}


console.log(next_state_matrix)
return next_state_matrix
}
/////console.log(state0_key)

/////shift_rows(state0_key)



function left_shift(state_matrix : any[1][4],off_set : number)
{
    var copy_matrix : any [1][4] = [[0,0,0,0]]
    var i : number = 0
    var j : number = 0
    var l : number = 0
    var k : number = off_set
    copy_matrix=state_matrix
for(l=0;l<k-1;l++)
{
    //console.log("calling1")
    //console.log(copy_matrix)
 var te : any = copy_matrix[0][0]
    for(j=0;j<3;j++)
    {
    //    console.log("calling2")
        copy_matrix[i][j]=copy_matrix[i][j+1]
    }
    copy_matrix[i][j]=te
  //  console.log(copy_matrix)

}
//console.log("after shifting by offset "+k)
//always_temp = copy_matrix
//console.log(copy_matrix)    
return copy_matrix

}
/*always_temp = state0_key         //for testing mix colmns

var qa : number = 0

var aq : number = 0
for(qa=0;qa<4;qa++)
{

    for(aq=0;aq<4;aq++)
    {
        always_temp[qa][aq]=substitution_byte(always_temp[qa][aq])
    }
}

always_temp1=shift_rows(always_temp)
console.log("always temp is ")
console.log(always_temp1)

always_temp1=mix_columns(always_temp1)

console.log("after mix columns ")
console.log(always_temp1) *//////


function mix_columns(mc : any [][])   // function for mix columns
{
console.log("input received for mix column ")
console.log(mc)
var c : any [4][4]=[[2,3,1,1,],[1,2,3,1],[1,1,2,3,],[3,1,1,2]]
var mc_res : any [4][4]=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]  
var i : number = 0
var j : number = 0
var k : number = 0
var count : number = 0
var l : number = 0
var temp_mc: any[4] = [0,0,0,0]
var temp_mc1: any[4] = [0,0,0,0]

for(i=0;i<4;i++)
{
for(j=0;j<4;j++)
{
    mc_res[i][j]=0
    for(k=0;k<4;k++)
    {
        if(c[i][k] != 1)
        {
            if(c[i][k]== 2)
            {
            temp_mc[k] =  mix_columns_mul_by_2(mc[k][j])
            }else if(c[i][k] == 3)
            {
            temp_mc[k] =   mix_columns_mul_by_3(mc[k][j])
            }
        }else
        {
            temp_mc[k]=mc[k][j]
        }

       
    }
   // temp_mc1[count]=add_xor_values(temp_mc)
   mc_res[i][j]=  add_xor_values(temp_mc)               
  count++
//  console.log(temp_mc1)
    
 //   console.log(temp_mc)
    //console.log("sample binary ")
    //console.log(temp_mc1)
}
    count=0
}
//console.log(mc_res)
return mc_res
}




function mix_columns_mul_by_2(mc_num : any)   // function for 2*value
{
//    console.log("ip rec for mc by 2 is "+mc_num)
    var i : number = 2
    var j : number = (parseInt(mc_num,16))    
 //  i=(parseInt(i,16))         // correct
    
/////console.log(" i * j" + i + " * " + j)
    mc_num=j * 2
    /////console.log("before binary" + mc_num) 
mc_num=mc_num.toString(2)
/////console.log(mc_num)
if(mc_num.length == 7)
{
    mc_num="0"+mc_num
}else if (mc_num.length == 6)
{
    mc_num="00"+mc_num
}else if(mc_num.length==5)
{
    mc_num="000"+mc_num
}else if(mc_num.length==4)
{
    mc_num="0000"+mc_num
}else if(mc_num.length==3)
{
    mc_num="00000"+mc_num
}else if(mc_num.length==2)
{
    mc_num="000000"+mc_num
}else if(mc_num.length==1)
{
    mc_num="0000000"+mc_num
}
/////console.log("mix col by 2 res is")
/////console.log(mc_num)
return mc_num
}

function mix_columns_mul_by_3(mc_n : any)   //function for 3*value
{
    /////console.log("ip rec for mc by 3 is "+mc_n)
    /////console.log(mc_n)
   
    var mc1 : any = mix_columns_mul_by_2(mc_n)   
    var mc2 : any = (parseInt(mc_n,16))
    /////console.log(mc1)
 //mc2=mc2.toString(2)
 //mc1=mc1.toString(2)   
    mc1=(parseInt(mc1,2))    
    
    //console.log(mc1)
    /////console.log(mc2)
    
   /* if(mc_n == 1)
    {
        
    }*/
    
    mc_n = mc1 ^ mc2
    mc_n=mc_n.toString(2)
    
    if(mc_n.length == 7)
    {
        mc_n="0"+mc_n
    }else if (mc_n.length == 6)
    {
        mc_n="00"+mc_n
    }else if(mc_n.length==5)
    {
        mc_n="000"+mc_n
    }else if(mc_n.length==4)
    {
        mc_n="0000"+mc_n
    }else if(mc_n.length==3)
    {
        mc_n="00000"+mc_n
    }else if(mc_n.length==2)
    {
        mc_n="000000"+mc_n
    }else if(mc_n.length==1)
    {
        mc_n="0000000"+mc_n
    }
    /////console.log(mc_n)
   // mc_n = (parseInt(mc_n,10)).toString(16)
  //  mc_n=(parseInt(mc_n,16))
   
    //console.log(mc_n)
  //  mc_n= mc_n.toString(2) 
  
  /////console.log("mix col by 3 res is")

  /////console.log(mc_n)
   
    // mc_n = mc_n.toString(16)    convert mc_n to binary format from its decimal format
   // 
 //  mc_n=(parseInt(mc_n,2))
   
 return mc_n

}



function add_xor_values(at : any [])    //function for xoring the multiplied results
{
/////console.log("calling add xor values function")
    /////console.log(at)



    var i : number = 0
    var j : number = 0
    var k : number = 0
    var count : number = 0
    
    var te: any[4] = [0,0,0,0]
  //  var te1: any[4] = [0,0,0,0]
    var te1 : any = 0

for(i=0;i<4;i++)
{

    if(at[i].length==8)
    {
 te[i]=parseInt(at[i],2)       
    }else if(at[i].length<8)
    {
        te[i]=parseInt(at[i],16)
    }
    else if (at[i].length>8)
    {
       
        te[i]=parseInt(at[i],2)       
        te[i]=(te[i] ^ 283 )            // if input is greater than 8 bit then , xor with 11b (283 in decimal)
    }
}
te1=te[0]

/////console.log("te matrix is")
/////console.log(te)
for(j=1;j<4;j++)
{
        
    te1=te1 ^ te[j]

        //te1=te1.toString(2)
}
te1=te1.toString(16)
//te1=te1.toString(16)
if(te1.length==1)
{
    te1="0"+te1
}
/////console.log("result of adding xor "+ te1)
return te1

}

function ADDRoundkey( plain_t : any[4][4] , key_t : any[4][4]  )  //function for add round key
{
    
    
    var r_t_p : any [4][4]=plain_t
    var r_t_k : any [4][4]=key_t
    console.log("the plain text is ")
    console.log(r_t_p)
    console.log("the key is ")
    console.log(r_t_k)
    
    var i : number = 0
    var j : number = 0
    var state1 : any [4][4] = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]  
    //input=convert_to_hexa(input)
    var k : number = 0
    for ( j=0 ; j<4 ; j++)
    {
        for (i=0;i<4 ; i++)
        {
            state1 [i][j] =convert_to_binary_and_xor(r_t_p[i][j] , r_t_k[i][j]) 
            k++  
        }
    
    }
   // console.log("after round 0 the state matrix is ")
    console.log(state1)
    return state1
}



//////////////--------------------------main program----------------------////////////////////////////////////

var state0_key : any [][] = Round1(message,initial_key)
//console.log(" after round 0 " + state0_key)


var gl : number = 0
var g1 : number = 0
var g2 : number = 0

for(gl=1 ; gl<10 ; gl++)
{
console.log("ROUND" +  gl)
    for(g1=0;g1<4;g1++)
    {
        for(g2=0;g2<4;g2++)
        {
            state0_key[g1][g2]=substitution_byte(state0_key[g1][g2])
        }
    }
console.log("after byte substitution")
console.log(state0_key)
state0_key=shift_rows(state0_key)
console.log("after shift rows")
console.log(state0_key)
state0_key=mix_columns(state0_key)
console.log("after mix columns")
console.log(state0_key)
temporary_key=Key_Expansion(temporary_key)
console.log("key for round " + gl  )
console.log(temporary_key)
state0_key=ADDRoundkey(state0_key,temporary_key)
console.log("after add round key")
console.log(state0_key)

//temporary_key=Key_Expansion(temporary_key)
}


console.log("last round")
for(g1=0;g1<4;g1++)
{
    for(g2=0;g2<4;g2++)
    {
        state0_key[g1][g2]=substitution_byte(state0_key[g1][g2])
    }
}

console.log("after byte substitution")
console.log(state0_key)
state0_key=shift_rows(state0_key)
console.log("after shift rows")
console.log(state0_key)
temporary_key=Key_Expansion(temporary_key)
console.log("key for round " + gl  )
console.log(temporary_key)
state0_key=ADDRoundkey(state0_key,temporary_key)


console.log("THE ENCRYPTED MESSAGE IS")

console.log(state0_key)


var cipher_text : any [16] =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var v : number = 0
for(g1=0;g1<4;g1++)
{
    {
        for(g2=0;g2<4;g2++)
        {
            cipher_text[v] = state0_key[g2][g1]
            v++
        }
    }
}
console.log("cipher text is "+cipher_text)