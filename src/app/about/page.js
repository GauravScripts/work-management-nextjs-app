async function takeTime(){
    await  new Promise((resolve)=>{

        setTimeout(()=>{
            resolve()
        },3000)
    },
    console.log('done'))
}



export default async function About(){

    await takeTime();
    throw new Error('error')
    return(
        <div>
            <h1> this is about page</h1>
        </div>
    )
}
