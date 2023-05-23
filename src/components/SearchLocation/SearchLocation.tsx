import { SearchInput, Label, Container, SearchButton} from "./styles";
import getForecastImages from "../../helpers/getForecastImage";

type EventHandlers = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onClick: () => void,
}
export default function SearchLocation(props: EventHandlers) {
  const searchIcon = getForecastImages("magnifier");
  const { onChange, onClick } = props;
  return (
    <Container>
      <SearchButton src={searchIcon} onClick={onClick} />
      <Label>
        <SearchInput onChange={onChange}>
        </SearchInput>
      </Label>
    </Container>
  );
}
