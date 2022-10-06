import {ReactComponent as arrowLeft} from './svg/arrow-left.svg'


const icons ={
    arrowLeft
}

export const Icon = ({name,...props}) =>{
    const Element =icons[name]
    return <Element {...props}/>
}