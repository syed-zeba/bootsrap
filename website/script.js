function f2()
{
  let user={
    id:100,
    name:"zeba",
    dsp:function()
    {
        console.log(this.id+this.name)
    }
   
}
console.log(user.dsp)
return user
  }
