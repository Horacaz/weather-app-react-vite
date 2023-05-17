import { SearchInput, Label, Button, Container } from "./styles";

export default function SearchLocation(props){
    const {onChange, onClick} = props;
    return(
        <Container>
            <Label> Search Location
                <SearchInput onChange={onChange}/>
            </Label>
            <Button onClick={onClick}> Fetch City</Button>
        </Container>
    )
}