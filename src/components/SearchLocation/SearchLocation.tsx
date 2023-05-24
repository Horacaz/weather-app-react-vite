import { SearchInput, Label, Container, SearchButton, Form } from "./styles";
import getForecastImages from "../../helpers/getForecastImage";
import { FormEvent } from "react";

type EventHandlers = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
};
export default function SearchLocation(props: EventHandlers) {
  const searchIcon = getForecastImages("magnifier");
  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    onClick();
  };
  const { onChange, onClick } = props;
  return (
    <Container>
      <Form onSubmit={onSubmitHandler}>
        <SearchButton src={searchIcon} onClick={onClick} />
        <Label>
          <SearchInput onChange={onChange}></SearchInput>
        </Label>
      </Form>
    </Container>
  );
}
