const AC_GAME_OBJECTS=[];

export class AcGameObject{
    constructor(){//构造函数
        AC_GAME_OBJECTS.push(this);
        this.timedelete=0;
        this.has_called_start=false;
    }

    start(){//只执行一次

    }

    update(){
        //每一帧执行一次，除了第一帧
    }

    on_destory(){
        //删除之前执行
    }

    destory(){
        this.on_destory();

        for(let i in AC_GAME_OBJECTS){
            const obj=AC_GAME_OBJECTS[i];
            if(obj===this){
                AC_GAME_OBJECTS.splice(i);
                break;
            }
        }
    }
}

let last_timestamp;//上一次执行的时刻

const step=timestamp=>{
    for(let obj of AC_GAME_OBJECTS)//of遍历的是值，in遍历的是下标
    if(!obj.has_called_start){
        obj.has_called_start=true;
        obj.start();
    }else{
        obj.timedelete=timestamp-last_timestamp;
        obj.update();
    }

    last_timestamp=timestamp;
    requestAnimationFrame(step)
}

requestAnimationFrame(step)//下一帧的时候执行step函数