import { doc, setDoc, collection, query, where, getDocs} from "firebase/firestore";

export const savePerson = async(persona) => {
    console.log("Saving person", persona)
    await setDoc(doc(global.dbCon,"/Personas",persona.cedula),persona)
}

export const GradePerson = async(cedula, materia, nota) => {

    await setDoc(doc(global.dbCon,`/Personas/${cedula}/Calificaciones/${materia}`),{

        materia: materia,
        nota: nota},
    
    )

}

export const getGrades = async(cedula,refreshScreen) => {
    const queryGrades = query(collection(global.dbCon, `/Personas/${cedula}/Calificaciones`));
    const querySnapshot = await getDocs(queryGrades);

    let materias = []

    // console.log("Lo que trae", querySnapshot)
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.materia, " => ", doc.data());
      
        materias.push(doc.data());
    });

        console.log("Arreglo", materias)
      refreshScreen(materias);


}

export const getPersons= async(refreshScreen)=> {

    const queryPerson = query(collection(global.dbCon, "Personas"));

    const querySnapshot = await getDocs(queryPerson);

    let contacts = []
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.cedula, " => ", doc.data());
      
        contacts.push(doc.data());
    });

        console.log("Arreglo", contacts)
      refreshScreen(contacts);
    
}

export const getPersonCed = async(cedula, refreshScreen) => {

    const queryPerson = query(collection(global.dbCon, "Personas"), where("cedula","==", cedula));


    const querySnapshot = await getDocs(queryPerson);

    let contacts = []
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.cedula, " => ", doc.data());
      
        contacts.push(doc.data());
    });

        console.log("Arreglo", contacts)

        refreshScreen(contacts);




}