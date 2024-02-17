function Hello(){

    let myName = 'Ravi';

    let fullName = () => {
        return  "Ravi Kumar"
    }
    
    return <h3>Hello this is the feature speaking your friend {fullName()} </h3>
}

export default Hello;