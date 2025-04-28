let nombre_variable: string='inicialisacion'

console.log(nombre_variable)

const estudiante: IEstudiante={
    id:1,
    nombre:'pepillo',
    edad:22,
    tipo_sangre:'AB+',
    donante:true,
    calificacion:7.5,
}

interface IEstudiante{
    id:number,
    nombre:string,
    correo?:string,
    direccion?:string,
    edad:number,
    tipo_sangre:string,
    donante:boolean,
    calificacion?:number,
}

const estudiantes: IEstudiante[]=[
    {
    id:1,
    nombre:'pepillo',
    edad:22,
    tipo_sangre:'AB+',
    donante:true,
    calificacion:7.5,
    },

    {
    id:2,
    nombre:'Ermeldegilda',
    edad:20,
    tipo_sangre:'O+',
    donante:false,
    calificacion:8.2,
    },

    {
    id:3,
    nombre:'Ruberto',
    edad:19,
    tipo_sangre:'B+',
    donante:true,
    calificacion:6,   
    }
]
estudiantes.push({id:1, nombre:'pepillo',edad:22,tipo_sangre:'AB+',donante:true,calificacion:7.5})
estudiantes.push(estudiante);

function agregar(estudiante:IEstudiante):void{
    estudiantes.push(estudiante);
}

const estudiante1={id: 2, nombre: '', correo: '', direccion: '',edad: 0,tipo_sangre: "",donante: false}
agregar(estudiante);

function agregar2(parm:IEstudiante, callback:(estudiante:IEstudiante)=>void)
    {
        estudiantes.push(parm);
        callback(parm)
    }

const estudianteA2: IEstudiante = {id: 2, nombre: '', correo: '', direccion: '',edad: 0,tipo_sangre: "",donante: false}
agregar2(estudianteA2, (parm:IEstudiante) => console.log);

function agregar3(parm:IEstudiante):Promise<IEstudiante> 
{
    return new Promise((resolve, reject) => {
        estudiantes.push(parm);
        resolve(parm);
        reject("Error al agregar estudiante");
    });
}

// console.log(agregar3 (estudiante1));
// agregar3(estudiante1).then((IEstudiante)=>
// {
//     console.log(estudiante);
// })


async function main(){
    try{
        await agregar3(estudiante1)
    }
    catch(ex){

    }
    finally{
        
    }
        
}

main()


function eliminar(id:number):void{
    const index=estudiantes.findIndex((estudiante)=>estudiante.id===id);
    if(index!==-1){
        estudiantes.splice(index,1);
    }else{
        console.log('No se encontro el estudiante');
    }
}
// console.log(estudiantes);
// console.log('Eliminando estudiante con id 2');
// eliminar(2);
// console.log(estudiantes);  
