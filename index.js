const  jsonfile =   require('jsonfile');
const moment    =   require('moment')
const simplegit =   require('simple-git')
const random    =   require('random')
const FILEPATH  =   './data-json';
const makecommit    =   n=>{
    if (n==0)return simplegit().push();
    const x=random.int(0,54);
    const y=random.int(0,6);
    const DATE  =   moment().subtract(1,'y').add(1,'d')
        .add(x,'w').add(y,'d').format();

    const data  =   {
        date:DATE
    }
    jsonfile.writeFile(FILEPATH,data,()=>{
        simplegit().add([FILEPATH]).commit(DATE,{'--date':DATE},
        makecommit.bind(this,--n)
        )
    })
}
makecommit(101);
