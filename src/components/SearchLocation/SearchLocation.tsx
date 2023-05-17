import { SearchInput, Label } from "./styles";

export default function SearchLocation(){
    return(
        <>
        <Label> Search Location
         <SearchInput onChange = { (event) => console.log(event.target.value)}/>
        </Label>
        </>
    )
}